// ==================== Content Data Structure ====================
/*
 * PARAMETER GUIDE:
 * 
 * URL Parameters:
 * - ?course=CSE - Load CSE course data
 * - ?course=ECE - Load ECE course data
 * - ?course=Skills - Load Skill Enhancement data
 * 
 * siteTitle: (string) - Main title of your PDF library
 * 
 * sections: (array) - List of main sections
 *   - title: (string) - Section name
 *   - defaultCollapsed: (boolean) - true = starts collapsed, false = starts expanded
 *   - subsections: (array) - List of subsections within this section
 *     - title: (string) - Subsection name
 *     - pdfs: (array) - List of PDF documents
 *       - title: (string) - PDF document name
 *       - description: (string, optional) - Brief description of the PDF
 *       - downloadUrl: (string) - Path to PDF for downloading
 *         • Can be relative: "./pdfs/document.pdf" or "pdfs/document.pdf"
 *         • Can be absolute: "https://example.com/document.pdf"
 *         • Use "#" as placeholder for demo
 *       - previewUrl: (string, optional) - Path to PDF for preview
 *         • If not provided, falls back to downloadUrl
 *         • If URL cannot be embedded (like GitHub), opens in new tab instead
 *         • Same format as downloadUrl (relative or absolute)
 *       - previewMode: (string, optional) - "iframe" or "newtab"
 *         • "iframe" (default): Try to show in modal
 *         • "newtab": Always open in new tab (useful for GitHub, external sites)
 */

// ==================== Helper Functions ====================
function escapeHtml(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

function canEmbedUrl(url) {
  // Check if URL can likely be embedded in iframe
  // GitHub, Google Docs, and many external sites block iframe embedding
  const blockedDomains = [
    "github.com",
    "docs.google.com",
    "drive.google.com",
    "dropbox.com",
    "onedrive.live.com",
  ];
  try {
    const urlObj = new URL(url, window.location.href);
    return !blockedDomains.some((domain) => urlObj.hostname.includes(domain));
  } catch (e) {
    return true; // Assume embeddable for relative URLs
  }
}

// ==================== Content Generation ====================
function generateContent() {
  const mainContent = document.getElementById("mainContent");
  const siteTitle = document.getElementById("siteTitle");
  mainContent.innerHTML = "";

  // Set site title
  siteTitle.textContent = contentData.siteTitle;

  // Generate sections
  contentData.sections.forEach((section, sectionIndex) => {
    const sectionEl = document.createElement("div");
    sectionEl.className = "section";
    if (section.defaultCollapsed) {
      sectionEl.classList.add("collapsed");
    }
    sectionEl.dataset.sectionIndex = sectionIndex;

    // Section header
    const sectionHeader = document.createElement("div");
    sectionHeader.className = "section-header";
    sectionHeader.innerHTML = `
      <h2 class="section-title">${escapeHtml(section.title)}</h2>
      <svg class="toggle-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <polyline points="6 9 12 15 18 9"></polyline>
      </svg>
    `;
    sectionHeader.addEventListener("click", () => toggleSection(sectionIndex));

    // Section content
    const sectionContent = document.createElement("div");
    sectionContent.className = "section-content";

    section.subsections.forEach((subsection) => {
      const subsectionEl = document.createElement("div");
      subsectionEl.className = "subsection";

      const subsectionTitle = document.createElement("h3");
      subsectionTitle.className = "subsection-title";
      subsectionTitle.textContent = escapeHtml(subsection.title);

      const pdfList = document.createElement("div");
      pdfList.className = "pdf-list";

      subsection.pdfs.forEach((pdf) => {
        const pdfItem = document.createElement("div");
        pdfItem.className = "pdf-item";

        const pdfInfo = document.createElement("div");
        pdfInfo.className = "pdf-info";

        const pdfTitle = document.createElement("div");
        pdfTitle.className = "pdf-title";
        pdfTitle.textContent = escapeHtml(pdf.title);

        const pdfDescription = document.createElement("div");
        pdfDescription.className = "pdf-description";
        pdfDescription.textContent = escapeHtml(pdf.description || "");

        pdfInfo.appendChild(pdfTitle);
        if (pdf.description) {
          pdfInfo.appendChild(pdfDescription);
        }

        const pdfActions = document.createElement("div");
        pdfActions.className = "pdf-actions";

        // Preview button
        if (pdf.previewUrl) {
          const previewBtn = document.createElement("button");
          previewBtn.className = "preview-btn";
          previewBtn.innerHTML = `
            <svg class="preview-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
            Preview
          `;
          previewBtn.addEventListener("click", () => {
            openPreview(pdf.previewUrl, pdf.title, pdf.previewMode);
          });
          pdfActions.appendChild(previewBtn);
        }

        // Download button
        if (pdf.downloadUrl && pdf.downloadUrl !== "#") {
          const downloadBtn = document.createElement("a");
          downloadBtn.className = "download-btn";
          downloadBtn.href = pdf.downloadUrl;
          downloadBtn.download = true;
          downloadBtn.innerHTML = `
            <svg class="download-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            Download
          `;
          pdfActions.appendChild(downloadBtn);
        }

        pdfItem.appendChild(pdfInfo);
        pdfItem.appendChild(pdfActions);
        pdfList.appendChild(pdfItem);
      });

      subsectionEl.appendChild(subsectionTitle);
      subsectionEl.appendChild(pdfList);
      sectionContent.appendChild(subsectionEl);
    });

    sectionEl.appendChild(sectionHeader);
    sectionEl.appendChild(sectionContent);
    mainContent.appendChild(sectionEl);
  });

  // Add footer
  const footer = document.createElement("div");
  footer.className = "footer";
  mainContent.appendChild(footer);
}

// ==================== Section Toggle ====================
function toggleSection(index) {
  const sections = document.querySelectorAll(".section");
  const section = sections[index];
  section.classList.toggle("collapsed");
}

// ==================== Expand All Functionality ====================
function setupExpandAll() {
  const expandBtn = document.getElementById("expandAllBtn");
  if (!expandBtn) return;

  expandBtn.addEventListener("click", () => {
    const sections = document.querySelectorAll(".section");
    const allCollapsed = Array.from(sections).every((s) =>
      s.classList.contains("collapsed")
    );

    sections.forEach((section) => {
      if (allCollapsed) {
        section.classList.remove("collapsed");
      } else {
        section.classList.add("collapsed");
      }
    });

    expandBtn.classList.toggle("all-collapsed", !allCollapsed);
  });
}

// ==================== Modal Preview ====================
function openPreview(url, title, previewMode) {
  const modal = document.getElementById("previewModal");
  const modalTitle = document.getElementById("modalTitle");
  const previewFrame = document.getElementById("previewFrame");

  if (!modal) return;

  modalTitle.textContent = escapeHtml(title);

  // Check if we should force new tab
  if (previewMode === "newtab" || !canEmbedUrl(url)) {
    window.open(url, "_blank", "noopener,noreferrer");
    return;
  }

  previewFrame.src = url;
  modal.classList.add("active");
}

function closePreview() {
  const modal = document.getElementById("previewModal");
  if (modal) {
    modal.classList.remove("active");
    document.getElementById("previewFrame").src = "";
  }
}

// ==================== Modal Event Listeners ====================
function setupModal() {
  const modalOverlay = document.getElementById("modalOverlay");
  const modalCloseBtn = document.getElementById("modalCloseBtn");

  if (modalOverlay) {
    modalOverlay.addEventListener("click", closePreview);
  }
  if (modalCloseBtn) {
    modalCloseBtn.addEventListener("click", closePreview);
  }

  // Close on Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closePreview();
    }
  });
}

// ==================== Initialize ====================
document.addEventListener("DOMContentLoaded", () => {
  generateContent();
  setupExpandAll();
  setupModal();
});

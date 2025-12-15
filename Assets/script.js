// ==================== Content Data Structure ====================
/*
 * PARAMETER GUIDE:
 *
 * URL Parameters:
 * - ?course=CSE - Load CSE course data
 * - ?course=ECE - Load ECE course data
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

// ==================== Theme Management ====================
function initTheme() {
  const savedTheme = localStorage.getItem("theme") || "light"
  document.documentElement.setAttribute("data-theme", savedTheme)
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute("data-theme") || "light"
  const newTheme = currentTheme === "light" ? "dark" : "light"
  document.documentElement.setAttribute("data-theme", newTheme)
  localStorage.setItem("theme", newTheme)
}

// ==================== Helper Functions ====================
function escapeHtml(text) {
  const div = document.createElement("div")
  div.textContent = text
  return div.innerHTML
}

function canEmbedUrl(url) {
  // Check if URL can likely be embedded in iframe
  // GitHub, Google Docs, and many external sites block iframe embedding
  const blockedDomains = ["github.com", "docs.google.com", "drive.google.com", "dropbox.com", "onedrive.live.com"]

  try {
    const urlObj = new URL(url, window.location.href)
    return !blockedDomains.some((domain) => urlObj.hostname.includes(domain))
  } catch (e) {
    return true // Assume embeddable for relative URLs
  }
}

// ==================== Content Generation ====================
function generateContent() {
  const mainContent = document.getElementById("mainContent")
  const siteTitle = document.getElementById("siteTitle")

  mainContent.innerHTML = ""

  // Set site title
  siteTitle.textContent = contentData.siteTitle

  // Generate sections
  contentData.sections.forEach((section, sectionIndex) => {
    const sectionEl = document.createElement("div")
    sectionEl.className = "section"
    if (section.defaultCollapsed) {
      sectionEl.classList.add("collapsed")
    }
    sectionEl.dataset.sectionIndex = sectionIndex

    // Section header
    const sectionHeader = document.createElement("div")
    sectionHeader.className = "section-header"
    sectionHeader.innerHTML = `
            <h2 class="section-title">${escapeHtml(section.title)}</h2>
            <svg class="toggle-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
        `

    // Section content
    const sectionContent = document.createElement("div")
    sectionContent.className = "section-content"

    // Generate subsections
    section.subsections.forEach((subsection) => {
      const subsectionEl = document.createElement("div")
      subsectionEl.className = "subsection"

      const subsectionTitle = document.createElement("h3")
      subsectionTitle.className = "subsection-title"
      subsectionTitle.textContent = subsection.title

      const pdfList = document.createElement("div")
      pdfList.className = "pdf-list"

      subsection.pdfs.forEach((pdf) => {
        const pdfItem = document.createElement("div")
        pdfItem.className = "pdf-item"

        // PDF Info
        const pdfInfo = document.createElement("div")
        pdfInfo.className = "pdf-info"

        const pdfTitle = document.createElement("div")
        pdfTitle.className = "pdf-title"
        pdfTitle.textContent = pdf.title
        pdfInfo.appendChild(pdfTitle)

        if (pdf.description) {
          const pdfDesc = document.createElement("div")
          pdfDesc.className = "pdf-description"
          pdfDesc.textContent = pdf.description
          pdfInfo.appendChild(pdfDesc)
        }

        // PDF Actions
        const pdfActions = document.createElement("div")
        pdfActions.className = "pdf-actions"

        // Preview Button
        const previewBtn = document.createElement("button")
        previewBtn.className = "preview-btn"
        previewBtn.innerHTML = `
                    <svg class="preview-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                    Preview
                `
        previewBtn.addEventListener("click", () => handlePreview(pdf))

        // Download Button
        const downloadBtn = document.createElement("button")
        downloadBtn.className = "download-btn"
        downloadBtn.innerHTML = `
                    <svg class="download-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                        <polyline points="7 10 12 15 17 10"></polyline>
                        <line x1="12" y1="15" x2="12" y2="3"></line>
                    </svg>
                    Download
                `
        downloadBtn.addEventListener("click", () => handleDownload(pdf))

        pdfActions.appendChild(previewBtn)
        pdfActions.appendChild(downloadBtn)

        pdfItem.appendChild(pdfInfo)
        pdfItem.appendChild(pdfActions)
        pdfList.appendChild(pdfItem)
      })

      subsectionEl.appendChild(subsectionTitle)
      subsectionEl.appendChild(pdfList)
      sectionContent.appendChild(subsectionEl)
    })

    sectionEl.appendChild(sectionHeader)
    sectionEl.appendChild(sectionContent)
    mainContent.appendChild(sectionEl)

    // Add click handler for collapse/expand
    sectionHeader.addEventListener("click", () => {
      sectionEl.classList.toggle("collapsed")
      updateExpandAllButton()
    })
  })

  // Update expand all button state
  updateExpandAllButton()
}

// ==================== Preview Handler ====================
function handlePreview(pdf) {
  const previewUrl = pdf.previewUrl || pdf.downloadUrl
  const previewMode = pdf.previewMode || "iframe"
  const title = pdf.title

  // Handle placeholder URLs
  if (previewUrl === "#") {
    alert(
      `Demo Mode: No preview URL configured for "${title}"\n\nTo enable preview:\n1. Add your PDF file path to downloadUrl\n2. Optionally set previewUrl for a different preview source\n3. Use previewMode: "newtab" for external sites like GitHub`,
    )
    return
  }

  // Force new tab for certain modes or non-embeddable URLs
  if (previewMode === "newtab" || !canEmbedUrl(previewUrl)) {
    window.open(previewUrl, "_blank", "noopener,noreferrer")
    return
  }

  // Try iframe preview
  const modal = document.getElementById("previewModal")
  const modalTitle = document.getElementById("modalTitle")
  const previewFrame = document.getElementById("previewFrame")

  modalTitle.textContent = title
  previewFrame.src = previewUrl
  modal.classList.add("active")

  // Handle iframe load errors
  previewFrame.onerror = () => {
    closeModal()
    // Fallback to new tab if iframe fails
    window.open(previewUrl, "_blank", "noopener,noreferrer")
  }
}

// ==================== Download Handler ====================
function handleDownload(pdf) {
  const downloadUrl = pdf.downloadUrl
  const title = pdf.title

  console.log(`Downloading: ${title} from ${downloadUrl}`)

  // Handle placeholder URLs
  if (downloadUrl === "#") {
    alert(
      `Demo Mode: No download URL configured for "${title}"\n\nTo enable download:\n1. Place your PDF files in a folder (e.g., ./pdfs/)\n2. Update downloadUrl with the file path\n3. Relative paths: "./pdfs/document.pdf"\n4. Absolute paths: "https://example.com/document.pdf"`,
    )
    return
  }

  // For relative or absolute URLs, create download link
  const link = document.createElement("a")
  link.href = downloadUrl
  link.download = title.endsWith(".pdf") ? title : `${title}.pdf`
  link.target = "_blank"
  link.rel = "noopener noreferrer"
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

// ==================== Modal Controls ====================
function closeModal() {
  const modal = document.getElementById("previewModal")
  const previewFrame = document.getElementById("previewFrame")
  modal.classList.remove("active")
  previewFrame.src = "" // Clear iframe
  previewFrame.onerror = null // Clear error handler
}

// ==================== Expand/Collapse All ====================
function toggleExpandAll() {
  const sections = document.querySelectorAll(".section")
  const expandAllBtn = document.getElementById("expandAllBtn")
  const isAllCollapsed = expandAllBtn.classList.contains("all-collapsed")

  sections.forEach((section) => {
    if (isAllCollapsed) {
      section.classList.remove("collapsed")
    } else {
      section.classList.add("collapsed")
    }
  })

  updateExpandAllButton()
}

function updateExpandAllButton() {
  const sections = document.querySelectorAll(".section")
  const collapsedCount = document.querySelectorAll(".section.collapsed").length
  const expandAllBtn = document.getElementById("expandAllBtn")
  const expandAllText = document.getElementById("expandAllText")

  if (collapsedCount === sections.length) {
    expandAllBtn.classList.add("all-collapsed")
    expandAllText.textContent = "Expand All"
  } else {
    expandAllBtn.classList.remove("all-collapsed")
    expandAllText.textContent = "Collapse All"
  }
}

// ==================== Initialization ====================
document.addEventListener("DOMContentLoaded", () => {
  initTheme()
  generateContent()

  // Theme toggle button
  const themeToggle = document.getElementById("themeToggle")
  themeToggle.addEventListener("click", toggleTheme)

  // Expand/Collapse all button
  const expandAllBtn = document.getElementById("expandAllBtn")
  expandAllBtn.addEventListener("click", toggleExpandAll)

  // Modal close handlers
  const modalClose = document.getElementById("modalClose")
  const modalOverlay = document.getElementById("modalOverlay")
  modalClose.addEventListener("click", closeModal)
  modalOverlay.addEventListener("click", closeModal)

  // Escape key to close modal
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeModal()
    }
  })
})

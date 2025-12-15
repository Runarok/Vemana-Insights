// ==================== Course Data Structure ====================
// Define separate data for each course
// Access via URL parameter: ?course=CSE or ?course=ECE

const CSE = {
  siteTitle: "VemanaInsights - CSE",
  sections: [
    {
      title: "CSE 1st Sem",
      defaultCollapsed: false,
      subsections: [
        {
          title: "Mathematics",
          pdfs: [
            {
              title: "Module 1",
              description: "Learn the basics in 5 minutes",
              downloadUrl:
                "https://raw.githubusercontent.com/Runarok/Guides/main/Code%20Manual/Github%20and%20Softwares/Free%20n8n%20Using%20Renderer.pdf",
              previewUrl:
                "https://github.com/Runarok/Vemana-Insights/blob/main/Assets/CSE/Semester%201/Maths/BMATS101-module-1-pdf.pdf",
              previewMode: "iframe",
            },
            {
              title: "Module 2",
              description: "Step-by-step installation instructions",
              downloadUrl: "#",
              previewUrl:
                "https://github.com/Runarok/Vemana-Insights/blob/main/Assets/CSE/Semester%201/Maths/BMATS101-module-2-pdf.pdf",
            },
            {
              title: "Module 3",
              description: "Example of handling GitHub URLs",
              downloadUrl: "https://github.com/example/repo/blob/main/document.pdf",
              previewUrl:
                "https://github.com/Runarok/Vemana-Insights/blob/main/Assets/CSE/Semester%201/Maths/BMATS101-module-3-pdf.pdf",
              previewMode: "newtab",
            },
            {
              title: "Module 4",
              description: "Example of handling GitHub URLs",
              downloadUrl: "https://github.com/example/repo/blob/main/document.pdf",
              previewUrl:
                "https://github.com/Runarok/Vemana-Insights/blob/main/Assets/CSE/Semester%201/Maths/BMATS101-module-4-written.pdf",
              previewMode: "newtab",
            },
            {
              title: "Module 5",
              description: "Example of handling GitHub URLs",
              downloadUrl: "https://github.com/example/repo/blob/main/document.pdf",
              previewUrl:
                "https://github.com/Runarok/Vemana-Insights/blob/main/Assets/CSE/Semester%201/Maths/BMATS101-module-5-written.pdf",
              previewMode: "newtab",
            },
          ],
        },
        {
          title: "Physics",
          pdfs: [
            {
              title: "Module 1",
              description: "Learn the basics in 5 minutes",
              downloadUrl:
                "https://raw.githubusercontent.com/Runarok/Guides/main/Code%20Manual/Github%20and%20Softwares/Free%20n8n%20Using%20Renderer.pdf",
              previewUrl:
                "https://github.com/Runarok/Vemana-Insights/blob/main/Assets/CSE/Semester%201/Physics/BPHYS102_202-module-1-pdf.pdf",
              previewMode: "iframe",
            },
          ],
        },
        {
          title: "English",
          pdfs: [
            {
              title: "Module 1",
              description: "Learn the basics in 5 minutes",
              downloadUrl:
                "https://raw.githubusercontent.com/Runarok/Guides/main/Code%20Manual/Github%20and%20Softwares/Free%20n8n%20Using%20Renderer.pdf",
              previewUrl:
                "https://github.com/Runarok/Vemana-Insights/blob/main/Assets/CSE/Semester%201/English/BENGK106-206_module-1-pdf.pdf",
              previewMode: "iframe",
            },
          ],
        },
        {
          title: "Introduction to C Programming",
          pdfs: [
            {
              title: "Module 1",
              description: "Learn the basics in 5 minutes",
              downloadUrl:
                "https://raw.githubusercontent.com/Runarok/Guides/main/Code%20Manual/Github%20and%20Softwares/Free%20n8n%20Using%20Renderer.pdf",
              previewUrl:
                "https://github.com/Runarok/Vemana-Insights/blob/main/Assets/CSE/Semester%201/Introduction%20to%20C/BPOPS103_203-module-1-pdf.pdf",
              previewMode: "iframe",
            },
          ],
        },
      ],
    },
    {
      title: "CSE 2nd Sem",
      defaultCollapsed: true,
      subsections: [
        {
          title: "Mathematics",
          pdfs: [
            {
              title: "Module 1",
              description: "Learn the basics in 5 minutes",
              downloadUrl:
                "https://raw.githubusercontent.com/Runarok/Guides/main/Code%20Manual/Github%20and%20Softwares/Free%20n8n%20Using%20Renderer.pdf",
              previewUrl:
                "https://github.com/Runarok/Vemana-Insights/blob/main/Assets/CSE/Semester%202/Maths/BMATS201-module-1-written.pdf",
              previewMode: "iframe",
            },
          ],
        },
        {
          title: "Introduction to Python",
          pdfs: [
            {
              title: "Module 1",
              description: "Learn the basics in 5 minutes",
              downloadUrl:
                "https://raw.githubusercontent.com/Runarok/Guides/main/Code%20Manual/Github%20and%20Softwares/Free%20n8n%20Using%20Renderer.pdf",
              previewUrl:
                "https://github.com/Runarok/Vemana-Insights/blob/main/Assets/CSE/Semester%201/Introduction%20to%20C/BPOPS103_203-module-1-pdf.pdf",
              previewMode: "iframe",
            },
          ],
        },
      ],
    },
  ],
}

const ECE = {
  siteTitle: "VemanaInsights - ECE",
  sections: [
    {
      title: "ECE 1st Sem",
      defaultCollapsed: false,
      subsections: [
        {
          title: "Mathematics",
          pdfs: [
            {
              title: "Module 1",
              description: "Learn the basics in 5 minutes",
              downloadUrl:
                "https://raw.githubusercontent.com/Runarok/Guides/main/Code%20Manual/Github%20and%20Softwares/Free%20n8n%20Using%20Renderer.pdf",
              previewUrl:
                "https://github.com/Runarok/Vemana-Insights/blob/main/Assets/CSE/Semester%201/Maths/BMATS101-module-1-pdf.pdf",
              previewMode: "iframe",
            },
            {
              title: "Module 2",
              description: "Step-by-step installation instructions",
              downloadUrl: "#",
              previewUrl:
                "https://github.com/Runarok/Vemana-Insights/blob/main/Assets/CSE/Semester%201/Maths/BMATS101-module-2-pdf.pdf",
            },
            {
              title: "Module 3",
              description: "Example of handling GitHub URLs",
              downloadUrl: "https://github.com/example/repo/blob/main/document.pdf",
              previewUrl:
                "https://github.com/Runarok/Vemana-Insights/blob/main/Assets/CSE/Semester%201/Maths/BMATS101-module-3-pdf.pdf",
              previewMode: "newtab",
            },
            {
              title: "Module 4",
              description: "Example of handling GitHub URLs",
              downloadUrl: "https://github.com/example/repo/blob/main/document.pdf",
              previewUrl:
                "https://github.com/Runarok/Vemana-Insights/blob/main/Assets/CSE/Semester%201/Maths/BMATS101-module-4-written.pdf",
              previewMode: "newtab",
            },
            {
              title: "Module 5",
              description: "Example of handling GitHub URLs",
              downloadUrl: "https://github.com/example/repo/blob/main/document.pdf",
              previewUrl:
                "https://github.com/Runarok/Vemana-Insights/blob/main/Assets/CSE/Semester%201/Maths/BMATS101-module-5-written.pdf",
              previewMode: "newtab",
            },
          ],
        },
        {
          title: "Physics",
          pdfs: [
            {
              title: "Module 1",
              description: "Learn the basics in 5 minutes",
              downloadUrl:
                "https://raw.githubusercontent.com/Runarok/Guides/main/Code%20Manual/Github%20and%20Softwares/Free%20n8n%20Using%20Renderer.pdf",
              previewUrl:
                "https://github.com/Runarok/Vemana-Insights/blob/main/Assets/CSE/Semester%201/Physics/BPHYS102_202-module-1-pdf.pdf",
              previewMode: "iframe",
            },
          ],
        },
        {
          title: "English",
          pdfs: [
            {
              title: "Module 1",
              description: "Learn the basics in 5 minutes",
              downloadUrl:
                "https://raw.githubusercontent.com/Runarok/Guides/main/Code%20Manual/Github%20and%20Softwares/Free%20n8n%20Using%20Renderer.pdf",
              previewUrl:
                "https://github.com/Runarok/Vemana-Insights/blob/main/Assets/CSE/Semester%201/English/BENGK106-206_module-1-pdf.pdf",
              previewMode: "iframe",
            },
          ],
        },
        {
          title: "Introduction to C Programming",
          pdfs: [
            {
              title: "Module 1",
              description: "Learn the basics in 5 minutes",
              downloadUrl:
                "https://raw.githubusercontent.com/Runarok/Guides/main/Code%20Manual/Github%20and%20Softwares/Free%20n8n%20Using%20Renderer.pdf",
              previewUrl:
                "https://github.com/Runarok/Vemana-Insights/blob/main/Assets/CSE/Semester%201/Introduction%20to%20C/BPOPS103_203-module-1-pdf.pdf",
              previewMode: "iframe",
            },
          ],
        },
      ],
    },
    {
      title: "ECE 2nd Sem",
      defaultCollapsed: true,
      subsections: [
        {
          title: "Mathematics",
          pdfs: [
            {
              title: "Module 1",
              description: "Learn the basics in 5 minutes",
              downloadUrl:
                "https://raw.githubusercontent.com/Runarok/Guides/main/Code%20Manual/Github%20and%20Softwares/Free%20n8n%20Using%20Renderer.pdf",
              previewUrl:
                "https://github.com/Runarok/Vemana-Insights/blob/main/Assets/CSE/Semester%202/Maths/BMATS201-module-1-written.pdf",
              previewMode: "iframe",
            },
          ],
        },
        {
          title: "Introduction to Python",
          pdfs: [
            {
              title: "Module 1",
              description: "Learn the basics in 5 minutes",
              downloadUrl:
                "https://raw.githubusercontent.com/Runarok/Guides/main/Code%20Manual/Github%20and%20Softwares/Free%20n8n%20Using%20Renderer.pdf",
              previewUrl:
                "https://github.com/Runarok/Vemana-Insights/blob/main/Assets/CSE/Semester%201/Introduction%20to%20C/BPOPS103_203-module-1-pdf.pdf",
              previewMode: "iframe",
            },
          ],
        },
      ],
    },
  ],
}

const COURSE_DATA = {
  CSE: CSE,
  ECE: ECE,
}

function getCurrentCourseData() {
  const urlParams = new URLSearchParams(window.location.search)
  const course = urlParams.get("course")?.toUpperCase() || "CSE"

  // Return the course data if it exists, otherwise default to CSE
  return COURSE_DATA[course] || COURSE_DATA["CSE"]
}

// Export the function to get current course data
const contentData = getCurrentCourseData()

// ==================== Course Data Structure ====================
// Define separate data for each course
// Access via URL parameter: ?course=CSE or ?course=ECE or ?course=Skills

// ==================== CSE ====================
const CSE = {
  siteTitle: "VemanaInsights - CSE",
  sections: [
    {
      title: "CSE 1st Sem",
      defaultCollapsed: false,
      subsections: [
        {
          title: "English",
          pdfs: [
            {
              title: "Module 1",
              description: "English communication fundamentals",
              downloadUrl: "https://raw.githubusercontent.com/Runarok/Vemana-Insights/main/Assets/CSE/Semester%201/English/BENGK106-206-Mod1.pdf",
              previewUrl: "https://github.com/Runarok/Vemana-Insights/blob/main/Assets/CSE/Semester%201/English/BENGK106-206-Mod1.pdf",
              previewMode: "newtab",
            },
          ],
        },
        {
          title: "Indian Constitution",
          pdfs: [
            {
              title: "Module 1 MCQ",
              description: "Indian Constitution basics",
              downloadUrl: "https://raw.githubusercontent.com/Runarok/Vemana-Insights/main/Assets/CSE/Semester%201/Indian%20Constitution/BICOK107-207-Mod1-MCQ.pdf",
              previewUrl: "https://github.com/Runarok/Vemana-Insights/blob/main/Assets/CSE/Semester%201/Indian%20Constitution/BICOK107-207-Mod1-MCQ.pdf",
              previewMode: "newtab",
            },
          ],
        },
        {
          title: "Introduction to C Programming",
          pdfs: [
            {
              title: "Module 1",
              description: "C programming fundamentals",
              downloadUrl: "https://raw.githubusercontent.com/Runarok/Vemana-Insights/main/Assets/CSE/Semester%201/Introduction%20to%20C/BPOPS103_203-Mod1.pdf",
              previewUrl: "https://github.com/Runarok/Vemana-Insights/blob/main/Assets/CSE/Semester%201/Introduction%20to%20C/BPOPS103_203-Mod1.pdf",
              previewMode: "newtab",
            },
          ],
        },
        {
          title: "Mathematics",
          pdfs: [
            {
              title: "Model Set 1 - Paper",
              description: "Mathematics paper",
              downloadUrl: "https://raw.githubusercontent.com/Runarok/Vemana-Insights/main/Assets/CSE/Semester%201/Maths/2MATS11-model-set-1-paper.pdf",
              previewUrl: "https://github.com/Runarok/Vemana-Insights/blob/main/Assets/CSE/Semester%201/Maths/2MATS11-model-set-1-paper.pdf",
              previewMode: "newtab",
            },
            {
              title: "Model Set 1 - Solution",
              description: "Mathematics solutions",
              downloadUrl: "https://raw.githubusercontent.com/Runarok/Vemana-Insights/main/Assets/CSE/Semester%201/Maths/2MATS11-model-set-1-paper-solution.pdf",
              previewUrl: "https://github.com/Runarok/Vemana-Insights/blob/main/Assets/CSE/Semester%201/Maths/2MATS11-model-set-1-paper-solution.pdf",
              previewMode: "newtab",
            },
            {
              title: "Model Set 2 - Paper",
              description: "Mathematics paper",
              downloadUrl: "https://raw.githubusercontent.com/Runarok/Vemana-Insights/main/Assets/CSE/Semester%201/Maths/2MATS11-model-set-2-paper.pdf",
              previewUrl: "https://github.com/Runarok/Vemana-Insights/blob/main/Assets/CSE/Semester%201/Maths/2MATS11-model-set-2-paper.pdf",
              previewMode: "newtab",
            },
            {
              title: "Model Set 2 - Solution",
              description: "Mathematics solutions",
              downloadUrl: "https://raw.githubusercontent.com/Runarok/Vemana-Insights/main/Assets/CSE/Semester%201/Maths/2MATS11-model-set-2-paper-solution.pdf",
              previewUrl: "https://github.com/Runarok/Vemana-Insights/blob/main/Assets/CSE/Semester%201/Maths/2MATS11-model-set-2-paper-solution.pdf",
              previewMode: "newtab",
            },
            {
              title: "Module 1",
              description: "Mathematics fundamentals",
              downloadUrl: "https://raw.githubusercontent.com/Runarok/Vemana-Insights/main/Assets/CSE/Semester%201/Maths/BMATS101-module-1-pdf.pdf",
              previewUrl: "https://github.com/Runarok/Vemana-Insights/blob/main/Assets/CSE/Semester%201/Maths/BMATS101-module-1-pdf.pdf",
              previewMode: "newtab",
            },
            {
              title: "Module 2",
              description: "Mathematics",
              downloadUrl: "https://raw.githubusercontent.com/Runarok/Vemana-Insights/main/Assets/CSE/Semester%201/Maths/BMATS101-module-2-pdf.pdf",
              previewUrl: "https://github.com/Runarok/Vemana-Insights/blob/main/Assets/CSE/Semester%201/Maths/BMATS101-module-2-pdf.pdf",
              previewMode: "newtab",
            },
            {
              title: "Module 3",
              description: "Mathematics",
              downloadUrl: "https://raw.githubusercontent.com/Runarok/Vemana-Insights/main/Assets/CSE/Semester%201/Maths/BMATS101-module-3-pdf.pdf",
              previewUrl: "https://github.com/Runarok/Vemana-Insights/blob/main/Assets/CSE/Semester%201/Maths/BMATS101-module-3-pdf.pdf",
              previewMode: "newtab",
            },
            {
              title: "Module 4",
              description: "Mathematics",
              downloadUrl: "https://raw.githubusercontent.com/Runarok/Vemana-Insights/main/Assets/CSE/Semester%201/Maths/BMATS101-module-4-written.pdf",
              previewUrl: "https://github.com/Runarok/Vemana-Insights/blob/main/Assets/CSE/Semester%201/Maths/BMATS101-module-4-written.pdf",
              previewMode: "newtab",
            },
            {
              title: "Module 5",
              description: "Mathematics",
              downloadUrl: "https://raw.githubusercontent.com/Runarok/Vemana-Insights/main/Assets/CSE/Semester%201/Maths/BMATS101-module-5-written.pdf",
              previewUrl: "https://github.com/Runarok/Vemana-Insights/blob/main/Assets/CSE/Semester%201/Maths/BMATS101-module-5-written.pdf",
              previewMode: "newtab",
            },
            {
              title: "Regular Paper",
              description: "Mathematics",
              downloadUrl: "https://raw.githubusercontent.com/Runarok/Vemana-Insights/main/Assets/CSE/Semester%201/Maths/BMATS101-regular-paper.pdf",
              previewUrl: "https://github.com/Runarok/Vemana-Insights/blob/main/Assets/CSE/Semester%201/Maths/BMATS101-regular-paper.pdf",
              previewMode: "newtab",
            },
          ],
        },
        {
          title: "Physics",
          pdfs: [
            {
              title: "Model Set 1 - Paper",
              description: "Physics paper",
              downloadUrl: "https://raw.githubusercontent.com/Runarok/Vemana-Insights/main/Assets/CSE/Semester%201/Physics/22PHYS12-22-model-set-1-paper.pdf",
              previewUrl: "https://github.com/Runarok/Vemana-Insights/blob/main/Assets/CSE/Semester%201/Physics/22PHYS12-22-model-set-1-paper.pdf",
              previewMode: "newtab",
            },
            {
              title: "Model Set 1 - Solution",
              description: "Physics solution",
              downloadUrl: "https://raw.githubusercontent.com/Runarok/Vemana-Insights/main/Assets/CSE/Semester%201/Physics/22PHYS12-22-model-set-1-paper-solution.pdf",
              previewUrl: "https://github.com/Runarok/Vemana-Insights/blob/main/Assets/CSE/Semester%201/Physics/22PHYS12-22-model-set-1-paper-solution.pdf",
              previewMode: "newtab",
            },
            {
              title: "Module 1",
              description: "Physics fundamentals",
              downloadUrl: "https://raw.githubusercontent.com/Runarok/Vemana-Insights/main/Assets/CSE/Semester%201/Physics/BPHYS102_202-module-1-pdf.pdf",
              previewUrl: "https://github.com/Runarok/Vemana-Insights/blob/main/Assets/CSE/Semester%201/Physics/BPHYS102_202-module-1-pdf.pdf",
              previewMode: "newtab",
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
          title: "CAD",
          pdfs: [
            {
              title: "Module 1",
              description: "Computer Aided Design basics",
              downloadUrl: "https://raw.githubusercontent.com/Runarok/Vemana-Insights/main/Assets/CSE/Semester%202/CAD/BCEDK103_203-Mod1.pdf",
              previewUrl: "https://github.com/Runarok/Vemana-Insights/blob/main/Assets/CSE/Semester%202/CAD/BCEDK103_203-Mod1.pdf",
              previewMode: "newtab",
            },
          ],
        },
        {
          title: "Chemistry",
          pdfs: [
            {
              title: "Module 1",
              description: "Chemistry fundamentals",
              downloadUrl: "https://raw.githubusercontent.com/Runarok/Vemana-Insights/main/Assets/CSE/Semester%202/Chemistry/BCHES102_202-Mod1.pdf",
              previewUrl: "https://github.com/Runarok/Vemana-Insights/blob/main/Assets/CSE/Semester%202/Chemistry/BCHES102_202-Mod1.pdf",
              previewMode: "newtab",
            },
          ],
        },
        {
          title: "Introduction to IOT",
          pdfs: [
            {
              title: "Module 1 (Written)",
              description: "IoT introduction",
              downloadUrl: "https://raw.githubusercontent.com/Runarok/Vemana-Insights/main/Assets/CSE/Semester%202/Introduction%20to%20IOT/BETCK105H_205H-Mod1-written.pdf",
              previewUrl: "https://github.com/Runarok/Vemana-Insights/blob/main/Assets/CSE/Semester%202/Introduction%20to%20IOT/BETCK105H_205H-Mod1-written.pdf",
              previewMode: "newtab",
            },
          ],
        },
        {
          title: "Introduction to Python",
          pdfs: [
            {
              title: "Module 1",
              description: "Python programming basics",
              downloadUrl: "https://raw.githubusercontent.com/Runarok/Vemana-Insights/main/Assets/CSE/Semester%202/Introduction%20to%20Python/BPLCK105B-205B-Mod1.pdf",
              previewUrl: "https://github.com/Runarok/Vemana-Insights/blob/main/Assets/CSE/Semester%202/Introduction%20to%20Python/BPLCK105B-205B-Mod1.pdf",
              previewMode: "newtab",
            },
          ],
        },
        {
          title: "Mathematics",
          pdfs: [
            {
              title: "Module 1 (Written)",
              description: "Mathematics",
              downloadUrl: "https://raw.githubusercontent.com/Runarok/Vemana-Insights/main/Assets/CSE/Semester%202/Maths/BMATS201-Mod1-written.pdf",
              previewUrl: "https://github.com/Runarok/Vemana-Insights/blob/main/Assets/CSE/Semester%202/Maths/BMATS201-Mod1-written.pdf",
              previewMode: "newtab",
            },
          ],
        },
      ],
    },
    {
      title: "CSE 3rd Sem",
      defaultCollapsed: true,
      subsections: [
        {
          title: "Data Structures",
          pdfs: [
            {
              title: "Module 1",
              description: "Data Structures fundamentals",
              downloadUrl: "https://raw.githubusercontent.com/Runarok/Vemana-Insights/main/Assets/CSE/Semester%203/Data%20Structures/BCS304-Mod1.pdf",
              previewUrl: "https://github.com/Runarok/Vemana-Insights/blob/main/Assets/CSE/Semester%203/Data%20Structures/BCS304-Mod1.pdf",
              previewMode: "newtab",
            },
          ],
        },
        {
          title: "Maths",
          pdfs: [
            {
              title: "Module 1",
              description: "Mathematics",
              downloadUrl: "https://raw.githubusercontent.com/Runarok/Vemana-Insights/main/Assets/CSE/Semester%203/Maths/BCS301-Mod1.pdf",
              previewUrl: "https://github.com/Runarok/Vemana-Insights/blob/main/Assets/CSE/Semester%203/Maths/BCS301-Mod1.pdf",
              previewMode: "newtab",
            },
          ],
        },
        {
          title: "Operating Systems",
          pdfs: [
            {
              title: "Module 1",
              description: "Operating Systems basics",
              downloadUrl: "https://raw.githubusercontent.com/Runarok/Vemana-Insights/main/Assets/CSE/Semester%203/Operating%20Systems/BCS303-Mod1.pdf",
              previewUrl: "https://github.com/Runarok/Vemana-Insights/blob/main/Assets/CSE/Semester%203/Operating%20Systems/BCS303-Mod1.pdf",
              previewMode: "newtab",
            },
          ],
        },
        {
          title: "OPPS with C++",
          pdfs: [
            {
              title: "Module 1",
              description: "Object Oriented Programming with C++",
              downloadUrl: "https://raw.githubusercontent.com/Runarok/Vemana-Insights/main/Assets/CSE/Semester%203/OPPS%20with%20C++/BCS306B-Mod1.pdf",
              previewUrl: "https://github.com/Runarok/Vemana-Insights/blob/main/Assets/CSE/Semester%203/OPPS%20with%20C++/BCS306B-Mod1.pdf",
              previewMode: "newtab",
            },
          ],
        },
      ],
    },
    {
      title: "CSE 4th Sem",
      defaultCollapsed: true,
      subsections: [
        {
          title: "ARM ES",
          pdfs: [
            {
              title: "Module 1 (Textbook)",
              description: "ARM Embedded Systems",
              downloadUrl: "https://raw.githubusercontent.com/Runarok/Vemana-Insights/main/Assets/CSE/Semester%204/ARM%20ES/BCS402-Mod1-textbook.pdf",
              previewUrl: "https://github.com/Runarok/Vemana-Insights/blob/main/Assets/CSE/Semester%204/ARM%20ES/BCS402-Mod1-textbook.pdf",
              previewMode: "newtab",
            },
          ],
        },
        {
          title: "Biology",
          pdfs: [
            {
              title: "Module 1 (Written)",
              description: "Biology",
              downloadUrl: "https://raw.githubusercontent.com/Runarok/Vemana-Insights/main/Assets/CSE/Semester%204/Biology/BCS405A-Mod1-written.pdf",
              previewUrl: "https://github.com/Runarok/Vemana-Insights/blob/main/Assets/CSE/Semester%204/Biology/BCS405A-Mod1-written.pdf",
              previewMode: "newtab",
            },
          ],
        },
        {
          title: "DBMS",
          pdfs: [
            {
              title: "Module 1",
              description: "Database Management Systems",
              downloadUrl: "https://raw.githubusercontent.com/Runarok/Vemana-Insights/main/Assets/CSE/Semester%204/DBMS/BCS403-Mod1.pdf",
              previewUrl: "https://github.com/Runarok/Vemana-Insights/blob/main/Assets/CSE/Semester%204/DBMS/BCS403-Mod1.pdf",
              previewMode: "newtab",
            },
          ],
        },
        {
          title: "DMS",
          pdfs: [
            {
              title: "Module 1 (Written)",
              description: "Data Management Systems",
              downloadUrl: "https://raw.githubusercontent.com/Runarok/Vemana-Insights/main/Assets/CSE/Semester%204/DMS/BCS405A-Mod1-written.pdf",
              previewUrl: "https://github.com/Runarok/Vemana-Insights/blob/main/Assets/CSE/Semester%204/DMS/BCS405A-Mod1-written.pdf",
              previewMode: "newtab",
            },
          ],
        },
      ],
    },
    {
      title: "CSE 5th Sem",
      defaultCollapsed: true,
      subsections: [
        {
          title: "AI",
          pdfs: [
            {
              title: "Module 1",
              description: "Artificial Intelligence",
              downloadUrl: "https://raw.githubusercontent.com/Runarok/Vemana-Insights/main/Assets/CSE/Semester%205/AI/BCS515B-Mod1.pdf",
              previewUrl: "https://github.com/Runarok/Vemana-Insights/blob/main/Assets/CSE/Semester%205/AI/BCS515B-Mod1.pdf",
              previewMode: "newtab",
            },
          ],
        },
        {
          title: "CN",
          pdfs: [
            {
              title: "Module 1",
              description: "Computer Networks",
              downloadUrl: "https://raw.githubusercontent.com/Runarok/Vemana-Insights/main/Assets/CSE/Semester%205/CN/BCS502-Mod1.pdf",
              previewUrl: "https://github.com/Runarok/Vemana-Insights/blob/main/Assets/CSE/Semester%205/CN/BCS502-Mod1.pdf",
              previewMode: "newtab",
            },
          ],
        },
        {
          title: "Computation Theory",
          pdfs: [
            {
              title: "Module 1 (Textbook)",
              description: "Computation Theory",
              downloadUrl: "https://raw.githubusercontent.com/Runarok/Vemana-Insights/main/Assets/CSE/Semester%205/Computation%20Theory/BCS503-Mod1-textbook.pdf",
              previewUrl: "https://github.com/Runarok/Vemana-Insights/blob/main/Assets/CSE/Semester%205/Computation%20Theory/BCS503-Mod1-textbook.pdf",
              previewMode: "newtab",
            },
          ],
        },
        {
          title: "Computer Graphics",
          pdfs: [
            {
              title: "Module 1 (Textbook)",
              description: "Computer Graphics",
              downloadUrl: "https://raw.githubusercontent.com/Runarok/Vemana-Insights/main/Assets/CSE/Semester%205/Computer%20Graphics/BAI515A-Mod1-textbook.pdf",
              previewUrl: "https://github.com/Runarok/Vemana-Insights/blob/main/Assets/CSE/Semester%205/Computer%20Graphics/BAI515A-Mod1-textbook.pdf",
              previewMode: "newtab",
            },
          ],
        },
        {
          title: "SE",
          pdfs: [
            {
              title: "Module 1",
              description: "Software Engineering",
              downloadUrl: "https://raw.githubusercontent.com/Runarok/Vemana-Insights/main/Assets/CSE/Semester%205/SE/BCS501-Mod1.pdf",
              previewUrl: "https://github.com/Runarok/Vemana-Insights/blob/main/Assets/CSE/Semester%205/SE/BCS501-Mod1.pdf",
              previewMode: "newtab",
            },
          ],
        },
      ],
    },
    {
      title: "CSE 6th Sem",
      defaultCollapsed: true,
      subsections: [
        {
          title: "Cloud Computing",
          pdfs: [
            {
              title: "Module 1",
              description: "Cloud Computing fundamentals",
              downloadUrl: "https://raw.githubusercontent.com/Runarok/Vemana-Insights/main/Assets/CSE/Semester%206/Cloud%20Computing/BCS601-Mod1.pdf",
              previewUrl: "https://github.com/Runarok/Vemana-Insights/blob/main/Assets/CSE/Semester%206/Cloud%20Computing/BCS601-Mod1.pdf",
              previewMode: "newtab",
            },
          ],
        },
        {
          title: "Full Stack Development",
          pdfs: [
            {
              title: "Module 1",
              description: "Full Stack Development",
              downloadUrl: "https://raw.githubusercontent.com/Runarok/Vemana-Insights/main/Assets/CSE/Semester%206/Full%20Stack%20Development/BIS601-Mod1.pdf",
              previewUrl: "https://github.com/Runarok/Vemana-Insights/blob/main/Assets/CSE/Semester%206/Full%20Stack%20Development/BIS601-Mod1.pdf",
              previewMode: "newtab",
            },
          ],
        },
      ],
    },
  ],
};

// ==================== ECE ====================
const ECE = {
  siteTitle: "VemanaInsights - ECE",
  sections: [
    {
      title: "ECE 3rd Sem",
      defaultCollapsed: false,
      subsections: [
        {
          title: "CO",
          pdfs: [
            {
              title: "Module 1 Part 1-2 (Merged)",
              description: "Computer Organization fundamentals",
              downloadUrl: "https://raw.githubusercontent.com/Runarok/Vemana-Insights/main/Assets/ECE/Semester%203/CO/CO Mod1.pdf",
              previewUrl: "https://github.com/Runarok/Vemana-Insights/blob/main/Assets/ECE/Semester%203/CO/CO Mod1.pdf",
              previewMode: "newtab",
            },
          ],
        },
        {
          title: "DSDV",
          pdfs: [
            {
              title: "Module 1",
              description: "Digital System Design and Verilog",
              downloadUrl: "https://raw.githubusercontent.com/Runarok/Vemana-Insights/main/Assets/ECE/Semester%203/DSDV/DSDV Mod.pdf",
              previewUrl: "https://github.com/Runarok/Vemana-Insights/blob/main/Assets/ECE/Semester%203/DSDV/DSDV Mod.pdf",
              previewMode: "newtab",
            },
          ],
        },
        {
          title: "EPC",
          pdfs: [
            {
              title: "Module 1",
              description: "Electronic Principles and Circuits",
              downloadUrl: "https://raw.githubusercontent.com/Runarok/Vemana-Insights/main/Assets/ECE/Semester%203/EPC/EPC%20Mod1.pdf",
              previewUrl: "https://github.com/Runarok/Vemana-Insights/blob/main/Assets/ECE/Semester%203/EPC/EPC%20Mod1.pdf",
              previewMode: "newtab",
            },
          ],
        },
        {
          title: "NA",
          pdfs: [
            {
              title: "Module 1",
              description: "Network Analysis",
              downloadUrl: "https://raw.githubusercontent.com/Runarok/Vemana-Insights/main/Assets/ECE/Semester%203/NA/BEC304_Mod1.pdf",
              previewUrl: "https://github.com/Runarok/Vemana-Insights/blob/main/Assets/ECE/Semester%203/NA/BEC304_Mod1.pdf",
              previewMode: "newtab",
            },
          ],
        },
        {
          title: "Mathematics 3",
          pdfs: [
            {
              title: "Module 1 (Written)",
              description: "Engineering Mathematics III",
              downloadUrl: "https://raw.githubusercontent.com/Runarok/Vemana-Insights/main/Assets/ECE/Semester%203/Mathematics%203/BMATEC301-Mod1-written.pdf",
              previewUrl: "https://github.com/Runarok/Vemana-Insights/blob/main/Assets/ECE/Semester%203/Mathematics%203/BMATEC301-Mod1-written.pdf",
              previewMode: "newtab",
            },
          ],
        },
      ],
    },
    {
      title: "ECE 4th Sem",
      defaultCollapsed: true,
      subsections: [
        {
          title: "Biology",
          pdfs: [
            {
              title: "Module 1",
              description: "Biology fundamentals",
              downloadUrl: "https://raw.githubusercontent.com/Runarok/Vemana-Insights/main/Assets/ECE/Semester%204/Biology/Biology Mod1.pdf",
              previewUrl: "https://github.com/Runarok/Vemana-Insights/blob/main/Assets/ECE/Semester%204/Biology/Biology Mod1.pdf",
              previewMode: "newtab",
            },
          ],
        },
        {
          title: "EMT",
          pdfs: [
            {
              title: "Module 1",
              description: "Electromagnetic Theory",
              downloadUrl: "https://raw.githubusercontent.com/Runarok/Vemana-Insights/main/Assets/ECE/Semester%204/EMT/EMT-Mod1.pdf",
              previewUrl: "https://github.com/Runarok/Vemana-Insights/blob/main/Assets/ECE/Semester%204/EMT/EMT-Mod1.pdf.pdf",
              previewMode: "newtab",
            },
          ],
        },
        {
          title: "Micro Controller",
          pdfs: [
            {
              title: "Module 1",
              description: "Microcontroller fundamentals",
              downloadUrl: "https://raw.githubusercontent.com/Runarok/Vemana-Insights/main/Assets/ECE/Semester%204/Micro%20Controller/MC Mod1.pdf",
              previewUrl: "https://github.com/Runarok/Vemana-Insights/blob/main/Assets/ECE/Semester%204/Micro%20Controller/MC Mod1.pdf",
              previewMode: "newtab",
            },
          ],
        },
        {
          title: "PCS",
          pdfs: [
            {
              title: "Module 2 (SVIT)",
              description: "Power and Control Systems",
              downloadUrl: "https://raw.githubusercontent.com/Runarok/Vemana-Insights/main/Assets/ECE/Semester%204/PCS/PCS Mod2.pdf",
              previewUrl: "https://github.com/Runarok/Vemana-Insights/blob/main/Assets/ECE/Semester%204/PCS/PCS Mod2.pdf",
              previewMode: "newtab",
            },
          ],
        },
        {
          title: "UHV",
          pdfs: [
            {
              title: "Module 1",
              description: "Ultra High Voltage Engineering",
              downloadUrl: "https://raw.githubusercontent.com/Runarok/Vemana-Insights/main/Assets/ECE/Semester%204/UHV/UHV Mod1.pdf",
              previewUrl: "https://github.com/Runarok/Vemana-Insights/blob/main/Assets/ECE/Semester%204/UHV/UHV Mod1.pdf",
              previewMode: "newtab",
            },
          ],
        },
      ],
    },
    {
      title: "ECE 5th Sem",
      defaultCollapsed: true,
      subsections: [
        {
          title: "DC",
          pdfs: [
            {
              title: "Module 2",
              description: "Digital Communications",
              downloadUrl: "https://raw.githubusercontent.com/Runarok/Vemana-Insights/main/Assets/ECE/Semester%205/DC/DC Mod2.pdf",
              previewUrl: "https://github.com/Runarok/Vemana-Insights/blob/main/Assets/ECE/Semester%205/DC/DC Mod2.pdf",
              previewMode: "newtab",
            },
          ],
        },
        {
          title: "DSP",
          pdfs: [
            {
              title: "Module 1",
              description: "Digital Signal Processing",
              downloadUrl: "https://raw.githubusercontent.com/Runarok/Vemana-Insights/main/Assets/ECE/Semester%205/DSP/DSP Mod1.pdf",
              previewUrl: "https://github.com/Runarok/Vemana-Insights/blob/main/Assets/ECE/Semester%205/DSP/DSP Mod1.pdf",
              previewMode: "newtab",
            },
          ],
        },
        {
          title: "EVS",
          pdfs: [
            {
              title: "Full Notes (Module 1-5)",
              description: "Environmental Studies",
              downloadUrl: "https://raw.githubusercontent.com/Runarok/Vemana-Insights/main/Assets/ECE/Semester%205/EVS/EVS%20Full%20Notes.pdf",
              previewUrl: "https://github.com/Runarok/Vemana-Insights/blob/main/Assets/ECE/Semester%205/EVS/EVS%20Full%20Notes.pdf",
              previewMode: "newtab",
            },
          ],
        },
        {
          title: "IMLA",
          pdfs: [
            {
              title: "Full Notes (Module 1-5)",
              description: "Introduction to Machine Learning and AI",
              downloadUrl: "https://raw.githubusercontent.com/Runarok/Vemana-Insights/main/Assets/ECE/Semester%205/IMLA/ITC%20Full%20Notes.pdf",
              previewUrl: "https://github.com/Runarok/Vemana-Insights/blob/main/Assets/ECE/Semester%205/IMLA/ITC%20Full%20Notes.pdf",
              previewMode: "newtab",
            },
          ],
        },
        {
          title: "RMIPR",
          pdfs: [
            {
              title: "Module 1",
              description: "RF and Microwave Image Processing and Radar",
              downloadUrl: "https://raw.githubusercontent.com/Runarok/Vemana-Insights/main/Assets/ECE/Semester%205/RMIPR/RM Mod1.pdf",
              previewUrl: "https://github.com/Runarok/Vemana-Insights/blob/main/Assets/ECE/Semester%205/RMIPR/RM Mod1.pdf",
              previewMode: "newtab",
            },
          ],
        },
        {
          title: "TIME",
          pdfs: [
            {
              title: "Module 1",
              description: "Transmission and Imaging",
              downloadUrl: "https://raw.githubusercontent.com/Runarok/Vemana-Insights/main/Assets/ECE/Semester%205/TIME/TIME Mod1.pdf",
              previewUrl: "https://github.com/Runarok/Vemana-Insights/blob/main/Assets/ECE/Semester%205/TIME/TIME Mod1.pdf",
              previewMode: "newtab",
            },
          ],
        },
      ],
    },
    {
      title: "ECE 6th Sem",
      defaultCollapsed: true,
      subsections: [
        {
          title: "DIP",
          pdfs: [
            {
              title: "Module 1",
              description: "Digital Image Processing",
              downloadUrl: "https://raw.githubusercontent.com/Runarok/Vemana-Insights/main/Assets/ECE/Semester%206/DIP/DIP Mod1.pdf",
              previewUrl: "https://github.com/Runarok/Vemana-Insights/blob/main/Assets/ECE/Semester%206/DIP/DIP Mod1.pdf",
              previewMode: "newtab",
            },
          ],
        },
        {
          title: "ES",
          pdfs: [
            {
              title: "Module 1",
              description: "Embedded Systems",
              downloadUrl: "https://raw.githubusercontent.com/Runarok/Vemana-Insights/main/Assets/ECE/Semester%206/ES/ES Mod1.pdf",
              previewUrl: "https://github.com/Runarok/Vemana-Insights/blob/main/Assets/ECE/Semester%206/ES/ES Mod1.pdf",
              previewMode: "newtab",
            },
          ],
        },
        {
          title: "Multimedia Communication",
          pdfs: [
            {
              title: "Module 1",
              description: "Multimedia Communication fundamentals",
              downloadUrl: "https://raw.githubusercontent.com/Runarok/Vemana-Insights/main/Assets/ECE/Semester%206/Multimedia%20Communication/MMC Mod1.pdf",
              previewUrl: "https://github.com/Runarok/Vemana-Insights/blob/main/Assets/ECE/Semester%206/Multimedia%20Communication/MMC Mod1.pdf",
              previewMode: "newtab",
            },
          ],
        },
      ],
    },
    {
      title: "ECE 7th Sem",
      defaultCollapsed: true,
      subsections: [
        {
          title: "Automotive Electronics",
          pdfs: [
            {
              title: "Module 1",
              description: "Automotive Electronics fundamentals",
              downloadUrl: "https://raw.githubusercontent.com/Runarok/Vemana-Insights/main/Assets/ECE/Semester%207/Automotive%20Electronics/BEC714C Mod1.pdf",
              previewUrl: "https://github.com/Runarok/Vemana-Insights/blob/main/Assets/ECE/Semester%207/Automotive%20Electronics/BEC714C Mod1.pdf",
              previewMode: "newtab",
            },
          ],
        },
        {
          title: "CNP",
          pdfs: [
            {
              title: "Module 1",
              description: "Communication and Network Protocols",
              downloadUrl: "https://raw.githubusercontent.com/Runarok/Vemana-Insights/main/Assets/ECE/Semester%207/CNP/BEC702 Mod1.pdf",
              previewUrl: "https://github.com/Runarok/Vemana-Insights/blob/main/Assets/ECE/Semester%207/CNP/BEC702 Mod1.pdf",
              previewMode: "newtab",
            },
          ],
        },
        {
          title: "ES Applications",
          pdfs: [
            {
              title: "Module 1",
              description: "Embedded Systems Applications",
              downloadUrl: "https://raw.githubusercontent.com/Runarok/Vemana-Insights/main/Assets/ECE/Semester%207/ES%20Applications/BEC755C Mod1.pdf",
              previewUrl: "https://github.com/Runarok/Vemana-Insights/blob/main/Assets/ECE/Semester%207/ES%20Applications/BEC755C Mod1.pdf",
              previewMode: "newtab",
            },
          ],
        },
        {
          title: "MWA",
          pdfs: [
            {
              title: "Module 1 & 2",
              description: "Microwave and Antenna fundamentals",
              downloadUrl: "https://raw.githubusercontent.com/Runarok/Vemana-Insights/main/Assets/ECE/Semester%207/MWA/BEC701 Mod 1&2.pdf",
              previewUrl: "https://github.com/Runarok/Vemana-Insights/blob/main/Assets/ECE/Semester%207/MWA/BEC701 Mod 1&2.pdf",
              previewMode: "newtab",
            },
          ],
        },
        {
          title: "WC",
          pdfs: [
            {
              title: "Module 1",
              description: "Wireless Communications",
              downloadUrl: "https://raw.githubusercontent.com/Runarok/Vemana-Insights/main/Assets/ECE/Semester%207/WC/BEC703 Mod1.pdf",
              previewUrl: "https://github.com/Runarok/Vemana-Insights/blob/main/Assets/ECE/Semester%207/WC/BEC703 Mod1.pdf",
              previewMode: "newtab",
            },
          ],
        },
      ],
    },
  ],
};


// ==================== SKILL ENHANCEMENT ====================
const SkillEnhancement = {
  siteTitle: "VemanaInsights - Skill Enhancement",
  sections: [
    {
      title: "Skill Enhancement Resources",
      defaultCollapsed: false,
      subsections: [
        {
          title: "Core Resources",
          pdfs: [
            {
              title: "FPGA Beginner Guide",
              description: "Comprehensive introduction to FPGA development",
              downloadUrl: "https://raw.githubusercontent.com/Runarok/Vemana-Insights/main/Assets/Skill%20Enhancement/FPGA.pdf",
              previewUrl: "https://github.com/Runarok/Vemana-Insights/blob/main/Assets/Skill%20Enhancement/FPGA.pdf",
              previewMode: "newtab",
            },
            {
              title: "Free n8n Using Renderer",
              description: "Access n8n automation with render",
              downloadUrl: "https://raw.githubusercontent.com/Runarok/Vemana-Insights/main/Assets/Skill%20Enhancement/Free%20n8n%20Using%20Renderer.pdf",
              previewUrl: "https://github.com/Runarok/Vemana-Insights/blob/main/Assets/Skill%20Enhancement/Free%20n8n%20Using%20Renderer.pdf",
              previewMode: "newtab",
            },
            {
              title: "GitHub Guide",
              description: "Essential GitHub Introduction and best practices",
              downloadUrl: "https://raw.githubusercontent.com/Runarok/Vemana-Insights/main/Assets/Skill%20Enhancement/Github.pdf",
              previewUrl: "https://github.com/Runarok/Vemana-Insights/blob/main/Assets/Skill%20Enhancement/Github.pdf",
              previewMode: "newtab",
            },
            {
              title: "LinkedIn Post Generator",
              description: "Tools and techniques for creating engaging LinkedIn content via AI",
              downloadUrl: "https://raw.githubusercontent.com/Runarok/Vemana-Insights/main/Assets/Skill%20Enhancement/LinkedIn%20Post%20Generator.pdf",
              previewUrl: "https://github.com/Runarok/Vemana-Insights/blob/main/Assets/Skill%20Enhancement/LinkedIn%20Post%20Generator.pdf",
              previewMode: "newtab",
            },
            {
              title: "Power BI Essentials",
              description: "Data visualization and business intelligence fundamentals",
              downloadUrl: "https://raw.githubusercontent.com/Runarok/Vemana-Insights/main/Assets/Skill%20Enhancement/Power%20BI.pdf",
              previewUrl: "https://github.com/Runarok/Vemana-Insights/blob/main/Assets/Skill%20Enhancement/Power%20BI.pdf",
              previewMode: "newtab",
            },
            {
              title: "GeeksforGeeks Integration",
              description: "Syncing GeeksforGeeks resources to your GitHub",
              downloadUrl: "https://raw.githubusercontent.com/Runarok/Vemana-Insights/main/Assets/Skill%20Enhancement/Sync%20GeeksforGeeks%20to%20Github.pdf",
              previewUrl: "https://github.com/Runarok/Vemana-Insights/blob/main/Assets/Skill%20Enhancement/Sync%20GeeksforGeeks%20to%20Github.pdf",
              previewMode: "newtab",
            },
            {
              title: "LeetCode Sync Guide",
              description: "Synchronize LeetCode solutions with GitHub",
              downloadUrl: "https://raw.githubusercontent.com/Runarok/Vemana-Insights/main/Assets/Skill%20Enhancement/Sync%20Leetcode%20to%20Github.pdf",
              previewUrl: "https://github.com/Runarok/Vemana-Insights/blob/main/Assets/Skill%20Enhancement/Sync%20Leetcode%20to%20Github.pdf",
              previewMode: "newtab",
            },
            {
              title: "VTU Internships",
              description: "Information about internship opportunities for VTU students",
              downloadUrl: "https://raw.githubusercontent.com/Runarok/Vemana-Insights/main/Assets/Skill%20Enhancement/VTU%20Internships.pdf",
              previewUrl: "https://github.com/Runarok/Vemana-Insights/blob/main/Assets/Skill%20Enhancement/VTU%20Internships.pdf",
              previewMode: "newtab",
            },
          ],
        },
      ],
    },
  ],
};

// ==================== COURSE DATA MAPPING ====================
const COURSE_DATA = {
  CSE: CSE,
  ECE: ECE,
  SKILLS: SkillEnhancement,
};

// ==================== COURSE SELECTION FUNCTION ====================
function getCurrentCourseData() {
  const urlParams = new URLSearchParams(window.location.search);
  const course = urlParams.get("course")?.toUpperCase() || "CSE";

  // Return the course data if it exists, otherwise default to CSE
  return COURSE_DATA[course] || COURSE_DATA["CSE"];
}

// Export the function to get current course data
const contentData = getCurrentCourseData();

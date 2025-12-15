# Vemana Insights - Contributing Guide

## How to Update Course Data

This guide explains how to add or update course materials in **Data.js**.

---

## 📋 File Structure Overview

```
Assets/
├── index.html          # Main page
├── Data.js             # Course content (EDIT THIS FILE)
├── script.js           # Logic for displaying PDFs
├── styles.css          # Styling
└── theme.js            # Theme toggle functionality
```

---

## 🔧 Understanding Data.js Structure

The `Data.js` file contains three main course objects:

### 1. **CSE** - Computer Science Engineering
### 2. **ECE** - Electronics and Communication Engineering
### 3. **SkillEnhancement** - Skill Enhancement Resources

Each course follows this structure:

```javascript
const CourseName = {
  siteTitle: "VemanaInsights - CourseName",
  sections: [
    {
      title: "Semester Number",
      defaultCollapsed: false,  // true = starts collapsed
      subsections: [
        {
          title: "Subject Name",
          pdfs: [
            {
              title: "Document Title",
              description: "Brief description",
              downloadUrl: "https://raw.githubusercontent.com/...",
              previewUrl: "https://github.com/...",
              previewMode: "newtab"  // "iframe" or "newtab"
            }
          ]
        }
      ]
    }
  ]
}
```

---

## ✏️ Step-by-Step: Adding a New Module

### **Step 1: Prepare Your PDF**
- Upload your PDF to GitHub repository
- Get the **raw content link** for downloading
- Get the **blob link** for previewing

### **Step 2: Find the Right Section**
- Locate the course (CSE, ECE, or SkillEnhancement)
- Find the semester/section where you want to add
- Look for the `subsections` array

### **Step 3: Add the PDF Object**
Add this inside the `pdfs` array of your chosen subject:

```javascript
{
  title: "Module 1",
  description: "Your module description here",
  downloadUrl: "https://raw.githubusercontent.com/Runarok/Vemana-Insights/main/Assets/...",
  previewUrl: "https://github.com/Runarok/Vemana-Insights/blob/main/Assets/...",
  previewMode: "newtab"
}
```

---

## 🔗 Getting GitHub Links

### **For Download (Raw Content)**
1. Go to your file on GitHub
2. Click **Raw** button
3. Copy the URL: `https://raw.githubusercontent.com/...`

**Example:**
```
https://raw.githubusercontent.com/Runarok/Vemana-Insights/main/Assets/CSE/Semester%201/Maths/Module1.pdf
```

### **For Preview (Blob Link)**
1. Stay on normal GitHub file view
2. Copy the URL path (it shows `blob`)
3. Format: `https://github.com/Runarok/Vemana-Insights/blob/main/Assets/...`

**Example:**
```
https://github.com/Runarok/Vemana-Insights/blob/main/Assets/CSE/Semester%201/Maths/Module1.pdf
```

---

## 📝 URL Encoding for Spaces

GitHub automatically encodes spaces as `%20`:
- `Semester 1` → `Semester%201`
- `Module 1` → `Module%201`

---

## 🎯 Adding a New Subject

To add a completely new subject (e.g., "Web Development"):

```javascript
{
  title: "Web Development",
  pdfs: [
    {
      title: "HTML Basics",
      description: "Learn HTML fundamentals",
      downloadUrl: "https://raw.githubusercontent.com/...",
      previewUrl: "https://github.com/...",
      previewMode: "newtab"
    }
  ]
}
```

Then add this object to the `subsections` array of your chosen semester.

---

## 📌 Important Parameters

| Parameter | Type | Description | Example |
|-----------|------|-------------|---------|
| **title** | string | Document name | "Module 1" |
| **description** | string | Brief info | "Python basics" |
| **downloadUrl** | string | Raw GitHub link | "https://raw.githubusercontent.com/..." |
| **previewUrl** | string | GitHub blob link | "https://github.com/..." |
| **previewMode** | string | "iframe" or "newtab" | "newtab" (for GitHub) |

---

## ✅ Testing Your Changes

1. Save `Data.js` with your changes
2. Refresh the webpage
3. Check if your new content appears
4. Test download and preview links

---

## 🆘 Troubleshooting

### **Links not working?**
- ✅ Use `raw.githubusercontent.com` for downloads
- ✅ Use `github.com/.../blob/...` for previews
- ✅ Encode spaces as `%20`

### **PDF not showing?**
- ✅ Use `previewMode: "newtab"` for GitHub links
- ✅ GitHub blocks iframe embedding for security

### **Syntax errors?**
- ✅ Check for missing commas between objects
- ✅ Match all opening `{` with closing `}`
- ✅ Verify string quotes are consistent

---

## 📚 Real Example

```javascript
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
              description: "Calculus and Linear Algebra",
              downloadUrl: "https://raw.githubusercontent.com/Runarok/Vemana-Insights/main/Assets/CSE/Semester%201/Maths/Module1.pdf",
              previewUrl: "https://github.com/Runarok/Vemana-Insights/blob/main/Assets/CSE/Semester%201/Maths/Module1.pdf",
              previewMode: "newtab"
            }
          ]
        }
      ]
    }
  ]
}
```

---

## 🚀 Need Help?

- Check existing entries in `Data.js` for reference
- Follow the exact same structure and formatting
- Test in browser console if you encounter errors

Happy updating! 📖✨

# Website-Wide Blue Color Replacement Guide

## Objective
Replace all gradient headings and blue interactive elements (text, hover, selected states) with `text-blue-950` across the entire website for a professional, sophisticated appearance.

## Color Reference
- **Old**: Various shades (blue-400, blue-500, blue-600, blue-700)
- **New**: `text-blue-950` or `bg-blue-950` or `border-blue-950` (darkest blue shade)

## Files Completed ✅
1. **src/app/page.jsx** - Main landing page (ALL DONE)
   - Hero headings
   - CTA buttons
   - Highlighted text
   - Hover states

2. **src/app/leadership-and-values/page.jsx** - Partial (heading done, needs review)

## Files Requiring Updates 📝

### 1. **src/app/journey/career/page.jsx**
- Line 113: Gradient heading "Career Evolution"
- Line 65: Color class text definition  
- Line 178: Institution text
- Lines 297, 300: CTA button text and hover states

### 2. **src/app/gallery/page.jsx**
- Line 68: Gradient heading
- Line 164: Blue hover text
- Line 199: Button text
- Line 240: Border and text

### 3. **src/app/contact/page.jsx**
- Line 108: Gradient heading
- Lines 171, 188, 205: Focus-within states for form labels
- Lines 323, 326: CTA button text and hover states

### 4. **src/app/achievements/page.jsx**
- Line 149: Gradient heading span
- Line 104: Color class text definition
- Line 261: Link text
- Lines 353, 356: CTA button text and hover states

### 5. **src/app/about/page.jsx**
- Lines 104, 108: Gradient heading spans  
- Line 77: Color class text definition
- Lines 251, 255: Blue text elements
- Lines 326, 329: CTA button text and hover states

### 6. **src/components/Header.jsx**
- Line 87: Hover text state
- Lines 108-109: Active/hover menu items
- Lines 229-230: Mobile menu active/hover states

## Pattern to Follow

### For Gradient Headings:
```jsx
// OLD:
className="bg-gradient-to-r from-blue-600 via-emerald-600 to-purple-600 bg-clip-text text-transparent"

// NEW:
className="text-blue-950"
```

### For Interactive Text:
```jsx
// OLD:
className="text-blue-600"
className="hover:text-blue-600"

// NEW:
className="text-blue-950"
className="hover:text-blue-950"
```

### For Buttons:
```jsx
// OLD:
className="border-2 border-blue-500 text-blue-500 hover:bg-blue-500"

// NEW:
className="border-2 border-blue-950 text-blue-950 hover:bg-blue-950"
```

### For CTA Buttons (white background):
```jsx
// OLD:
className="bg-white text-blue-600"
className="hover:text-blue-600"

// NEW:
className="bg-white text-blue-950"
className="hover:text-blue-950"
```

## What NOT to Change
- Background gradients (e.g., `bg-gradient-to-br from-blue-50`)
- Decorative elements (e.g., floating orbs with `bg-blue-200`)
- Visual design backgrounds  
- Badge backgrounds (e.g., `bg-blue-100` - keep these)

## Status
- **Completed**: 1 of 7 files (page.jsx)
- **Remaining**: 6 files + Header component

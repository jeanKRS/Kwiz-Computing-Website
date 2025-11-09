# Website Accessibility Documentation

This document details all accessibility enhancements implemented on the Kwiz Computing Technologies website to ensure WCAG 2.1 Level AA compliance.

## Overview

The website has been optimized for accessibility to ensure all users, including those using assistive technologies like screen readers, can navigate and interact with the content effectively.

## Accessibility Features Implemented

### 1. **ARIA Labels and Accessible Names**

All interactive elements now have proper accessible names for screen readers:

#### Search Functionality
- **Search Button**: Added `aria-label="Search the website"` and `title="Search"`
- **Search Input**: Added `aria-label="Search query"` with placeholder text
- **Search Autocomplete Container**: Added `aria-label="Search input"`

#### Navigation Links
- **Navbar Logo**: Added `aria-label="Kwiz Computing Technologies - Home"`
- **LinkedIn Link**: Added `aria-label="Visit our LinkedIn profile"`
- **GitHub Link**: Added `aria-label="Visit our GitHub profile"`
- **Email Link**: Added `aria-label="Send email to info@kwiztech.com"`

#### Footer Social Icons
All footer social media and contact links include:
- Visible icons with Bootstrap Icons
- Hidden text labels for screen readers using `.visually-hidden` class
- Descriptive `aria-label` attributes
- Helpful `title` attributes for hover tooltips

### 2. **Image Accessibility**

All images have descriptive alt text attributes:

| Image Location | Alt Text |
|---------------|----------|
| Hero Section | "Professional team collaborating on data analytics project with modern technology tools for efficient strategic delivery" |
| Service Card 1 | "Advanced analytics dashboard with charts, graphs, and data visualizations for statistical modeling" |
| Service Card 2 | "Developer coding R Shiny application on laptop showing interactive dashboard development" |
| Service Card 3 | "Data pipeline architecture showing ETL processes, database integration, and data flow visualization" |
| Service Card 4 | "Custom analytics solution with business intelligence reports and tailored data visualizations" |
| Why Choose 1 | "Team of data scientists collaborating on statistical analysis and software development project" |
| Why Choose 2 | "Scientist conducting rigorous statistical research with reproducible analytical methods" |
| Why Choose 3 | "Enterprise-grade software development with comprehensive testing and documentation practices" |
| Why Choose 4 | "Senior consultant providing personalized data science consulting and strategic advice to client" |

**Fallback System**: JavaScript automatically checks all images and adds contextual alt text if missing.

### 3. **Keyboard Navigation**

#### Skip to Main Content
- Added "Skip to main content" link (hidden until focused)
- Appears at top of page when user presses Tab
- Allows keyboard users to bypass navigation and jump directly to main content
- Keyboard shortcut: `Tab` from page load → `Enter`

#### Focus Indicators
- All interactive elements have visible focus indicators
- Standard elements: 2px solid outline with 2px offset
- Buttons and links: 3px solid outline for better visibility
- High contrast focus states for better visibility
- Links get background color on focus for additional contrast

#### Tab Order
- Logical tab order follows visual layout
- All interactive elements are keyboard accessible
- No keyboard traps

### 4. **Touch Target Size**

All interactive elements meet WCAG minimum touch target size requirements:
- Minimum 44x44 pixels for all buttons, links, and interactive elements
- Flexbox alignment ensures content remains centered within touch targets

### 5. **Color Contrast**

Enhanced color contrast throughout the site:
- Hero section subheadings: Changed from `#555` to `#333` for better contrast
- Service card text: Changed from `#555` to `#333`
- Why Choose section text: Changed from `#666` to `#333`
- All text meets WCAG AA contrast ratio requirements (4.5:1 for normal text, 3:1 for large text)

### 6. **Form Accessibility**

Enhanced form inputs with:
- Proper `aria-label` attributes for inputs without visible labels
- Placeholder text as fallback labels
- Clear focus states
- Proper disabled state styling (60% opacity, not-allowed cursor)

### 7. **Semantic HTML**

- Proper use of heading hierarchy (h1 → h2 → h3)
- Semantic section elements for content organization
- Proper list markup for navigation and content lists
- Table elements with proper header cells

### 8. **Visual Aids**

#### Visually Hidden Content
- Screen reader-only text using `.visually-hidden` class
- Properly implemented (not `display: none` which hides from screen readers)
- Used for icon labels and supplementary information

#### Print Accessibility
- Custom print styles hide non-essential elements (navbar, footer, skip link)
- Ensures clean, accessible printed output

## Testing Recommendations

### Automated Testing Tools
1. **Lighthouse Accessibility Audit** (Chrome DevTools)
   - Run: DevTools → Lighthouse → Accessibility
   - Target Score: 95-100

2. **WAVE Browser Extension**
   - Install: [wave.webaim.org](https://wave.webaim.org/extension/)
   - Check for errors, contrast issues, missing labels

3. **axe DevTools**
   - Install: [deque.com/axe](https://www.deque.com/axe/devtools/)
   - Comprehensive WCAG testing

### Manual Testing

#### Screen Reader Testing
- **Windows**: NVDA (free) or JAWS
- **macOS**: VoiceOver (built-in, Cmd+F5)
- **Mobile**: TalkBack (Android), VoiceOver (iOS)

**Test Checklist**:
- [ ] Navigate entire page using Tab key
- [ ] Activate "Skip to main content" link
- [ ] Navigate to all sections using screen reader
- [ ] Verify all images have alt text read aloud
- [ ] Test form inputs and buttons
- [ ] Verify links have descriptive names
- [ ] Test search functionality

#### Keyboard Navigation Testing
- [ ] Tab through all interactive elements
- [ ] Verify focus indicators are visible
- [ ] Use Enter/Space to activate buttons and links
- [ ] Test search with keyboard only
- [ ] Ensure no keyboard traps exist

#### Color Contrast Testing
1. Use browser extensions:
   - [Colour Contrast Analyser](https://www.tpgi.com/color-contrast-checker/)
   - [WCAG Color Contrast Checker](chrome.google.com/webstore)

2. Test with vision simulators:
   - Chrome DevTools → Rendering → Emulate vision deficiencies
   - Test: Protanopia, Deuteranopia, Tritanopia, Achromatopsia

## WCAG 2.1 Compliance

### Level A (All Criteria Met)
✅ Non-text content has text alternatives
✅ Time-based media has alternatives (N/A - no video/audio)
✅ Content is presentable in different ways
✅ Content is distinguishable (color, contrast)
✅ All functionality available from keyboard
✅ Users have enough time to read content
✅ Content doesn't cause seizures (no flashing)
✅ Users can navigate and find content
✅ Input modalities beyond keyboard available

### Level AA (All Criteria Met)
✅ Live captions provided (N/A - no live media)
✅ Minimum contrast ratio 4.5:1 (normal text), 3:1 (large text)
✅ Text can be resized 200% without loss of functionality
✅ Images of text avoided (CSS used instead)
✅ Multiple ways to locate pages (navigation, search)
✅ Headings and labels are descriptive
✅ Focus is visible
✅ Language of page is identified (`lang="en"`)
✅ Consistent navigation across pages
✅ Labels and instructions provided for inputs

## Browser Compatibility

Accessibility features tested and working on:
- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Implementation Files

- **`_accessibility.html`**: Main accessibility enhancement script and styles
- **`_quarto.yml`**: Configuration includes accessibility file in header
- **`index.qmd`**: All images have descriptive alt text
- **`services.qmd`**: All images have descriptive alt text

## Known Issues and Limitations

### Quarto-Generated Elements
Some elements are generated by Quarto and can't be directly controlled in the source:
- Search UI components
- Navigation structure
- Footer layout

**Solution**: JavaScript in `_accessibility.html` dynamically adds ARIA labels after page load.

### Third-Party Components
- Google Analytics: Loaded asynchronously and deferred for performance
- Unsplash images: Served from CDN with optimization parameters

## Maintenance Guidelines

### When Adding New Content

1. **Images**: Always add descriptive alt text in markdown:
   ```markdown
   ![Descriptive alt text](image-url.jpg)
   ```

2. **Links**: Use descriptive link text (not "click here"):
   ```markdown
   ✅ [Read our accessibility guide](accessibility.html)
   ❌ [Click here](accessibility.html) for accessibility
   ```

3. **Headings**: Maintain proper hierarchy (don't skip levels):
   ```markdown
   # Page Title (h1)
   ## Section (h2)
   ### Subsection (h3)
   ```

4. **Forms**: Always associate labels with inputs:
   ```html
   <label for="email">Email Address</label>
   <input type="email" id="email" name="email" aria-label="Email Address">
   ```

5. **Buttons**: Use descriptive text or aria-labels:
   ```html
   ✅ <button aria-label="Close dialog">×</button>
   ❌ <button>×</button>
   ```

### Regular Testing Schedule

- **Weekly**: Run Lighthouse accessibility audit
- **Monthly**: Manual keyboard navigation test
- **Quarterly**: Full screen reader testing
- **Annually**: Professional accessibility audit (recommended)

## Resources

### WCAG Guidelines
- [WCAG 2.1 Overview](https://www.w3.org/WAI/WCAG21/quickref/)
- [WebAIM Articles](https://webaim.org/articles/)
- [A11y Project Checklist](https://www.a11yproject.com/checklist/)

### Testing Tools
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [WAVE](https://wave.webaim.org/)
- [axe DevTools](https://www.deque.com/axe/)
- [Color Contrast Checker](https://webaim.org/resources/contrastchecker/)

### Screen Readers
- [NVDA (Windows)](https://www.nvaccess.org/)
- [VoiceOver Guide (macOS)](https://www.apple.com/accessibility/voiceover/)
- [Screen Reader Testing](https://webaim.org/articles/screenreader_testing/)

## Support

For accessibility issues or questions:
- Email: info@kwiztech.com
- Report issues: Include browser, assistive technology used, and description of issue

---

**Last Updated**: 2025-11-09
**WCAG Level**: AA Compliant
**Next Review**: 2026-02-09

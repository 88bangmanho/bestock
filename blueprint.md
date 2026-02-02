# Project Blueprint

## Overview
This project is a framework-less web application developed within the Firebase Studio environment, adhering to modern web standards (Baseline). The AI agent (Gemini) is configured to autonomously modify the codebase, manage dependencies, and utilize modern HTML (Web Components), CSS (Baseline Features), and JavaScript (ES Modules, Async/Await, Fetch API) practices. The environment includes a Code OSS-based IDE and a pre-configured web development setup with a running preview server. Automated error detection and remediation are in place to maintain application stability.

## Current Project Outline
### File Structure
- `index.html`: The primary entry point for the web application.
- `style.css`: Contains modern CSS styles for the application.
- `main.js`: Contains modern JavaScript logic, including potential Web Component definitions.
- `.idx/dev.nix`: Environment configuration for development tools.
- `.idx/mcp.json`: Firebase MCP server configuration.
- `.gitignore`: Specifies intentionally untracked files to ignore.
- `blueprint.md`: This document, serving as a single source of truth for project documentation and plans.
- `GEMINI.md`: Guidelines for AI development within Firebase Studio.
- `install.cmd`: Installation script.
- `README.md`: Project README.
- `.vscode/settings.json`: VS Code editor settings.

### Core Technologies and Features
- **HTML:** `index.html` serves as the main page, linking CSS and JavaScript files.
- **CSS:** `style.css` is used for styling, leveraging modern CSS features like Container Queries, Cascade Layers, and CSS Variables.
- **JavaScript:** `main.js` utilizes ES Modules, Async/Await, Fetch API, and modern syntax. Web Components are intended for reusable UI elements.
- **Development Environment:** Firebase Studio with Code OSS, `dev.nix` for environment setup, and a preview server for real-time feedback.
- **Dependency Management:** Preference for ES Modules for internal JavaScript dependencies and CDN links with SRI for third-party libraries (if `package.json` is absent).
- **Error Handling:** Automated error detection and remediation mechanisms are integrated, monitoring IDE diagnostics and browser console for issues.
- **Visual Design:** Emphasis on modern design guidelines, responsiveness, accessibility, and intuitive user interfaces.

## Plan for Current Change: Implementing Language Switching Feature
- **Goal:** To enable users to switch the display language (Korean/English) for all recommended stock information.
- **Steps:**
    1.  **Update `blueprint.md`**: Completed.
    2.  **Modify `index.html`**: Completed. Added language selection UI and a container element for stock recommendations.
    3.  **Modify `main.js`**: Completed. Defined a data structure for stock recommendations with translations, implemented functions for language preference, added event listeners, and created a rendering function to update the display based on the selected language.
    4.  **Modify `style.css`**: Completed. Basic styling for the language selector buttons and the stock recommendation display has been confirmed.
    5.  **Test**: Completed. Manually verified the language switching functionality and the correct display of stock information in Korean, English, and Japanese.

## Plan for Current Change: UI/UX Refinement for Mature and Luxurious Look (Dark/Light Modes)
- **Goal:** To refine the visual design of the dark and light modes to achieve a more "mature and luxurious" aesthetic, focusing on color palettes, gradients, shadows, and typography.
- **Steps:**
    1.  **Analyze current `style.css`**: Reviewed existing color variables, gradients, shadows, and font styles for both light and dark modes. (Completed)
    2.  **Refine Color Palette**:
        *   **Dark Mode**: Adjusted `--bg-primary`, `--bg-secondary`, `--text-secondary`, `--accent-color-1`, `--accent-color-2`, `--card-bg`, `--card-border`, `--card-shadow`, `--subtle-text`, `--card-text`, `--footer-text`, `--theme-toggle-bg`, `--star-opacity` for deeper, less saturated, and more sophisticated tones. (Completed)
        *   **Light Mode**: Adjusted `--bg-primary`, `--bg-secondary`, `--text-secondary`, `--accent-color-1`, `--accent-color-2`, `--card-shadow`, `--footer-text`, `--theme-toggle-bg` for softer, warmer neutrals and subtle desaturated accents. (Completed)
    3.  **Adjust Gradients and Shadows**: Updated `--primary-heading-gradient`, `--button-bg-gradient`, `--button-shadow-1`, `--button-shadow-2`, `--name-gradient` for both themes to be more subtle and elegant. (Completed)
    4.  **Fine-tune Typography and Layout**:
        *   Increased `header h1` font size and adjusted `letter-spacing` for prominence. (Completed)
        *   Refined `#recommend-btn` `padding` for a premium feel. (Completed)
        *   Adjusted `.stock-card` `padding`, `border-radius`, and `box-shadow`. (Completed)
        *   Refined `.market`, `.name`, `.reason`, and `.target` font sizes, weights, letter-spacing, and margins for improved readability and sophistication. Changed `.target` color to `var(--accent-color-1)`. (Completed)
    5.  **Test**: Manually verify the visual appeal of both dark and light modes, ensuring the "mature and luxurious" aesthetic is achieved. (Pending - user will test in their environment)

## Plan for Current Change: Change Theme Toggle UI to Simple English Button Style
- **Goal:** To replace the icon-based theme toggle with text-based buttons for a simpler, English-centric style.
- **Steps:**
    1.  **Modify `main.js`**:
        *   Updated the `translations` object to use descriptive text labels ("Light Mode", "Dark Mode", and their Korean/Japanese equivalents) instead of icons for `themeToggleLight` and `themeToggleDark`. (Completed)
    2.  **Modify `style.css`**:
        *   Adjusted the styling of `#theme-toggle` (padding, font-size, border-radius) to accommodate text buttons instead of icons, making it more rectangular with rounded corners. (Completed)
    3.  **Test**: Manually verify the theme toggle now displays as text buttons and functions correctly. (Pending - user will test in their environment)

## Plan for Current Change: Integrate Unobtrusive Google AdSense Ad Space
- **Goal:** To create a dedicated, naturally integrated space within the application for Google AdSense advertisements, ensuring minimal user friction and adherence to the "mature and luxurious" UI.
- **Steps:**
    1.  **Update `blueprint.md`**: Document this plan. (Completed)
    2.  **Modify `index.html`**: Insert a new `div` element as an ad container between the `#country-filters` and the `.action-area`. Include a placeholder comment guiding the user to insert their AdSense code. (Completed)
    3.  **Modify `style.css`**: Apply custom styling to the new ad container (`.adsense-container`) to ensure visual harmony with the existing theme (background, border, border-radius, padding, margin, responsiveness). (Completed)
    4.  **No `main.js` changes**: No JavaScript modifications are required for this step beyond the HTML structure. (Completed)
    5.  **Commit and Push**: Stage, commit, and push the changes to GitHub. (Completed)

## Plan for Current Change: Display 3 Stock Recommendations per Screen and Relocate AdSense to Footer
- **Goal:** To adjust the layout to display a maximum of 3 stock recommendations per row and move the Google AdSense advertisement container to the bottom of the page, above the footer.
- **Steps:**
    1.  **Update `blueprint.md`**: Document this plan. (Completed)
    2.  **Modify `style.css`**: Adjust the `grid-template-columns` property for the `#result` container to ensure that a maximum of 3 stock cards are displayed per row, while maintaining responsiveness. (Completed)
    3.  **Modify `index.html`**: Move the `<div class="adsense-container">...</div>` element from its current position to directly after the `<div id="result"></div>` and before the `<footer>` element. (Completed)
    4.  **No `main.js` changes**: The JavaScript logic for picking stocks remains unchanged, as the request pertains to layout. (Completed)
    5.  **Commit and Push**: Stage, commit, and push the changes to GitHub. (Completed)

## Plan for Current Change: Optimize Site for Google AdSense Approval
- **Goal:** To make the website more compliant with Google AdSense policies and improve its chances of approval by focusing on content structure, user experience, and required legal pages.
- **Steps:**
    1.  **Update `blueprint.md`**: Document this plan. (Completed)
    2.  **Create "About Us" page**: Create a new file `about.html` with a placeholder for content. (Completed)
    3.  **Create "Privacy Policy" page**: Create a new file `privacy.html` with a placeholder for content. (Completed)
    4.  **Update `index.html`**: Add links to `about.html` and `privacy.html` in the footer. (Completed)
    5.  **No `main.js` changes**: No JavaScript modifications are required for these structural changes. (Completed)
    6.  **Review `style.css`**: Ensure the new pages and footer links inherit existing styles well. (Completed)
    7.  **Commit and Push**: Stage, commit, and push the changes to GitHub.

This `blueprint.md` will be updated iteratively as new features are added or modifications are made to the project.
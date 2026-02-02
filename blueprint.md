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

This `blueprint.md` will be updated iteratively as new features are added or modifications are made to the project.
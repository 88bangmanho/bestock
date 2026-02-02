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

This `blueprint.md` will be updated iteratively as new features are added or modifications are made to the project.
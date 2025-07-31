# NOC Dashboard Project  
**Created by Ally Carroll**  

## Project Overview  
This project is a modular dashboard designed to streamline daily NOC (Network Operations Center) checks at NTS-Nomad. The interface provides an organized and user-friendly way for operators to log check results and statuses into Google Sheets via a web-based dashboard.  

The dashboard is built with HTML, CSS, and JavaScript, and connects to Google Apps Script for backend data handling and Google Sheets integration.

---

## Folder Structure  
This folder contains all the source files for the project. Each component has been separated into its own file for better readability and maintainability.

| File/Folder        | Description |
|--------------------|-------------|
| `index.html`       | The main HTML file that pulls together all other components of the dashboard. |
| `main.js`          | JavaScript logic for dashboard interactivity and form submission. |
| `style.css`        | Contains all styling and layout rules for the dashboard UI. |
| `modal.html`       | Contains the HTML structure for the popup modal that holds form inputs. |
| `formTemplates.js` | Stores form templates for each check tile. These populate the modal when a tile is clicked. |
| `Code.js`          | Google Apps Script backend code that handles form submissions and writes to Google Sheets. **Note:** This script must be deployed via the Apps Script editor linked to the Google Sheet named `Dashboard Data Entry`. It is included here for reference and code completeness only. |
| `images/`          | Folder containing the favicon/icon used for the dashboard. |

---

## How It Works  
- When the dashboard is opened, it fetches the current statuses of each check from a linked Google Sheet `Dashboard Data Entry`.
- Operators click a tile to open a corresponding form in a modal window.
- Submitting a form sends data to the connected Google Sheet using Google Apps Script.
- Some checks also log values to other sheets for reporting or analysis.
- Each tile’s color reflects its completion status or whether the check is marked "On Hold."

---

## Notes  
- All files are kept modular to simplify updates and debugging.
- The dashboard relies on Google Apps Script deployment to function properly — the frontend alone will not work without it.


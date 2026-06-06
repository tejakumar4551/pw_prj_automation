# 🐛 Debugging & Maintenance Agent

You are the Debugging Agent. Your responsibility is to fix failing tests, resolve Playwright errors, and maintain the health of the test suite.

## 1. Handling Tricky Elements
- **Intercepts Pointer Events:** If a checkbox is hidden behind a `<label>` and throws an "intercepts pointer events" error when using `.check()`, **click the label directly**:
  ```javascript
  // Instead of: await page.locator('#terms').check();
  await page.locator('label[for="terms"]').click();
  ```
- **Strict Mode Violations:** If Playwright throws an error that multiple elements were found, append `.first()` or make the locator more specific using chained `locator().locator()`.

## 2. Debugging Execution
If you need to reproduce or debug an issue, instruct the user to utilize the NPM scripts:
- `npm run test:debug` (Runs tests in debug mode using Playwright Inspector)
- `npm run test:e2e:headed` (Runs UI tests with the browser visible for visual debugging)

## 3. Investigating Failures
- Always review the artifacts in the `screenshots/` and `reports/` folders.
- Playwright automatically captures visual evidence (screenshots and videos) on failure to the `screenshots/` directory based on our `playwright.config.js` settings.

## 🚨 AUTO-UPDATE METARULE (TWO-WAY SYNC) 🚨
- **Code to Docs Sync:** If you discover a new framework gotcha or tricky element pattern, you **MUST automatically update this file** in the same step so future agents know how to handle it.
- **Docs to Code Sync:** If the USER informs you that they have updated this file, you **MUST immediately audit the codebase** to find any files that violate the new rules and refactor them.

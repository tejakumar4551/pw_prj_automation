# 🧪 QA Automation Expert Agent

You are the QA Test Agent. Your responsibility is to write robust, scalable, and flaky-free Playwright tests.

## 1. Page Object Model (POM)
- Every distinct page or major component must have its own class in the `pages/` directory.
- Methods should represent user actions (e.g., `login(user, password)`).
- **Locators (Private Fields):** All locators MUST be declared as private fields (e.g., `#emailInput`) at the top of the class body, and assigned inside the `constructor()`. Raw string locators and public properties must not leak into the action methods or test files.

## 2. Test Data Management
- **NO HARDCODING:** Never hardcode test data (URLs, credentials, names, amounts) inside the `*.spec.js` or `*.page.js` files.
- Extract all input data into JSON files inside the `test-data/` directory. Load the JSON at the top of the test and pass objects into POM methods.

## 3. Custom Fixtures
- **Do not manually instantiate Page Objects** in your tests (e.g., `const homePage = new HomePage(page)`).
- Use the custom fixtures defined in `fixtures/test.fixture.js`. Inject page objects directly into the test signature:
  ```javascript
  const { test, expect } = require('../../fixtures/test.fixture');
  test('example', async ({ homePage }) => { ... });
  ```

## 4. Locators & Assertions
- Prioritize user-facing locators (`getByRole`, `getByText`, `getByLabel`). Avoid XPath unless absolutely necessary.
- **Strict Mode:** Use `.first()` or `.nth()` to avoid strict mode violations if text appears multiple times.
- **Waiting:** Rely on Playwright's auto-waiting assertions (e.g., `expect(locator).toBeVisible()`). **Avoid `waitForURL`** in SPAs to prevent hang-ups.

## 5. Logging & Exception Handling
- **Winston Logger:** Use the centralized logger (`utils/logger.js`) for all output. Do NOT use raw `console.log`.
- **Exception Handling:** Every action method inside a Page Object MUST be wrapped in a `try-catch` block.
  - On success: Output a `logger.info()` message.
  - On failure: Catch the error, output a `logger.error()`, and immediately `throw new Error()` containing a descriptive message and the original error message.

## 6. Allure Reporting
- The framework is configured to generate raw Allure data into the `allure-results/` folder during execution.
- After a test run, generate and view the interactive Allure dashboard by running: `npm run report:allure`.

## 🚨 AUTO-UPDATE METARULE (TWO-WAY SYNC) 🚨
- **Code to Docs Sync:** If you change the standard way tests are written, you **MUST automatically update this file** in the same step.
- **Docs to Code Sync:** If the USER informs you that they have updated this file, you **MUST immediately audit the codebase** to find any files that violate the new rules and refactor them.

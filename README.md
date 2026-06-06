# 🎭 Eurochange QA Automation Testsuite

An enterprise-grade, highly scalable Playwright automation framework built to test the Eurochange web application. This project is governed by strict AI Agents that enforce industry-standard architectural patterns.

## 🚀 Key Features
- **Playwright & JavaScript:** Lightning-fast, reliable End-to-End testing.
- **Strict Page Object Model (POM):** 100% encapsulation using `#privateFields` for all locators.
- **Winston Logging:** Built-in console and file-based logging with robust `try-catch` exception handling.
- **Data-Driven:** All test data is completely externalized into `test-data/` JSON files.
- **Advanced Reporting:** Simultaneous generation of Playwright HTML Reports and interactive Allure Dashboards.
- **AI-Governed Architecture:** Strict documentation agents ensure the framework remains pristine over time.

## 🤖 AI Governance (The Agents)
This framework is self-governing using a unique **Two-Way Sync Meta-rule**. If architectural code changes, the agents update their rules. If the rules update, the codebase is instantly audited.

The system is driven by the central `AGENT_ORCHESTRATOR.md`, which routes tasks to:
- 🏗️ **ARCHITECT_AGENT**: Maintains folder structures, environments, and configurations.
- 🧪 **QA_TEST_AGENT**: Enforces POM encapsulation, locator strategies, and the strict 30s timeout limit.
- 🚀 **CI_CD_AGENT**: Manages pipeline artifact retention (e.g., uploading the `reports/` folder).
- 🛡️ **GIT_GOVERNANCE_AGENT**: Enforces manual review gates and permanently blocks automated code commits.
- 🐛 **DEBUGGING_AGENT**: Handles Playwright-specific flaky tests, timeouts, and auto-waiting best practices.

## 📦 Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/tejakumar4551/pw_prj_automation.git
   cd pw_prj_automation
   ```

2. **Install NodeJS dependencies:**
   ```bash
   npm install
   ```

3. **Install Playwright Browsers:**
   ```bash
   npx playwright install --with-deps
   ```

## 🏃 Running the Tests

We have convenient NPM scripts configured in `package.json` for execution:

- **Run all tests headlessly (Default for CI Pipelines):**
  ```bash
  npm run test
  ```
- **Run E2E tests in headed mode (Watch the browser execution):**
  ```bash
  npm run test:e2e:headed
  ```
- **Run tests in Debug mode (Opens the Playwright Inspector UI):**
  ```bash
  npm run test:debug
  ```

## 📊 Reporting & Failure Evidence

### Allure Dashboard
For advanced analytics and historical trends, we use Allure. Raw data is captured in `allure-results/`.
- To generate and open the interactive dashboard, run:
  ```bash
  npm run report:allure
  ```

### Playwright HTML Report
Playwright automatically generates a native HTML report.
- It is saved to the `reports/html-report/` directory.

### Failure Evidence (Screenshots & Video)
If a test fails (e.g., hits the strict 30,000ms global timeout), Playwright automatically captures a screenshot and records a video of the execution.
- These artifacts are securely stored in `reports/failure-media/<test-name>/` so they do not clash with the HTML reporter.

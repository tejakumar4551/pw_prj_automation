# 🏗️ Architect Agent

You are the Architect Agent for this Playwright project. Your responsibility is to scaffold, configure, and maintain the underlying infrastructure and folder structure of the test suite.

## 1. Framework & Dependencies
- **Framework:** Playwright with JavaScript (Node.js).
- **Package Manager:** NPM (`package.json`).

## 2. Directory Structure
When building this project from scratch or refactoring, strictly adhere to this folder structure:

```text
├── agents/               # Role-specific AI instructions (you are here)
│   ├── ARCHITECT_AGENT.md
│   ├── CI_CD_AGENT.md
│   ├── DEBUGGING_AGENT.md
│   ├── GIT_GOVERNANCE_AGENT.md
│   └── QA_TEST_AGENT.md
├── api/                  # API clients, endpoints, and services
├── config/               # Environment configs (e.g., environment.js, config.js)
├── fixtures/             # Custom fixtures (e.g., test.fixture.js)
├── pages/                # Page Object Model files (*.page.js)
├── reports/              # HTML Test execution reports & Failure Media (videos/screenshots)
├── test-data/            # JSON data files for tests (e.g., checkout-data.json)
├── tests/
│   ├── api/              # API test files (*.spec.js)
│   └── e2e/              # E2E UI test files (*.spec.js)
├── utils/                # Helper functions (helpers.js, constants.js, date.utils.js)
├── playwright.config.js  # Main Playwright configuration file
├── package.json          # Project dependencies and npm scripts
└── AGENT_ORCHESTRATOR.md # The primary routing file (Brain)
```

## 3. Configuration Management
- **Environment Handling:** Base URLs must never be hardcoded in `playwright.config.js`. They must be dynamically injected via `config/config.js` reading from `process.env.ENV`.
- **Evidence Collection:** `playwright.config.js` must route HTML reports to `reports/`, and capture `screenshot: 'only-on-failure'` and `video: 'retain-on-failure'` to the `reports/failure-media/` output directory.

## 🚨 AUTO-UPDATE METARULE (TWO-WAY SYNC) 🚨
- **Code to Docs Sync:** If you introduce a new architectural pattern, you **MUST automatically update this file** in the same step. Never leave it out of sync.
- **Docs to Code Sync:** If the USER informs you that they have updated this file, you **MUST immediately audit the codebase** to find any files that violate the new rules and refactor them.

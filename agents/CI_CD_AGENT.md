# 🚀 CI/CD & DevOps Agent

You are the CI/CD Pipeline Agent. Your responsibility is to integrate this Playwright test suite into Continuous Integration platforms (GitHub Actions, GitLab CI) and ensure reliable parallel execution.

## 1. Environment & Secrets
- Never commit raw secrets (passwords, API keys) into the repository.
- Ensure that pipeline configurations inject secrets securely into `process.env`.
- Ensure the `ENV` variable is set correctly in the pipeline (e.g., `ENV=prod npm run test`).

## 2. Playwright Docker Image
- When configuring CI pipelines, always utilize the official Playwright Docker image (`mcr.microsoft.com/playwright:v1.x.x-jammy`) to ensure browser dependencies match the framework exactly.
- Run `npx playwright install --with-deps` if not using the pre-built image.

## 3. Parallel Execution & Sharding
- For large test suites, implement Playwright test sharding (`--shard=1/3`) in the CI configuration to split tests across multiple runners to reduce pipeline execution time.
- Ensure that `playwright.config.js` has `fullyParallel: true` enabled.

## 4. Artifact Handling
- The pipeline MUST be configured to upload the contents of the `reports/`, `screenshots/`, and `allure-results/` folders as CI artifacts if a test fails or completes. This ensures HTML logs, visual evidence, and raw Allure data are accessible for debugging.

## 🚨 AUTO-UPDATE METARULE (TWO-WAY SYNC) 🚨
- **Code to Docs Sync:** If you configure a new CI/CD provider or update pipeline strategies, you **MUST automatically update this file** in the same step.
- **Docs to Code Sync:** If the USER informs you that they have updated this file, you **MUST immediately audit the pipeline config files** (e.g., `.github/workflows/`) to find any files that violate the new rules and refactor them.

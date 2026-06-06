# 🧠 AGENT ORCHESTRATOR: Central Controller

**ATTENTION ALL AI AGENTS:** You are currently acting as the **Orchestrator Agent**. Your primary role is the central "Brain" that manages workflow discovery, memory, execution loops, and coordination between specialized sub-agents. 

## 1. 🗂️ Workflow Discovery (Routing)
Evaluate the USER's request. Identify which specialized roles are required to complete the task and **MUST READ** their corresponding instruction files before proceeding:
- **Project Structure & Config Setup?** ➡️ Read `agents/ARCHITECT_AGENT.md`
- **Writing Tests, POMs, or Fixtures?** ➡️ Read `agents/QA_TEST_AGENT.md`
- **Debugging Failures or Tricky Elements?** ➡️ Read `agents/DEBUGGING_AGENT.md`
- **Setting up Pipelines (GitHub/GitLab)?** ➡️ Read `agents/CI_CD_AGENT.md`
- **Committing Code or Git Operations?** ➡️ Read `agents/GIT_GOVERNANCE_AGENT.md`

## 2. 🤝 Coordination (Cross-Agent Handoff)
If a user request requires multiple disciplines, coordinate between agents sequentially:
1. First, apply **Architect** rules to ensure folder structures and configs are correct.
2. Next, apply **QA Agent** rules to write the POM and the actual `.spec.js`.
3. Finally, if execution fails, instantly pivot to applying the **Debugging Agent** rules.

## 3. ⚙️ Execution & Validation Loop
You must follow a strict self-healing validation lifecycle:
1. **Plan:** Read the required sub-agent rules.
2. **Execute:** Write or refactor the requested code.
3. **Validate:** Automatically run the relevant script (e.g., `npm run test` or `npx playwright test tests/e2e --headed`).
4. **Iterate:** If a test fails, DO NOT STOP. Diagnose the failure using Debugging rules, apply the fix, and re-run until a passing state is achieved.

## 4. 🧠 Memory Management
Do not rely on infinite chat context windows to remember long workflows.
- For complex requests, immediately create and maintain a `task` Artifact checklist to track your completed and pending steps (do not write this file to the project's root directory).
- If a test fails, "remember" the failure state by explicitly reading the terminal output or the artifacts inside the `reports/` and `screenshots/` folders before attempting a blind fix.

## 🚨 AUTO-UPDATE METARULE (TWO-WAY SYNC) 🚨
- **Code to Docs Sync:** If you create a new role/folder, you must create a new agent file in `agents/` and add its routing entry here.
- **Docs to Code Sync:** If the USER modifies this file or any sub-agent file, you MUST immediately audit the codebase to enforce the changes.

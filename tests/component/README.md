# Component & Unit Tests

This directory contains isolated tests for individual Svelte components and page logic. These tests ensure that UI elements render correctly and that data is processed as expected without needing a full browser or a running server.

### 🛠 Tech Stack
- **Runner:** [Vitest](https://vitest.dev/) (Fast Vite-native test runner)
- **Environment:** [Happy-DOM](https://github.com/capricorn86/happy-dom) (A fast, lightweight simulated browser)
- **Utilities:** [@testing-library/svelte](https://testing-library.com/docs/svelte-testing-library/intro/) 

### 📋 What is tested here?
- **Rendering Logic:** Ensuring pages like `CV`, `Academia`, and `Projects` show the correct headings and list items.
- **Data Mapping:** Verifying that blog post data is correctly transformed into HTML cards.
- **Mocking:** Testing components with "fake" data to ensure the UI handles different scenarios gracefully.

### 🚀 How to run
Run these tests from the project root using:

npm run test:component
# End-to-End (E2E) Tests

This directory contains "real-world" tests that simulate a user interacting with the website in a real browser. These tests verify that all parts of the system—routing, layout, and filesystem—work together correctly.

### 🛠 Tech Stack
- **Runner:** [Playwright](https://playwright.dev/)
- **Browsers:** Chromium, Firefox, and WebKit (Safari).

### 📋 What is tested here?
- **Navigation:** Ensuring clicking links in the Navbar actually navigates to the correct URL and loads the page.
- **Global Layout:** Verifying the "Smart Reveal" navbar effect (hides on scroll down, shows on scroll up).
- **Filesystem Integration:** Ensuring the Blog successfully reads and parses real `.md` files from the `src/lib/posts` directory.
- **SEO & Head:** Verifying that `<title>` tags and metadata are correctly set within SvelteKit headers.

### 🚀 How to run
Run these tests from the project root using:

# Run all tests headlessly
npm run test:e2e

# Run with a visual UI to see the browser in action
npx playwright test --ui
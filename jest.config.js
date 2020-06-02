module.exports = {
  clearMocks: true,
  cacheDirectory: '.jest-cache',
  coverageDirectory: '.jest-coverage',
  coverageReporters: ['html', 'lcov', 'text-summary'],
  coveragePathIgnorePatterns: ["/node_modules/"],
  collectCoverageFrom: [
    '**/packages/**/*.{js,jsx}',
    '!**/packages/**/(stories|styles)*.js',
    '!**/packages/assets/**/*',
  ],
  setupFilesAfterEnv: [
    "./tests/setupTests.js"
  ],
  testMatch: [
    "**/__tests__/**/*.[jt]s?(x)",
    "**/?(*.)+(spec|test).[tj]s?(x)",
  ],
};
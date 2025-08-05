import type { Config } from 'jest';

export default {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  //   verbose: true
  reporters: [
    'default',
    'github-actions',
    [
      'jest-junit',
      {
        outputDirectory: 'reports',
        outputName: 'jest-report.xml',
        includeConsoleOutput: true,
        reportTestSuiteErrors: true,
      },
    ],
  ],
  collectCoverage: false,
} satisfies Config;

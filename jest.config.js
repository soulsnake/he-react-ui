module.exports = {
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/*.fixture{s,}.*',
    '!src/**/fixtures/*.*',
    '!src/index.js',
  ],
  coverageReporters: ['json', 'lcov', 'text', 'json-summary'],
  setupTestFrameworkScriptFile: '<rootDir>/config/jest.config.tsx',
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.ts?(x)',
    '<rootDir>/src/**/?(*.)(test).ts?(x)',
  ],
  testEnvironment: 'node',
  modulePaths: ['<rootDir>/'],
  testURL: 'http://localhost',
  transform: {
    '^.+\\.(t|j)sx?$': 'ts-jest',
    '^(?!.*\\.(js|jsx|css|json)$)': '<rootDir>/config/fileTransform.js',
  },
  moduleNameMapper: {
    '^.+\\.(css|scss)$': 'identity-obj-proxy',
  },
  snapshotSerializers: ['enzyme-to-json/serializer'],
  moduleFileExtensions: [
    'web.js',
    'js',
    'json',
    'web.jsx',
    'jsx',
    'node',
    'ts',
    'tsx',
  ],
};

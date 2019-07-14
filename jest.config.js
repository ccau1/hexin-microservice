module.exports = {
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.json'
    }
  },
  moduleFileExtensions: [
    'ts',
    'js'
  ],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest'
  },
  testMatch: [
    '**/__test__/**/*.test.(ts|js)'
  ],
  testEnvironment: 'node',
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.{ts,tsx}"
  ],
  coveragePathIgnorePatterns: [
    "/node_modules/"
  ],
  coverageThreshold: {
    global: {
      statements: 100,
      branches: 100,
      functions: 100,
      lines: 100
    }
  }
};
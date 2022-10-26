const nxPreset = require('@nrwl/jest/preset').default;

module.exports = {
  ...nxPreset,
  collectCoverageFrom: [
    'src/**/*.ts',
    '!src/main.ts',
    '!src/**/*.module.ts',
    '!src/index.ts',
  ],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  coveragePathIgnorePatterns: ['<rootDir>/src/prisma'],
  moduleNameMapper: {
    '^uuid$': require.resolve('uuid'),
    '^nest-typed-config$': require.resolve('nest-typed-config'),
  },
};

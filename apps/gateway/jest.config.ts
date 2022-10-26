/* eslint-disable */
export default {
  displayName: 'gateway',
  preset: '../../jest.preset.js',
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
    },
  },
  testEnvironment: 'node',
  transform: {
    '^.+\\.[tj]s$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
    './apps/gateway/src/api/auth/**/*.ts': {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
    },
    './apps/gateway/src/api/post/**/*.ts': {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
    },
    './apps/gateway/src/api/user/**/*.ts': {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
    },
    './apps/gateway/src/fallback.controller.ts': {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
    },
    './apps/gateway/src/body-parse-interceptor.service.ts': {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
    },
    './apps/gateway/src/decorator/**/*.ts': {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
    },
    './apps/gateway/src/middlewares/**/*.ts': {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
    },
    './apps/gateway/src/pipes/**/*.ts': {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
    },
  },
  coverageDirectory: '../../coverage/apps/gateway',
};

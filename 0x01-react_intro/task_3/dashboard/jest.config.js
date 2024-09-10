module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    moduleFileExtensions: [
      'web.js',
      'js',
      'web.ts',
      'ts',
      'web.tsx',
      'tsx',
      'json',
      'web.jsx',
      'jsx',
      'node'
    ],
    transform: {
      '^.+\\.js$': 'babel-jest',
      '^.+\\.jsx$': 'babel-jest',
      '^.+\\.tsx?$': 'ts-jest',
    },
    globals: {
      __DEV__: true,
    },
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
  };
  
/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

module.exports = {
  name: 'jest',
  testEnvironment: 'node',
  verbose: true,
  roots: ['<rootDir>/app/assets/', '<rootDir>/spec/javascript'],
  testMatch: ['<rootDir>//spec/javascript/**/*.js'],
  modulePathIgnorePatterns: ['<rootDir>/dist/'],
  collectCoverageFrom: [
    'app/assets/**/*.js',
  ],
};

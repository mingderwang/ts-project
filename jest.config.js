/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
   // Specify the path(s) you want to include for testing
   roots: ['<rootDir>/src/__tests__'],

   // Specify the path(s) you want to exclude from testing
   testPathIgnorePatterns: ['<rootDir>/output'],
};
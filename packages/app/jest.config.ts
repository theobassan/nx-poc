/* eslint-disable */
export default {
  displayName: 'app',
  preset: '../../jest.preset.js',
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/packages/app',
  setupFilesAfterEnv: ['<rootDir>/test-setup.ts'],
};

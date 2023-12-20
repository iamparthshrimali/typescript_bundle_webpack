import type {Config} from '@jest/types';
// Sync object
const config: Config.InitialOptions = {
  verbose: true,
  transform: {
  '^.+\\.ts$': 'ts-jest',
  },
  "globals": {
    "window": {}
  }
};
export default config;
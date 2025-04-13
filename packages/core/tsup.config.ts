import { defineConfig } from 'tsup';

import defaults from '../../tsup.config';

export default defineConfig({
  ...defaults,
  external: ['@ms-dosx86/livekit-client'],
});

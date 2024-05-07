import { build } from '../../../helpers/compile/build'

void build([
  {
    name: 'default',
    entryPoints: ['src/index.ts'],
    outfile: 'dist/index',
    external: ['fs-extra'],
    bundle: true,
    emitTypes: true,
  },
])

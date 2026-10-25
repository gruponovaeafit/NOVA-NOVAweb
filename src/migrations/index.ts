import * as migration_20261025_002238_inicial_nova from './20261025_002238_inicial_nova';

export const migrations = [
  {
    up: migration_20261025_002238_inicial_nova.up,
    down: migration_20261025_002238_inicial_nova.down,
    name: '20261025_002238_inicial_nova'
  },
];

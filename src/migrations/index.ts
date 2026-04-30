import * as migration_20260427_191256_inicial_proyecto_nova from './20260427_191256_inicial_proyecto_nova';

export const migrations = [
  {
    up: migration_20260427_191256_inicial_proyecto_nova.up,
    down: migration_20260427_191256_inicial_proyecto_nova.down,
    name: '20260427_191256_inicial_proyecto_nova'
  },
];

import { registerPlugin } from '@capacitor/core';

import type { OpenTaxiPlugin } from './definitions';

const OpenTaxi = registerPlugin<OpenTaxiPlugin>('OpenTaxi', {
  web: () => import('./web').then(m => new m.OpenTaxiWeb()),
});

export * from './definitions';
export { OpenTaxi };

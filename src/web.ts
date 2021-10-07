import { WebPlugin } from '@capacitor/core';

import type { OpenTaxiPlugin } from './definitions';

export class OpenTaxiWeb extends WebPlugin implements OpenTaxiPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}

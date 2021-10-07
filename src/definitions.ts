export interface OpenTaxiPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}

import { type SchemaTypeDefinition } from 'sanity'
import foods from './foods';
import chefs from './chefs';
import help from './help';

import customerorder from './customerorder';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [foods,chefs,help,customerorder],
}

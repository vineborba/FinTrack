import { createRealmContext } from '@realm/react';
import { Entry } from '../schemas/Entry';

export default createRealmContext({
  schema: [Entry],
});

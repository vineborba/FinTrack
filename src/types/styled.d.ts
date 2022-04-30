import 'styled-components';

import { FTTheme } from '../theme';

declare module 'styled-components' {
  export interface DefaultTheme extends FTTheme {}
}

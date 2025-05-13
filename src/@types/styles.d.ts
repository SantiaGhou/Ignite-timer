import 'styled-components';
import { defaultTheme } from "../styles/themes/default";

type ThemeType = typeof defaultTheme;


declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {
    // Added dummy property to avoid the empty interface issue.
    _dummy?: never;
  }
}
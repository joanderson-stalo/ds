import 'styled-components';
import { defaultThemeDark } from '../styles/themes/dark';
import { defaultThemeLight } from '@/styles/themes/light';

type ThemeType = typeof defaultThemeDark;
type ThemeType = typeof defaultThemeLight;

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}

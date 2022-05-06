import "@emotion/reat"
import { ThemeConfig } from "./typings";

declare module '@emotion/react' {
  export interface Theme extends ThemeConfig{}
}

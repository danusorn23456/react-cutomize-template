import { ThemeConfig } from "../types/typings";

export const themeConfig: ThemeConfig = {
  color: {
    white: "#ffffff",
    black: "#ffffff",
    primary: "#1890ff",
    secondary: "#36cfc9",
    tertiary: "#9254de",
    border: "#d9d9d9",
    text: "#000000a6",
    textSecondary: "#00000073",
    success: "#52c41a",
    error: "#f5222d",
    warning: "#faad14",
    disabled: "#00000040",
  },
  breakpoint: {
    xxs: 0,
    xs: 480,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
    xxl: 1600
  },
  media: {
    min: {
      xxs: "@media screen and (min-width : 0px)",
      xs: "@media screen and (min-width : 480px)",
      sm: "@media screen and (min-width : 576px)",
      md: "@media screen and (min-width : 768px)",
      lg: "@media screen and (min-width : 992px)",
      xl: "@media screen and (min-width : 1200px)",
      xxl: "@media screen and (min-width : 1600px)",
    },
    max: {
      xxs: "@media screen and (min-width : 0px)",
      xs: "@media screen and (min-width : 479px)",
      sm: "@media screen and (min-width : 575px)",
      md: "@media screen and (min-width : 767px)",
      lg: "@media screen and (min-width : 991px)",
      xl: "@media screen and (min-width : 1199px)",
      xxl: "@media screen and (min-width : 1599px)",
    }
  },
  spacing: {
    xxs: "4px",
    xs: "8px",
    sm: "12px",
    md: "16px",
    lg: "20px",
    xl: "24px",
    xxl: "28px",
  },
}

declare module "*.css";
declare module "*.less";

export interface User {
    uid: string,
    avatar: string,
    displayName: string,
    email: string,
}

export interface Auth {
    access_token:string,
    refresh_token:string
}


export type MenuType = "main" | "settings" | "account" | "all"

export type CallBack<T = any, R = any> = (T, R) => R

export type ColorVariant = 'white' | 'black' | 'primary' | 'secondary' | 'tertiary' | 'border' | 'text' | 'textSecondary' | 'success' | 'error' | 'warning' | 'disabled'

export type ResponsiveUnit = 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'

export type ThemeColor = Record<ColorVariant, string>
export type ThemeBreakpoint = Record<ResponsiveUnit, number>
export type ThemeMedia = Record<"max" | "min", Record<ResponsiveUnit, string>>

export type ThemeSpacing = Record<ResponsiveUnit, string>

export interface ThemeConfig {
    color: ThemeColor;
    breakpoint: ThemeBreakpoint;
    media: ThemeMedia;
    spacing: ThemeSpacing;
}
import { ThemeProvider } from "@emotion/react"
import { ThemeSwitcherProvider } from "react-css-theme-switcher"
import { BrowserRouter } from "react-router-dom"
import AppRoute from "./routes"
import { themeConfig } from "./theme"
import { AuthProvider, useLocalStorage } from "./hook"

export default function App() {

    const [defaultTheme] = useLocalStorage("dark_mode", "dark")

    const themes = {
        light: `${process.env.PUBLIC_URL}/lightTheme.css`,
        dark: `${process.env.PUBLIC_URL}/darkTheme.css`,
    };

    return (
        <BrowserRouter>
            <AuthProvider>
                <ThemeSwitcherProvider defaultTheme={defaultTheme} themeMap={themes}>
                    <ThemeProvider theme={themeConfig}>
                        <AppRoute />
                    </ThemeProvider>
                </ThemeSwitcherProvider>
            </AuthProvider>
        </BrowserRouter>
    )
}
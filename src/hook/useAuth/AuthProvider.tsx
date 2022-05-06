import { createContext, Dispatch, ReactNode, useContext } from "react"
import { Auth } from "../../types/typings"
import useLocalStorage from "../useLocalStorage"

const authDefaultValue: Auth = {
    access_token: "",
    refresh_token: ""
}

interface AuthContext {
    auth: Auth
    setAuth: Dispatch<Auth>
}

export const authContext = createContext<AuthContext>({ auth: authDefaultValue } as AuthContext)

export function useAuthContext() {
    const context = useContext(authContext)
    if (!context) {
        throw new Error("can not useAuthContext outside AuthProvider.")
    }
    return context
}

export function AuthProvider({ children }: { children: ReactNode }) {

    const [auth, setAuth] = useLocalStorage("auth", authDefaultValue) as [Auth, Dispatch<Auth>]

    return <authContext.Provider value={{ auth, setAuth }}>{children}</authContext.Provider>
}
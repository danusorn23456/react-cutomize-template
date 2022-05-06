import { useAuthContext } from "./AuthProvider"

export * from "./AuthProvider"

export interface useAuthProps {

}

export default function useAuth() {
    const { auth, setAuth } = useAuthContext()
    return [auth, setAuth]
}
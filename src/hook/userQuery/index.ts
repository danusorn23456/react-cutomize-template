import { useEffect } from "react"
import { useMutation } from "react-query"
import { APIUserSignIn, APIUserSignOut, APIUserSignUp } from "../../service"
import { User } from "../../types/typings"
import useLocalStorage from "../useLocalStorage"

export enum USER_QUERY{
    SIGNO_UP = "SIGNO_UP",
    SIGNO_IN = "SIGNO_IN",
    SIGN_OUT = "SIGN_OUT",
    GET = "GET",
}

export function useSignUp() {

    return useMutation(USER_QUERY.SIGNO_UP, (...props) => APIUserSignUp(...props), {
        onSuccess:()=>{
        }
    })
}

export function useSignIn() {

    return useMutation(USER_QUERY.SIGNO_IN,(...props) => APIUserSignIn(...props),{
        onSuccess:()=>{
        }
    })
}

export function useSignOut() {

    return useMutation(USER_QUERY.SIGN_OUT,(...props) => APIUserSignOut(...props),{
        onSuccess:()=>{
        }
    })
}


export function useUser(): User {
    const [user, setUser] = useLocalStorage("user", {})

    useEffect(() => {
        setUser({
            avatar: "",
            displayName: "mockDisplayName",
            email: "mockEmail"
        } as User)
    }, [setUser])

    return user
}

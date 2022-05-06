
import { User } from "../../types/typings";
import useLocalStorage from "../useLocalStorage";

export interface useCurrentUserProps {

}

export default function useCurrentUser({ ...props }: useCurrentUserProps): User {

    const [user] = useLocalStorage("user", {
        avatar: "",
        displayName: "mock user",
        email: "email@mock.com",
    } as User)

    return user
}
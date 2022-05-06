import { useCallback, useState } from "react";

export default function useToggle(init_value: boolean = false) {
    const [state, setState] = useState<boolean>(init_value)

    const toggle = useCallback((value?: boolean) => {
        setState(typeof value !== "undefined" ? value : !state)
    }, [state])

    return [state, toggle]
}
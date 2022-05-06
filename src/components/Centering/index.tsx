import { ReactNode } from "react"

export interface CenteringProps {
    children: ReactNode
}

export default function Centering({ children }: CenteringProps) {

    return (
        <div style={{
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            display:"grid",
            placeContent:"center"
        }}>
            {children}
        </div>
    )
}
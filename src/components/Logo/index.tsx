import styled from "@emotion/styled"
import { Space } from "antd"
import { SVGProps } from "react"
import { useThemeSwitcher } from "react-css-theme-switcher"

export interface LogoProps extends SVGProps<any> {
    withTitle?: boolean
}

const StyledSpace = styled(Space)(({ theme }) => ({
    "svg":{
        width:"19px",
    },
    "h1": {
        fontSize:"1rem",
        marginBottom: 0,
        lineHeight: "100%",
        fontWeight: "bold",
        textTransform:"uppercase",
    },
    [theme.media.min.md]:{
        "svg":{
            width:"38px",
            transform: "translateY(5px)",
        },
        "h1":{
            fontSize: "2rem",
        }
    },
}))

export default function Logo({ withTitle = false, ...props }: LogoProps) {

    const { currentTheme } = useThemeSwitcher()

    return (
        <StyledSpace size={8} style={{ alignItems: "center" }}>
            <svg className="logo" xmlns="http://www.w3.org/2000/svg" width={"38px"} viewBox="0 0 150 70" fill="none" {...props}>
                <g clipPath="url(#clip0_4_13)">
                    <path d="M18.6818 0.181816L35.5568 53.2273H36.2045L53.1136 0.181816H69.4773L45.4091 70H26.3864L2.28409 0.181816H18.6818Z" fill={currentTheme === "dark" ? "white" : "black"} />
                    <path d="M80.3182 69.8182L63.4432 16.7727L62.7955 16.7727L45.8864 69.8182L29.5227 69.8182L53.5909 3.65961e-06L72.6136 5.32263e-06L96.7159 69.8182L80.3182 69.8182Z" fill={currentTheme === "dark" ? "white" : "black"} />
                    <path d="M131.318 69.8182L114.443 16.7727L113.795 16.7727L96.8864 69.8182L80.5227 69.8182L104.591 -3.96979e-06L123.614 -2.30677e-06L147.716 69.8182L131.318 69.8182Z" fill={currentTheme === "dark" ? "white" : "black"} />
                </g>
                <defs>
                    <clipPath id="clip0_4_13">
                        <rect width={150} height={70} fill="white" />
                    </clipPath>
                </defs>
            </svg>
            {
                withTitle ? <h1>devvv</h1> : <></>
            }
        </StyledSpace>
    )
}
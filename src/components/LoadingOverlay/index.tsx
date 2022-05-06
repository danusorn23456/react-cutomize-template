import styled from "@emotion/styled"
import { Spin, SpinProps } from "antd"

export interface LoadingOverlayProps extends SpinProps{

}

const StyledCenter = styled("div")(()=>({
    zIndex:1000,
    position:"fixed",
    top:0,
    right:0,
    bottom:0,
    left:0,
    display:"grid",
    placeContent:"center",
    "ant-spin":{
        position:"relative"
    }
}))

export default function LoadingOverlay({ ...props }:LoadingOverlayProps){

    return (
        <StyledCenter>
            <Spin {...props}/>
        </StyledCenter>
    )
}

import { Link, LinkProps, useLocation } from "react-router-dom";

export interface LinkWithQueryProps extends LinkProps {
    children:any,
    withQuery?:boolean
}

export default function LinkWithQuery({ children, to, withQuery = true,  ...props }: LinkWithQueryProps) {

    const { search } = useLocation()

    return (
        <Link {...props} to={withQuery ? to + search : to}>{children}</Link>
    )
}
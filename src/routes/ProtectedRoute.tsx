import { ReactElement } from 'react';
import { Navigate, Outlet, RouteProps } from 'react-router-dom';
import { routePathMap } from './index';

export interface ProtectedRouteProps extends RouteProps {
    children?: ReactElement;
    isAllowed?: (...rest: any) => boolean;
    redirectTo?: routePathMap;
}

export default function ProtectedRoute({ children, isAllowed, redirectTo = routePathMap.SIGNIN, ...props }: ProtectedRouteProps) {


    const { user, isAuth } = { user: "tar", isAuth: true }

    let isValid = isAuth

    if (isAllowed) {
        isValid = isAllowed?.(user)
    }

    if (process.env.REACT_APP_BY_PASS_AUTH === "true") {
        isValid = true
    }

    if (!isValid) {
        return <Navigate to={redirectTo} />
    }

    return children ? children : <Outlet />
}

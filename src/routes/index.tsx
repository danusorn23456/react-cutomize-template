import { lazy, Suspense } from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import LoadingOverlay from '../components/LoadingOverlay';
import { MainLayout, SettingLayout } from '../layouts';
import ProtectedRoute from './ProtectedRoute';

const Home = lazy(() => import('../pages').then(module => ({ default: module.Home })));
const SignIn = lazy(() => import('../pages').then(module => ({ default: module.SignIn })));
const SignUp = lazy(() => import('../pages').then(module => ({ default: module.SignUp })));
const SettingProfile = lazy(() => import('../pages').then(module => ({ default: module.SettingProfile })));

export enum routePathMap {
    HOME = "/",
    SIGNUP = "/signup",
    SETTING = "/settings",
    SIGNIN = "/signin",
    SETTING_PROFILE = "/settings/profile",
}

export default function AppRoute() {

    return (
        <Suspense fallback={<LoadingOverlay tip="web loading" />}>
            <Routes>
                {/* Main */}
                <Route element={<MainLayout><Outlet /></MainLayout>}>
                    <Route index element={<Home />} />
                    <Route path={routePathMap.SIGNIN}
                        element={<ProtectedRoute isAllowed={user => !user} redirectTo={routePathMap.HOME}><SignIn /></ProtectedRoute>}
                    />
                            <Route path={routePathMap.SIGNUP}
                        element={<ProtectedRoute isAllowed={user => !user} redirectTo={routePathMap.HOME}><SignUp /></ProtectedRoute>}
                    />
                </Route>
                {/* Settings */}
                <Route path={routePathMap.SETTING} element={<MainLayout><SettingLayout><Outlet /></SettingLayout></MainLayout>}>
                    <Route path={routePathMap.SETTING_PROFILE}
                        element={<ProtectedRoute redirectTo={routePathMap.SIGNIN}><SettingProfile /></ProtectedRoute>}
                    />
                </Route>
            </Routes>
        </Suspense>)
}
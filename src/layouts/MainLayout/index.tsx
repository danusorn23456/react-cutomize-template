import { ReactElement } from 'react'
import { Layout } from 'antd'
import { Logo, NavigationBar, ThemeSwitch } from '../../components'
import { Content } from 'antd/lib/layout/layout'
import { routePathMap } from '../../routes'
import { useLocation, useNavigate } from 'react-router-dom'
import { useUser } from '../../hook'

export interface IMainLayoutProps {
    children: ReactElement
}

export default function MainLayout({ children }: IMainLayoutProps) {

    const user = useUser()
    const { search } = useLocation()
    // const signout = useSignout()
    
    const navigate = useNavigate()

    const menuItemsMap = ([
        {
            key: routePathMap.HOME,
            label: <Logo withTitle />,
            onClick: () => navigate(routePathMap.HOME + search),
            className: "unstyle",
        },
        (!user ? {
            key: routePathMap.SIGNIN,
            label:"SIGN IN",
            onClick: () => navigate(routePathMap.SIGNIN + search),
            className: "secondary",
        } : null),
        (!user ? {
            key: routePathMap.SIGNUP,
            label: "REGISTER",
            onClick: () => navigate(routePathMap.SIGNUP + search),
            className: "secondary",
        } : null),
        {
            key: "themeSwitcher",
            icon: <ThemeSwitch />,
            className: "secondary unstyle",
        },
        (user ? {
            key: "profile-submenu",
            label: "PROFILE",
            className: "secondary",
            children: [{
                key: routePathMap.SETTING_PROFILE,
                label: "SETTING",
                onClick: () => navigate(routePathMap.SETTING_PROFILE + search),
            },
            {
                key: "/signout",
                label: "SING OUT",
                // onClick: () => logout(routePathMap.HOME),
            }
            ]
        } : null)
    ])

    return (
        <Layout style={{ height: "100vh" }}>
            <NavigationBar items={menuItemsMap} />
            <Layout style={{ height: "100vh", padding: "1rem", overflow: "auto" }}>
                <Content>{children}</Content>
            </Layout>
        </Layout>
    );
}


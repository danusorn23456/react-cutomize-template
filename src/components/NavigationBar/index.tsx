import styled from '@emotion/styled';
import { Menu, MenuProps } from 'antd';
import { Header } from 'antd/lib/layout/layout';
import useCurrentPath from '../../hook/useCurrentPath';

export interface NavigationBarProps extends MenuProps { }

const StyledHeader = styled(Header)(({ theme }) => ({
    padding:"0 !important",
    display: "flex",
    '.ant-menu': {
        width: "100%",
    },
    '.ant-menu-overflow-item.ant-menu-overflow-item-rest.ant-menu-submenu, .secondary': {
        marginLeft: "auto !important",
        "& ~ *": {
            marginLeft: "unset !important"
        }
    },
    '.unstyle': {
        '&::after': {
            display: "none"
        },
    }
}))

export default function AppBar({ items, ...rest }: NavigationBarProps) {

    const currentPath = useCurrentPath()

    return (
        <StyledHeader>
            <Menu mode="horizontal" selectedKeys={[currentPath]} items={items} {...rest} />
        </StyledHeader>
    );
}

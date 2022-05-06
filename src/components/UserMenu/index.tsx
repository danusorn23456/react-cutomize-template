import { Menu, Dropdown, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import { routePathMap } from '../../routes';

export interface UserMenuProps {

}

export default function UserMenu({ ...props }: UserMenuProps) {

    const itemsMap = [
        {
            label: <Link to={routePathMap.SETTING_PROFILE}>PROFILE</Link>,
            key: '0',
        },
    ]

    const menu = <Menu items={itemsMap} />

    return (
        <>
            <Dropdown overlay={menu} overlayClassName="user-menu-dropdown" trigger={['click']} {...props}>
                <div role="button" onClick={e => e.preventDefault()}>
                    <Avatar size={32}>P</Avatar>
                </div>
            </Dropdown>
        </>
    )
}
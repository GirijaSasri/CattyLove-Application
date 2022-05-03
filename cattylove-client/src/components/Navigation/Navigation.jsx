import { useAuth0 } from '@auth0/auth0-react';
import { Menu } from 'antd';
import { Header } from 'antd/lib/layout/layout';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/cattylove-logo.png';

const Navigation = () => {
    const { loginWithRedirect, isAuthenticated, isLoading, logout } = useAuth0();

    let authMenu
    if(!isLoading) {
        authMenu = isAuthenticated ? (
            <Menu.Item key={'logout'} onClick={() => logout({ returnTo: window.location.origin })}>
                Logout
            </Menu.Item>
        ) : (
            <Menu.Item key={'login'} onClick={() => loginWithRedirect()}>
                Login
            </Menu.Item>
        )
    }

    return (
        <Header style={{ position: 'fixed', zIndex: 2, width: '100%' }}>
            <Link to={'/'} style={{ float: 'left' }}>
                <img src={logo} width={170} alt='A cat with a house' />
            </Link>
            <Menu theme='dark' mode='horizontal' defaultSelectedKeys={['home']} style={{ justifyContent: 'flex-end' }}>
                <Menu.Item key={'wishlist'}>
                    My Wishlist
                </Menu.Item>
                {authMenu}
                <Menu.Item key={'comment'}>
                    <Link to={'/comment'}>
                    Comment
                    </Link>
                </Menu.Item>
            </Menu>
        </Header>
    );
};

export default Navigation;
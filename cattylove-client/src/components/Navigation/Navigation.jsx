import { Menu } from 'antd';
import { Header } from 'antd/lib/layout/layout';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/cattylove-logo.png'

const Navigation = () => {
    return (
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
            <Link to={'/'} style={{ float: 'left' }}>
                <img src={logo} width={170} alt='A cat with a house' />
            </Link>
            <Menu theme='dark' mode='horizontal' defaultSelectedKeys={['home']} style={{ justifyContent: 'flex-end' }}>
                <Menu.Item key={'wishlist'}>
                    My Wishlist
                </Menu.Item>
                <Menu.Item key={'login'}>
                    Login
                </Menu.Item>
            </Menu>
        </Header>
    );
};

export default Navigation;
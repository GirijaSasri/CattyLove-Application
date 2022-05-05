import { useAuth0 } from '@auth0/auth0-react';
import { Spin } from 'antd';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from '../../utility/axios';

const Login = () => {
    const navigate = useNavigate()
    const { isLoading, isAuthenticated, user, logout, loginWithRedirect } = useAuth0()

    useEffect(() => {
        if(isAuthenticated && user) {
            axios.post('users', user)
                .then(res => {
                    navigate('/')
                })
                .catch(err => {
                    console.log(err)
                    toast.error(`${err.response?.status}: ${err.response?.data}`, { position: 'bottom-center', theme: 'dark' });
                    // logout({ returnTo: window.location.origin })
                })
        }
    }, [user, isAuthenticated, navigate, logout])

    if(isLoading) {
        return (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 'calc(100vh - 134px)' }}>
                <Spin size='large' />
            </div>
        )
    }

    if(!isAuthenticated) {
        loginWithRedirect()
    }

    return null
};

export default Login;
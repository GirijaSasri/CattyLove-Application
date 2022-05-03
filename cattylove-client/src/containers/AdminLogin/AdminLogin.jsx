import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import ThemeForm from '../../components/ThemeForm/ThemeForm';
import axios from '../../utility/axios';
import CONSTANTS from '../../utility/Constants';

const fields = [
    {
        label: 'Username',
        name: 'username',
        rules: [
            { required: true, message: 'Please enter username' }
        ]
    },
    {
        label: 'Password',
        name: 'password',
        type: 'password',
        rules: [
            { required: true, message: 'Please enter your password' }
        ]
    }
]

const AdminLogin = () => {
    const [success, setSuccess] = useState(false)
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()
    const { state } = useLocation()

    const from = state?.from

    const submitHandler = values => {
        setSuccess(false)
        setLoading(true)
        axios.post('auth', values)
            .then(res => {
                setSuccess(true)
                localStorage.setItem(CONSTANTS.adminTokenKey, res.data?.token)
                navigate(from ? from : '/admin', { replace: true })
            })
            .catch(err => {
                toast.error(`${err.response?.status}: ${err.response?.data}`, { position: 'bottom-center', theme: 'dark' });
            })
            .finally(() => {
                setLoading(false)
            })
    }

    const submitFailHandler = () => {

    }

    useEffect(() => {
        if(localStorage.getItem(CONSTANTS.adminTokenKey)) 
            navigate('/admin', { replace: true })
    }, [navigate])

    return (
        <div>
            <ThemeForm 
                fields={fields} 
                onFinish={submitHandler} 
                onFinishFailed={submitFailHandler}
                success={success}
                loading={loading}
                submitText={'Login'}
                enableReset={false} />
        </div>
    );
};

export default AdminLogin;
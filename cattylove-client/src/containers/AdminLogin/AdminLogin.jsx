import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import ThemeForm from '../../components/ThemeForm/ThemeForm';
import axios from '../../utility/axios';
import CONSTANTS from '../../utility/Constants';
import loginIllustration from '../../assets/images/login-illustration.svg'
import { Card } from 'antd';

const fields = [
    {
        label: 'Username',
        name: 'username',
        type: 'username',
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

    const submitFailHandler = error => {
        console.log(error)
    }

    useEffect(() => {
        if(localStorage.getItem(CONSTANTS.adminTokenKey)) 
            navigate('/admin', { replace: true })
    }, [navigate])

    return (
        <div>
            <Card 
                hoverable={false}
                cover={
                    <img 
                        style={{ width: 320, margin: '30px auto', display: 'block', maxWidth: '100%' }}
                        src={loginIllustration} 
                        alt={'A man opening the access door'} />
                }
                style={{ width: 500, borderRadius: 10, margin: '20px auto' }}>
                <ThemeForm 
                    fields={fields} 
                    onFinish={submitHandler} 
                    onFinishFailed={submitFailHandler}
                    success={success}
                    loading={loading}
                    submitText={'Login'}
                    enableReset={false}
                    maxWidth={400}
                    formType={'login'} />
            </Card>
        </div>
    );
};

export default AdminLogin;
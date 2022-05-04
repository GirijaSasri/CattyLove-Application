import { PageHeader } from 'antd';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import ThemeForm from '../../components/ThemeForm/ThemeForm';
import axios from '../../utility/axios'
import getAdminHeader from '../../utility/getAdminHeader';

const fields = [
    {
        label: 'Picture',
        name: 'picture',
        type: 'image',
        rules: [
            { required: true, message: 'Please select an image' }
        ]
    },
    {
        label: 'Name',
        name: 'name',
        rules: [
            { required: true, message: 'Please enter the cat\'s name' },
            { min: 2, message: 'Please enter a valid name' },
            { max: 25, message: 'Please enter a valid name' },
        ]
    },
    {
        label: 'Age',
        name: 'age',
        type: 'number',
        rules: [
            { required: true, message: 'Please enter cat\'s age' },
            { type: 'number', message: 'Please enter a valid age' }
        ]
    },
    {
        label: 'Gender',
        name: 'gender',
        type: 'radio',
        items: [
            { name: 'Unknown', value: 'Unknown' },
            { name: 'Male', value: 'Male' },
            { name: 'Female', value: 'Female' },
        ],
        rules: [
            { required: true, message: 'Please select a gender' },
        ]
    },
    {
        label: 'Description',
        name: 'description',
        type: 'textarea',
        rules: [
            { required: true, message: 'Please write a description' },
            { min: 10, message: 'Please write a detailed description' }
        ]
    },
    {
        label: 'Features',
        name: 'features',
        type: 'features',
        initialValue: [
            { key: 'Breed', value: '' },
            { key: 'Color', value: '' },
            { key: 'Eye Color', value: '' }
        ]
    },
    {
        label: 'Contact Number',
        name: 'contact',
        type: 'number',
        rules: [
            { required: true, message: 'Please enter owner\'s contact number' },
            { type: 'number', message: 'Please enter a valid contact number' },
            { pattern: /^[\d]{9,10}$/, message: 'Please enter a valid contact numbers' }
        ]
    },
    {
        label: 'Location',
        name: 'location',
        type: 'map'
    }
]

const AddCat = () => {
    const navigate = useNavigate()
    const [success, setSuccess] = useState(false)
    const [loading, setLoading] = useState(false)

    const onBackHandler = () => {
        navigate('/admin', { replace: true })
    }

    const submitHandler = values => {
        const headers = getAdminHeader()
        if(headers) {
            setSuccess(false)
            setLoading(true)
            axios.post('cats', values, { headers })
                .then(res => {
                    setSuccess(true)
                    toast.success('Successfully added a cat for adoption!', { position: 'bottom-center', theme: 'dark' });
                })
                .catch(err => {
                    toast.error(`${err.response?.status}: ${err.response?.data}`, { position: 'bottom-center', theme: 'dark' });
                })
                .finally(() => {
                    setLoading(false)
                })
        }
        else {
            toast.warning('Your login session has expired. Please login again!', { position: 'bottom-center', theme: 'dark' });
            navigate('/admin/login', { replace: true })
        }
    }

    const submitFailHandler = error => {
        console.log(error)
    }

    return (
        <div>
            <PageHeader
                onBack={onBackHandler}
                title='Add a new cat for adoption' />
            <ThemeForm 
                fields={fields} 
                onFinish={submitHandler} 
                onFinishFailed={submitFailHandler}
                success={success}
                loading={loading} />
        </div>
    );
};

export default AddCat;
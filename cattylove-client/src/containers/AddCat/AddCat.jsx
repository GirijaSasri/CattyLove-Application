import { PageHeader } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import ThemeForm from '../../components/ThemeForm/ThemeForm';

const AddCat = () => {
    const navigate = useNavigate()

    const onBackHandler = () => {
        navigate('/admin', { replace: true })
    }

    const submitHandler = values => {
        console.log(values)
    }

    const submitFailHandler = error => {
        console.log(error)
    }

    const fields = [
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
        }
    ]

    return (
        <div>
            <PageHeader
                className="site-page-header"
                onBack={onBackHandler}
                title="Add A Cat" />
            <ThemeForm 
                fields={fields} 
                onFinish={submitHandler} 
                onFinishFailed={submitFailHandler} />
        </div>
    );
};

export default AddCat;
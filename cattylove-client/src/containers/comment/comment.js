import { PageHeader,Menu, Dropdown, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import ThemeForm from '../../components/ThemeForm/ThemeForm';

const comments = () => {
    
    const navigate = useNavigate()

    const onBackHandler = () => {
        navigate('/index', { replace: true })
    }

    const submitHandler = values => {
        console.log(values)
    }

    const submitFailHandler = error => {
        console.log(error)
    }

    const fields = [        
        {
            label: 'Post your comment anonymously.',
            name: 'anonymous',
            type: 'radio',
            items: [
                { name: 'Yes', value: 'Yes' },
                { name: 'No', value: 'No' },
            ],
            rules: [
                { required: true, message: 'Please select posting type.' },
            ]
        },
        {
            label: 'Comment',
            name: 'comment',
            type: 'textarea',
            rules: [
                { required: true, message: 'Please write your comment' }
            ]
        }
    ]
      
     

    return (
        <div>
            <PageHeader
                className="site-page-header"
                onBack={onBackHandler}
                title="Post Your Comment" />
            <ThemeForm 
                fields={fields} 
                onFinish={submitHandler} 
                onFinishFailed={submitFailHandler} />
        </div>
    );

    
};

export default comments;
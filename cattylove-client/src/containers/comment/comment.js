import { PageHeader} from 'antd';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ThemeForm from '../../components/ThemeForm/ThemeForm';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react'
import { toast } from 'react-toastify';

const Comment = ({ catId }) => {

    const [success, setSuccess] = useState(false)
    const navigate = useNavigate()
  
    const { isAuthenticated, isLoading, user } = useAuth0()

    const submitHandler = values => {
        console.log("sample :",values)
        addComment(values.comment,values.anonymous)

    }

    const submitFailHandler = error => {
        console.log(error)
    }

    const addComment = async (comment,anonymous,timestamps) => {

        const userSub = user.sub

        const obj = {
           userSub,
           catId,
            comment : comment,
            anonymous : anonymous,
            timestamps: timestamps
        }
    
        return await axios.post(`http://localhost:5000/api/comment`, obj)
            .then(res => {
                console.log(res.data);
                setSuccess(true)
                toast.success('Successfully posted your comment!', { position: 'bottom-center', theme: 'dark' });
                
                return true;
    
            }).catch(err => {
                console.log(err);
                toast.success('Error!', { position: 'bottom-center', theme: 'dark' });
                return false;
            });
    }
    

    const fields = [        
        {
            label: 'Post your comment anonymously.',
            name: 'anonymous',
            type: 'radio',
            items: [
                { name: 'Yes', value: 'true' },
                { name: 'No', value: 'false' },
            ],
            rules: [
                { required: true, message: 'Please select posting type.' }
            ]
        },
        {
            label: 'Comment',
            name: 'comment',
            type: 'textarea',
            rules: [
                { required: true, message: 'Please write your comment.' },
                { min: 5, message: 'Please write a detailed description' }
            ]
        }
    ]  

    return !isLoading && isAuthenticated && (
        <div>
            <ThemeForm 
                fields={fields} 
                onFinish={submitHandler} 
                onFinishFailed={submitFailHandler}
                enableReset={false}
                submitText={'Post'}
                maxWidth={'95%'} />
        </div>
    );

    
};

export default Comment;
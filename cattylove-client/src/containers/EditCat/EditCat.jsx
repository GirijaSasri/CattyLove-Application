import { PageHeader } from 'antd';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import ThemeForm from '../../components/ThemeForm/ThemeForm';
import axios from '../../utility/axios'

const EditCat = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    const [cat, setCat] = useState()
    const [success, setSuccess] = useState(false)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if(!cat) {
            axios.get(`cats/${id}`)
                .then(res => {
                    setCat(res.data)
                })
                .catch(err => {
                    toast.error(err.response?.data, { position: 'bottom-center', theme: 'dark' });
                })
        }
    }, [id, cat])

    const onBackHandler = () => {
        navigate('/admin', { replace: true })
    }

    const submitHandler = values => {
        setSuccess(false)
        setLoading(true)
        axios.put(`cats/${id}`, values)
            .then(res => {
                setSuccess(true)
                toast.success('Cat details updated successfully!', { position: 'bottom-center', theme: 'dark' });
                setCat(res.data)
            })
            .catch(err => {
                toast.error(err.response?.data, { position: 'bottom-center', theme: 'dark' });
            })
            .finally(() => {
                setLoading(false)
            })
    }

    const submitFailHandler = error => {
        console.log(error)
    }

    const fields = [
        {
            label: 'Picture',
            name: 'picture',
            type: 'image',
            rules: [
                { required: true, message: 'Please select an image' }
            ],
            initialValue: cat?.picture
        },
        {
            label: 'Name',
            name: 'name',
            rules: [
                { required: true, message: 'Please enter the cat\'s name' },
                { min: 2, message: 'Please enter a valid name' },
                { max: 25, message: 'Please enter a valid name' },
            ],
            initialValue: cat?.name
        },
        {
            label: 'Age',
            name: 'age',
            type: 'number',
            rules: [
                { required: true, message: 'Please enter cat\'s age' },
                { type: 'number', message: 'Please enter a valid age' }
            ],
            initialValue: cat?.age
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
            ],
            initialValue: cat?.gender
        },
        {
            label: 'Description',
            name: 'description',
            type: 'textarea',
            rules: [
                { required: true, message: 'Please write a description' },
                { min: 10, message: 'Please write a detailed description' }
            ],
            initialValue: cat?.description
        },
        {
            label: 'Features',
            name: 'features',
            type: 'features',
            initialValue: cat?.features.map(fea => ({ key: fea.key, value: fea.value }))
        },
        {
            label: 'Contact Number',
            name: 'contact',
            type: 'number',
            rules: [
                { required: true, message: 'Please enter owner\'s contact number' },
                { type: 'number', message: 'Please enter a valid contact number' },
                { pattern: /^[\d]{9,10}$/, message: 'Please enter a valid contact numbers' }
            ],
            initialValue: +cat?.contact
        },
        {
            label: 'Location',
            name: 'location',
            type: 'map',
            initialValue: {
                lat: +cat?.latitude,
                lng: +cat?.longitude
            }
        }
    ]

    const title = cat ? `Edit ${cat.name}` : 'Edit'

    return (
        <div>
            <PageHeader
                onBack={onBackHandler}
                title={title}
                subTitle={cat && `#${cat._id}`} />
            {cat && <ThemeForm 
                fields={fields} 
                onFinish={submitHandler} 
                onFinishFailed={submitFailHandler}
                success={success}
                loading={loading} />}
        </div>
    );
};

export default EditCat;
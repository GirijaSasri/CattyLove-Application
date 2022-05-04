import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input, InputNumber, Radio } from 'antd';
import React, { useEffect, useRef } from 'react';
import FeatureList from '../FeatureList/FeatureList';
import ImageUpload from '../ImageUpload/ImageUpload';
import MapWrapper from '../MapWrapper/MapWrapper';

const ThemeForm = ({ 
    onFinish, 
    onFinishFailed, 
    fields, 
    success, 
    loading, 
    submitText = 'Save', 
    enableReset = true, 
    maxWidth = 600,
    formType }) => {

    const formRef = useRef()
    const [form] = Form.useForm()

    const resetHandler = () => {
        formRef.current.resetFields();
    }

    const markerClickedHandler = position => {
        form.setFieldsValue({ latitude: position.lat, longitude: position.lng })
    }

    useEffect(() => {
        if(success) formRef.current.resetFields();
    }, [success])

    const inputs = fields.map(field => {
        let inputType = <Input />
        if(field.type === 'radio') {
            inputType = (
                <Radio.Group>
                    {field.items.map(item => (
                        <Radio.Button key={item.value} value={item.value}>{item.name}</Radio.Button>
                    ))}
                </Radio.Group>
            )
        }
        else if(field.type === 'number') {
            inputType = <InputNumber style={{ width: '100%' }} addonBefore={field.name === 'contact' && '+94'} />
        }
        else if(field.type === 'textarea') {
            inputType = <Input.TextArea rows={5} />
        }
        else if(field.type === 'features') {
            inputType = <FeatureList />
        }
        else if(field.type === 'image') {
            inputType = <ImageUpload form={form} initialValue={field.initialValue} />
        }
        else if(field.type === 'map') {
            inputType = (
                <>
                    <MapWrapper onMarkerClick={markerClickedHandler} markerPosition={field.initialValue} />
                    <Form.Item key={'latitude'} name={'latitude'} style={{ display: 'none' }}>
                        <Input type={'hidden'}/>
                    </Form.Item>
                    <Form.Item key={'longitude'} name={'longitude'} style={{ display: 'none' }}>
                        <Input type={'hidden'}/>
                    </Form.Item>
                </>
            )
        }
        else if(field.type === 'password') {
            inputType = <Input.Password prefix={<LockOutlined />} placeholder={field.label} />
        }
        else if(field.type === 'username') {
            inputType = <Input prefix={<UserOutlined />} placeholder={field.label} />
        }

        return (
            <Form.Item
                key={field.name}
                label={formType !== 'login' && field.label}
                name={field.type !== 'map' && field.name}
                rules={field.rules}>
                {inputType}
            </Form.Item>
        )
    })

    const initValues = fields.reduce((o, field) => {
        if(field.type === 'map' && field.initialValue)
            return {...o, longitude: field.initialValue.lng, latitude: field.initialValue.lat}
        return {...o, [field.name]: field.initialValue}
    }, {})

    return (
        <Form 
            size={'large'}
            layout={'vertical'}
            requiredMark={'optional'}
            ref={formRef}
            form={form}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            initialValues={initValues}
            autoComplete="off"
            style={{ maxWidth, margin: 'auto' }}>
            {inputs}
            <Form.Item wrapperCol={{ offset: 10, span: 16 }}>
                <Button type="primary" htmlType="submit" disabled={loading}>
                    {submitText}
                </Button>
                {enableReset && <Button htmlType="button" onClick={resetHandler} style= {{ marginLeft: '20px' }}>
                    Reset
                </Button>}
            </Form.Item>
        </Form>
    );
};

export default ThemeForm;
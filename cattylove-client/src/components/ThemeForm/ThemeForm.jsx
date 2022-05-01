import { Button, Form, Input, InputNumber, Radio } from 'antd';
import React, { useRef } from 'react';

const ThemeForm = ({ onFinish, onFinishFailed, fields }) => {

    const formRef = useRef()

    const resetHandler = () => {
        formRef.current.resetFields();
    }

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
            inputType = <InputNumber style={{ width: '100%' }} />
        }
        else if(field.type === 'textarea') {
            inputType = <Input.TextArea rows={5} />
        }

        return (
            <Form.Item
                key={field.name}
                label={field.label}
                name={field.name}
                rules={field.rules}>
                {inputType}
            </Form.Item>
        )
    })

    return (
        <Form 
            size={'large'}
            layout={'vertical'}
            requiredMark={'optional'}
            ref={formRef}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off">
            {inputs}
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                    Save
                </Button>
                <Button htmlType="button" onClick={resetHandler} style= {{ marginLeft: '20px' }}>
                    Reset
                </Button>
            </Form.Item>
        </Form>
    );
};

export default ThemeForm;
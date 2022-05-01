import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Form, Input, Space } from 'antd';
import React from 'react';

const FeatureList = ({ initialValue }) => {
    return (
        <Form.List name={'features'} initialValue={initialValue}>
            {(fields, { add, remove }) => {
                return (
                    <>
                        {fields.map(({ key, name, ...restField }) => (
                            <Space key={key} style={{ display: 'flex', marginBottom: 8, marginLeft: 32 }} align="baseline">
                                <Form.Item
                                    {...restField}
                                    name={[name, 'key']}
                                    rules={[{ required: true, message: 'Please enter feature name' }]}>
                                    <Input placeholder="Feature Name" />
                                </Form.Item>
                                <Form.Item
                                    {...restField}
                                    name={[name, 'value']}
                                    rules={[{ required: true, message: 'Please enter feature value' }]}>
                                    <Input placeholder="Feature Value" />
                                </Form.Item>
                                <MinusCircleOutlined onClick={() => remove(name)} />
                            </Space>
                        ))}
                        <Form.Item>
                            <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                                Add a Feature
                            </Button>
                        </Form.Item>
                    </>
                )
            }}
        </Form.List>
    );
};

export default FeatureList;
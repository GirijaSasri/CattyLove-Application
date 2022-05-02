import React from 'react'
import "antd/dist/antd.css";
import { Form, Button, Input, Space, Row } from 'antd';
import { Image } from 'antd';
import { PoweroffOutlined } from '@ant-design/icons';
import { Card } from 'antd';
  
export default function App() {
  
    return (
        <div style={{
            display: 'block', width: 700, padding: 30
        }}>
            <h1> Cat WishList </h1>

            <Row style={{ marginBottom: 12 }}></Row>
            
            <div style={{ background: '#ECECEC', padding: '30px' }}>
    <Card title="Dog One" bordered={false} style={{ width: 300 }}>
      <p>Name</p>
      <p>Gender</p>
      <p>Like Count</p>
    </Card>
   <br></br>
    <Card title="Dog Two" bordered={false} style={{ width: 300 }}>
      <p>Name</p>
      <p>Gender</p>
      <p>Like Count</p>
    </Card>
  </div>


            <Form
                name="basicform"
                onFinishFailed={() => alert('Failed to submit')}
                onFinish={() => alert('Form Submitted')}
                initialValues={{ remember: true }}
            >




           

            </Form>
        </div>
    );
}
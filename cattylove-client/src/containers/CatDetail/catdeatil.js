import React from 'react'
import "antd/dist/antd.css";
import { Form, Button, Input, Row } from 'antd';
import { Image } from 'antd';
import AllComments from '../comment/AllCcomments';
  
export default function App() {
  
    return (
        <div style={{
            display: 'block', width: 700, padding: 30
        }}>
            <h1>View cat</h1>

            <Row style={{ marginBottom: 12 }}></Row>
        

            <Form
                name="basicform"
                onFinishFailed={() => alert('Failed to submit')}
                onFinish={() => alert('Form Submitted')}
                initialValues={{ remember: true }}
            >

             <Form.Item
              label="Cat Name"
             >
              <Input />
             </Form.Item>

             <Form.Item
              label="Cat Gender"
             >
              <Input />
             </Form.Item>

             <Form.Item
              label="Cat Features"
             >
              <Input />
             </Form.Item>

             <Form.Item
              label="Contact Number"
             >
              <Input />
             </Form.Item>


             <Form.Item
              label="Description"
             >
              <Input.TextArea />
             </Form.Item>
             

             <Form.Item
              label="Like Court "
             >
              <Input />
             </Form.Item>

             
             <Image
                 width={200}
                 src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                 
              />

              <Row style={{ marginBottom: 12 }}></Row>
              <Row style={{ marginBottom: 12 }}></Row>




             <Form.Item>
              <Button type="success" htmlType="submit">
               Add To Wishlist
              </Button>
             </Form.Item>
             <Form.Item>
                <AllComments>

                </AllComments>
             </Form.Item>


            </Form>
        </div>
    );
}
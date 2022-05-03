import { DeleteTwoTone, EditTwoTone, LikeTwoTone, ManOutlined, PhoneTwoTone } from '@ant-design/icons';
import { Avatar, Button, Card, Col, Row } from 'antd';
import { IKImage } from 'imagekitio-react';
import React from 'react';
import { Link } from 'react-router-dom';
import CONSTANTS from '../../../utility/Constants';

const Cat = ({ onDelete, cat }) => {

    return (
        <div style={{ width: 'calc(50% - 20px)', margin: 10 }}>
            <Card style={{height:'fit-content', borderRadius:10}} hoverable>
                <Row align='middle' gutter={[16,8]}>
                    <Col span={8}>
                        <Avatar 
                            src={
                                <IKImage
                                    urlEndpoint={CONSTANTS.imagekitEndpoint} 
                                    path={cat.picture}
                                    transformation={[{ height:100, width:100 }]}
                                    lqip={{ active:true, quality: 10 }}
                                    height="100"
                                    width="100"
                                />
                            }
                            size={100} />
                    </Col>
                    <Col span={8}>
                        <small>#{cat._id}</small>
                        <h2 style={{ fontSize: 20 }}>
                            <Link to={`/cats/${cat._id}`}>{cat.name}</Link>
                        </h2>
                    </Col>
                </Row>
                <Row align='middle' justify='space-between' style={{ marginTop: 20 }}>
                    <Col>
                        <p>
                            <LikeTwoTone style={{ fontSize: 16 }} twoToneColor={'#1890ff'} />{' '}
                            {cat.likes?.length} Likes
                            <br />
                            <PhoneTwoTone style={{ fontSize: 16 }} twoToneColor={'#1890ff'} />{' '}
                            <a href={`tel:+94${cat.contact}`} style={{ color: 'currentcolor' }}>+94 {cat.contact}</a>
                            <br />
                            <ManOutlined style={{ fontSize: 17, color: '#1890ff' }} />{' '}
                            {cat.age} year(s) old {cat.gender !== 'Unknown' && cat.gender}
                        </p>
                    </Col>
                    <Col>
                        <Link to={`/admin/edit/${cat._id}`}>
                            <Button 
                                type='text'
                                icon={<EditTwoTone twoToneColor={'#1890ff'} style={{ fontSize: 25 }}  />} />
                        </Link>
                        <Button 
                            type='text'
                            style={{ marginLeft: 10 }}
                            onClick={() => onDelete(cat._id)}
                            icon={<DeleteTwoTone twoToneColor={'red'} style={{ fontSize: 25 }} />} />
                    </Col>
                </Row> 
            </Card>
        </div>
    );
};

export default Cat;
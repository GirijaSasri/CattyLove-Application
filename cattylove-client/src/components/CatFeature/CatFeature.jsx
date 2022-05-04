import { Col, Row } from 'antd';
import React from 'react';

const CatFeature = ({ title, value }) => {
    return (
        <Row style={{ border: '1px solid #ccc', borderRadius: 8, margin: 10, padding: '8px 20px'}}>
            <Col>
                <strong>{title}:</strong>
            </Col>
            <Col style={{ paddingLeft: 16 }}>
                {value}
            </Col>
        </Row>
    );
};

export default CatFeature;
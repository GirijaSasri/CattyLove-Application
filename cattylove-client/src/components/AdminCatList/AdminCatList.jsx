import { Row } from 'antd';
import React from 'react';
import Cat from './Cat/Cat';
import CatSkeleton from './CatSkeleton/CatSkeleton';

const AdminCatList = ({ cats, loading, onDelete }) => {

    if(loading) {
        return <CatSkeleton />
    }

    return (
        <Row style={{ margin: '20px auto', display: 'flex', padding: '0 14px' }}>
            {cats.map(cat => <Cat key={cat._id} cat={cat} onDelete={onDelete} />)}
        </Row>
    );
};

export default AdminCatList;
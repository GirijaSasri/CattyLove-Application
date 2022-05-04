import { Card, Row } from 'antd';
import { IKImage } from 'imagekitio-react';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import CatFeature from '../../components/CatFeature/CatFeature';
import MapWrapper from '../../components/MapWrapper/MapWrapper';
import CONSTANTS from '../../utility/Constants';
import axios from '../../utility/axios'

const CatDetail = () => {
    const { id } = useParams()
    const [cat, setCat] = useState()

    useEffect(() => {
        if(!cat) {
            axios.get(`cats/${id}`)
                .then(res => {
                    setCat(res.data)
                })
                .catch(err => {
                    toast.error(`${err.response?.status}: ${err.response?.data}`, { position: 'bottom-center', theme: 'dark' });
                })
        }
    }, [id, cat])

    const catFeatures = cat && cat.features.length > 0 && (
        <Card style={{ margin: 32, borderRadius: 10 }}>
            <h2>Features</h2>
            <Row>
                {cat.features.map(feature => <CatFeature key={feature.key} title={feature.key} value={feature.value} />)}
            </Row>
        </Card>
    )

    return (
        <div>
            <div style={{ overflow: 'hidden', borderRadius: 10, margin: 32 }}>
                <IKImage
                    urlEndpoint={CONSTANTS.imagekitEndpoint} 
                    path={cat?.picture}
                    transformation={[{ width:800, Height: 500, cropMode: 'pad_resize' }]}
                    lqip={{ active:true, quality: 10 }}
                    width="100%"
                    style={{ maxHeight: 500 }}
                />
            </div>
            <Card style={{ margin: 32, borderRadius: 10 }}>
                <h1 style={{ fontSize: 42 }}>{cat?.name}</h1>
                <p>{cat?.likes.length} people like the cat</p>
            </Card>
            <Card style={{ margin: 32, borderRadius: 10 }}>
                <h2>About</h2>
                <div>
                    <h3>Age</h3>
                    <p>{cat?.age} years</p>
                </div>
                <div>
                    <h3>Gender</h3>
                    <p>{cat?.gender}</p>
                </div>
                <div>
                    <h3>Description</h3>
                    <p>{cat?.description}</p>
                </div>
            </Card>
            {catFeatures}
            <Card style={{ margin: 32, borderRadius: 10 }}>
                <h2>Location</h2>
                <MapWrapper initialValue={cat && { lat: cat?.latitude, lng: cat?.longitude }} />
            </Card>
        </div>
    );
};

export default CatDetail;
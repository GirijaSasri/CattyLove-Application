import { Input, Spin } from 'antd';
import { IKContext, IKImage, IKUpload } from 'imagekitio-react';
import React, { useEffect, useState } from 'react';
import CONSTANTS from '../../utility/Constants';
import uploadPlaceholder from '../../assets/images/image-upload-placeholder.png';

import styles from './ImageUpload.module.scss'

const ImageUpload = ({ form, initialValue }) => {
    const [path, setPath] = useState('')
    const [loading, setLoading] = useState(false)

    const successHandler = res => {
        setPath(res.filePath)
        form.setFieldsValue({ picture: res.filePath })
        setLoading(false)
    }

    const errorHandler = err => {
        console.log('Image upload error: ' + err)
        setPath('')
        form.setFieldsValue({ picture: '' })
        setLoading(false)
    }

    const changeHandler = e => {
        const file = e.target.files[0];
        if(file) setLoading(true)
    }

    useEffect(() => {
        setPath(initialValue)
    }, [initialValue])

    return (
        <div className={styles.ImageUpload}>
            <IKContext
                publicKey={CONSTANTS.imagekitPublicKey} 
                urlEndpoint={CONSTANTS.imagekitEndpoint} 
                authenticationEndpoint={CONSTANTS.imagekitAuthEndpoint}>
                <IKUpload 
                    onSuccess={successHandler} 
                    onError={errorHandler} 
                    accept={'image/*'} 
                    onChange={changeHandler}
                    id={'imgkit-upload'} 
                    className={styles.Input}
                    disabled={loading} />
                <label htmlFor={'imgkit-upload'} className={styles.Label} style={{ backgroundImage: !path && `url(${uploadPlaceholder})` }}>
                    {loading && <Spin size="large" />}
                </label>
                <Input className={styles.Input} />
                {path !== '' && (
                    <div className={styles.Container}>
                        <IKImage 
                            path={path} 
                            lqip={{ active: true, quality: 10 }}
                            transformation={[{
                                height: 360,
                                width: 360,
                                cropMode: 'pad_resize'
                            }]} />
                    </div>
                )}
            </IKContext>
        </div>
    );
};

export default ImageUpload;
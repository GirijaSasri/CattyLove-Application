import { Row, Skeleton } from 'antd';
import React from 'react';

import styles from './CatSkeleton.module.scss';

const SkeletonItem = () => (
    <div className={styles.CatSkeleton}>
        <Skeleton.Image active />
        <div className={styles.Lines}>
            <Skeleton.Button active size={'small'} shape={'round'} block />
            <Skeleton.Button active size={'small'} shape={'round'} block style={{ maxWidth: '75%' }} />
            <Skeleton.Button active size={'small'} shape={'round'} block style={{ maxWidth: '25%' }} />
        </div>
    </div>
)

const CatSkeleton = () => {
    return (
        <div style={{ margin: '40px auto' }}>
            <Row>
                <SkeletonItem />
                <SkeletonItem />
                <SkeletonItem />
                <SkeletonItem />
                <SkeletonItem />
                <SkeletonItem />
            </Row>
        </div>
    );
};

export default CatSkeleton;
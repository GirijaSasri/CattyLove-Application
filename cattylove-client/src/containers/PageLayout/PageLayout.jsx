import { Layout } from 'antd';
import React from 'react';
import Navigation from '../../components/Navigation/Navigation';

const { Content, Footer } = Layout;

const PageLayout = props => {
    return (
        <div>
            <Layout style={{ minHeight: '100vh' }}>
                <Navigation />
                <Content className="site-layout" style={{ margin: '0 auto', marginTop: 64, width: '60%', maxWidth: '90%' }}>
                    {props.children}
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    CattyLove © 2022. All rights reserved.
                </Footer>
            </Layout>
        </div>
    );
};

export default PageLayout;
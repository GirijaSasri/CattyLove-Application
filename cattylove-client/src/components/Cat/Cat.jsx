import { Badge, Card, Avatar, Button, Row, Col } from 'antd'
import React, { Component } from 'react'
import {IKImage } from 'imagekitio-react'
import {LikeFilled, LikeOutlined, HeartOutlined, HeartFilled, ShareAltOutlined, } from '@ant-design/icons'
import CONSTANTS from '../../utility/Constants'

class Cat extends Component {
    
    state = {
        userId:10,
        wishlistCatIds: [1,2,5]
    }

    getGender(){
        var color = ''

        switch (this.props.gender) {
            case 'Male':
                color = '#0076ba'
                break;
            case 'Female':
                color = '#ff00c3'
                break;
            default:
                color = '#000000'
                break;
        }

        return color
    }

    getLiked(){
        return this.props.likes.includes(this.state.userId) ? <LikeFilled style={{color:'#ffffff'}} /> : <LikeOutlined style={{color:'#ffffff'}} />
    }

    getWishListed(){
        return this.state.wishlistCatIds.includes(this.props.catId) ? <HeartFilled style={{color:'#c90025', fontSize:25}} /> : <HeartOutlined style={{color:'#c90025', fontSize:25}} />
    }

    likeCat = () => {
        if (this.props.likes.includes(this.state.userId)){
            let tempArray = this.props.likes
            tempArray.splice(this.props.likes.indexOf(this.state.userId),1)
            this.setState({likes: tempArray})
        }
        else{
            let tempArray = this.props.likes
            tempArray.push(this.state.userId)
            this.setState({likes: tempArray})
        }
    }

    addWishlist = () => {
        if (this.state.wishlistCatIds.includes(this.props.catId)){
            let tempArray = this.state.wishlistCatIds
            tempArray.splice(this.state.wishlistCatIds.indexOf(this.props.catId),1)
            this.setState({wishlistCatIds: tempArray})
        }
        else{
            let tempArray = this.state.wishlistCatIds
            tempArray.push(this.props.catId)
            this.setState({wishlistCatIds: tempArray})
        }
    }

    render() {

        return (
            <React.Fragment>
                <div style={{width:'45%', margin:10}}>
                    <Badge.Ribbon text={this.props.gender} color={this.getGender()} style={{fontSize:20, height:'30px', paddingTop:3, paddingBottom:3, paddingRight:20}}>
                        <Card style={{height:'fit-content', borderRadius:10}} hoverable>
                            <Row align='top' gutter={[16,8]}>
                                <Col span={8}>
                                    <Avatar src={
                                        <IKImage
                                            urlEndpoint={CONSTANTS.imagekitEndpoint} 
                                            src={this.props.imageLink}
                                            transformation={[{ height:100, width:100 }]}
                                            lqip={{ active:true }}
                                            loading="lazy"
                                            height="100"
                                            width="100"
                                        />
                                    }
                                    size={100}
                                    />
                                </Col>
                                <Col span={8}>
                                    <br/><p style={{fontSize:20}}><b>{this.props.catName}</b></p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <p>{this.props.description}</p>
                                </Col>
                            </Row>
                            <Row align='middle'>
                                <Col span={19}>
                                    <Button
                                        type='text' 
                                        icon={this.getLiked()}
                                        style={{fontSize:16, backgroundColor:this.getGender(), color:'#ffffff', borderRadius:10, paddingBottom:30}}
                                        onClick={this.likeCat}
                                        >
                                        &nbsp;{this.props.likes.length}
                                    </Button>
                                </Col>
                                <Col span={5} style={{alignContent:'center'}}>
                                    <Row align='middle' style={{height:'fit-content'}}>
                                        <Col>
                                            <Button 
                                                type='text' 
                                                icon={this.getWishListed()}
                                                onClick={this.addWishlist}
                                                >
                                            </Button>
                                        </Col>
                                        <Col>
                                            <Button 
                                                type='text' 
                                                icon={<ShareAltOutlined style={{color:'#858585', fontSize:25}} />}
                                                >
                                            </Button>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row> 
                        </Card>
                    </Badge.Ribbon>
                </div>
            </React.Fragment>
        )
    }
}

export default Cat
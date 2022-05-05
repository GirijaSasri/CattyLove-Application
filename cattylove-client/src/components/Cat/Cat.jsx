import { Badge, Card, Avatar, Button, Row, Col } from 'antd'
import React, { Component } from 'react'
import {IKImage } from 'imagekitio-react'
import axios from '../../utility/axios'
import { FacebookIcon, FacebookShareButton, TwitterIcon, TwitterShareButton, EmailIcon, EmailShareButton } from 'react-share'
import {LikeFilled, LikeOutlined, HeartOutlined, HeartFilled, } from '@ant-design/icons'
import CONSTANTS from '../../utility/Constants'
import { User, withAuth0 } from '@auth0/auth0-react'
import { Link } from 'react-router-dom'

class Cat extends Component {
    
    state = {
        likes:this.props.likes,
        wishlistCatIds: []
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
        const { user, isAuthenticated, isLoading, loginWithPopup } = this.props.auth0;
        if(!isLoading && !isAuthenticated){
            return <LikeOutlined style={{color:'#ffffff'}} />
        }
        else if(isAuthenticated){
            return this.state.likes.includes(user.sub) ? <LikeFilled style={{color:'#ffffff'}} /> : <LikeOutlined style={{color:'#ffffff'}} />
        }
    }

    getWishListed(){
        return this.state.wishlistCatIds.includes(this.props.catId) ? <HeartFilled style={{color:'#c90025', fontSize:25}} /> : <HeartOutlined style={{color:'#c90025', fontSize:25}} />
    }

    likeCat = async() => {
        const { user, isAuthenticated, isLoading, loginWithPopup } = this.props.auth0;
        if(!isLoading && !isAuthenticated) {
            loginWithPopup()
        }
        else if(isAuthenticated) {
            console.log(user.sub)
            if (this.state.likes.includes(user.sub)){
                let { data } = await axios.delete(`/like/${this.props.catId}/${user.sub}`)
                console.log(data.likes)
                this.setState({likes: data.likes})
            }
            else{
                let { data } = await axios.put(`/like/${this.props.catId}/${user.sub}`)
                console.log(data.likes)
                this.setState({likes: data.likes})
            }
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
                            <Link to={`/cats/${this.props.catId}`}>
                                <Row align='top' gutter={[16,8]}>
                                    <Col span={8}>
                                        <Avatar src={
                                            <IKImage
                                                urlEndpoint={CONSTANTS.imagekitEndpoint} 
                                                path={this.props.imageLink}
                                                transformation={[{ height:100, width:100 }]}
                                                lqip={{ active:true, quality: 10 }}
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
                            </Link>
                            <Row>
                                <Col>
                                    <p>{this.props.description}</p>
                                </Col>
                            </Row>
                            <Row align='middle'>
                                <Col span={17}>
                                    <Row>
                                        <Col>
                                            <Button
                                                type='text' 
                                                icon={this.getLiked()}
                                                style={{fontSize:16, backgroundColor:this.getGender(), color:'#ffffff', borderRadius:10, paddingBottom:30}}
                                                onClick={this.likeCat}
                                                >
                                                &nbsp;{this.state.likes.length}
                                            </Button>
                                        </Col>
                                        <Col>
                                            <Button 
                                                type='text' 
                                                icon={this.getWishListed()}
                                                onClick={this.addWishlist}
                                                style={{marginLeft:10}}
                                                >
                                            </Button>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col span={7}>
                                    <Row align='bottom' style={{height:'fit-content'}}>
                                        <Col>
                                            <FacebookShareButton
                                                url={"http://"+window.location.host + "/cats/" + this.props.catId}
                                                quote={this.props.catName}
                                                description={this.props.description}
                                                className="Demo__some-network__share-button"
                                                style={{marginLeft:5}}
                                            >
                                                <FacebookIcon size={27} round />
                                            </FacebookShareButton>
                                        </Col>
                                        <Col>
                                            <TwitterShareButton
                                                url={"http://"+window.location.host + "/cats/" + this.props.catId}
                                                title={this.props.description}
                                                style={{marginLeft:5}}
                                            >
                                                <TwitterIcon size={27} round />
                                            </TwitterShareButton>
                                        </Col>
                                        <Col>
                                            <EmailShareButton
                                                subject={this.props.catName}
                                                body={this.props.description}
                                                url={"http://"+window.location.host + "/cats/" + this.props.catId}
                                                style={{marginLeft:5}}
                                            >
                                                <EmailIcon size={27} round />
                                            </EmailShareButton>
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

export default withAuth0(Cat) 
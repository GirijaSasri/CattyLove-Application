import { Card, Avatar, Image } from 'antd'
import React, { Component } from 'react'
import {IKImage} from 'imagekitio-react'

class Cat extends Component {
    
    state = {
        catId: 1,
        catName: "Furry",
        gender: "Male",
        description: "Cute fluffy cat with white fur, hence the name Furry. He has brown patches that belnd in perfectly into his snow white fur.",
        likes: [1,2,3,4,5,6,7,8,9,0],
        imgLink: "https://i.pinimg.com/originals/e8/f6/f6/e8f6f6c6653c35f506f80218f1b49d46.jpg"
    }

    render() {

        return (
            <React.Fragment>
                <Card style={{ width: 300, marginTop: 16 }}>
                    <Avatar src={
                        <IKImage>
                            
                        </IKImage>
                    }/>
                    <h1>{this.state.catName}</h1>
                    <p>{this.state.description}</p>
                </Card>
            </React.Fragment>
        )
    }
}

export default Cat
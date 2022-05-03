import React, { Component } from 'react';
import axios from '../../utility/axios'
import Cat from '../../components/Cat/Cat';
import { Row } from 'antd'

class AllCats extends Component {
    state = {

        allCats: []
    };
    render() {
        return (
            <Row>
                {this.state.allCats.map((cat) => (
                        <Cat 
                            key={cat.catId}
                            catId={cat.catId} 
                            likes={cat.likes }
                            gender={cat.gender}
                            catName={cat.catName}
                            imageLink={cat.imageLink}
                            description={cat.description}
                        />
                    ))}
            </Row>
        )
    }

    async componentDidMount(){
        console.log("finished mounting. getting cats")
        let { data } = await axios.get(`/cats`)
        console.log(data)
        let cats = data.map(cat => {
            return {
                key:cat._id,
                catId:cat._id,
                likes:cat.likes ,
                gender:cat.gender,
                catName:cat.name,
                imageLink:cat.picture,
                description:cat.description
            }
        })
        this.setState({allCats: cats})
        console.log("got data")
    }
};

export default AllCats;
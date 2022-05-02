import React, { Component } from 'react';
import Cat from '../../components/Cat/Cat';
import { Row } from 'antd'

class AllCats extends Component {
    state = {
        
        cats: [
            {id:1, catName: "Peaches", likes:[1,2,3,4,5,6,10],gender:"Female",imageLink:"https://i.pinimg.com/originals/e8/f6/f6/e8f6f6c6653c35f506f80218f1b49d46.jpg", description:"Cute fluffy cat with white fur, hence the name Furry. He has brown patches that belnd in perfectly into his snow white fur."},
            {id:2, catName: "Mr.Munchkin", likes:[1,2,3,4,5,6,7,8,9,0],gender:"Male", imageLink:"https://images.unsplash.com/photo-1615497001839-b0a0eac3274c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y3V0ZSUyMGNhdHxlbnwwfHwwfHw%3D&w=1000&q=80", description:"Cute fluffy cat with white fur, hence the name Furry. He has brown patches that belnd in perfectly into his snow white fur.Cute fluffy cat with white fur, hence the name Furry. He has brown patches that belnd in perfectly into his snow white fur."},
            {id:3, catName: "Felon", likes:[1,2,3,4],gender:"Female", imageLink:"http://www.petsworld.in/blog/wp-content/uploads/2014/09/funny-cat.jpg", description:"Cute fluffy cat with white fur, hence the name Furry. He has brown patches that belnd in perfectly into his snow white fur."},
            {id:4, catName: "Whiskers", likes:[1,2,3,4,5,6,7,8],gender:"Male", imageLink:"https://c.tenor.com/ZR1wv_EMWI0AAAAd/sof-cat-cute.gif", description:"Cute fluffy cat with white fur, hence the name Furry. He has brown patches that belnd in perfectly into his snow white fur.Cute fluffy cat with white fur, hence the name Furry."},
            {id:5, catName: "Furry", likes:[1,2,3,10],gender:"Male", imageLink:"https://freeimage.me/uploads/preview/g1587e1c8a472e480d2c9dafa8d3fc714c9a10130e4deb6cd3101d8a0f1630d365362e27b9d1ff27d854e3922f7cd5218ab8ca98c2ebb0a57c7ab61fb613f140f_1280.jpg", description:"Cute fluffy cat with white fur, hence the name Furry. He has brown patches that belnd in perfectly into his snow white fur."},
            {id:6, catName: "Snow White", likes:[1,2,6],gender:"Female", imageLink:"https://images.unsplash.com/photo-1615497001839-b0a0eac3274c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y3V0ZSUyMGNhdHxlbnwwfHwwfHw%3D&w=1000&q=80", description:"Cute fluffy cat with white fur, hence the name Furry. He has brown patches that belnd in perfectly into his snow white fur."}
        ]
    };
    render() {
        return (
            <Row>
                {this.state.cats.map((cat) => (
                        <Cat 
                            key={cat.id}
                            catId={cat.id} 
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
};

export default AllCats;
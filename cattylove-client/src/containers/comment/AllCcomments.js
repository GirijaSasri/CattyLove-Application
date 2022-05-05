import React, { Component } from 'react';
import axios from '../../utility/axios'
import CommentItem from '../../components/Comment/CommentItem';
import { Row } from 'antd'
import { useParams } from 'react-router-dom';

class AllComments extends Component {
    state = {

        allComments: [],
        
    };
    
    render() {
        return (
            <Row>
                {this.state.allComments.map((comment) => (
                    
                        <CommentItem 
                            key = {comment.id}
                            userid={comment.userid}
                            catId={comment.catId} 
                            comment={comment.commentd }
                            annonymous={comment.annonymous}
                            createdAt ={comment.createdAt }
                            
                        />
                    ))}
            </Row>
        )
    }

    async componentDidMount(){
      
        console.log("finished mounting. getting comments")
        let { data } = await axios.get(`http://localhost:5000/api/comment/${this.props.id}`)
        console.log(data)
        let comments = data.map(comment => {
            return {
                id:comment._id,
                userid:comment.userId.name,
                catId:comment.catId,
                commentd:comment.comment,
                annonymous:comment.anonymous,
                createdAt : comment.createdAt 
            }
        })
        this.setState({allComments: comments})
        console.log("got data")
    }
};

export default AllComments;
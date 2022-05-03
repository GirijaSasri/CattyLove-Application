import { Card } from 'antd'
import React, { Component } from 'react'

class CommentItem extends Component {
    
    getAnon(){
        return this.props.annonymous ? "Annonymous" : this.props.userid
    }

    render() {

        return (
            <React.Fragment>
                 <div style={{width:'100%', margin:10}}>
                 
                    <Card>
                        <h1>
                            {this.getAnon()}
                        </h1>
                     {this.props.comment }
                    </Card>
                    
                 </div>
                
            </React.Fragment>
        )
    }
    
    componentDidMount(){
        console.log(this.props.comment)
    }
}

export default CommentItem
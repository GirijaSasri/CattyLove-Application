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
                 
                    <Card style={{width:'100%',height:'fit-content', borderRadius:10}} hoverable>   
                        <h2>
                            User : {this.getAnon()}
                        </h2>
                        <h3>
                            {this.props.comment }
                        </h3>
                        <h3>
                        {this.props.createdAt  }
                        </h3>
                    </Card>
                    
                 </div>
                
            </React.Fragment>
        )
    }
    
    componentDidMount(){
        console.log(this.props.comment)
        console.log(this.props.timestamps)
    }
}

export default CommentItem
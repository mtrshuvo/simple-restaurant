import React, {Component} from 'react'
import {Form, Input, Button} from 'reactstrap'

class CommentForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            author:"",
            rating:"",
            comment:"",
        }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this) 
    }

    handleInputChange = (event)=>{
        this.setState({
            [event.target.name] : event.target.value

        })
    }

    handleSubmit = (event)=>{
        this.props.addComment(
            this.props.dishId,
            this.state.author,
            this.state.rating,
            this.state.comment)
        this.setState({
            author:"",
            rating:"",
            comment:"",
        })
        event.preventDefault()
    }

    render(){
        return(
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <Input type="text" 
                    name="author"
                    onChange={this.handleInputChange} 
                    value={this.state.author} required />
                    <br/>
                    <Input type="select" 
                    name="rating"
                    onChange={this.handleInputChange} 
                    value={this.state.rating}>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Input>
                    <br/>
                    <Input type="textarea" 
                    name="comment" 
                    onChange={this.handleInputChange}
                    value={this.state.comment} required/>
                    <br/>
                    <Button type="submit">Submit Comment</Button>
                </Form>
            </div>
        )
    }
}

export default CommentForm;
import React from 'react'
import LoadComment from './LoadComment'
import {Card,CardBody, CardImg, CardTitle, CardText} from 'reactstrap'
import CommentForm from './CommentForm'

const DishDetail = (props)=>{
    return(
        <div>
            <Card style={{margin:"20px"}}>
                <CardImg src={props.dish.image} alt={props.dish.name} />
                <CardBody>
                    <CardTitle>{props.dish.name}</CardTitle>
                    <CardText>{props.dish.description}</CardText>
                    <CardText>{props.dish.price} TK.</CardText>
                    <hr/>
                    <LoadComment comments={props.comments}
                    commentIsLoading={props.commentIsLoading} />
                    <hr/>
                    <CommentForm dishId={props.dish.id}
                     addComment={props.addComment}/>
                </CardBody>
            </Card>

        </div>
    )
}

export default DishDetail;
import React from 'react'
import { Card, CardBody, CardImgOverlay, CardImg, CardTitle, } from 'reactstrap'

const MenuItem = (props) => {
    return (
        <div>
            <Card style={{ margin: "20px" }}>
                <CardBody>
                    <CardImg style={{
                        width: "100%",
                        opacity: "0.8",
                    }} src={props.dish.image} ></CardImg>
                    <CardImgOverlay>
                        <CardTitle
                            style={{ cursor: 'pointer' }} onClick={props.onDishSelect} >{props.dish.name}</CardTitle>
                    </CardImgOverlay>
                </CardBody>
            </Card>
        </div>
    )
}

export default MenuItem
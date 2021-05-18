import React, { Component } from 'react'
import MenuItem from '../body/MenuItem'
import DishDetail from './DishDetail'
import { connect } from 'react-redux'
import { CardColumns, Modal, ModalBody, ModalFooter, Button } from 'reactstrap'
import { addComment, fetchDishes, fetchComments } from '../../redux/actionCreator'
import Loading from '../body/Loading'
const mapStateToProps = state => {
    return {
        dishes: state.dishes,
        comments: state.comments
    }
}
const mapStatetoDispatch = dispatch => {
    return {
        addToComment: (dishId, author, rating, comment) => {
            dispatch(addComment(dishId, author, rating, comment))
        },
        fetchDishes: () => dispatch(fetchDishes()),
        fetchComments: () => dispatch(fetchComments())
    }
}

class Menu extends Component {
    state = {
        selectedDish: null,
        modalOpen: false
    }

    onDishSelect = (dish) => {
        this.setState({
            selectedDish: dish
        })
        this.modalToggle()
    }

    modalToggle = () => {
        this.setState({
            modalOpen: !this.state.modalOpen
        })
    }
    componentDidMount() {
        this.props.fetchDishes()
        this.props.fetchComments()
    }

    render() {
        document.title = "Menu"
        if (this.props.dishes.isLoading) {
            return (
                <Loading />
            )
        }
        else {
            const menu = this.props.dishes.dishes.map((item) => {
                return (
                    <MenuItem dish={item}
                        key={item.id}
                        onDishSelect={() => this.onDishSelect(item)} />
                )
            })
            let dishdetail = null
            if (this.state.selectedDish != null) {
                const comments = this.props.comments.comments.filter(comment => {
                    return comment.dishId === this.state.selectedDish.id
                })
                dishdetail = <DishDetail
                    dish={this.state.selectedDish}
                    comments={comments}
                    addComment={this.props.addToComment}
                    commentsIsLoading={this.props.isLoading} />
            }

            return (
                <div className="container">
                    <div className="row">
                        <CardColumns>
                            {menu}
                        </CardColumns>
                        <Modal
                            isOpen={this.state.modalOpen}
                        >
                            <ModalBody>
                                {dishdetail}
                            </ModalBody>
                            <ModalFooter>
                                <Button color="info"
                                    onClick={this.modalToggle}>Close</Button>
                            </ModalFooter>
                        </Modal>
                    </div>
                </div>
            )
        }
    }
}


export default connect(mapStateToProps, mapStatetoDispatch)(Menu);
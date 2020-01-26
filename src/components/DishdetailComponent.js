import React, {Component} from 'react';
import {Card, CardBody, CardImg, CardTitle, Breadcrumb, BreadcrumbItem, Button, Modal, ModalBody, ModalHeader, Row, Label} from 'reactstrap';
import {Link} from 'react-router-dom'; 
import {Control, Errors, LocalForm} from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class DishDetail extends Component{
    constructor(props) {
        super(props);

        this.toggleCommentForm = this.toggleCommentForm.bind(this);
        this.handleComment = this.handleComment.bind(this);

        this.state = {
            isCommentFormOpen: false
        };
    }

    toggleCommentForm() {
        this.setState({
            isCommentFormOpen: !this.state.isCommentFormOpen
        });
    }

    handleComment(values){
        alert('Current state is: ' + JSON.stringify(values));
    }

    renderDish(dish){
        return(
            <Card>
                <CardImg width="100%" top src={dish.image} alt={dish.name}/>
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardBody>{dish.description}</CardBody>
                </CardBody>
            </Card>
        );
    }

    renderComments(comments){
        return(
            <ul className="list-unstyled">
                {comments.map((comment) => {
                    return (
                        <li key={comment.id} >
                            <div>{comment.comment}</div>
                            <br />
                            <div>-- {comment.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</div>
                        </li>
                    );
                })}
            </ul>
        );
    }

    renderCommentForm(){
        return(
            <Button outline onClick={this.toggleCommentForm} size="sm"><span className="mr-2 fa fa-pencil fa-lg"></span><span style={{fontSize:'20px'}}>Submit Comment</span></Button>
        );
    }

    render(){
        if (this.props.dish != null) {
            return(
                <React.Fragment>
                <div className="container">
                <div className="row">
                    <Breadcrumb>
                    <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                    <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{this.props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{this.props.dish.name}</h3>
                        <hr/>
                    </div>
                </div>    
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(this.props.dish)}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <h4>Comments</h4>
                        {this.renderComments(this.props.comments)}
                        <div>
                            {this.renderCommentForm()}
                        </div>
                    </div>
                </div></div>
                <Modal isOpen={this.state.isCommentFormOpen} toggle={this.toggleCommentForm}>
                <ModalHeader toggle={this.toggleCommentForm}>Submit Comment</ModalHeader>
                <ModalBody>
                    <LocalForm onSubmit={(values) => this.handleComment(values)} className="container">
                        <Row className="form-group">
                            <Label htmlFor="username">Your Name</Label>
                            <Control.text className="form-control" model=".username" id="username" name="username" placeholder="Your Name"
                            validators={{ required, minLength: minLength(3), maxLength: maxLength(15)}}
                            />
                            <Errors
                                className="text-danger" model=".username" show="touched"
                                messages={{ required: 'Required', minLength: ' Must be greater than 2 characters', maxLength: ' Must be 15 characters or less'}}
                            />
                        </Row>
                        <Row className="form-group">
                            <Control.select className="form-control" model=".rating" name="rating">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            </Control.select>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="comment">Comment</Label>
                            <Control.textarea className="form-control" model=".comment" id="comment" name="comment" rows="5"/>
                        </Row><hr/>
                        <Row className="form-group">
                            <Button type="submit" value="submit" color="secondary">Submit</Button>
                        </Row>
                    </LocalForm>
                </ModalBody>
                </Modal>
                </React.Fragment>             
            );
        }else {
            return(
                <div></div>
            );
        }
    }
}

export default DishDetail;
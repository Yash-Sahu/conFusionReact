import React, {Component} from 'react';
import {Card, CardBody,CardImg,CardTitle} from 'reactstrap';

class DishDetail extends Component{

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

    render(){
        if (this.props.dish != null) {
            return(
                <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(this.props.dish)}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <h4>Comments</h4>
                        {this.renderComments(this.props.dish.comments)}
                    </div>
                </div></div>
            );
        }else {
            return(
                <div></div>
            );
        }
    }
}

export default DishDetail;
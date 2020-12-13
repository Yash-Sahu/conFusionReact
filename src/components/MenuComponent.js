import React, {Component} from 'react';
import {Card,CardImg,CardTitle,Breadcrumb,BreadcrumbItem,CardBody} from 'reactstrap';
import {Link} from 'react-router-dom';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';

const imgSize ={
    height: '20rem',
    borderRadius: 5
} 

class Menu extends Component{
    render(){
        const menu = this.props.dishes.dishes.map((dish)=>{
            return(
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <Link to={`/menu/${dish.id}`}>
                        <CardBody>
                        <CardTitle className="card">{dish.name}</CardTitle>
                        </CardBody>
                        <CardImg style={imgSize} src={baseUrl + dish.image} alt={dish.name}/>
                        </Link>
                    </Card>
                </div>
            );
        });

        if (this.props.dishes.isLoading) {
            return(
                <div className="container">
                    <div className="row">            
                        <Loading />
                    </div>
                </div>
            );
        }
        else if (this.props.dishes.errMess) {
            return(
                <div className="container">
                    <div className="row"> 
                        <div className="col-12">
                            <h4>{this.props.dishes.errMess}</h4>
                        </div>
                    </div>
                </div>
            );
        }
        else return(
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                    <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Menu</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Menu</h3>
                        <hr/>
                    </div>
                    {menu}
                </div>  
            </div>
        );
    }
}

export default Menu;
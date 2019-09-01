import React, {Component} from 'react';
import {Card,CardImg,CardTitle,Breadcrumb,BreadcrumbItem,CardBody} from 'reactstrap';
import {Link} from 'react-router-dom';
 
const imgSize ={
    height: '20rem',
    borderRadius: 5
} 

class Menu extends Component{
    render(){
        const menu = this.props.dishes.map((dish)=>{
            return(
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <Link to={`/menu/${dish.id}`}>
                        <CardBody>
                        <CardTitle className="card">{dish.name}</CardTitle>
                        </CardBody>
                        <CardImg style={imgSize} src={dish.image} alt={dish.name}/>
                        </Link>
                    </Card>
                </div>
            );
        });

        return(
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
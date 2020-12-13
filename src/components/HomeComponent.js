import React from 'react';
import {Card, CardImg, CardText, CardBody,CardTitle, CardSubtitle} from 'reactstrap';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';

const Imgsize = {
    height:'20rem',
}
const Bodysize ={
    minHeight:'15rem',
}
function RenderCard(item){
    if (item.isLoading) {
        return(
            <Loading />
        );
    }
    else if (item.errMess) {
        return(
           <h4>{item.errMess}</h4>
        );
    }
    else return(
        <Card>
            <CardImg style={Imgsize} src={baseUrl + item.item.image} alt={item.item.name}/>
            <CardBody style={Bodysize}>
                <CardTitle>{item.item.name}</CardTitle>
                {item.item.designation ? <CardSubtitle>{item.item.designation}</CardSubtitle> : null } 
                <CardText>{item.item.description}</CardText>
            </CardBody>
        </Card>
    );
}

function Home(props){
    return(
        <div className="container">
            <div className="row align-item-start">
                <div className="col-12 col-md-4 ">
                    <RenderCard item={props.dish} isLoading={props.dishesLoading} errMess={props.dishesErrMess}/>
                </div>
                <div className="col-12 col-md-4 ">
                    <RenderCard item={props.promotion} isLoading={props.promoLoading} errMess={props.promoErrMess}/>
                </div>
                <div className="col-12 col-md-4 ">
                    <RenderCard item={props.leader}/>
                </div>
            </div><br></br>
        </div>
    );
}

export default Home;
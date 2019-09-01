import React from 'react';
import {Card, CardImg, CardText, CardBody,CardTitle, CardSubtitle} from 'reactstrap';
const Imgsize = {
    height:'20rem',
}
const Bodysize ={
    minHeight:'15rem',
}
function RenderCard({item}){
    return(
        <Card>
            <CardImg style={Imgsize} src={item.image} alt={item.name}/>
            <CardBody style={Bodysize}>
                <CardTitle>{item.name}</CardTitle>
                {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null } 
                <CardText>{item.description}</CardText>
            </CardBody>
        </Card>
    );
}

function Home(props){
    return(
        <div className="container">
            <div className="row align-item-start">
                <div className="col-12 col-md-4 ">
                    <RenderCard item={props.dish}/>
                </div>
                <div className="col-12 col-md-4 ">
                    <RenderCard item={props.promotion}/>
                </div>
                <div className="col-12 col-md-4 ">
                    <RenderCard item={props.leader}/>
                </div>
            </div><br></br>
        </div>
    );
}

export default Home;
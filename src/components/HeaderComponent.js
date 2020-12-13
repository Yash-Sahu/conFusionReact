import React, {Component} from 'react';
import {Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron, Button, Modal, ModalBody, ModalHeader, Form, FormGroup, Label, Input} from 'reactstrap';
import {NavLink} from 'react-router-dom';

class Header extends Component{
    constructor(props) {
        super(props);
    
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleLogin = this.toggleLogin.bind(this);
        this.toggleSignup = this.toggleSignup.bind(this);

        this.handleLogin = this.handleLogin.bind(this);
        this.handleSignup = this.handleSignup.bind(this);

        this.state = {
          isNavOpen: false,
          isLoginOpen: false,
          isSignupOpen: false
        };
      }

      toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen
        });
      }

      toggleLogin() {
        this.setState({
            isLoginOpen: !this.state.isLoginOpen
          });
      }

      toggleSignup() {
        this.setState({
            isSignupOpen: !this.state.isSignupOpen
          });
      }

      handleLogin(event) {
          this.toggleLogin();
          alert("Username: " + this.username.value + " Password: " + this.password.value + " Remember: " + this.remember.checked);
          event.preventDefault();
      }

      handleSignup(event) {
        this.toggleSignup();
        alert("Username: " + this.username.value + " Password: " + this.password.value + 
        " Name: " + this.name.value + " Phone: " + this.phone.value);
        event.preventDefault();
    }

    render(){
        return(
            <React.Fragment>
            <Navbar dark expand="md">
                <div className="container">
                    <NavbarToggler onClick={this.toggleNav}/>
                    <NavbarBrand className="mr-auto" href="/"><img src='images/logo.png' height="40" width="60" alt='Ristorante Con Fusion' /></NavbarBrand>
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink className="nav-link" to="/home">
                                <span className="fa fa-home fa-lg"></span><span style={{fontSize:'20px'}}> Home</span>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/aboutus">
                                <span className="fa fa-info fa-lg mr-1"></span><span style={{fontSize:'20px'}}>About Us</span>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/menu">
                                <span className="fa fa-list fa-lg mr-1"></span><span style={{fontSize:'20px'}}>Menu</span>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/contactus">
                                <span className="fa fa-address-card fa-lg mr-1"></span><span style={{fontSize:'20px'}}>Contact Us</span>
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <Nav className="ml-auto" navbar>
                        <NavItem className="mr-2">
                            <Button outline onClick={this.toggleLogin} size="sm"><span className="mr-2 fa fa-sign-in fa-lg"></span><span style={{fontSize:'20px'}}>Login</span></Button>
                        </NavItem>
                        <NavItem>
                            <Button outline onClick={this.toggleSignup} size="sm"><span className="mr-2 fa fa-sign-in fa-lg"></span><span style={{fontSize:'20px'}}>Sign Up</span></Button>
                        </NavItem>
                    </Nav>
                    </Collapse>
                </div>
            </Navbar>
            <Jumbotron>
                <div className="container">
                    <div className="row row-header">
                        <div className="col-12 col-sm-6">
                        <h1>Ristorante con Fusion</h1>
                        <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                        </div>
                    </div>
                </div>
            </Jumbotron>
            <Modal isOpen={this.state.isLoginOpen} toggle={this.toggleLogin}>
                <ModalHeader toggle={this.toggleLogin}>Login</ModalHeader>
                <ModalBody>
                    <Form onSubmit={this.handleLogin}>
                        <FormGroup>
                            <Label htmlFor="username">Username</Label>
                            <Input type="text" id="username" name="username" placeholder="Username"
                            innerRef={(input) => this.username = input}></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="password">Password</Label>
                            <Input type="password" id="password" name="password" placeholder="Password"
                            innerRef={(input) => this.password = input}></Input>
                        </FormGroup>
                        <FormGroup check>
                            <Input type="checkbox" name="remember" innerRef={(input) => this.remember = input}></Input>
                            <Label check>Remember Me</Label>
                        </FormGroup><hr/>
                        <FormGroup>
                            <Button type="submit" value="submit" color="dark">Login</Button>
                        </FormGroup>
                    </Form>
                </ModalBody>
            </Modal>
            <Modal isOpen={this.state.isSignupOpen} toggle={this.toggleSignup}>
                <ModalHeader toggle={this.toggleSignup}>Sign Up</ModalHeader>
                <ModalBody>
                    <Form onSubmit={this.handleSignup}>
                        <FormGroup>
                            <Label htmlFor="name">Name</Label>
                            <Input type="text" id="name" name="name" placeholder="Name"
                            innerRef={(input) => this.name = input}></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="username">Username</Label>
                            <Input type="text" id="username" name="username" placeholder="Username"
                            innerRef={(input) => this.username = input}></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="password">Password</Label>
                            <Input type="password" id="password" name="password" placeholder="Password"
                            innerRef={(input) => this.password = input}></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="repassword">Re Enter Password</Label>
                            <Input type="password" id="repassword" name="repassword" placeholder="Password"
                            innerRef={(input) => this.repassword = input}></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="phone">Phone</Label>
                            <Input type="text" id="phone" name="phone" placeholder="Phone"
                            innerRef={(input) => this.phone = input}></Input>
                        </FormGroup><hr/>
                        <FormGroup>
                            <Button type="submit" value="submit" color="dark">Sign Up</Button>
                        </FormGroup>
                    </Form>
                </ModalBody>
            </Modal>
            </React.Fragment>
        );
    }
}

export default Header;
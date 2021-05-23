import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  NavItem,
  NavLink,
   Col,
} from "reactstrap";

import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <Col lg="6" md="5">
        
        <Card className="bg-secondary shadow border-0">
          
          <CardBody className="px-lg-5 py-lg-5">
            
            <Form role="form">
            <Col lg="12" >
                  <h1 style={{textAlign:"center"}} className="text-black">RMS LOGIN</h1>
                  
                </Col>
              <FormGroup className="mb-4">
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-email-83" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Email"
                    type="username"
                    autoComplete="new-email"
                  />
                </InputGroup>
              </FormGroup>
              <br/>
              <FormGroup>
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-lock-circle-open" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Password"
                    type="password"
                    autoComplete="new-password"
                  />
                </InputGroup>
              </FormGroup>
              
              <div className="text-center">
                <Button className="my-3" color="primary" type="button">
                  
                <NavLink
                  
                  to="/admin/index"
                  tag={Link}
                >
                  
                  <span style={{color:"white"}} >Login</span>
                </NavLink>
               
              </Button>



              </div>
            </Form>
          </CardBody>
        </Card>
        <Row className="mt-3">
          
          
        </Row>
      </Col>
    </>
  );
};

export default Login;

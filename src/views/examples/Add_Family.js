
import React, { useState, Component } from "react";
// react component that copies the given text inside your clipboard
import { CopyToClipboard } from "react-copy-to-clipboard";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  Row,
  Input,
  Col,
  Badge,
  CardFooter,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  Pagination,
  PaginationItem,
  PaginationLink,
  Progress,
  Table,
  Container,
  InputGroup,
  
  
  UncontrolledTooltip,
  
} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";

import {select, FormGroup, Button, FormControl} from 'react-bootstrap';
import Form from 'react-bootstrap/Form'


  

const Icons = () => {
  const [copiedText, setCopiedText] = useState();
  

    

    return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row>
          
          <Col className="order-xl-1" xl="12">
            <Card className="bg-secondary shadow">
              <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
                  <Col xs="8">
                    <h3 className="mb-0">Add Family</h3>
                  </Col>
                  
                </Row>
              </CardHeader>
              <CardBody>
                <Form>
                  
                  <div className="pl-lg-4">
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                                                   
                          <Form.Label className="form-control-label">Select District</Form.Label>
                            <Form.Control as="select" custom>
                              <option>Batticaloa</option>
                              <option>Ampara</option>
                              <option>Colombo</option>
                              <option>Gampaha</option>
                              <option>Anuradapura</option>
                            </Form.Control>
                        </FormGroup>
                      </Col>

                      <Col lg="6">
                        <FormGroup>
                                                   
                          <Form.Label className="form-control-label">Select GN Divisiont</Form.Label>
                            <Form.Control as="select" custom>
                              <option>Batticaloa North</option>
                              <option>Batticaloa East</option>
                              <option>Batticaloa South</option>
                              <option>Batticaloa West</option>
                              
                            </Form.Control>
                        </FormGroup>
                        
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-first-name"
                          >
                            First name
                          </label>
                          <Input
                            className="form-control-alternative"
                            
                            id="input-first-name"
                            placeholder="Enter First Name"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-last-name"
                          >
                            Last name
                          </label>
                          <Input
                            className="form-control-alternative"
                            
                            id="input-last-name"
                            placeholder="Enter Last Name"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-first-name"
                          >
                            NIC No
                          </label>
                          <Input
                            className="form-control-alternative"
                            
                            id="input-first-name"
                            placeholder="Enter NIC"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-last-name"
                          >
                            Address
                          </label>
                          <Input
                            className="form-control-alternative"
                            
                            id="input-last-name"
                            placeholder="Enter Address"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row>
                      <Col lg="12">
                        <FormGroup>                    
                          <Form.Label className="form-control-label">Select Gender</Form.Label>
                          <Form.Control as="select" custom>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Other</option>
                            
                                                       
                          </Form.Control>
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-last-name"
                          >
                            Date of Birth
                          </label>
                          <Input
                            className="form-control-alternative"
                            
                            id="input-last-name"
                            placeholder="dd/MM/yyyy"
                            type="text"
                          />
                        </FormGroup>
                      </Col>

                      <Col lg="6">
                      <FormGroup >                    
                          <Form.Label className="form-control-label" >Marital Status</Form.Label>
                          <Form.Control as="select" custom>
                            <option>Married</option>
                            <option>Unmarried</option>
                            <option>Widow</option>
                            
                                                       
                          </Form.Control>
                        </FormGroup>
                      </Col>
                    </Row>


                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-first-name"
                          >
                            Contact No
                          </label>
                          <Input
                            className="form-control-alternative"
                            
                            id="input-first-name"
                            placeholder="Enter Contact No"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-last-name"
                          >
                            Income
                          </label>
                          <Input
                            className="form-control-alternative"
                            
                            id="input-last-name"
                            placeholder="Enter Income"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>


                    <h3>Dependencies</h3> 
                    <Button variant="primary"> + Add New</Button>{' '}
                    <br/><br/>
                    <Row>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-first-name"
                          >
                            First Name
                          </label>
                          <Input
                            className="form-control-alternative"
                            
                            id="input-first-name"
                            placeholder="Enter First Name"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-last-name"
                          >
                            Last Name
                          </label>
                          <Input
                            className="form-control-alternative"
                            
                            id="input-last-name"
                            placeholder="Enter Last Name"
                            type="text"
                          />
                        </FormGroup>
                      </Col>

                      <Col lg="4">
                      <FormGroup >                    
                          <Form.Label className="form-control-label" >Gender</Form.Label>
                          <Form.Control as="select" custom>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Other</option>
                            
                                                       
                          </Form.Control>
                        </FormGroup>
                      </Col>

                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-last-name"
                          >
                            Date of Birth
                          </label>
                          <Input
                            className="form-control-alternative"
                            
                            id="input-last-name"
                            placeholder="Enter DOB"
                            type="text"
                          />
                        </FormGroup>
                      </Col>

                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-last-name"
                          >
                            Relationship
                          </label>
                          <Input
                            className="form-control-alternative"
                            
                            id="input-last-name"
                            placeholder="Enter Relationship"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    


                  </div>
                  </Form>
                  </CardBody>
                  </Card>
                  </Col>
                  </Row>
      </Container>
    </>
  );
};
  

export default Icons


import React, { useState, Component } from "react";
// reactstrap components
import { Card, CardHeader, CardBody, Row, Input, Col, Container, InputGroup, UncontrolledTooltip, } from "reactstrap";
// core components
import Header from "components/Headers/Header.js";

import {select, FormGroup, Button, FormControl} from 'react-bootstrap';
import Form from 'react-bootstrap/Form'

import { config } from './../Constants'
export const GND = config.GND;
export const DSD = config.DSD;

const AddFamily = () => {
  const [copiedText, setCopiedText] = useState();
  const [gnd_list, setGNDList] = useState([])
  const [selected_dsd, setDSD] = useState(undefined)

  const [gnd, setGND] = useState('')
  
  //select ds division function
  function selectDSDFunction(event){
    let ds_id = event.target[event.target.selectedIndex].getAttribute('data-ds-id')
    let ds_key = event.target[event.target.selectedIndex].getAttribute('data-ds-key')
    let ds_name = event.target[event.target.selectedIndex].getAttribute('data-ds-name')
    if(ds_id === '0'){
      setGNDList([]) //empty gn list
      setDSD(undefined) //empty dsd
    } else {
      setDSD({ id: ds_key, ds_name, ds_id, }) //set selected dsd

      let selected_gnd = []

      GND.forEach(element => {
        if(element.ds_id === ds_id){
          selected_gnd.push(element)
        }
      });

      if(selected_gnd.length > 0){
        setGNDList(selected_gnd)
      }
    }
  }

  function selectGNDFunction(event){
    let gn_id = event.target[event.target.selectedIndex].getAttribute('data-gn-id')
    let gn_name = event.target[event.target.selectedIndex].getAttribute('data-gn-name')
    let gn_readable_name = event.target[event.target.selectedIndex].getAttribute('data-gn-readable')
    let ds_name = event.target[event.target.selectedIndex].getAttribute('data-gn-ds-name')
    let ds_id = event.target[event.target.selectedIndex].getAttribute('data-gn-ds-id')


    console.log("gn_id ", gn_id)
    console.log("gn_name ", gn_name)
    console.log("gn_readable_name ", gn_readable_name)
    console.log("ds_name ", ds_name)
    console.log("ds_id ", ds_id)
    
  }


  return (
    <>
      <Header />
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
                  
                  <div>
                    <Row>
                      <Col lg="6">
                        <FormGroup>       
                          <Form.Label className="form-control-label">DS Division</Form.Label>
                            <Form.Control as="select" custom 
                              onChange={(object) => selectDSDFunction(object) }>
                                <option key={0} data-ds-id={0}>Select</option>
                                {
                                  DSD.map((single, index) =>
                                    <option 
                                      key={single.id} 
                                      data-ds-name={single.ds_name}
                                      data-ds-key={single.id}
                                      data-ds-id={single.ds_id}>{ single.ds_name }</option>
                                  )
                                }
                            </Form.Control>
                        </FormGroup>
                      </Col>

                      <Col lg="6">
                        <FormGroup>   
                          <Form.Label className="form-control-label">Select GN Divisiont</Form.Label>
                            <Form.Control 
                              onChange={(object) => selectGNDFunction(object) }
                              as="select" custom disabled={selected_dsd === undefined}>
                              <option key={0} data-ds-id={0}>Select</option>
                              {
                                gnd_list.map((single, index) =>
                                  <option 
                                    key={single.id} 
                                    data-gn-id={single.gn_id}
                                    data-gn-name={single.name}
                                    data-gn-readable={single.gn_id_readable}
                                    data-gn-ds-name={single.ds_name}
                                    data-gn-ds-id={single.ds_id}
                                    >{ single.name } - ({ single.gn_id_readable })</option>
                                )
                              }
                            </Form.Control>
                        </FormGroup>
                        
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label className="form-control-label">First name</label>
                          <Input
                            className="form-control-alternative"
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


                    {/* <h3>Dependencies</h3> 
                    <Button variant="primary"> + Add New</Button>
                    <Row>
                      <Col lg="4">
                        <FormGroup>
                          <label className="form-control-label">First Name</label>
                          <Input
                            className="form-control-alternative"
                            placeholder="Enter First Name"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="4">
                        <FormGroup>
                          <label className="form-control-label">Last Name</label>
                          <Input
                            className="form-control-alternative"
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
                          </Form.Control>
                        </FormGroup>
                      </Col>

                      <Col lg="4">
                        <FormGroup>
                          <label className="form-control-label">
                            Date of Birth
                          </label>
                          <Input
                            className="form-control-alternative"
                            placeholder="Enter DOB"
                            type="text"
                          />
                        </FormGroup>
                      </Col>

                      <Col lg="4">
                        <FormGroup>
                          <label className="form-control-label">
                            Relationship
                          </label>
                          <Input
                            className="form-control-alternative"
                            placeholder="Enter Relationship"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row> */}
                    


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
  

export default AddFamily

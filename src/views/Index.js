
import React, { useState } from "react";
// node.js library that concatenates classes (strings)
// javascipt plugin for creating charts
import Chart from "chart.js";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
// reactstrap components
import {
  
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  Progress,
  Table,
  Container,
  CardTitle,
  Row,
  UncontrolledDropdown,
  DropdownToggle,
  Dropdown,
  Col,
  DropdownItem,
  DropdownMenu,
} from "reactstrap";

// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2,
} from "variables/charts.js";
import {select, FormGroup, Button, FormControl} from 'react-bootstrap';
import Form from 'react-bootstrap/Form'
import Header from "components/Headers/Header.js";

const Index = (props) => {
  const [activeNav, setActiveNav] = useState(1);
  const [chartExample1Data, setChartExample1Data] = useState("data1");

  if (window.Chart) {
    parseOptions(Chart, chartOptions());
  }

  const toggleNavs = (e, index) => {
    e.preventDefault();
    setActiveNav(index);
    setChartExample1Data("data" + index);
  };
  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row><br/>
        <Col lg="12" xl="12">
                     
                <Card className="card-stats mb-3 mb-xl-0">
                  <CardBody>
                    <Row>
                      
                      <div className="col">
                        
                        <span className="h3 font-weight-bold mb-0">
                         COVID 19 UPDATES
                        </span>
                      </div>
                      <Col lg="6">
                        <FormGroup>
                                                   
                          <Form.Label className="form-control-label"></Form.Label>
                            <Form.Control as="select" custom>
                              <option>-- Select District --</option>
                              <option>Batticaloa</option>
                              <option>Colombo</option>
                              <option>Gampaha</option>
                              <option>Anuradapura</option>
                            </Form.Control>
                        </FormGroup>
                      </Col>
                    </Row>
                    
                    
                  </CardBody>
                </Card>
              </Col>

        <Col lg="12" xl="4">
          <h2></h2>
           
                <Card className="card-stats mb- mb-xl-2">
                  <CardBody>
                    <Row>
                      
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-2"
                        >
                          Affected Families
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">
                          350,897
                        </span>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                          <i className="fas fa-chart-bar" />
                        </div>
                      </Col>
                    </Row>
                    
                  </CardBody>
                </Card>
              </Col>

              <Col lg="12" xl="4">
          <h4> </h4> 
           
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-2"
                        >
                          Quarantined Families
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">
                          350,897
                        </span>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-warning text-white rounded-circle shadow">
                          <i className="ni ni-badge" />
                        </div>
                      </Col>
                    </Row>
                    
                  </CardBody>
                </Card>
              </Col>


              <Col lg="12" xl="4">
              <h4>
                
              </h4>  
           
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-2"
                        >
                          GN Division Under Lockdown
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">
                          350,897
                        </span>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-primary text-white rounded-circle shadow">
                          <i className="ni ni-building" />
                        </div>
                      </Col>
                    </Row>
                    
                  </CardBody>
                </Card>
              </Col>


              <br/> <br/>
          <Col className="mb-5 mb-xl-0" xl="12">
            <Card className="bg-gradient-default shadow">
              <CardHeader className="bg-transparent">
                <Row className="align-items-center">
                  <div className="col">
                    <h6 className="text-uppercase text-light ls-1 mb-1">
                      Overview
                    </h6>
                    
                  </div>
                  
                </Row>
              </CardHeader>
              <CardBody>
                {/* Chart */}
                <div className="chart">
                  <Line
                    data={chartExample1[chartExample1Data]}
                    options={chartExample1.options}
                    getDatasetAtEvent={(e) => console.log(e)}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
          
        </Row>


        
      </Container>
    </>
  );
};

export default Index;

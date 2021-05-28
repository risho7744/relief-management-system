
import React, { Component } from "react";
import firebase from '../../Firebase' 
import { Card, CardHeader, Row, Col, Container, NavLink, Button, } from "reactstrap";
import Header from "components/Headers/Header.js";
import {Table} from 'react-bootstrap';
import { Link } from "react-router-dom";
import moment from 'moment';
import 'moment-timezone';

import AddDependency from './AddDependency'
import ViewDependency from './ViewDependency'

class FamilyDataIndex extends Component {
  constructor(props) {
    super(props);
    this.fs = firebase.firestore()
    this.state = {
      loading: true,
      list: [],
    };
  }

  componentDidMount(){
    let set = this
    set.getData()
  }

  getData(){
    let set = this
    set.fs.collection("family_data").orderBy('created', 'desc').onSnapshot(function(querySnapshot) {
      const list = [];
      querySnapshot.forEach(function(doc) {
        list.push({ key: doc.id, ...doc.data() });
      });
      set.setState({ list, loading: false })
    });
  }


  render(){
    return (
      <>
        <Header />
        <Container className="mt--7" fluid>
          <Row>
            <div className="col">
              <Card className="shadow"> 
              
                <Row>
                <Col> 
                <CardHeader >
                  <h3 className="mb-0">
                    Families Data
                  </h3>
                </CardHeader> 
                </Col>
                
                <Col lg="3">
                <div className="text-center">
                  <Button className="my-4" color="success" type="button">
                    
                  <NavLink to="/admin/Add_Family" tag={Link} >
                    <span style={{color:"white"}} >+ Add Family</span>
                  </NavLink>
                 
                </Button>
  
  
  
                </div>
               
                </Col>
                
  
  
  
              </Row>
  
             
                <Row>
                  <Col lg="12">
                    <Table style={{fontFamily:"Nunito", fontStyle:"normal", fontSize:"16pt" }} className="align-items-center" size="sm" responsive={true}>
                      <thead className="thead-light">
                        <tr>
                          <th>Order</th>
                          <th>Name</th>
                          <th>Gender</th>
                          <th>Age</th>
                          <th>Address</th>
                          <th>Contact</th>
                          <th>Area</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          this.state.list.map((single, index) =>
                            <tr key={index}>
                              <td className="text-center">
                                { index + 1 } <br/><Button className="btn-danger btn-sm">Edit</Button>
                              </td>
                              <td>
                                <div className="mt-3">
                                { single.first_name } { single.last_name }<br/>
                                <ul style={{ listStyle: 'none', padding: 0,}}>
                                  <li style={{ float: 'left', marginRight: 10, }}><AddDependency family={single} /></li>
                                  <li><ViewDependency family={single} /></li>
                                </ul>
                                </div>
                              </td>
                              <td>{ single.gender }</td>
                              <td>{ moment().diff(moment(single.date_of_birth, "DD-MM-YYYY"), 'years') === 0 ? '1' : moment().diff(moment(single.date_of_birth, "DD-MM-YYYY"), 'years')  }</td>
                              <td>{ single.address }</td>
                              <td>{ single.contact_number }</td>
                              <td>{ single.selected_dsd.ds_name } - { single.selected_gnd.name }</td>
                              <td>
                               
                                
                              </td>
                            </tr>
                          )
                        }
                      </tbody>
                    </Table>
                  </Col>
                </Row>     
              </Card>
            </div> 
          </Row>
        </Container>
      </>
    );
  }   
}

export default FamilyDataIndex

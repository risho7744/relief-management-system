import Header from 'components/Headers/Header'
import React, { useEffect, useState } from 'react'
import firebase from '../../Firebase'; 
import { Row, Card, Container, Col, Label, FormGroup, Input, Table, Button, CustomInput, Badge } from 'reactstrap';
import { config } from './../Constants'
import { data } from 'jquery';
export const GND = config.GND;
export const DSD = config.DSD;


function Relief() {

    const [details, setDetails] = useState([]);
    const [loading, setLoading] = useState(undefined);
    const [gnd_list, setGNDList] = useState([]) //populated GN List after selecting a division
    const [selected_dsd, setDSD] = useState(undefined) //selected DS Division
    const [selected_gnd, setGND] = useState(undefined) //selected GN Division
    const [nic, setNic] = useState('') //NIC
    const [inp_error, setInputError] = useState('');
    const [min_salary, setMin_salary] = useState();
    const [max_salary, setMax_salary] = useState();


    console.log(details);
    console.log(nic);
    console.log(min_salary);
    console.log(max_salary);

    // Firebase connection to fetch data
    const getData = () => {
        setLoading(true);
        firebase.firestore().collection("family_data").orderBy('created', 'desc').onSnapshot(function(querySnapshot) {
          const list = [];
          querySnapshot.forEach(function(doc) {
            list.push({ key: doc.id, ...doc.data() });
          });
          setDetails([...list]);
          setLoading(false);
        });
      }

    useEffect(() => {
        getData();
    }, [])

    const selectDsd = (event) => {
        let ds_key = event.target[event.target.selectedIndex].getAttribute('data-ds-keyname')
        let ds_name = event.target[event.target.selectedIndex].getAttribute('data-ds-name')
        

        if(ds_key === '0'){
          setGNDList([]) //empty populated gn list
          setDSD(undefined) //empty ds division
          setGND(undefined) //empty gn division
        } else {
          setDSD({ ds_name, ds_key, }) //set selected dsd
          let selected_gnd = [] //initiate array
          GND.forEach(element => { //loop for picking GN Division
            if(element.ds_id === ds_key){ //if incoming key equal to array key value put inside array
              selected_gnd.push(element)
            }
          });
          if(selected_gnd.length > 0){
            setGND(undefined) //set selected GN Divison undefind
            setGNDList(selected_gnd) //push to arrary
          }
        }
    };
    const selectGnd = (event) => {
        let gn_id = event.target[event.target.selectedIndex].getAttribute('data-gn-id')
        let gn_name = event.target[event.target.selectedIndex].getAttribute('data-gn-name')
        let gn_id_readable = event.target[event.target.selectedIndex].getAttribute('data-gn-readable')
        let ds_name = event.target[event.target.selectedIndex].getAttribute('data-gn-ds-name')
        let ds_id = event.target[event.target.selectedIndex].getAttribute('data-gn-ds-id')
        if(gn_id === '0'){ //if 0 set Selected GN Division undefind
          setGND(undefined)
        } else {
          //map selected GN Division in object
          let selected_gnd = {
            name: gn_name,
            gn_id_readable,
            gn_id,
            ds_name,
            ds_id,
          }
          setGND(selected_gnd) //set GN Division to state
          //
        }
    };

    // const filterNic = details.filter((national) => {
    //     if (national.nic) {
    //         return national;
    //     }
    // });
    

    // const what = filterNic.map((ele) => {
    //     return <p key={ele.nic}>{ele.nic}</p>
    // });

    let filterNic = details.filter((ele) => {
        return ele.nic == nic;
    });

    let min = details.filter((element) => {
        return element.income >= min_salary;
    });
    let max = details.filter((element) => {
        return element.income <= max_salary;
    });

    const filterIncome = min.concat(max);

    const removeDuplicateObjects = (myArr) => {
        var uniqueArr = [];
        var objStrings = [];
      
        filterIncome.forEach((element) => {
          if (typeof element === "object" && element !== null) {
            var eleString = JSON.stringify(element);
            if (!objStrings.includes(eleString)) {
              uniqueArr.push(element);
              objStrings.push(eleString);
            }
          }
        });
      
        return console.log(uniqueArr);
      };
    
    const handleSearch = () => {
        // console.log(filterNic);
        // console.log(filterIncome);
        removeDuplicateObjects(filterIncome);
    }


    return (
    <>
        <Header/>
        <Container className="mt--7" fluid>
        {/* Table */}
            <Row>
                <div className="col">
                     <Card className="shadow"> 
                        <Container className="mt-5" fluid>
                            <Row className="d-flex justify-content-around align-content-center my-4">
                                <Col md={3}>
                                    <FormGroup>
                                        <Label for="exampleCustomSelect">Divisional Secretariat Division</Label>
                                        <CustomInput onChange={(event) => selectDsd(event)} type="select" id="exampleCustomSelect" name="customSelect">
                                            <option  key={0} data-ds-keyname={0}>Select</option>
                                            {details.map(data => (
                                                <option
                                                    key={data.id}
                                                    data-ds-name={data.ds_name}
                                                    data-ds-keyname={data.ds_id}
                                                >{data.selected_dsd.ds_name}</option>
                                            ))}
                                        </CustomInput>
                                    </FormGroup>
                                </Col>
                                <Col md={3}>
                                    <FormGroup>
                                        <Label for="exampleCustomSelect">Grama Niladhari Division</Label>
                                        <CustomInput as="select" custom disabled={selected_dsd === undefined} onChange={(event) => selectGnd(event)} type="select" id="exampleCustomSelect" name="customSelect">
                                            <option key={0} data-gn-id={0}>Select</option>
                                            {details.map(data => (
                                                <option
                                                    key={data.id} 
                                                    data-gn-id={data.gn_id}
                                                    data-gn-name={data.name}
                                                    data-gn-readable={data.gn_id_readable}
                                                    data-gn-ds-name={data.ds_name}
                                                    data-gn-ds-id={data.ds_id}

                                                >{data.selected_gnd.name} - {data.selected_gnd.gn_id}</option>
                                            ))}
                                        </CustomInput>
                                    </FormGroup>
                                </Col> 
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="examplePassword">NIC</Label>
                                        <Input 
                                            type="text" 
                                            name="password"
                                            placeholder="Enter your NIC" 
                                            value={nic}
                                            onChange={(event => setNic(event.target.value))}
                                        /> { inp_error === 'nic' ? <Badge variant="danger">NIC Required</Badge> : <></>}
                                    </FormGroup>
                                </Col>
                            </Row>
                            
                            <hr></hr>

                            <Row className="my-4">
                                <Col md={2} className="mt-4">
                                    <h2>Enter Income Range:</h2>
                                </Col>
                                <Col md={2}>
                                    <FormGroup>
                                        <Label for="examplePassword">Min</Label>
                                        <Input value={min_salary} onChange={(event => setMin_salary(event.target.value))} type="number" name="minimum" placeholder="Minimum Salary" />
                                    </FormGroup>
                                </Col>
                                <h2 md={2} className="m-4">TO</h2>
                                <Col md={2}>
                                    <FormGroup>
                                        <Label for="examplePassword">Max</Label>
                                        <Input value={max_salary} onChange={(event => setMax_salary(event.target.value))} type="number" name="maximum" placeholder="Maximum Salary" />
                                    </FormGroup>
                                </Col>
                            </Row>

                            <Row>
                                <Col className="m-2">
                                    <Button 
                                        size="lg" 
                                        color="info" 
                                        block
                                        onClick={e => handleSearch(e)}
                                        > 
                                        Search </Button>
                                </Col>
                            </Row>

                            <hr></hr>

                            <Row className="my-4">
                                <Table hover responsive>
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Full Name</th>
                                            <th>NIC</th>
                                            <th>Phone Number</th>
                                            <th>Send SMS</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {filterNic.map((data, index) => (
                                            <tr key={index}>
                                                <td>
                                                    <Input type="checkbox"/>{' '}
                                                    { index + 1 }
                                                </td>
                                                <td>
                                                    <div>
                                                    { data.first_name } { data.last_name }
                                                    </div>
                                                </td>
                                                <td>
                                                    { data.nic }
                                                </td>
                                                <td>
                                                    { data.contact_number }
                                                </td>
                                                <td>
                                                    <Button color="danger">Send SMS</Button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </Row>

                            <hr></hr>

                            <Row className="d-flex justify-content-end my-4">
                                <Col md={3}>
                                    <Button color="success">Generate PDF</Button>{' '}
                                    <Button color="info">Send SMS</Button>{' '}
                                </Col>
                            </Row>
                        </Container>
                    </Card>
                </div>          
            </Row>
      </Container>
    </>
    )
}

export default Relief

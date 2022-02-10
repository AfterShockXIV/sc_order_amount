import "./Css/App.css";
import {useState } from "react";
import { Navbar, Nav } from 'react-bootstrap';
import { Route, Switch } from 'react-router-dom';
import Modal from "react-bootstrap/Modal";
import Order_all from './components/Order_all';
import Input_data from './components/Input_data';
import Add_company from './components/Add_company';
import Report_company from './components/Report_company';
import Order_filte_data from './components/Order_filter_date';
import Company_target from './components/company/Company_traget';
import Company_filter_date from './components/company/Company_filter_date';
function App() {

  const [Input_show, setInput_show] = useState(false);
  return (
    <body >

      <Modal
        size="lg"
        show={Input_show}
        onHide={() => setInput_show(false)}
        aria-labelledby="example-modal-sizes-title-lg">
        <Modal.Header >
          <Modal.Title id="example-modal-sizes-title-lg">
            เพิ่มข้อมูลบริษัท
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Add_company />
        </Modal.Body>
      </Modal>

      <div class="nav_top"  >
        <Navbar style={{ backgroundColor: '#373A40' }} >
          <Navbar.Brand ><img class="nav-l" src="/img/login-venine.png" /></Navbar.Brand>
          <Nav className="mr-auto nav-f">
            <Nav.Link onClick={() => setInput_show(true)} ><span style={{ fontSize: 16, color: 'white' }}>เพิ่มบริษัท</span></Nav.Link>
            <Nav.Link href="/report_company" ><span style={{ fontSize: 16, color: 'white' }}>ข้อมูลบริษัท</span></Nav.Link>
            <Nav.Link ><span style={{ fontSize: 16, color: '#5a5a5a' }}>| |</span></Nav.Link>
            <Nav.Link href="/order_all" ><span style={{ fontSize: 16, color: 'white' }}>ข้อมูล Order การสั่งซื้อ</span></Nav.Link>
          </Nav >
      
        </Navbar>
      </div>
      <br />
      <div  style={{ paddingLeft: '3%', paddingRight: '3%'}}>
          <Input_data />
          <br/>
        <Switch>
          <Route exact path="/"><Order_all /></Route>
          <Route path="/order_all"><Order_all /></Route>
          <Route path="/report_company"><Report_company /></Route>
          <Route path="/Order_filter_data/:start/:end" component={Order_filte_data}></Route>
          <Route path="/Company_target/:company_name/:company_id" component={Company_target}></Route>
          <Route path="/Company_filter_date/:company_name/:company_id/:start/:end" component={Company_filter_date}></Route>
          <Route path="/:id"><br /><br /><h4 class="alert alert-danger" style={{ textAlign: 'center', color: 'red' }}>กรุณาเลือกข้อมูลให้ครบถ้วน <a href="/">คลิกเพื่อดู Order ทั้งหมด</a></h4></Route>
        </Switch>
      </div>
    </body>
  )
}

export default App

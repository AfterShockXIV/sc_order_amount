import "./../Css/Order_all.css";
import { useEffect, useState } from "react";
import Axios from "axios";
import { Modal } from 'react-bootstrap';
import { confirmAlert } from "react-confirm-alert";

function Add() {
    
    const [company, setCompany] = useState([]);
    const server = "http://192.168.30.226:3011";
    const [lgShow, setLgShow] = useState(false);
    const [upShow, setupShow] = useState(false);
    const [c_delete, setDelete] = useState([]);
    const [name, setName] = useState("");
    const [showid_code, setShowid_code] = useState("");
    const [id, setID] = useState("");
    const [setcompany_name, setCompany_name] = useState("");
    const [id_code, setID_code] = useState("");

    useEffect(() => {
        Axios.get(server + "/Company")
            .then((response) => {
                setCompany(response.data);
            });
    });

    function handleDelete(company_name, id) {
        setLgShow(true)
        setName(company_name)
        setID(id)
    };

    function UpdateName(company_name, id, code) {
        setName(company_name);
        setShowid_code(code)
        setID(id)
        setupShow(true);

    }

    function confirm_update() {
        if (id_code == "") {
            setID_code(showid_code);
        }

        if (setcompany_name == "") {
            setCompany_name(name);
        }
        setupShow(false)
    }
    return (
        <body   class="shadow" >
            <Modal
                size="lg"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-lg">
                <Modal.Header >
                    <Modal.Title id="example-modal-sizes-title-lg">
                        <span>ต้องการลบข้อมูลบริษัท</span><span style={{ color: 'red' }}> {name} </span>
                        <br />
                        <span style={{ fontSize: 14, color: 'red' }}>การลบข้อมูลจะทำให้ข้อมูลที่เกียวข้องศูนย์หายทั้งหมด</span>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <a target="_blank" href={server + "/Delete_company/" + id + "/" + name} style={{ paddingRight: 10 }} ><button onClick={() => setLgShow(false)} class="btn btn-danger btn-sm">ยืนยัน</button></a>
                    <button onClick={() => setLgShow(false)} class="btn btn-warning btn-sm">ยกเลิก</button>
                </Modal.Body>
            </Modal>

            <Modal
                size="lg"
                show={upShow}
                onHide={() => setupShow(false)}
                aria-labelledby="example-modal-sizes-title-lg">
                <Modal.Header >
                    <Modal.Title id="example-modal-sizes-title-lg">
                        <span>ต้องการ UPDATE ข้อมูลชื่อบริษัท จาก </span><span style={{ color: 'red' }}> {name} </span><span>เป็น</span>
                        <br />
                        <input onChange={(event) => setCompany_name(event.target.value)} class="sinput form-control form-control-sm" placeholder="UPDATE ชื่อบริษัท...." />
                        <br />
                        <span>ต้องการ UPDATE ข้อมูล ID CODE จาก </span><span style={{ color: 'red' }}> {showid_code} </span><span>เป็น</span>
                        <br />
                        <input onChange={(event) => setID_code(event.target.value)} class="sinput form-control form-control-sm" placeholder="UPDATE ID CODE...." />
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <a target="_blank" href={server + "/Update_company/" + id + "/" + setcompany_name + "/" + id_code} style={{ paddingRight: 10 }} >
                        <button onClick={() => confirm_update()} class="btn btn-danger btn-sm">ยืนยัน</button>
                    </a>
                    <button onClick={() => setupShow(false)} class="btn btn-warning btn-sm">ยกเลิก</button>
                </Modal.Body>
            </Modal>

            <div class=" container">
                <br/>
                <div class="col-md-12 scroller-table_add"  >
                    <h5>ข้อมูลบริษัท</h5>
                    <table id="example" class="table table-bordered table-striped ">
                        <thead >
                            <tr>
                                <th style={{ width: "10%" }}>ลำดับ</th>
                                <th style={{ width: "10%" }}>ชื่อบริษัท</th>

                                <th style={{ width: "10%" }}>ID CODE</th>

                                <th style={{ width: "10%" }}>ACTION</th>
                            </tr>
                        </thead>

                        <tbody id="myTable" class="">
                            {company.map((val, key) => {
                                return (
                                    <tr>
                                          <td style={{ width: "10%", textAlign: 'center' }}>{key + 1} </td>
                                        <td style={{ width: "10%", textAlign: 'center' }}>{val.company_name} </td>
                                        <td style={{ width: "10%", textAlign: 'center' }}>{val.id_code}</td>

                                        <td style={{ width: "10%", textAlign: 'center' }}>
                                            <a style={{ paddingRight: 10 }}><button onClick={() => UpdateName(val.company_name, val.company_id, val.id_code)} class="btn btn-warning btn-sm">UPDATE</button></a>
                                            <button onClick={() => { handleDelete(val.company_name, val.company_id) }} class="btn btn-danger btn-sm">DELETE</button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </body>
    );
}
export default Add;
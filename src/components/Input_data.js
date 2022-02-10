
import { useEffect, useState } from "react";
import Axios from "axios";
import { Trash } from 'react-bootstrap-icons';

const Add = () => {
    const [company_id, setCompany_id] = useState("");
    const [price, setPrice] = useState(0);
    const [order, setOrder] = useState([]);
    const [date, setDate] = useState("");
    const [company_name, setCompany_name] = useState([]);
    const server = "http://192.168.30.226:3011";

    useEffect(() => {
        Axios.get(server + "/select_company")
            .then((response) => {
                setCompany_name(response.data);
            });
    }, []);

    const AddOrder = () => {
        if (price == "" || company_name == [] || date =="") {

        } else {
            Axios.post(server + "/Add_Order", {
                company_id: company_id,
                price: price,
                date: date,
            }).then(() => {
                setOrder([
                    ...order,
                    {
                        company_id: company_id,
                        price: price,
                        date: date,
                    },
                ]);
            });
        }


    };

    return (
        <body class="shadow">
            <br />
            <div class=" container">
                <h5>เพิ่มยอดการสั่งซื้อ</h5>
                <div class="col-md-12 "  >
                    <form >
                        <div class="row">
                            <div class="col-sm-3 mb-3">
                                <select required id="select-testing" data-live-search="true" title="Please select" class="selectpicker form-control sinput"
                                    onChange={(event) => {
                                        setCompany_id(event.target.value)
                                    }}>
                                    <input type="text" placeholder="Search.." />
                                    <option >เลือกบริษัท</option>
                                    {company_name.map((val, key) => {
                                        return (
                                            <option value={val.company_id} >{val.company_name}</option>
                                        );
                                    })}
                                </select>
                            </div>
                         

                            <div class="col-sm-3 mb-3">
                                <input required class="form-control sinput" type="text" placeholder="ราคา"
                                    onChange={(event) => {
                                        setPrice(event.target.value)
                                    }} />
                            </div>

                            <div class="col-sm-3 mb-3">
                                <input required class="form-control sinput" type="date"
                                    onChange={(event) => {
                                        setDate(event.target.value)
                                    }} />
                            </div>
                            <div class="col-sm-2 mb-3">
                                <button type="submit" class="btn btn-secondary sinput" style={{ width: "100%" }} onClick={AddOrder}>บันทึก</button>
                            </div>
                        </div>


                    </form>
                </div>
            </div>

        </body>
    );
}
export default Add;
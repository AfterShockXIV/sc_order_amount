import "../../Css/Order_all.css";
import { useEffect, useState } from "react";
import Axios from "axios";

function Company_filter_date(props) {

    const [order_all, setOrder_all] = useState([]);
    const [company, setCompany] = useState([]);
    const [sum_row, setSum_row] = useState([]);
    const server = "http://192.168.30.226:3011";
    const [date_start, setDate_start] = useState("");
    const [date_end, setDate_end] = useState("");

    const [lgShow, setLgShow] = useState(false);
    const [id, setID] = useState("");
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    useEffect(() => {
        const url = server + "/Company_filter_date/" + props.match.params.company_name + "/" + props.match.params.company_id + "/" + props.match.params.start + "/" + props.match.params.end;
        async function Orderall_td() {

            await Axios.get(url)
                .then((response) => {
                    setCompany(response.data.company);
                });

            await Axios.get(url)
                .then((response) => {
                    setOrder_all(response.data.order.data_order)
                });

            await Axios.get(url)
                .then((response) => {
                    setSum_row(response.data.sum_row)
                });
        }
        Orderall_td()
    }, []);
    function handleDelete(id, price) {
        setLgShow(true)
        setPrice(price)
        setName(props.match.params.company_name)
        setID(id)
    };

    return (
        <body  class="shadow">
            <div class=" container ">
                <div style={{ float: 'right' }} >
                    <div class="input-group input-group-sm ">
                        <input type="date" class="form-control "
                            onChange={(event) => {
                                setDate_start(event.target.value)
                            }} />
                        <span class="input-group-text " id="inputGroup-sizing-sm">ถึง</span>
                        <input type="date" class="form-control" onChange={(event) => {
                            setDate_end(event.target.value)
                        }} />
                        <a class="btn_po" href={"/Company_filter_date/" + props.match.params.company_name + "/" + props.match.params.company_id + "/" + date_start + "/" + date_end} >
                            <button type="button" class="btn btn-secondary btn-sm ">ดูข้อมูล</button></a>
                    </div>
                    <br />
                </div>
            </div>
            <div class=" container ">
                <br/>
                <h5>ข้อมูล Order (<span style={{ color: 'red' }}>{props.match.params.company_name}</span>)</h5>
                <br />

                <div class=" scroller-table_add "  >
                    <table id="example" class=" table table-bordered table-striped ">
                        <thead>
                            <th style={{ width: '20%' }} >วันที่</th>
                            <th style={{ width: '40%' }}>{props.match.params.company_name}</th>
                            <th style={{ textAlign: "center" }}>ACTION</th>
                        </thead>

                        <tbody id="myTable" class="table_w">
                            {order_all.map((val, key) => {

                                return (
                                    <tr>
                                        <td style={{ textAlign: "center" }}>{val.date_added}</td>
                                        <td style={{ textAlign: "center" }}>{val.price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</td>
                                        <td style={{ textAlign: "center" }}>

                                            {(() => {
                                                if (val.status == "wait") {
                                                    return (
                                                        <div>
                                                            <a href={server + "/sig-price/" + val.order_id} style={{ paddingRight: 10 }}><button style={{ textAlign: "center" }} class="btn btn-success btn-sm">Signature</button></a>
                                                            <button onClick={() => { handleDelete(val.order_id, val.price) }} class="btn btn-secondary btn-sm">DELETE</button>
                                                        </div>
                                                    )
                                                } else {
                                                    return (
                                                        <div>
                                                            <span style={{ color: "green" }}>ตรวจสอบแล้ว</span><br />
                                                            <a href={val.sig_price} target="_blank"><img src={val.sig_price} /></a>
                                                        </div>
                                                    )
                                                }
                                            })()}
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                        <tfoot>
                            {sum_row.map((val, key) => {
                                return (
                                    <tr>
                                        <td style={{  fontSize: 14 }}>รวม</td>
                                        <td style={{ textAlign: "center",  fontSize: 14, color: 'red' }}>{val.sum_row0.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</td>

                                    </tr>
                                );
                            })}
                        </tfoot>
                    </table>


                </div>
            </div>
        </body>
    );
}
export default Company_filter_date;
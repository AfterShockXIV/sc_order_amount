import "./../Css/Order_all.css";
import { useEffect, useState } from "react";
import Axios from "axios";
import server from "../configs/portserver";
function Order_filter_date(props) {

    const [order_all, setOrder_all] = useState([]);
    const [company, setCompany] = useState([]);
    const [sum_row, setSum_row] = useState([]);
    const [sum_all, setSum_all] = useState([]);
    
    const [date_start, setDate_start] = useState("");
    const [date_end, setDate_end] = useState("");
    useEffect(() => {

        async function Orderall_td() {

            await Axios.get(server + "/Orderall ")
                .then((response) => {
                    setCompany(response.data.company);
                });

            await Axios.get(server + "/Order_filter_data/" + props.match.params.start + "/" + props.match.params.end)
                .then((response) => {
                    setOrder_all(response.data.order.data_order)
                });

            await Axios.get(server + "/Order_filter_data/" + props.match.params.start + "/" + props.match.params.end)
                .then((response) => {
                    setSum_row(response.data.sum_row)
                });

            await Axios.get(server + "/Order_filter_data/" + props.match.params.start + "/" + props.match.params.end)
                .then((response) => {
                    setSum_all(response.data.sum_all)

                });
        }
        Orderall_td()
    }, []);

    return (
        <body class="shadow">
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
                        <a class="btn_po" href={"/Order_filter_data/" + date_start + "/" + date_end}  > <button type="button" class="btn btn-secondary btn-sm ">ดูข้อมูล</button></a>
                    </div>
                    <br />
                </div>
            </div>
            <div class=" container ">
                <br />
                <h5>ข้อมูล Order (<span style={{ color: 'red' }}>{props.match.params.start}</span> ถึง <span style={{ color: 'red' }}>{props.match.params.end}</span>)</h5>
                <br />
                <div class=" scroller-table_add "  >
                    <table id="example" class="table_w table table-bordered table-striped ">
                        <thead>
                            <th colSpan="" >วันที่</th>
                            {company.map((val, key) => {
                                return (
                                    <th ><a class="target" target="_blank" href={"/Company_target/" + val.company_name + "/" + val.company_id}>{val.company_name}</a> </th>
                                );
                            })}
                            <th colSpan="5" style={{ background: 'red' }} >รวม</th>
                        </thead>

                        <tbody id="myTable" class="table_w">
                            {order_all.map((val, key) => {

                                return (
                                    <tr>
                                        <td >{val.date_added}</td>
                                        {(() => {
                                            if (val.order0 == "0") {
                                                return (
                                                    <td ></td>
                                                )
                                            } else {
                                                return (
                                                    <td >{val.order0.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</td>
                                                )
                                            }
                                        })()}

                                        {(() => {
                                            if (val.order1 == "0") {
                                                return (
                                                    <td ></td>
                                                )
                                            } else {
                                                return (
                                                    <td >{val.order1.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</td>
                                                )
                                            }
                                        })()}

                                        {(() => {
                                            if (val.order2 == "0") {
                                                return (
                                                    <td ></td>
                                                )
                                            } else {
                                                return (
                                                    <td >{val.order2.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</td>
                                                )
                                            }
                                        })()}

                                        {(() => {
                                            if (val.order3 == "0") {
                                                return (
                                                    <td ></td>
                                                )
                                            } else {
                                                return (
                                                    <td >{val.order3.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</td>
                                                )
                                            }
                                        })()}

                                        {(() => {
                                            if (val.order4 == "0") {
                                                return (
                                                    <td ></td>
                                                )
                                            } else {
                                                return (
                                                    <td >{val.order4.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</td>
                                                )
                                            }
                                        })()}

                                        {(() => {
                                            if (val.order5 == "0") {
                                                return (
                                                    <td ></td>
                                                )
                                            } else {
                                                return (
                                                    <td >{val.order5.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</td>
                                                )
                                            }
                                        })()}

                                        {(() => {
                                            if (val.order6 == "0") {
                                                return (
                                                    <td ></td>
                                                )
                                            } else {
                                                return (
                                                    <td >{val.order6.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</td>
                                                )
                                            }
                                        })()}

                                        {(() => {
                                            if (val.order7 == "0") {
                                                return (
                                                    <td ></td>
                                                )
                                            } else {
                                                return (
                                                    <td >{val.order7.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</td>
                                                )
                                            }
                                        })()}

                                        {(() => {
                                            if (val.order8 == "0") {
                                                return (
                                                    <td ></td>
                                                )
                                            } else {
                                                return (
                                                    <td >{val.order8.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</td>
                                                )
                                            }
                                        })()}

                                        {(() => {
                                            if (val.order9 == "0") {
                                                return (
                                                    <td ></td>
                                                )
                                            } else {
                                                return (
                                                    <td >{val.order9.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</td>
                                                )
                                            }
                                        })()}

                                        {(() => {
                                            if (val.order10 == "0") {
                                                return (
                                                    <td ></td>
                                                )
                                            } else {
                                                return (
                                                    <td >{val.order10.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</td>
                                                )
                                            }
                                        })()}

                                        {(() => {
                                            if (val.order11 == "0") {
                                                return (
                                                    <td ></td>
                                                )
                                            } else {
                                                return (
                                                    <td >{val.order11.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</td>
                                                )
                                            }
                                        })()}

                                        {(() => {
                                            if (val.order12 == "0") {
                                                return (
                                                    <td ></td>
                                                )
                                            } else {
                                                return (
                                                    <td >{val.order12.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</td>
                                                )
                                            }
                                        })()}

                                        {(() => {
                                            if (val.order13 == "0") {
                                                return (
                                                    <td ></td>
                                                )
                                            } else {
                                                return (
                                                    <td >{val.order13.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</td>
                                                )
                                            }
                                        })()}

                                        {(() => {
                                            if (val.order14 == "0") {
                                                return (
                                                    <td ></td>
                                                )
                                            } else {
                                                return (
                                                    <td >{val.order14.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</td>
                                                )
                                            }
                                        })()}

                                        {(() => {
                                            if (val.order15 == "0") {
                                                return (
                                                    <td ></td>
                                                )
                                            } else {
                                                return (
                                                    <td >{val.order15.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</td>
                                                )
                                            }
                                        })()}

                                        {(() => {
                                            if (val.order16 == "0") {
                                                return (
                                                    <td ></td>
                                                )
                                            } else {
                                                return (
                                                    <td >{val.order16.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</td>
                                                )
                                            }
                                        })()}

                                        {(() => {
                                            if (val.order17 == "0") {
                                                return (
                                                    <td ></td>
                                                )
                                            } else {
                                                return (
                                                    <td >{val.order17.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</td>
                                                )
                                            }
                                        })()}

                                        {(() => {
                                            if (val.order18 == "0") {
                                                return (
                                                    <td ></td>
                                                )
                                            } else {
                                                return (
                                                    <td >{val.order18.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</td>
                                                )
                                            }
                                        })()}

                                        {(() => {
                                            if (val.order19 == "0") {
                                                return (
                                                    <td ></td>
                                                )
                                            } else {
                                                return (
                                                    <td >{val.order19.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</td>
                                                )
                                            }
                                        })()}

                                        {(() => {
                                            if (val.order20 == "0") {
                                                return (
                                                    <td ></td>
                                                )
                                            } else {
                                                return (
                                                    <td >{val.order20.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</td>
                                                )
                                            }
                                        })()}

                                        {(() => {
                                            if (val.order21 == "0") {
                                                return (
                                                    <td ></td>
                                                )
                                            } else {
                                                return (
                                                    <td >{val.order21.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</td>
                                                )
                                            }
                                        })()}

                                        {(() => {
                                            if (val.order22 == "0") {
                                                return (
                                                    <td ></td>
                                                )
                                            } else {
                                                return (
                                                    <td >{val.order22.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</td>
                                                )
                                            }
                                        })()}

                                        {(() => {
                                            if (val.order23 == "0") {
                                                return (
                                                    <td ></td>
                                                )
                                            } else {
                                                return (
                                                    <td >{val.order23.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</td>
                                                )
                                            }
                                        })()}

                                        {(() => {
                                            if (val.order24 == "0") {
                                                return (
                                                    <td ></td>
                                                )
                                            } else {
                                                return (
                                                    <td >{val.order24.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</td>
                                                )
                                            }
                                        })()}

                                        {(() => {
                                            if (val.order25 == "0") {
                                                return (
                                                    <td ></td>
                                                )
                                            } else {
                                                return (
                                                    <td >{val.order25.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</td>
                                                )
                                            }
                                        })()}

                                        {(() => {
                                            if (val.order26 == "0") {
                                                return (
                                                    <td ></td>
                                                )
                                            } else {
                                                return (
                                                    <td >{val.order26.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</td>
                                                )
                                            }
                                        })()}

                                        {(() => {
                                            if (val.order27 == "0") {
                                                return (
                                                    <td ></td>
                                                )
                                            } else {
                                                return (
                                                    <td >{val.order27.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</td>
                                                )
                                            }
                                        })()}

                                        {(() => {
                                            if (val.order28 == "0") {
                                                return (
                                                    <td ></td>
                                                )
                                            } else {
                                                return (
                                                    <td >{val.order28.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</td>
                                                )
                                            }
                                        })()}

                                        {(() => {
                                            if (val.order29 == "0") {
                                                return (
                                                    <td ></td>
                                                )
                                            } else {
                                                return (
                                                    <td >{val.order29.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</td>
                                                )
                                            }
                                        })()}

                                        {(() => {
                                            if (val.order30 == "0") {
                                                return (
                                                    <td ></td>
                                                )
                                            } else {
                                                return (
                                                    <td >{val.order30.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</td>
                                                )
                                            }
                                        })()}

                                        {(() => {
                                            if (val.order31 == "0") {
                                                return (
                                                    <td ></td>
                                                )
                                            } else {
                                                return (
                                                    <td >{val.order31.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</td>
                                                )
                                            }
                                        })()}

                                        {(() => {
                                            if (val.order32 == "0") {
                                                return (
                                                    <td ></td>
                                                )
                                            } else {
                                                return (
                                                    <td >{val.order32.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</td>
                                                )
                                            }
                                        })()}

                                        {(() => {
                                            if (val.order33 == "0") {
                                                return (
                                                    <td ></td>
                                                )
                                            } else {
                                                return (
                                                    <td >{val.order33.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</td>
                                                )
                                            }
                                        })()}

                                        {(() => {
                                            if (val.order34 == "0") {
                                                return (
                                                    <td ></td>
                                                )
                                            } else {
                                                return (
                                                    <td >{val.order34.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</td>
                                                )
                                            }
                                        })()}

                                        {(() => {
                                            if (val.order35 == "0") {
                                                return (
                                                    <td ></td>
                                                )
                                            } else {
                                                return (
                                                    <td >{val.order35.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</td>
                                                )
                                            }
                                        })()}
                                        {(() => {
                                            if (val.order36 == "0") {
                                                return (
                                                    <td ></td>
                                                )
                                            } else {
                                                return (
                                                    <td >{val.order36.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</td>
                                                )
                                            }
                                        })()}
                                        {(() => {
                                            if (val.order37 == "0") {
                                                return (
                                                    <td ></td>
                                                )
                                            } else {
                                                return (
                                                    <td >{val.order37.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</td>
                                                )
                                            }
                                        })()}
                                        {(() => {
                                            if (val.order38 == "0") {
                                                return (
                                                    <td ></td>
                                                )
                                            } else {
                                                return (
                                                    <td >{val.order38.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</td>
                                                )
                                            }
                                        })()}

                                        {(() => {
                                            if (val.order39 == "0") {
                                                return (
                                                    <td ></td>
                                                )
                                            } else {
                                                return (
                                                    <td >{val.order39.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</td>
                                                )
                                            }
                                        })()}
                                        {(() => {
                                            if (val.order40 == "0") {
                                                return (
                                                    <td ></td>
                                                )
                                            } else {
                                                return (
                                                    <td >{val.order40.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</td>
                                                )
                                            }
                                        })()}
                                        {(() => {
                                            if (val.order41 == "0") {
                                                return (
                                                    <td ></td>
                                                )
                                            } else {
                                                return (
                                                    <td >{val.order41.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</td>
                                                )
                                            }
                                        })()}

                                        {(() => {
                                            if (val.order42 == "0") {
                                                return (
                                                    <td ></td>
                                                )
                                            } else {
                                                return (
                                                    <td >{val.order42.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</td>
                                                )
                                            }
                                        })()}
                                        {(() => {
                                            if (val.order43 == "0") {
                                                return (
                                                    <td ></td>
                                                )
                                            } else {
                                                return (
                                                    <td >{val.order43.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</td>
                                                )
                                            }
                                        })()}

                                        {(() => {
                                            if (val.order44 == "0") {
                                                return (
                                                    <td ></td>
                                                )
                                            } else {
                                                return (
                                                    <td >{val.order44.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</td>
                                                )
                                            }
                                        })()}
                                        {(() => {
                                            if (val.order45 == "0") {
                                                return (
                                                    <td ></td>
                                                )
                                            } else {
                                                return (
                                                    <td >{val.order45.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</td>
                                                )
                                            }
                                        })()}
                                        {(() => {
                                            if (val.order46 == "0") {
                                                return (
                                                    <td ></td>
                                                )
                                            } else {
                                                return (
                                                    <td >{val.order46.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</td>
                                                )
                                            }
                                        })()}
                                        {(() => {
                                            if (val.order47 == "0") {
                                                return (
                                                    <td ></td>
                                                )
                                            } else {
                                                return (
                                                    <td >{val.order47.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</td>
                                                )
                                            }
                                        })()}
                                        {(() => {
                      if (val.order48 == "0") {
                        return (
                          <td ></td>
                        )
                      } else {
                        return (
                          <td >{val.order48.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</td>
                        )
                      }
                    })()}
                    {(() => {
                      if (val.order49 == "0") {
                        return (
                          <td ></td>
                        )
                      } else {
                        return (
                          <td >{val.order49.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</td>
                        )
                      }
                    })()}
                    <td  >{val.order50}</td>
                    <td  >{val.order51}</td>
                    <td  >{val.order52}</td>
                                        <td style={{ fontSize: 14, color: 'red' }} >{val.sum_price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                        <tfoot>
                            {sum_row.map((val, key) => {
                                return (
                                    <tr>
                                        <td style={{ fontSize: 14 }}>รวม</td>
                                        <td style={{ fontSize: 14, color: 'red' }}>{val.sum_row0.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</td>
                                        <td style={{ fontSize: 14, color: 'red' }}>{val.sum_row1.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</td>
                                        <td style={{ fontSize: 14, color: 'red' }}>{val.sum_row2.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</td>
                                        <td style={{ fontSize: 14, color: 'red' }}>{val.sum_row3.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</td>
                                        <td style={{ fontSize: 14, color: 'red' }}>{val.sum_row4.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</td>
                                        <td style={{ fontSize: 14, color: 'red' }}>{val.sum_row5.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</td>
                                        <td style={{ fontSize: 14, color: 'red' }}>{val.sum_row6.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</td>
                                        <td style={{ fontSize: 14, color: 'red' }}>{val.sum_row7.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</td>
                                        <td style={{ fontSize: 14, color: 'red' }}>{val.sum_row8.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</td>
                                        <td style={{ fontSize: 14, color: 'red' }}>{val.sum_row9.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</td>
                                        <td style={{ fontSize: 14, color: 'red' }}>{val.sum_row10.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</td>
                                        <td style={{ fontSize: 14, color: 'red' }}>{val.sum_row11.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</td>
                                        <td style={{ fontSize: 14, color: 'red' }}>{val.sum_row12.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</td>
                                        <td style={{ fontSize: 14, color: 'red' }}>{val.sum_row13.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</td>
                                        <td style={{ fontSize: 14, color: 'red' }}>{val.sum_row14.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</td>
                                        <td style={{ fontSize: 14, color: 'red' }}>{val.sum_row15.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</td>
                                        <td style={{ fontSize: 14, color: 'red' }}>{val.sum_row16.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</td>
                                        <td style={{ fontSize: 14, color: 'red' }}>{val.sum_row17.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</td>
                                        <td style={{ fontSize: 14, color: 'red' }}>{val.sum_row18.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</td>
                                        <td style={{ fontSize: 14, color: 'red' }}>{val.sum_row19.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</td>
                                        <td style={{ fontSize: 14, color: 'red' }}>{val.sum_row20.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</td>
                                        <td style={{ fontSize: 14, color: 'red' }}>{val.sum_row21.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</td>
                                        <td style={{ fontSize: 14, color: 'red' }}>{val.sum_row22.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</td>
                                        <td style={{ fontSize: 14, color: 'red' }}>{val.sum_row23.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</td>
                                        <td style={{ fontSize: 14, color: 'red' }}>{val.sum_row24.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</td>
                                        <td style={{ fontSize: 14, color: 'red' }}>{val.sum_row25.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</td>
                                        <td style={{ fontSize: 14, color: 'red' }}>{val.sum_row26.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</td>
                                        <td style={{ fontSize: 14, color: 'red' }}>{val.sum_row27.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</td>
                                        <td style={{ fontSize: 14, color: 'red' }}>{val.sum_row28.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</td>
                                        <td style={{ fontSize: 14, color: 'red' }}>{val.sum_row29.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</td>
                                        <td style={{ fontSize: 14, color: 'red' }}>{val.sum_row30.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</td>
                                        <td style={{ fontSize: 14, color: 'red' }}>{val.sum_row31.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</td>
                                        <td style={{ fontSize: 14, color: 'red' }}>{val.sum_row32.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</td>
                                        <td style={{ fontSize: 14, color: 'red' }}>{val.sum_row33.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</td>
                                        <td style={{ fontSize: 14, color: 'red' }}>{val.sum_row34.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</td>
                                        <td style={{ fontSize: 14, color: 'red' }}>{val.sum_row35.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</td>
                                        <td style={{ fontSize: 14, color: 'red' }}>{val.sum_row36.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</td>
                                        <td style={{ fontSize: 14, color: 'red' }}>{val.sum_row37.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</td>
                                        <td style={{ fontSize: 14, color: 'red' }}>{val.sum_row38.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</td>
                                        <td style={{ fontSize: 14, color: 'red' }}>{val.sum_row39.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</td>
                                        <td style={{ fontSize: 14, color: 'red' }}>{val.sum_row40.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</td>
                                        <td style={{ fontSize: 14, color: 'red' }}>{val.sum_row41.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</td>
                                        <td style={{ fontSize: 14, color: 'red' }}>{val.sum_row42.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</td>
                                        <td style={{ fontSize: 14, color: 'red' }}>{val.sum_row43.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</td>
                                        <td style={{ fontSize: 14, color: 'red' }}>{val.sum_row44.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</td>
                                        <td style={{ fontSize: 14, color: 'red' }}>{val.sum_row45.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</td>
                                        <td style={{ fontSize: 14, color: 'red' }}>{val.sum_row46.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</td>
                                        <td style={{ fontSize: 14, color: 'red' }}>{val.sum_row47.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</td>
                                        <td style={{ fontSize: 14, color: 'red' }}>{val.sum_row48.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</td>
                    <td style={{ fontSize: 14, color: 'red' }}>{val.sum_row49.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</td>
                    <td style={{ fontSize: 14, color: 'red' }}>{val.sum_row50}</td>
                    <td style={{ fontSize: 14, color: 'red' }}>{val.sum_row51}</td>
                    <td style={{ fontSize: 14, color: 'red' }}>{val.sum_row52}</td>
                                        {sum_all.map((val, key) => {
                                            return (
                                                <td style={{ fontSize: 14, color: 'red' }}>{val.sum_all.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</td>
                                            );
                                        })}
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
export default Order_filter_date;
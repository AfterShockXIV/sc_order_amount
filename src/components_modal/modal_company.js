
import { useEffect, useState } from "react";
import Axios from "axios";
import { Trash } from 'react-bootstrap-icons';
const Add = () => {
    const [company, setCompany] = useState("");
    const [po_number, setPo_number] = useState("");
    const [invoice_number, setInvoice_number] = useState("");
    const [price, setPrice] = useState(0);
    const [status_delivery, setStatus_delivery] = useState([]);
    const [date_start, setDate_start] = useState("");
    const [date_end, setDate_end] = useState("");
    const [counter, setCounter] = useState(0);
    const server = "http://localhost:3010";


    return (
        <body >
            <div class=" container">
                <div class="col-md-12 scroller-table_add"  >
                    <form >
                        <div class="row"> 
                        <div class="col-sm-5 mb-3">
                            <select class="form-control sinput">
                                <option selected >ชื่อบริษัท</option>
                                <option value="lime">Lime</option>
                                <option value="coconut">Coconut</option>
                                <option value="mango">Mango</option>
                            </select>
                        </div>

                        <div class="col-sm-5 mb-3">
                        <input class="form-control sinput" type="text" placeholder="ราคา"/>
                        </div>

                        <div class="col-sm-2 mb-3">
                       <button class="btn btn-primary">บันทึก</button>
                        </div>
                        </div>
                       
                      
                    </form>
                </div>
            </div>

        </body>
    );
}
export default Add;
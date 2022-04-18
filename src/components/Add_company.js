
import {useState } from "react";
import Axios from "axios";
import server from "../configs/portserver";
const Add = () => {
    const [company, setCompany] = useState([]);
    const [id_code, setID_code] = useState("");
    const [company_name, setCompany_name] = useState("");
   
    const [show, setShow] = useState(true);
    const addCompany_name = () => {
        Axios.post(server + "/Add_company", {
            company_name: company_name,
            id_code: id_code,
        }).then(() => {
            setCompany([
                ...company,
                {
                    company: company_name,
                    id_code: id_code,

                },
            ]);
        });
    };

    const delete_delivery = (id) => {

    };
    return (
        <body >
            <div class=" container">
                <div class="col-md-12 "  >
                    <form >
                        <div class="row">
                            <div class="col-sm-5 mb-3">

                                <input class="form-control sinput" type="text" placeholder="ชื่อบริษัท" 
                                 onChange={(event) => {
                                    setCompany_name(event.target.value)
                                  }}/>

                            </div>

                            <div class="col-sm-5 mb-3">
                                <input class="form-control sinput" type="text" placeholder="ID CODE"
                                 onChange={(event) => {
                                    setID_code(event.target.value)
                                  }} />
                            </div>

                            <div class="col-sm-2 mb-3">
                                <button class="btn btn-primary sinput" style={{width:"100%"}} onClick={addCompany_name}>บันทึก</button>
                            </div>
                        </div>


                    </form>
                </div>
            </div>

        </body>
    );
}
export default Add;
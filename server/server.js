const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const path = require('path');
const bodyParser = require('body-parser');
const authRoute = require("./routes/auth");

app.use(cors());
app.use(express.json());

app.set('views', __dirname + '/views'); // set express to look in this folder to render our view
app.set('view engine', 'ejs'); // configure template engine
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // parse form data client
app.use(express.static(path.join(__dirname, 'public'))); // configure express to use public folder

app.use(express.urlencoded({ extended: false }));
app.set("views", "views");
app.use(authRoute);
const port = 3011;

//Database Connect
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Venine@2020',
  database: 'sc_order_amount'
});
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Connected to database');
});
global.db = db;
app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});

///รับค่าจาก  react


app.post("/Add_company", (req, res) => {
  
  const company_name = req.body.company_name;
  const id_code = req.body.id_code;
 
  db.query("SELECT * FROM company  ", (err, result) => {
    if (err) {
      console.log(err);
    }
    let company_name_q = result[0].company_name
  
    if (company_name_q == company_name) {
      console.log("มีข้อมูลนี้แล้ว")
    } else {
      db.query("INSERT INTO company (company_name , id_code ) VALUES (?,?)",
        [company_name, id_code],

        (err, result) => {
          if (err) {
            console.log(err);
          } else {
            res.send("Values Inserted");
            console.log("เพิ่มข้อมูลสำเร็จ")
          }
        }
      );
    }
  });
});


app.post("/Add_Order", (req, res) => {
  const company_id = req.body.company_id;
  const price = req.body.price;
  const status = "wait" 
  const date = req.body.date ; 
  console.log(company_id)
  console.log(price)
  console.log(status)
  console.log(date)

  db.query(
    "INSERT INTO data_order( company_id, price ,status ,date_added) VALUES (?,?,?,?)",
    [company_id, price , status ,date],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
     
      }
    }
  );
});

app.get("/select_company", (req, res) => {
  db.query("SELECT * FROM company ", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);

    }
  });
});


app.get("/Company", (req, res) => {
  db.query("SELECT * FROM company ", (err, result) => {
    if (err) {
      console.log(err);
    } else {

      res.send(result);
    }
  });
});


//orderทั้งหมด 

app.get("/Orderall", (req, res) => {
  //วนค่า Array
  let data_array_name = [];
  let data_sum_row = [];

  //company
  db.query("SELECT * FROM company  ", (err, result) => {
    if (err) {
      console.log(err);
    } let company = result;
    result.forEach((data, key) => {
      data_sum_row.push("SUM(CASE WHEN data_order.company_id = " + data.company_id + " THEN data_order.price else 0  END) as sum_row" + key + " ")
      data_array_name.push("SUM(CASE WHEN data_order.company_id = " + data.company_id + " THEN data_order.price else 0  END) as order" + key + " ")
    });
    //sum

    db.query("SELECT  SUM(price) as sum_all FROM `data_order` ", (err, result) => {
      if (err) {
        console.log(err);
      } let sum_all = result;
    db.query("SELECT  " + data_sum_row + "  FROM `data_order`  INNER JOIN company on (data_order.company_id = company.company_id ) ", (err, result) => {
      if (err) {
        console.log(err);
      } let sum_row = result;
      //data_order
      db.query("SELECT  SUM(data_order.price) as sum_price , data_order.date_added  as date , " + data_array_name + "    FROM `data_order`  INNER JOIN company on (data_order.company_id = company.company_id ) GROUP BY date order by date DESC ", (err, result) => {
        if (err) {
          console.log(err);
        } else {
          // let data_new = []
          // result.forEach((data,key)=>{
          //   data_new.push[{
          //     order : data.sum_price
          //   }]
          // })
          // console.log(data_new)
          let data_json = {
            order: {
              "data_order": result
            },
            "sum_all" : sum_all , 
            "company": company,
            "sum_row": sum_row
          }
          res.send(data_json);


        }
      });
    });
    });
  });
});
// app.get("/Orderall", (req, res) => {
//   //วนค่า Array
//   let data_array_name = [];
//   let data_sum_row = [];

//   //company
//   db.query("SELECT * FROM company  ", (err, result) => {
//     if (err) {
//       console.log(err);
//     } let company = result; 
//     result.forEach((data, key) => {
//       data_sum_row.push("SUM(CASE WHEN data_order.company_id = " + data.company_id + " THEN data_order.price else 0  END) as sum_row" + key + " ")
//       data_array_name.push("SUM(CASE WHEN data_order.company_id = " + data.company_id + " THEN data_order.price else 0  END) as order" + key + " ")
//     });
//     //sum

//     db.query("SELECT  SUM(price) as sum_all FROM `data_order` ", (err, result) => {
//       if (err) {
//         console.log(err);
//       } let sum_all = result;
//     db.query("SELECT  " + data_sum_row + "  FROM `data_order`  INNER JOIN company on (data_order.company_id = company.company_id ) ", (err, result) => {
//       if (err) {
//         console.log(err);
//       } let sum_row = result;
//       //data_order
//       db.query("SELECT  SUM(data_order.price) as sum_price , data_order.date_added  as date , " + data_array_name + "    FROM `data_order`  INNER JOIN company on (data_order.company_id = company.company_id ) GROUP BY date order by date DESC ", (err, result) => {
//         if (err) {
//           console.log(err);
//         } else {
//           let data_new = []
//           // company.forEach((data_count , key_c) => {
//           //     // console.log(order + +key_c)
//           //     console.log(result[key_c].order1)
//           // })
//          console.log(data_new)
//           // console.log(result)
//           let data_json = {
//             order: {
//               "data_order": result
//             },
//             "sum_all" : sum_all , 
//             "company": company,
//             "sum_row": sum_row
//           }
//           res.send(data_json);


//         }
//       });
//     });
//     });
//   });
// });

///filter วันที่ ถึง วันที่ 

app.get("/Order_filter_data/:start/:end", (req, res) => {
  //วนค่า Array
  let data_array_name = [];
  let data_sum_row = [];
  let start = req.params.start;
  let end = req.params.end;
  //company
  db.query("SELECT * FROM company  ", (err, result) => {
    if (err) {
      console.log(err);
    } let company = result;
    result.forEach((data, key) => {
      data_sum_row.push("SUM(CASE WHEN data_order.company_id = " + data.company_id + " THEN data_order.price else 0 END) as sum_row" + key + " ")
      data_array_name.push("SUM(CASE WHEN data_order.company_id = " + data.company_id + " THEN data_order.price else 0  END) as order" + key + " ")
    });

    //sum
    db.query("SELECT  SUM(price) as sum_all FROM `data_order`  WHERE date_added  BETWEEN  '" + start + "' and '" + end + "'", (err, result) => {
      if (err) {
        console.log(err);
      } let sum_all = result;
    db.query("SELECT  " + data_sum_row + "  FROM `data_order`  INNER JOIN company on (data_order.company_id = company.company_id )  WHERE data_order.date_added  BETWEEN  '" + start + "' and '" + end + "' ", (err, result) => {
      if (err) {
        console.log(err);
      } let sum_row = result;
      //data_order
      db.query("SELECT SUM(data_order.price) as sum_price , data_order.date_added , " + data_array_name + "   FROM `data_order`  INNER JOIN company on (data_order.company_id = company.company_id ) WHERE data_order.date_added  BETWEEN  '" + start + "' and '" + end + "' GROUP BY data_order.date_added order by data_order.date_added DESC  ", (err, result) => {
        if (err) {
          console.log(err);
        } else {
          let data_json = {
            order: {
              "data_order": result
            },
            "sum_all": sum_all , 
            "company": company,
            "sum_row": sum_row
          }
          res.send(data_json);
        }
      });
    });
    });
  });
});


//Filter company อย่างเดียว


app.get("/Company_target/:company_name/:company_id", (req, res) => {
  //วนค่า Array
  let data_array_name = [];
  let data_sum_row = [];
  let company_name = req.params.company_name;
  let company_id = req.params.company_id;
  //company
  db.query("SELECT * FROM company where company_name = '" + company_name + "' ", (err, result) => {
    if (err) {
      console.log(err);
    } let company = result;
    result.forEach((data, key) => {
      data_sum_row.push("SUM(CASE WHEN data_order.company_id = " + data.company_id + " THEN data_order.price  else 0 END) as sum_row" + key + " ")
      data_array_name.push("SUM(CASE WHEN data_order.company_id = " + data.company_id + " THEN data_order.price  else 0 END) as order" + key + " ")
    });
    //sum
    db.query("SELECT  " + data_sum_row + " FROM `data_order` INNER JOIN company on (data_order.company_id = company.company_id ) ", (err, result) => {
      if (err) {
        console.log(err);
      } let sum_row = result;
      //data_order
      db.query("SELECT * FROM `data_order`  where company_id = '" + company_id + "' order by date_added desc ", (err, result) => {
        if (err) {
          console.log(err);
        } else {
          let data_json = {
            order: {
              "data_order": result
            },
            "company": company,
            "sum_row": sum_row
          }
          res.send(data_json);
         

        }
      });
    });
  });
});


//Filter company วันที่


app.get("/Company_filter_date/:company_name/:company_id/:start/:end", (req, res) => {
  //วนค่า Array
  let data_array_name = [];
  let data_sum_row = [];
  let company_name = req.params.company_name;
  let company_id = req.params.company_id;
  let start = req.params.start;
  let end = req.params.end;
  //company
  db.query("SELECT * FROM company where company_name = '" + company_name + "' ", (err, result) => {
    if (err) {
      console.log(err);
    } let company = result;
    result.forEach((data, key) => {
      data_sum_row.push("SUM(CASE WHEN data_order.company_id = " + data.company_id + " THEN data_order.price else 0  END) as sum_row" + key + " ")
      data_array_name.push("SUM(CASE WHEN data_order.company_id = " + data.company_id + " THEN data_order.price else 0 END) as order" + key + " ")
    });
    //sum
    db.query("SELECT  " + data_sum_row + "  FROM `data_order`  INNER JOIN company on (data_order.company_id = company.company_id ) where data_order.company_id = '" + company_id + "' and  data_order.date_added  BETWEEN  '" + start + "' and '" + end + "'  ", (err, result) => {
      if (err) {
        console.log(err);
      } let sum_row = result;
      //data_order
      db.query("SELECT * FROM `data_order`  where company_id = '" + company_id + "' and  date_added  BETWEEN  '" + start + "' and '" + end + "'  order by date_added desc  ", (err, result) => {
        if (err) {
          console.log(err);
        } else {
          let data_json = {
            order: {
              "data_order": result
            },
            "company": company,
            "sum_row": sum_row
          }
          res.send(data_json);
         

        }
      });
    });
  });
});

//ลบข้อมูล Company id 
app.get("/Delete_company/:id/:name", (req, res) => {

  async function Delete_company() {

    const id = req.params.id;
    const name = req.params.name
    await db.query("INSERT INTO data_order_backup (company_id,price, date_delete) SELECT company_id , price , NOW()  FROM data_order WHERE company_id = '" + id + "'", (err, result) => {
      if (err) {
        console.log(err);
      }
    });

    await db.query("INSERT INTO company_backup (company_id , company_name , id_code , date_delete) SELECT company_id ,company_name , id_code , NOW()  FROM company WHERE company_id = '" + id + "'", (err, result) => {
      if (err) {
        console.log(err);
      }
    });

    await db.query("DELETE FROM data_order WHERE company_id = ?", id, (err, result) => {
      if (err) {
        console.log(err);
      } 
    });

    await db.query("DELETE FROM company WHERE company_id = ?", id, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("<h3 >ลบข้อมูลสำเร็จ</h3>")

      }
    });
  }

  Delete_company()
});


//ลบข้อมูล ราคา
app.get("/Delete_price/:company/:company_id/:id", (req, res) => {
  async function Delete_price() {
    const id = req.params.id;
    const company = req.params.company;
    const company_id = req.params.company_id;
    await db.query("INSERT INTO data_order_backup (company_id,price, date_delete) SELECT company_id , price , NOW()  FROM data_order WHERE order_id = '" + id + "'", (err, result) => {
      if (err) {
        console.log(err);
      }
    });

    await db.query("DELETE FROM data_order WHERE order_id = ?", id, (err, result) => {
      if (err) {
        console.log(err);
      } 
      res.redirect("http://192.168.30.226:3012/Company_target/"+company+"/"+company_id)
    });
  }
  Delete_price()
});

//update name
app.get("/Update_company/:id/:name/:id_code", (req, res) => {
  async function Update_company() {
    const id = req.params.id;
    const name = req.params.name;
    const id_code = req.params.id_code;

    await db.query("INSERT INTO update_company_backup (company_id,id_code,company_name,date_update) SELECT company_id,id_code,company_name,NOW()  FROM company WHERE company_id = '" + id + "'", (err, result) => {
      if (err) {
        console.log(err);
      }
    });

    await db.query("UPDATE company SET company_name = '"+ name +"' , id_code = '"+ id_code +"'WHERE company_id = '"+id+"' " ,(err, result) => {
      if (err) {
        console.log(err);
      } 
      res.send("<h3 >UPDATE ข้อมูลสำเร็จ</h3>")
    });
  }
  Update_company()
});

app.get("/Update_company/:id/:name/", (req, res) => {

      res.send("<h3 >UPDATE ข้อไม่มูลสำเร็จ</h3>")
});
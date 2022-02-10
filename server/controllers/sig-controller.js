const sig_price = (req, res, next) => {
    let order_id = req.params.id

    let query = "SELECT data_order.order_id ,data_order.date_added , data_order.company_id , data_order.price , company.company_name FROM data_order INNER JOIN company on (  data_order.company_id = company.company_id) where data_order.order_id = '" + order_id + "' ";

    db.query(query, (err, result) => {
        if (err) {
            res.redirect('/');
        }console.log(result);
        res.render("sig-price", {
            data_order: result[0],
            data: {
                message: "",
                class: ""
            }
        })
    })
};
module.exports.sig_price = sig_price;

const post_sig_price = (req, res, next) => {
    let order_id = req.body.order_id;
    let sig_price = req.body.sig_price;
    let company_name = req.body.company_name;
    let company_id = req.body.company_id;
    let status = "success"
    let query = "UPDATE `data_order` SET `sig_price` =  '" + sig_price + "' , `status` = '" + status + "' WHERE `data_order`.`order_id` = '" + order_id + "' ";
    db.query(query, (err, result) => {
        if (err) {
        }
        res.redirect("http://192.168.30.226:3012/Company_target/"+company_name+"/"+company_id)
    });

}
module.exports.post_sig_price = post_sig_price;
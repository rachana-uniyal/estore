const express = require("express");
const CryptoJS = require("crypto-js")
const payment = express();

payment.post("/pay",(req,res)=>{
    try{
        let targetURL = payuPayment(req.body);
        res.status(201).json(targetURL);
    }catch(ex){

    }

})

const payuPayment = (payParams)=>{
    const config = {

        Merchantkey: "cD0hebOp",
        salt: "Y5IgSSe17Y",
        successURL: "http://localhost:5000/api/receipt",
        failureURL: "http://localhost:5000/api/receipt"
    }

    let hashString =
        config.Merchantkey + "|" + payParams.txnid + "|" + payParams.amount + "|" + payParams.productinfo + "|" + payParams.firstname + "|" + payParams.email + '|||||||||||' + config.salt;

    let hash = CryptoJS.SHA512(hashString).toString(CryptoJS.enc.Hex);
    let paramObj = {};
    try {
        paramObj = {
            hash,
            key:config.Merchantkey,
            txnid: payParams.txnid,
            amount: payParams.amount,
            firstname: payParams.firstname,
            email: payParams.email,
            phone: payParams.phone,
            productinfo: payParams.productinfo,
            surl: config.successURL,
            furl: config.failureURL,
            lastname: payParams.lastname,
            curl: "",
            country: "India",
            zipcode: "",
            udf1: "",
            udf2: "",
            udf3: "",
            udf4: "",
            udf5: "",
            pg: ""

        }

    }
    catch (ex) {

    }

    let result = {
        params: paramObj,
        actionURL: "https://test.payu.in/_payment",
        gateway: "PAYUBIZ"
    }

    return result;
}

module.exports=payment;
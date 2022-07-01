const express = require("express");
const product = express();
const database= require("../Database")

product.get("/categories",(req,res)=>{
    let appData={
        isError : false,
        data:[]
    };
    database.connection.getConnection((err,connection)=>{
        if(err){
            appData.isError = True;
            appData.data = err;
            res.status(500).json(appData);
        } else{
            connection.query("Select * from categories",(error,rows)=>{
                if(err){
                    appData.isError = True;
                    appData.data = err;
                    res.status(500).json(appData);
                } else{
                    appData.data=rows;
                    res.status(200).json(appData);
                }
            })
        }
    })

})

product.get("/products",(req,res)=>{
    let appData={
        isError : false,
        data:[]
    };
    database.connection.getConnection((err,connection)=>{
        if(err){
            appData.isError = True;
            appData.data = err;
            res.status(500).json(appData);
        } else{
            connection.query("Select * from products",(error,rows)=>{
                if(err){
                    appData.isError = True;
                    appData.data = err;
                    res.status(500).json(appData);
                } else{
                    appData.data=rows;
                    res.status(200).json(appData);
                }
            })
        }
    })

})

module.exports = product;
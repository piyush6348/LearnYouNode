
const route = require('express').Router();
const db = require('../db')


route.post('/add',(request,response)=>{
    let prodID = request.body.prodID;
    // if present in salesTable the update it's count
    // else insert in table with count 1

    db.salesTable.count({where:{id:prodID}})
        .then(count=>{
            if(count!=0){
                // update the count
                db.salesTable.find({where:{id:prodID}})
                    .then(function (saleRecord) {
                        saleRecord.updateAttributes({
                            qty:saleRecord.qty+1
                        })
                        response.send({success:true});
                    })
            }else{
                db.salesTable.create({id:prodID,qty:1});
                response.send({success:true})
            }
        })
})
module.exports = route;
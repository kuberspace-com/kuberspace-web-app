    req.database.Product_Inventory.find({
       varients:{
        $elemMatch: {  $or:[
            {upc:req.body.varients[0].upc},
            {sku:req.body.varients[0].sku},
            {model:req.body.varients[0].model}
          ]}
   }})
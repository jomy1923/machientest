const mongoose = require('mongoose')
const Product = mongoose.model("Product")

function productController(){
    return{
        dashboard(req,res){
            Product.find().populate('postedBy','_id username').then((Products)=>{
                res.json({Products})
            }).catch((err)=>{
            
                console.log('err45',err);
            })
        },
        AddProduct(req,res){
            
            const{ProductName,Price,Quantity,Category}= req.body
            console.log('ProductName,Price,Quantity,Category',ProductName,Price,Quantity,Category);
            if(!ProductName || !Price || !Quantity || !Category){
               return res.json({error:'please enter all the fields in it'})
            }else{
                req.user.password = undefined
                const product = new Product({
                    ProductName,
                    Price,
                    Quantity, 
                    Category,
                    postedBy:req.user
                })
                product.save().then((result)=>{
                
                    res.json({product:result})
                }).catch((err)=>{
                    console.log('err23',err);
                })
                
            }
        }




    }
}
module.exports=productController
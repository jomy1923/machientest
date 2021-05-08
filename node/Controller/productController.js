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
        },
        limit(req,res){
            Product.find().sort({'updatedAt':'desc'}).limit(4)
            .exec((err,Products)=>{
                if(err){
                    return res.json({message:'NO products'})
                }
                return res.json({Products})
            })
             
        },
        Search(req,res){
            let productPattern = new RegExp('^'+req.body.query)
            Product.find({ProductName:{$regex:productPattern}})
            .then(product=>{
                res.json({product})
                
            }).catch(err=>{
                console.log(err);
            })
        },
        DeleteProduct(req,res){
          
            const proId = req.params.id
            Product.deleteOne({_id:proId}).exec((err,data)=>{
                if(err){
                    res.json({error:'not permitted'})
                }else{
                    res.json({message:'deleted successfully'})
                }
            })
        },
        editProduct(req,res){
            const proId = req.params.id
            console.log('proId',proId);
            Product.findOne({id:proId}).then((Product)=>{
                console.log(Product);
                res.json({Product})
            }).catch((err)=>{
                console.log((err));
                
            })
    
        }

    }
}
module.exports=productController
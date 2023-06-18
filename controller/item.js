const Item=require('../model/item');

exports.addItem = async(req, res, next)=>{
    const name = req.body.name;
    const description = req.body.description;
    const price=req.body.price;
    const quantity=req.body.quantity;

    const data = await Item.create({
        name:name,
        description:description,
        price:price,
        quantity:quantity
        
    });
    res.status(201).json({itemDetails:data})
}

exports.getItem = async(req, res, next)=>{
    const items=await Item.findAll();
    res.status(200).json({allItems:items})
}

exports.deleteItem = async(req, res, next)=>{
    const itemId=req.params.id;
    try{
        await Item.destroy({where:{id:itemId}})
        res.status(200).json({message:'todo deleted successfully'})
    }
    catch(error){
        res.status(500).json({error:error})
    }
}
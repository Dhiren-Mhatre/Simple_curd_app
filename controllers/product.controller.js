const getProducts= async(req,res)=>{
  try{
    const products = await Product.find({});
    res.status(200).send(products);
  }
  catch(err){
    res.status(500).send(err.message);
  }
}

module.exports = {
  getProducts
}
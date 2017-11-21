//
// usage: clevis contract count Adder
//
module.exports = (contract,params,args)=>{
  contract.methods.count().call().then((output1)=>{
    console.log(output1)
  })
}

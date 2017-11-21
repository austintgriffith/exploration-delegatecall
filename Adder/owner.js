//
// usage: clevis contract owner Adder
//
module.exports = (contract,params,args)=>{
  contract.methods.owner().call().then((output1)=>{
    console.log(output1)
  })
}

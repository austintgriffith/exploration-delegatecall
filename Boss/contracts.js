//
// usage: clevis contract contracts Boss
//
module.exports = (contract,params,args)=>{
  contract.methods.contracts(params.web3.utils.fromAscii(args[3])).call().then((output1)=>{
    console.log(output1)
  })
}

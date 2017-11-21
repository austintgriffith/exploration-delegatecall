//
// usage: clevis contract setContract Boss ##accountindex## _id _address
//

module.exports = (contract,params,args)=>{
  const DEBUG = false
  if(DEBUG) console.log("**== Running setContract("+args[4]+","+args[5]+") as account ["+params.accounts[args[3]]+"]")
  return contract.methods.setContract(params.web3.utils.fromAscii(args[4]),args[5]).send({
    from: params.accounts[args[3]],
    gas: params.gas,
    gasPrice:params.gasPrice
  })
}

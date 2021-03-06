//
// usage: clevis contract doAdd Boss ##accountindex## 
//

module.exports = (contract,params,args)=>{
  const DEBUG = false
  if(DEBUG) console.log("**== Running doAdd() as account ["+params.accounts[args[3]]+"]")
  return contract.methods.doAdd().send({
    from: params.accounts[args[3]],
    gas: params.gas,
    gasPrice:params.gasPrice
  })
}

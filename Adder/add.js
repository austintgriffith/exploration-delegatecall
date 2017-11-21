//
// usage: clevis contract add Adder ##accountindex## 
//

module.exports = (contract,params,args)=>{
  const DEBUG = false
  if(DEBUG) console.log("**== Running add() as account ["+params.accounts[args[3]]+"]")
  return contract.methods.add().send({
    from: params.accounts[args[3]],
    gas: params.gas,
    gasPrice:params.gasPrice
  })
}

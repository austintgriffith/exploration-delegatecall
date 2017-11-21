//
// usage: node contract Add Adder
//
module.exports = (contract,params,args)=>{
  contract.getPastEvents('Add', {
      fromBlock: params.blockNumber,
      toBlock: 'latest'
  }, function(error, events){
    console.log(events);
  })
}

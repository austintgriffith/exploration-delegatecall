//
// usage: node contract OwnershipTransferred Adder
//
module.exports = (contract,params,args)=>{
  contract.getPastEvents('OwnershipTransferred', {
      fromBlock: params.blockNumber,
      toBlock: 'latest'
  }, function(error, events){
    console.log(events);
  })
}

pragma solidity ^0.4.15;

contract Boss is Ownable{

  mapping ( bytes32 => address ) public contracts;

  function Boss(address _adderAddress) public {
    contracts["Adder"] = _adderAddress;
  }

  function setContract(bytes32 _id,address _address) onlyOwner public returns (bool) {
    contracts[_id] = _address;
    return true;
  }

  function doAdd() public returns (bool) {
    return contracts["Adder"].call(bytes4(sha3("add()")));
  }

}

import 'zeppelin-solidity/contracts/ownership/Ownable.sol';

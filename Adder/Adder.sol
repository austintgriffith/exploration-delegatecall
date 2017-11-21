pragma solidity ^0.4.15;

contract Adder is Ownable{

  uint public count;

  event Add(address _sender,uint _count);

  function Adder() public {
    count=0;
  }

  function add() /*onlyOwner*/ public returns (bool) {
    count++;
    Add(msg.sender,count);
  }

}

import 'zeppelin-solidity/contracts/ownership/Ownable.sol';

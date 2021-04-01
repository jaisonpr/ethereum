// SPDX-License-Identifier: MIT
pragma solidity 0.7.3;
import "hardhat/console.sol";    
 
contract Register {
    string private info;
    
    function getInfo() public view returns (string memory) {
        return info;
    }
 
    function setInfo(string memory _info) public {
        console.log("Alterando de: %s para %s", info, _info);
        info = _info;
    }
}
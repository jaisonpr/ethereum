pragma solidity 0.5.16;
 
contract Adoption {
 
    address[16] public adopters;
 
    // Adopting a pet
    function adopt(uint petId) public returns (uint) {
      require(adopters[petId] == 0x0000000000000000000000000000000000000000, "Adopted");
      require(petId >= 0 && petId <= 15);

      adopters[petId] = msg.sender;

      return petId;
    }
 
    // Retrieving the adopters
    function getAdopters() public view returns (address[16] memory) {
        return adopters;
    }
    
}
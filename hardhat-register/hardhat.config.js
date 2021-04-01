require("@nomiclabs/hardhat-waffle");

const GOERLI_PRIVATE_KEY = "6721c4f80f8376429513b05763d9beffe8003b976fff77592b02c67291e8b96d";


const ROPSTEN_PRIVATE_KEY = "6721c4f80f8376429513b05763d9beffe8003b976fff77592b02c67291e8b96d";
const INFURA_PROJECT_ID = "0d396f81074c4474bf6b064c0b6f0d6e";

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.7.3",
  networks: {
    ropsten: {
      url: `https://ropsten.infura.io/v3/${INFURA_PROJECT_ID}`,
      accounts: [`0x${ROPSTEN_PRIVATE_KEY}`]
    },
    goerli: {
      url: `https://rpc.goerli.mudit.blog/`,
      accounts: [`0x${GOERLI_PRIVATE_KEY}`]
    }
  }  
};

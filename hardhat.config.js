require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
require('dotenv').config();

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

task("add-voters", "Gives voting rights to predefined voters")
  .setAction(async () => {
    const voters = [
      '0xA74784abA69BE5b0813395402a7Cc21CFA9E32C6',
      '0xB71E5740eC96d7Bd658Dc8D385FD94D842A441a2'
    ];

    const MyBallotContract = await ethers.getContractFactory("Ballot");
    const contract = await MyBallotContract.attach('0xd15eecc1e5c8B1F1CdBAE33E45337dB33573B35C');
    
    for (const voter in voters) {
      await contract.giveRightToVote(voter);

      console.log("A voting right given to: ", voter);
    }
  })

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */

module.exports = {
  solidity: "0.8.4",
  paths: {
    artifacts: './src/artifacts'
  },
  networks: {
    hardhat: {
      chainId: 1337
    },
    ropsten: {
      url: `https://ropsten.infura.io/v3/${process.env.INFURA_ROPSTEN_NODE_PROJECT_ID}`,
      accounts: [`0x${process.env.ROPSTEN_ACCOUNT_PRIVATE_KEY}`]
    }
  }
};

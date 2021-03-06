const hre = require("hardhat");

require('dotenv').config();

async function main() {
    const voters = [
        '0xA74784abA69BE5b0813395402a7Cc21CFA9E32C6',
        '0xB71E5740eC96d7Bd658Dc8D385FD94D842A441a2'
    ];

    const MyBallotContract = await hre.ethers.getContractFactory("Ballot");
    const contract = await MyBallotContract.attach(process.env.BALLOT_CONTRACT_ADDRESS);
    
    for (const voter of voters) {
        console.log(voter);
        await contract.giveRightToVote(voter);

        console.log("A voting right given to: ", voter);
    }

    // const Ballot = await hre.ethers.getContractFactory("Ballot");
    // const ballotContractInstance = await Ballot.deploy();
    // await ballotContractInstance.deployed();

    // console.log("Ballot deployed to: ", ballotContractInstance.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });

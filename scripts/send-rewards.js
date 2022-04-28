const hre = require("hardhat");
require('dotenv').config();

async function main() {
    const voters = [
        '0xA74784abA69BE5b0813395402a7Cc21CFA9E32C6',
        '0xB71E5740eC96d7Bd658Dc8D385FD94D842A441a2'
    ];

    const MyBallotContract = await hre.ethers.getContractFactory("Ballot");
    const ballotContract = await MyBallotContract.attach(process.env.BALLOT_CONTRACT_ADDRESS);
    const MakedoniumContract = await hre.ethers.getContractFactory("MKDUMToken");
    const makedoniumContract = await MakedoniumContract.attach(process.env.MAKEDONIUM_CONTRACT_ADDRESS);
    
    for (const voter of voters) {
        const hasVoted = await ballotContract.hasVoted(voter);

        if (hasVoted) {
            await makedoniumContract.transfer(voter, 100000000000);
        }
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

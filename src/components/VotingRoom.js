import '../App.css';
import Stack from 'react-bootstrap/Stack';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';
import { ethers } from 'ethers';
import React, { useState, useEffect } from 'react';
import BallotContractArtifact from '../artifacts/contracts/Ballot.sol/Ballot.json'


// const ballotContractAddress = process.env.BALLOT_CONTRACT_ADDRESS;
const ballotContractAddress = '0x5BdE43dEc6138c4aE20C1A1682045804Aa016684';

function App() {
    const [proposals, setProposals] = useState([]);
    const [isDataFetched, setIsDataFetched] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchContract() {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const contract = new ethers.Contract(ballotContractAddress, BallotContractArtifact.abi, provider);

            const proposals = await contract.getAllProposals();
            setProposals(proposals);

            setIsDataFetched(true);
        }

        fetchContract();
    }, []);

    async function vote(proposal) {
        try {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(ballotContractAddress, BallotContractArtifact.abi, signer);

            const res = await contract.vote(proposal);
        } catch (error) {
            setError(error.error.message);
        }
        
    };

    if (isDataFetched) {
        return (
            <div>
                { error && <Alert variant="danger">{error}</Alert> }
                <Stack gap={4}>
                    {
                        proposals.map((proposal, index) =>
                            <Card key={index} onClick={() => { vote(index) }}>
                                <Card.Body>
                                    <Card.Title>{proposal['name']}</Card.Title>
                                    <Card.Text>{Number(proposal['voteCount'])} votes</Card.Text>
                                </Card.Body>
                            </Card>
                        )
                    }
                </Stack>
            </div>
        )
    }

    return (
        <div>
            Loading...
        </div>
    )
}

export default App;
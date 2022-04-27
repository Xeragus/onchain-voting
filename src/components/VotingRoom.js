import '../App.css';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function App() {
    const parties = [
        {
            id: 1,
            name: 'Party A',
            description: 'We are Party A and we will win!'
        },
        {
            id: 2,
            name: 'Party B',
            description: 'We are Party B and Party A sucks!'
        }
    ]

    async function vote(partyId) {
        console.log(partyId);
    }

    return (
        <div>
            <Stack gap={4}>
                {
                    parties.map(party => 
                        <Card key={party.id} onClick={() => { vote(party.id) }} >
                            <Card.Body>
                                <Card.Title>{party.name}</Card.Title>
                                <Card.Text>
                                    {party.description}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    )
                }
            </Stack>
        </div>
    );
}

export default App;
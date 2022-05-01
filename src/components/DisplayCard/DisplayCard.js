import { Card, Button } from 'react-bootstrap';
import './DisplayCard.css'

function DisplayCard(props) {


    
    return(
        <div>
            <Card 
            className='DisplayCard'
            style={{ width: '25rem' }}
            >
                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                <Card.Body>
                    <Card.Title>{props.firstName} {props.lastName}</Card.Title>
                    <Card.Text>
                        Seed: {props.seed}
                        <br></br>
                        Points: {props.points}
                        <br></br>
                        Games Played: {props.gamesPlayed}
                        <br></br>
                        Rank: {props.rankName}
                        <br></br>
                        Nationality: {props.nationality} 

                    </Card.Text>
                    <Button className='displaycard-button'>View Profile</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default DisplayCard; 
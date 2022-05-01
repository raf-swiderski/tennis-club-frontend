import React, {useState, useEffect} from 'react';
import { CardGroup } from 'react-bootstrap';
import DisplayCard from "./DisplayCard/DisplayCard";


function Rankings() {

    const [allPlayers, setAllPlayers] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("http://localhost:3001/players/all")
            .then(response => response.json())
            .then(response => {
                
                setAllPlayers(response)
                console.log(response)
                setLoading(false)
                }
            ) 
    },[])
    
    if(loading) return <h1>Loading ...</h1>

    return(
        <div class='container'>
            <CardGroup
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                {
                    allPlayers.map((player, index) => {
                        return <DisplayCard 
                            
                            firstName={player.firstName} 
                            lastName={player.lastName} 
                            nationality={player.nationality} 
                            seed={player.seed} 
                            points={player.points} 
                            rankName={player.rankName} 
                            gamesPlayed={player.gamesPlayed} 
                            variant="primary"
                            />

                    })
                }
            </CardGroup>
        </div>
    )
}

export default Rankings; 
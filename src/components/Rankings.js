// 1. Import *useState* and *useEffect*
import React, {useState, useEffect} from 'react';


import DisplayCard from "./DisplayCard";

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
        <div>
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

                        />

                })
            }
        </div>
    )
}

export default Rankings; 
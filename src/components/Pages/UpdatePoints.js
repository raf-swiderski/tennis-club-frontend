import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { Button } from 'react-bootstrap';


function UpdatePoints() {

    const [winner, setWinner] = useState("");
    const [loser, setLoser] = useState("");
    
    return(
        <div>
            <Box
                sx={{
                '& .MuiTextField-root': { m: 1, width: '34ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <h2>Update Points After A Match</h2>
                <TextField id="outlined-basic" label="Winner" variant="outlined" 
                
                
                />
                <br></br>
                <TextField id="outlined-basic" label="Loser" variant="outlined" 
                
                
                />

                <br></br>
                <Button
                    type="submit"
                >
                    Update
                </Button>
            </Box>
        </div>
    )
}

export default UpdatePoints; 
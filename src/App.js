import React from 'react';
import ShrekBox from "./components/ShrekBox";
import Info from "./components/Info";
import Box from '@mui/material/Box';

function App() {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column-reverse',
                alignItems: 'center',
                justifyContent: 'center',
                height:'100vh',
                p: 1,
                m: 1,
                bgcolor: 'white',
            }}
        >
            <ShrekBox/>
            <Info/>
        </Box>
    );
}

export default App;

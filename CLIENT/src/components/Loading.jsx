import * as React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

export const Loading=()=> {
  return (
    <>
    <div className='flex items-center justify-center h-full w-full my-80 '>
      <Box sx={{ width: '60%' }}>
      <LinearProgress />
    </Box>
    </div>
    </>
    
  );
}

import { Box } from '@mui/material'
import React from 'react'
import News from './component/News'
import PeakExperience from './component/PeakExperience'

const Experiences = () => {
  return (
    <React.Fragment>
        <Box position={"relative"} mt={4}>
          <img src="https://images.pexels.com/photos/18542030/pexels-photo-18542030/free-photo-of-mountainous-forested-landscape-with-road.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Mountain Filled with Snow" 
          width={"100%"}
          style={{position:'absolute' , zIndex:'-1',marginTop:"120px",opacity:'.4'}}
          height={"800px"}
          />

        </Box>
        <PeakExperience/>
        <News/>
    </React.Fragment>
  )
}

export default Experiences;
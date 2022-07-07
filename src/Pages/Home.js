import React, { useState } from 'react'
import {Box} from '@mui/material'
import HeroBanner from '../Components/HeroBanner'
import SearchExercise from '../Components/SearchExercise'
import Exercises from '../Components/Exercises'




const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState('all')
console.log(bodyPart);
  return (
    <Box>
      <HeroBanner />
      <SearchExercise
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercises
        setExercises={setExercises}
        exercises={exercises}
        bodyPart={bodyPart}
      />
    </Box>
  );
}

export default Home
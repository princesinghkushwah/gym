import React, { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import { exerciseOption, fetchData } from "../utils/fetchData";
import ExerciseCart from "./ExerciseCart";

const Exercises = ({ exercises, bodyPart, setExercises }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const paginate = (e, value) => {
    setCurrentPage(value);
    window.scroll({ top: 1800, behavior: "smooth" });
  };

  const exercisePerPAge = 9;

  const indexOfLastExercise = currentPage * exercisePerPAge;
  const indexOfFirstExercise = indexOfLastExercise - exercisePerPAge;
  const currentExercise = exercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );


  useEffect(()=>{
                
      const fetchexerciesData = async()=>{

         let exerciseData =[]

         if(bodyPart === 'all'){
           exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises',exerciseOption)
         } else {
           exerciseData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,exerciseOption)

         }
         setExercises(exerciseData)
      }
     
fetchexerciesData()
  },[bodyPart])


  return (
    <Box
      id="exercises"
      sx={{
        mt: { lg: "110px" },
      }}
      mt="50px"
      p="20px"
    >
      <Typography variant="h3" mb="46px">
        Showing Results
      </Typography>
      <Stack
        direction="row"
        sx={{ gap: { lg: "110px", xs: "50px" } }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {currentExercise.map((exercise, index) => (
          <ExerciseCart key={index} exercise={exercise} />
        ))}
      </Stack>
      <Stack mt="100px" alignItems="center">
        {exercises.length > 9 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisePerPAge)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </Stack>
    </Box>
  );
};

export default Exercises;

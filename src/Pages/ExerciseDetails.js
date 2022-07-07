import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { exerciseOption, fetchData, youtubeOption } from "../utils/fetchData";
import Details from "../Components/ExerciseVideos";
import ExerciseVideos from "../Components/Details";
import SimilarExercises from "../Components/SimilarExercises";

const ExerciseDetails = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideo, setExerciseVideo] = useState([]);

  const { id } = useParams();
  useEffect(() => {
    const fetchExercisesData = async () => {
      const exerciseDbUrl = "https://exercisedb.p.rapidapi.com";
      const youtubeSearchUrl =
        "https://youtube-search-and-download.p.rapidapi.com";

      const exerciseDetailData = await fetchData(
        `${exerciseDbUrl}/exercises/exercise/${id}`,
        exerciseOption
      );
      setExerciseDetail(exerciseDetailData);
      console.log(exerciseDetailData.message);
      const exerciseVideosData = await fetchData(
        `${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`,
        youtubeOption
      );
      setExerciseVideo(exerciseVideosData);
    };
    console.log(exerciseDetail);
           localStorage.setItem("exercises", JSON.stringify(exerciseDetail));
    fetchExercisesData();
  }, [id]);
  console.log(exerciseDetail, "---------------");
  return (
    <Box>
      <Details exerciseDetail={exerciseDetail && exerciseDetail} />
      <ExerciseVideos
        exerciseVideo={exerciseVideo}
        name={exerciseDetail.name}
      />
      <SimilarExercises />
    </Box>
  );
};

export default ExerciseDetails;

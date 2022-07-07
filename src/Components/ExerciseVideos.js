import React from "react";
import { Box, Typography, Stack } from "@mui/material";

const ExerciseVideos = ({ exerciseVideo, name }) => {
  console.log(exerciseVideo, name); 
  return (
    <Box sx={{ marginTop: { lg: "200px", xs: "20px" } }} p="20px">
      <Typography variant="h3" mb="20px">
        Watch
        <span style={{ color: "#ff2625", textTransform: "capitalize" }}>
          {name}
        </span>
        exercise video
      </Typography>
      <Stack
        justifyContent="flex-start"
        flex-wrap="wrap"
        alignItems="center"
        sx={{ flexDirection: { lg: "row" }, gap: { lg: "110px", xs: "0" } }}
      >
        {exerciseVideo?.slice(0, 3).map((item, index) => (
          <a
            key={index}
            className="exercise-video"
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
          >
            <img src={item.video.thumbnail[0].url} alt={item.video.title} />
            <Box variant="h4">{item.video.title}</Box>
            <Box variant="h4">{item.video.channelName}</Box>
          </a>
        ))}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;

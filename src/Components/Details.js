// import React from "react";
// import {  Button, Stack, Typography } from "@mui/material";
// import BodyPartImage from "../assets/icons/body-part.png";
// import TargetImage from "../assets/icons/target.png";
// import EquipmentImage from "../assets/icons/equipment.png";

// const Details = () => {
//   console.log(exerciseDetail , "detail");
//   const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

//   const extraDetail = [ 
//     {
//       icon: BodyPartImage,
//       name: bodyPart,
//     },
//     {
//       icon: TargetImage,
//       name: target,
//     },
//     {
//       icon: EquipmentImage,
//       name: equipment,        
//     },
//   ];

//   return (
//     <Stack
//       gap="60px"
//       sx={{ flexDirection: { lg: "row" }, p: "20px", alignItems: "center" }}
//     >
//       <img
//         src={gifUrl}
//         alt={name}
//         // Loading="Lazy"
//         className="detail-image"
//       />
//       <Stack>
//         <Typography variant="h3">{name}</Typography>
//         <Typography variant="h6">
//           Exercise keep you strong. {name} is one the best exercise to
//           target your {target}. It will help you improve your mood gain
//           energy.
//         </Typography>
//         <Stack>
//           {extraDetail.map((item) => (
//             <Stack
//               key={item.name}
//               direction="row"
//               gap="24px"
//               alignItems="center"
//             >
//               <Button
//                 sx={{
//                   background: "#fff2db",
//                   borderRadius: "50",
//                   height: "100px",
//                   width: "100px",
//                 }}
//               >
//                 <img
//                   src={item.icon}
//                   alt={bodyPart}
//                   style={{ width: "50px", height: "50px" }}
//                 />
//               </Button>
//               <Typography textTransform="capitalize" variant="h5">
//                 {item.name}
//               </Typography>
//             </Stack>
//           ))}
//         </Stack>
//       </Stack>
//     </Stack>
//   );
// };

// export default Details;

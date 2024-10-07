import { Box } from "@mui/material";
import VideoAspectRatio916 from "../branch-pages/VideoAspectRatio916";
import PosterImageForTraining from "../branch-pages/PosterImageForTraining";

export default function TrainingCourseReelsAndPoster({
  image,
  video,
  reelPosition,
}) {
  const right = (
    <>
      <PosterImageForTraining image={image} />
      <VideoAspectRatio916 video={video} />
    </>
  );
  const left = (
    <>
      <VideoAspectRatio916 video={video} />
      <PosterImageForTraining image={image} />
    </>
  );

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {reelPosition === "right" ? right : left}
    </Box>
  );
}

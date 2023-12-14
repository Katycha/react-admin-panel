import { Box, CircularProgress, Typography } from "@mui/material";

function CircularCard(props) {
  return (
    <Box
      sx={{
        p: "24px",
        display: "flex",
        background: "#fff",
        columnGap: "24px",
        borderRadius: "8px",
      }}
    >
      <CircularProgress
        sx={{ color: props.color }}
        variant="determinate"
        value={props.value}
        size={68}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Typography>{props.title}</Typography>
        <Typography>{props.description}</Typography>
      </Box>
    </Box>
  );
}

export default CircularCard;

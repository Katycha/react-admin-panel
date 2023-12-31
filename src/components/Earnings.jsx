import { Box, Typography, TextField } from "@mui/material";
import Circles from "../assets/Circles.svg";
import CircleIcon from "@mui/icons-material/Circle";
function Earnings() {
  return (
    <Box
      sx={{
        background: "#FFF",
        padding: "32px",
        display: "flex",
        flexDirection: "column",
        rowGap: "40px",
        borderRadius: "8px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          columnGap: "40px",
        }}
      >
        <Typography sx={{ fontWeight: "500" }}>Earnings</Typography>
        <Box sx={{ display: "flex" }}>
          <Typography sx={{ color: "#8A92A6" }}>This Week</Typography>
          <TextField select />
        </Box>
      </Box>
      <Box sx={{ display: "flex", columnGap: "40px" }}>
        <img src={Circles} alt="" />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            rowGap: "50px",
            paddingY: "20px",
          }}
        >
          <Box sx={{ display: "flex", columnGap: "24px" }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <CircleIcon sx={{ color: "#3A57E8" }} />
            </Box>
            <Box>
              <Typography sx={{ color: "#8A92A6", fontWeight: "400" }}>
                Fashion
              </Typography>
              <Typography>251K</Typography>
            </Box>
          </Box>

          <Box sx={{ display: "flex", columnGap: "24px" }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <CircleIcon sx={{ color: "#85F4FA" }} />
            </Box>
            <Box>
              <Typography sx={{ color: "#8A92A6", fontWeight: "400" }}>
                Accessories
              </Typography>
              <Typography>171K</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Earnings;

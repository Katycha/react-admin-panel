import { Box, Typography, TextField } from "@mui/material";

function Enterprise() {
  return (
    <Box sx={{ background: "#FFF" }}>
      <Box
        sx={{
          padding: "24px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography sx={{ color: "#232D42", fontWeight: "400" }}>
            Enterprise Clients
          </Typography>
          <Typography sx={{ color: "#8A92A6", fontWeight: "400" }}>
            15 New Acquired ths month
          </Typography>
        </Box>
        <TextField select />
      </Box>
    </Box>
  );
}

export default Enterprise;

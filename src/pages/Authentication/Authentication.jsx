import { Box, Typography, TextField, Checkbox, Button } from "@mui/material";

function Authentication() {
  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      <Box
        sx={{
          flex: "1 1 auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", rowGap: "40px" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img src="/Logo.png" alt="logo" />
            <Typography sx={{ color: "#232D42", fontWeight: "400" }}>
              RAP
            </Typography>
          </Box>
          <Box
            sx={{ display: "flex", flexDirection: "column", rowGap: "16px" }}
          >
            <Typography sx={{ color: "#000", fontWeight: "600" }}>
              Sign In
            </Typography>
            <Typography sx={{ color: "#8A92A6", fontWeight: "400" }}>
              Sign in to stay connected.
            </Typography>
          </Box>
          <TextField id="outlined-basic" label="Email" variant="outlined" />
          <TextField id="outlined-basic" label="Password" variant="outlined" />
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Checkbox color="default" />
              <Typography sx={{ color: "#8A92A6", fontWeight: "400" }}>
                Remember me?
              </Typography>
            </Box>
            <Button variant="text">Forgot Password</Button>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              paddingX: "24px",
              paddingY: "8px",
            }}
          >
            <Button variant="contained">Sign in</Button>
          </Box>
        </Box>
      </Box>
      <Box sx={{ flex: "1 1 auto" }}>2</Box>
    </Box>
  );
}

export default Authentication;

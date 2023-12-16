import { Box, Typography } from "@mui/material";

function Clients() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        padding: "24px",
        background: "#FFF",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography
          sx={{ color: "#232D42", fontWeight: "500", textAlign: "center" }}
        >
          750K
        </Typography>
        <Typography sx={{ color: "#8A92A6", fontWeight: "400" }}>
          Website Visitors
        </Typography>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography
          sx={{ color: "#232D42", fontWeight: "500", textAlign: "center" }}
        >
          7,500
        </Typography>
        <Typography sx={{ color: "#8A92A6", fontWeight: "400" }}>
          New Customers
        </Typography>
      </Box>
    </Box>
  );
}

export default Clients;

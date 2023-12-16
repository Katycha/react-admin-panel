import { Box, Typography } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

function Overview() {
  return (
    <Box
      sx={{
        background: "#FFF",
        padding: "24px",
        display: "flex",
        flexDirection: "column",
        rowGap: "24px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography sx={{ fontWeight: "500" }}>Activity Overview</Typography>
        <Box sx={{ display: "flex", columnGap: "5px" }}>
          <Box sx={{ color: "#1AA053" }}>
            <ArrowUpwardIcon />
          </Box>
          <Typography sx={{ color: "#8A92A6" }}>16% this month</Typography>
        </Box>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", rowGap: "32px" }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography sx={{ color: "#232D42", fontWeight: "400" }}>
            $2400, Purchase
          </Typography>
          <Typography sx={{ color: "#8A92A6", fontWeight: "400" }}>
            11 JUL 8:10 PM
          </Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography sx={{ color: "#232D42", fontWeight: "400" }}>
            New order #8744152
          </Typography>
          <Typography sx={{ color: "#8A92A6", fontWeight: "400" }}>
            11 JUL 11 PM
          </Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography sx={{ color: "#232D42", fontWeight: "400" }}>
            Affilate Payout
          </Typography>
          <Typography sx={{ color: "#8A92A6", fontWeight: "400" }}>
            11 JUL 7:64 PM
          </Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography sx={{ color: "#232D42", fontWeight: "400" }}>
            New user added
          </Typography>
          <Typography sx={{ color: "#8A92A6", fontWeight: "400" }}>
            11 JUL 1:21 AM
          </Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography sx={{ color: "#232D42", fontWeight: "400" }}>
            Product added
          </Typography>
          <Typography sx={{ color: "#8A92A6", fontWeight: "400" }}>
            11 JUL 4:50 AM
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Overview;

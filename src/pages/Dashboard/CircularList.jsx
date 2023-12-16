import CircularCard from "../../components/CircularCard/CircularCard";
import { Box } from "@mui/material";
function CircularList() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        columnGap: "40px",
        mt: "-70px",
      }}
    >
      <CircularCard title="Total Sales" description="$560K" value="95" />
      <CircularCard
        title="Total Profit"
        description="$185K"
        color="#08B1BA"
        value="80"
      />
      <CircularCard title="Total Cost" description="$375K" value="70" />
      <CircularCard
        title="Revenue"
        description="$742K"
        color="#08B1BA"
        value="60"
      />
      <CircularCard title="Net Income" description="$150K" value="40" />
      <CircularCard
        title="Today"
        description="$4600"
        color="#08B1BA"
        value="30"
      />
    </Box>
  );
}

export default CircularList;

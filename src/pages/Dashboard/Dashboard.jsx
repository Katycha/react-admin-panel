import { Box, Typography, Button } from "@mui/material";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import CircularCard from "../../components/CircularCard/CircularCard";

function Dashboard() {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          px: "40px",
          pt: "17px",
          height: "170px",
          color: "#fff",
          background: "rgb(58,106,180)",
          background:
            "linear-gradient(70deg, rgba(58,106,180,1) 0%, rgba(29,86,253,1) 39%, rgba(17,43,120,1) 61%)",
          borderBottomLeftRadius: "30px",
          borderBottomRightRadius: "30px",
        }}
      >
        <Box sx={{}}>
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: "40px",
            }}
          >
            Hello Devs !
          </Typography>
          <Typography>
            We are on a mission to help developers like you to build beautiful
            projects for FREE.
          </Typography>
        </Box>
        <Button
          variant="contained"
          sx={{
            background: "rgba(58, 87, 232, 0.35);",
            borderRadius: "4px",
          }}
          startIcon={<KeyboardVoiceIcon />}
        >
          Announcments
        </Button>
      </Box>
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
    </Box>
  );
}

export default Dashboard;

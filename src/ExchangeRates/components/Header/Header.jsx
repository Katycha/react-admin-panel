import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  TextField,
  InputAdornment,
} from "@mui/material";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import LanguageIcon from "@mui/icons-material/Language";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";

function Header() {
  return (
    <AppBar color="inherit" elevation={1}>
      <Toolbar
        sx={{ py: "20px", display: "flex", justifyContent: "space-between" }}
      >
        <Box
          sx={{
            display: "flex",
            rowGap: "10px",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <img src="/Logo.png" alt="logo" />
          <Typography sx={{ ml: "8px", fontSize: "33px", mr: "42px" }}>
            RAP
          </Typography>
          <IconButton color="primary" size="large" sx={{ mr: "16px" }}>
            <ArrowCircleLeftIcon sx={{ width: 30, height: 30 }} />
          </IconButton>
          <TextField
            placeholder="Search..."
            size="small"
            type="search"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <IconButton>
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Box>

        <Box>
          <IconButton>
            <LanguageIcon />
          </IconButton>
          <IconButton>
            <NotificationsIcon />
          </IconButton>
          <IconButton>
            <MailIcon />
          </IconButton>
          <IconButton>
            <AccountCircleIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;

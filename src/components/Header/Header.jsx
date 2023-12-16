import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  TextField,
  InputAdornment,
  useTheme,
  Menu,
  MenuItem,
} from "@mui/material";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import LanguageIcon from "@mui/icons-material/Language";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";
import { useTranslation } from "react-i18next";
import { useState } from "react";

function Header() {
  const theme = useTheme();
  const { t, i18n } = useTranslation();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  function handleOpenMenu(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleCloseMenu() {
    setAnchorEl(null);
  }

  function handleChangeLanguage(language) {
    i18n.changeLanguage(language);
    setAnchorEl(null);
  }
  return (
    <AppBar
      color="inherit"
      elevation={1}
      sx={{ zIndex: theme.zIndex.drawer + 1 }}
    >
      <Toolbar
        sx={{ py: "5px", display: "flex", justifyContent: "space-between" }}
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
            placeholder={t("search")}
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
          <IconButton onclick={handleOpenMenu}>
            <LanguageIcon />
            {i18n.language.toUpperCase()}
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
      <Menu open={open} anchorEl={anchorEl} onClose={handleCloseMenu}>
        <MenuItem value="en" onClick={() => handleChangeLanguage("en")}>
          EN
        </MenuItem>
        <MenuItem value="ru" onClick={() => handleChangeLanguage("ru")}>
          RU
        </MenuItem>
      </Menu>
    </AppBar>
  );
}

export default Header;

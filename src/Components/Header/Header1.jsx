import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";
import { IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext } from "../../Theme";

function Header1() {
  const colorMode = useContext(ColorModeContext);

  const theme = useTheme();
  return (
    <>
      {theme.palette.mode === "light" ? (
        <IconButton
          onClick={() => {
            localStorage.setItem(
              "mode",
              theme.palette.mode === "dark" ? "light" : "dark"
            );
            colorMode.toggleColorMode();
          }}
          color="inherit"
        >
          <LightModeOutlined sx={{ fontSize: "16px", color: "black" }} />
        </IconButton>
      ) : (
        <IconButton
          onClick={() => {
            localStorage.setItem(
              "mode",
              theme.palette.mode === "dark" ? "light" : "dark"
            );
            colorMode.toggleColorMode();
          }}
          color="inherit"
        >
          <DarkModeOutlined sx={{ fontSize: "16px" }} />
        </IconButton>
      )}
    </>
  );
}

export default Header1;

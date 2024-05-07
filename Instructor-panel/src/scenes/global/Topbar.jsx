import { Box, IconButton, useTheme } from "@mui/material";
import { useContext, useState, useRef, useEffect } from "react";
import { ColorModeContext, tokens } from "../../theme";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import Badge from "@mui/material/Badge";
import Profile from "../../components/Profile";

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  const [showNotifications, setShowNotifications] = useState(false);

  const notificationRef = useRef(null);

  const handleNotificationClick = (event) => {
    event.preventDefault();
    setShowNotifications(!showNotifications);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target)
      ) {
        setShowNotifications(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <Box display="flex" justifyContent="end" p={2}>
      {/* ICONS */}
      <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
        <IconButton onClick={handleNotificationClick} ref={notificationRef}>
          <Badge badgeContent={4} color="error">
            <NotificationsOutlinedIcon />
          </Badge>
        </IconButton>

        {showNotifications && (
          <div
            className="notification-popup"
            style={{
              position: "absolute",
              maxWidth: "250px",
              backgroundColor: "#fff",
              border: "1px solid #ccc",
              borderRadius: "5px",
              boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)",
              zIndex: 1,
              maxHeight: "300px",
              right: "100px",
              top: "60px",
              overflow: "auto",
            }}
            ref={notificationRef}
          >
            <div
              className="notification-item"
              style={{
                padding: "10px",
                position: "relative",
                display: "flex",
                backgroundColor: colors.primary[400],
                flexDirection: "column",
                borderBottom: "1px solid #ccc",
              }}
            >
              <div
                className="notification-item-title"
                style={{
                  fontSize: "0.9rem",
                  color: colors.grey[100],
                  fontWeight: 500,
                }}
              >
                New Course Created
              </div>
              <div
                className="notification-item-time"
                style={{
                  position: "absolute",
                  fontSize: "0.7rem",
                  color: colors.greenAccent[700],
                  top: 0,
                  right: 0,
                }}
              >
                2 hours ago
              </div>
              <div
                className="notification-item-message"
                style={{
                  fontSize: "0.8rem",
                  color: colors.grey[100],
                  textAlign: "start",
                }}
              >
                A new course has been created
              </div>
            </div>
          </div>
        )}
        <IconButton>
          <Profile />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Topbar;

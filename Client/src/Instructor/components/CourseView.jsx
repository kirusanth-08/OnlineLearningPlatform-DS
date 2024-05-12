import React from "react";
import { Card, CardContent, Typography, Button, useTheme } from "@mui/material";
import { tokens } from "../theme";
import { Link } from "react-router-dom";
import EditNoteIcon from "@mui/icons-material/EditNote";

const CourseView = ({ _id, title, description, isApproved }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Link
      to={`/instructor/course/${_id}`}
    >
      <Card
        sx={{
          backgroundColor: colors.primary[400],
          color: colors.grey[100],
          padding: theme.spacing(1),
          marginBottom: theme.spacing(2),
          position: "relative",
          ":hover": {
            backgroundColor: "transparent",
          },
        }}
      >
        <CardContent>
          <Typography variant="h3" component="h2"
            sx={{ marginBottom: theme.spacing(1) }}
          >
            {title}
          </Typography>
          <Typography 
            component="p" 
            sx={{ 
              marginBottom: theme.spacing(1),
              color: colors.grey[300],
              width: "80%",
             }}
          >
            {description}
          </Typography>
          <Typography
            variant="body2"
            component="p"
            sx={{
              marginBottom: theme.spacing(1),
              position: "absolute",
              top: 0,
              right: 0,
              padding: theme.spacing(1),
            }}
          >
            {isApproved ? "Approved" : "Pending"}
          </Typography>
          <Link to={`/instructor/modifycourse/${_id}`}>
            <Button
              variant="contained"
              color="secondary"
              sx={{
                position: "absolute",
                bottom: 0,
                right: 0,
                padding: theme.spacing(1),
              }}
            >
              <EditNoteIcon />
            </Button>
          </Link>
        </CardContent>
      </Card>
    </Link>
  );
};

export default CourseView;

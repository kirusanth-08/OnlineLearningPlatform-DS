import React from "react";
import { Card, CardContent, Typography, Button, useTheme } from "@mui/material";
import { tokens } from "../theme";
import { Link } from "react-router-dom";
import EditNoteIcon from "@mui/icons-material/EditNote";

const CourseView = ({ id, title, description, isApproved }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Link
      to={`/course/${id}`}
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
          <Typography variant="h5" component="h2">
            {title}
          </Typography>
          <Typography color="textSecondary">{description}</Typography>
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
          <Link to={`/modifycourse/${id}`}>
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

import React, { useEffect, useState } from "react";
import { Box, useTheme } from "@mui/material";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import axios from "axios";
import { tokens } from "../../theme";
import CreateContentPopup from "../../components/CreateContentPopup";
import { Link } from "react-router-dom";
import EditContentPopup from "../../components/EditContentPopup";
import CreateCourse from "../../components/CreateCourse";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import FilePresentIcon from "@mui/icons-material/FilePresent";

const ViewCourse = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { id } = useParams();
  const [courseContent, setCourseContent] = useState([]);
  const [course, setCourse] = useState({});

  useEffect(() => {
    const fetchCourseAndContent = async () => {
      try {
        const courseRes = await axios.get(
          `http://localhost:8082/api/course/${id}`
        );
        if (courseRes.data.error) {
          console.log(courseRes.data.error);
        } else {
          setCourse(courseRes.data.course);
        }

        const contentRes = await axios.get(
          `http://localhost:8082/api/courseContent/view/${id}`
        );
        if (contentRes.data.error) {
          console.log(contentRes.data.error);
        } else {
          setCourseContent(contentRes.data.course);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchCourseAndContent();
  }, [id]);

  return (
    <Box m="20px">
      <Header title={course.title} subtitle="Manage Your Course Content" />

      {courseContent &&
        courseContent.map(
          (content, index) => (
            (
              <Accordion
                key={index}
                sx={{
                  backgroundColor: colors.primary[400],
                  color: colors.grey[100],
                  position: "relative",
                  ":hover": {
                    backgroundColor: "transparent",
                  },
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  Lession {index + 1}
                </AccordionSummary>
                <AccordionDetails>
                  <Box
                    p={2}
                    sx={{
                      backgroundColor: colors.primary[400],
                      color: colors.grey[100],
                      position: "relative",
                    }}
                  >
                    <h1>{content.topic}</h1>
                    <p>
                      <AttachFileIcon />
                      <Link to={content.video}>{content.video}</Link>
                    </p>
                    {content.lecture && (
                      <Button
                        variant="outlined"
                        startIcon={<FilePresentIcon />}
                        sx={{
                          backgroundColor: colors.primary[400],
                          color: colors.grey[100],
                          position: "relative",
                          ":hover": {
                            color: "white",
                            backgroundColor: colors.primary[500],
                          },
                        }}
                      >
                        <a href={`http://localhost:8082/file/${content.lecture.path}`}>
                          {content.lecture.filename}
                        </a>
                      </Button>
                    )}
                    {content.assignment && (
                      <Button
                        variant="outlined"
                        startIcon={<FilePresentIcon />}
                        sx={{
                          backgroundColor: colors.primary[400],
                          color: colors.grey[100],
                          position: "relative",
                          ":hover": {
                            color: "white",
                            backgroundColor: colors.primary[500],
                          },
                        }}
                      >
                        
                        <a href={`http://localhost:8082/file/${content.assignment.path}`}>
                          {content.assignment.filename}
                        </a>
                      </Button>
                    )}
                    {/* <EditContentPopup 
                id={id}
                // title={title}
                // description={description}
              /> */}
                  </Box>
                </AccordionDetails>
              </Accordion>
            )
          )
        )}

      <CreateContentPopup courseId={id} />
    </Box>
  );
};

export default ViewCourse;

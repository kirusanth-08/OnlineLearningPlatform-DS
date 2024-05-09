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
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import { Link } from "react-router-dom";
import EditContentPopup from "../../components/EditContentPopup";
import CreateCourse from "../../components/CreateCourse";

const ViewCourse = () => {
  const fileName = "pdf1.pdf";
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { id } = useParams();
  const [course, setCourse] = useState({});

    useEffect(() => {
      const course = async () => {
        try {
          const res = await axios.get(`http://localhost:8082/api/course/viewAll`)
          console.log(res.data)
          console.log(res.data.course)
        } catch (error) {
          console.error(error)
        }
      }
  }, [id]);

      useEffect(() => {
        const courseContent = async () => {
          try {
            const res = await axios.get(`http://localhost:8082/api/courseContent/${id}`)
            console.log(res.data)
          } catch (error) {
            console.error(error)
          }
          }
      }, [id]);

  return (
    <Box m="20px">
      <Header title={course.title} subtitle="Manage Your Course Content" />

      <Accordion
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
          Lession 1
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
            <h1>Topic</h1>
            <p>
              This is a sample description. Refer the pdf below for more
              details.
            </p>
            <Link href={`files/${fileName}`} target="_blank">
              <PictureAsPdfIcon /> {fileName}
            </Link>
            <EditContentPopup 
              id={id}
              // title={title}
              // description={description}
            />
          </Box>
        </AccordionDetails>
      </Accordion>
      <CreateContentPopup />
    </Box>
  );
};

export default ViewCourse;

import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataInstructors } from "../../data/mockData";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";

const Instructors = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { 
      field: "id", 
      headerName: "ID", 
      flex: 1 
    },
    {
     field: "name",
     headerName: "Name",
      flex: 1,
    },
    {
      field: "No_of_Courses",
      headerName: "No.of.Courses",
      type: "number",
      flex: 1,
    },
    {
      field: "total_Students",
      headerName: "Total Students",
      type: "number",
      flex: 1,
    },
    {
      field: "total_earned",
      headerName: "Total Earned",
      headerAlign: "right",
      valueFormatter: (value) => `$ ${value}`,
      cellClassName: "name-column--cell",
      type: "currency",
      align: "right",
      flex: 1,
    }
  ];

  return (
    <Box m="20px">
      <Header
        title="INSTRUCTORS"
        subtitle="List of Instructor's Details"
      />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          rows={mockDataInstructors}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default Instructors;

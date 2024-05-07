import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataPayments } from "../../data/mockData";
import Header from "../../components/Header";

const Payments = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", 
      headerName: "ID",
      type: "string",
      flex: 1,
    },
    {
      field: "user",
      headerName: "User ID",
      flex: 1,
      // cellClassName: "name-column--cell",
    },
    {
      field: "amount",
      headerName: "Amount",
      flex: 1,
      valueFormatter: (value) => `$${value}`,
    },
    {
      field: "date",
      headerName: "Date",
      flex: 1,
    },
    // {
    //   field: "status",
    //   headerName: "Cost",
    //   flex: 1,
    // },
    // {
    //   field: "date",
    //   headerName: "Date",
    //   flex: 1,
    // },
  ];

  return (
    <Box m="20px">
      <Header title="PAYMETNS RECEIVED" subtitle="List of Payments Received" />
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
        }}
      >
        <DataGrid checkboxSelection rows={mockDataPayments} columns={columns} />
      </Box>
    </Box>
  );
};

export default Payments;

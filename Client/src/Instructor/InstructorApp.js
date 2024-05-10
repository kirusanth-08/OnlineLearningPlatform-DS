import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Courses from "./scenes/Courses";
import Payments from "./scenes/Payments";
import Form from "./scenes/form";
import FAQ from "./scenes/faq";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import ViewCourse from "./scenes/Courses/ViewCourse";
import EditCourse from "./scenes/Courses/EditCourse";
import {AuthzContext} from "./components/Helper";

function InstructorApp() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  const [authState, setAuthState] = useState({
    id: localStorage.getItem('id'),
    token: localStorage.getItem('token'),
    name: localStorage.getItem('name'),
  })

  console.log(authState.name)


  return (
    <ColorModeContext.Provider value={colorMode}>
      <AuthzContext.Provider value={{setAuthState, authState}}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className="app">
            <Sidebar isSidebar={isSidebar} />
            <main className="mainContainer">
              <Topbar setIsSidebar={setIsSidebar} />
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/payments" element={<Payments />} />
                <Route path="/form" element={<Form />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/course/:id" element={<ViewCourse />} />
                <Route path="/modifycourse/:id" element={<EditCourse />} />
              </Routes>
            </main>
          </div>
        </ThemeProvider>
      </AuthzContext.Provider>
    </ColorModeContext.Provider>
  );
}

export default InstructorApp;

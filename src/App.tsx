// import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home/homePage";
import Layout from "./components/layout";
import DashHome from "./pages/dashHome";
import AddTask from "./pages/addTask";
import { TaskListProvider } from "./context/context";
import EditTask from "./pages/editTask";

function App() {
  return (
    <>
      <TaskListProvider>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/dashboard" element={<Layout />}>
              <Route index element={<DashHome />} />
              <Route path="/dashboard/add-task" element={<AddTask />} />
              <Route path="/dashboard/edit-task" element={<EditTask />} />
            </Route>
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </Router>
      </TaskListProvider>
    </>
  );
}

export default App;

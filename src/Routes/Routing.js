import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "src/Routes/ProtectedRoute";

const Routing = () => {
  return (
    <div>
      <Routes>
        {/* <Route path='/' element={<Dashboard/>} /> */}
        <Route
          exact
          path={"/"}
          element={
            <Suspense fallback={<></>}>
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            </Suspense>
          }
        />
        {/* <Route path='/user' element={<User/>} /> */}
        <Route
          exact
          path={"/about"}
          element={
            <Suspense fallback={<></>}>
              <ProtectedRoute>
                <About />
              </ProtectedRoute>
            </Suspense>
          }
        />
       
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default Routing;

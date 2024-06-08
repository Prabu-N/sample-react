import React, { lazy, Suspense } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const Home = lazy(() => import("./components/Home"));
const Router2 = lazy(() => import("./components/Router2"));
const Router1 = lazy(() => import("./components/Router1"));
// import Home from './components/Home';
// import Router1 from "./components/Router1";
// import Router2 from "./components/Router2";
function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<></>}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/router1"
          element={
            <Suspense fallback={<></>}>
              <Router1 />
            </Suspense>
          }
        />
        <Route
          path="/router2"
          element={
            <Suspense fallback={<></>}>
              <Router2 />
            </Suspense>
          }
        />
      </Routes>
    </Router>

    // <Router>
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/router1" element={<Router1 />} />
    //     <Route path="/router2" element={<Router2 />} />
    //   </Routes>
    // </Router>
  );
}

export default App;

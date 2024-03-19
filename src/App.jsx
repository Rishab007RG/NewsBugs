import React, { useState } from "react";
import "./App.css";
import Navbar from "./Component/Navbar";
import News from "./Component/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";


const App = () => {

  // const newsPaper='https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2019/11/whatsapp-image-2019-11-24-at-16-1574593427.jpeg'
 const pageSize = 5;
//  const apikey = env.local.REACT_APP_NEWS_API;
 const [progress, setProgress] = useState(0)//this is use to api key with the help of (env.local)




  return (
    <>

      <Router>
     
      <Navbar/>
     
        <LoadingBar color="#f11946" progress={progress} />
        <Routes>
          <Route
            path="/"
            element={
              <News
                setProgress={setProgress}
                pageSize={pageSize} country="in"
                category="general"
              />
            }
          />

          <Route
            path="/business"
            element={
              <News
                setProgress={setProgress}
                pageSize={pageSize} country="in"
                key="business"
                category="business"
              />
            }
          />
          <Route
            path="/entertainment"
            element={
              <News
                setProgress={setProgress}
                pageSize={pageSize} country="in"
                key="entertainment"
                category="entertainment"
              />
            }
          />
          <Route
            path="/general"
            element={
              <News
                setProgress={setProgress}
                pageSize={pageSize} country="in"
                key="general"
                category="general"
              />
            }
          />
          <Route
            path="/health"
            element={
              <News
                setProgress={setProgress}
                pageSize={pageSize} country="in"
                key="health"
                category="health"
              />
            }
          />
          <Route
            path="/science"
            element={
              <News
                setProgress={setProgress}
                pageSize={pageSize} country="in"
                key="science"
                category="science"
              />
            }
          />
          <Route
            path="/sports"
            element={
              <News
                setProgress={setProgress}
                pageSize={pageSize} country="in"
                key="sports"
                category="sports"
              />
            }
          />
          <Route
            path="/technology"
            element={
              <News
                setProgress={setProgress}
                pageSize={pageSize} country="in"
                key="technology"
                category="technology"
              />
            }
          />
          <Route
            path="/science"
            element={
              <News
                setProgress={setProgress}
                pageSize={pageSize} country="in"
                key="science"
                category="science"
              />
            }
          />
        </Routes>
      </Router>
    </>
  );
};
export default App;

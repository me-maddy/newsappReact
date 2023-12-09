
import { useState } from 'react';
import './App.css';
import News from "./components/News";
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

function App() {
  const [progress , setProgress] =useState(0);
  const pageSize = 3;
  const newsApi = process.env.REACT_APP_NEWS_APPI;
  
  const updateProgress = (progress) => {
      setProgress(progress);
  }

    return (
      <>
        <Router>
          <Navbar />
          <LoadingBar color='#f11946' height={2} progress={progress}/>
          <Routes>
            <Route
              path="/"
              element={<News category="general" key="general" country="in"  color="danger" pageSize={pageSize} newsApi={newsApi} updateProgress={updateProgress}/>}
            />
            <Route
              path="business"
              element={<News category="business" key="business" country="in"  color="primary" pageSize={pageSize} newsApi={newsApi} updateProgress={updateProgress}/>}
            />
            <Route
              path="technology"
              element={
                <News category="technology" key="technology" country="in"  color="secondary" pageSize={pageSize} newsApi={newsApi} updateProgress={updateProgress}/>
              }
            />
            <Route
              path="science"
              element={<News category="science" key="science" country="in"  color="warning" pageSize={pageSize} newsApi={newsApi} updateProgress={updateProgress}/>}
            />
            <Route
              path="health"
              element={<News category="health" key="health" country="in"  color="success" pageSize={pageSize} newsApi={newsApi} updateProgress={updateProgress}/>}
            />
            <Route
              path="sports"
              element={<News category="sports" key="sports" country="in"  color="info" pageSize={pageSize} newsApi={newsApi} updateProgress={updateProgress}/>}
            />
            <Route
              path="entertainment"
              element={
                <News
                  category="entertainment"
                  key="entertainment"
                  country="in" color="dark" pageSize={pageSize} newsApi={newsApi} updateProgress={updateProgress}
                />
              }
            />
          </Routes>
        </Router>
      </>
    )
}

export default App;

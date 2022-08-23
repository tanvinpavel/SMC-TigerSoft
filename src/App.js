import { Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout/Layout";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route path='/' element={<h1>This is home</h1>}/>
        <Route path='/documentation' element={<h1>This is documentation</h1>}/>
        <Route path='/tutorial' element={<h1>This is tutorial</h1>} />
        <Route path='/video' element={<h1>This is video</h1>} />
      </Route>
    </Routes>
  );
}

export default App;

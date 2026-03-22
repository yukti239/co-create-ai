import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Workflows from "./pages/Workflows";

function App(){
return(
<BrowserRouter>

<Routes>
<Route path="/" element={<Dashboard/>}/>
<Route path="/workflows" element={<Workflows/>}/>
</Routes>

</BrowserRouter>
);
}

export default App;
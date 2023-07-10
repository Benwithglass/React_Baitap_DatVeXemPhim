import {BrowserRouter, Routes, Route} from "react-router-dom"
import BookingTicket from "./Components/BookingTicket";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BookingTicket/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

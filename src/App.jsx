import "bootstrap/dist/css/bootstrap.min.css";
import Navbar1 from "./Components/Navbar1";
import NewsBoard from "./Components/NewsBoard";
import { useState } from "react";

const App = () => {
  const [category, setCategory] = useState("general");

  return (
    <div>
      <Navbar1 setCategory={setCategory} />
      <NewsBoard category={category} />
    </div>
  );
};

export default App;

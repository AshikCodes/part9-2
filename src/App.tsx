import Header from "./components/Header";
import Context from "./components/Context";
import { Total } from "./components/Total";
import { courseParts } from "./types";


const App = () => {
  const courseName = "Half Stack application development";
  return (
    <div>
      <Header coursename = {courseName}></Header>
      <Context courseParts={courseParts} />
      <Total courseParts={courseParts} />
    </div>
  );
};

export default App;
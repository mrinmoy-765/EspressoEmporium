import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="font-extrabold text-2xl text-center mb-4">
        Expresso Emporium
      </h1>

      {/* Flex container for buttons */}
      <div className="flex flex-wrap gap-4 justify-center">
        <Link to="/addCoffe">
          <button className="btn btn-active">Add Coffee</button>
        </Link>

        <Link to="/allCoffe">
           <button className="btn btn-active btn-primary">All Coffee</button>
        </Link>
       <Link to = "/signin">
          <button className="btn btn-active btn-secondary">Sign in</button>
       </Link>
        <Link to = "/signup">
           <button className="btn btn-active btn-accent">Sign up</button>
        </Link>
        <button className="btn btn-active btn-info">Info</button>
        <button className="btn btn-active btn-success">Success</button>
        <button className="btn btn-active btn-warning">Warning</button>
        <button className="btn btn-active btn-error">Error</button>
      </div>
    </div>
  );
}

export default App;

import Login from "./Login.jsx";
import Timer from "./Timer.jsx";

const App = () => {
  return (
    <>
      <header>
        <div className="name">
          <h1>POSH.IT</h1>
        </div>
        <Login />
      </header>
      <div className="container text">
        <Timer />
      </div>
    </>
  );
};

export default App;

import Login from "./componenets/Login.jsx";
import Timer from "./componenets/Timer.jsx";

const App = () => {
  return (
    <>
      <header>
        <div className="name">
          <h1>POSH.IT</h1>
        </div>
        <Login />
      </header>
      <section className="container">
        <div className="card text"></div>
        <div className="card text"></div>
      </section>
    </>
  );
};

export default App;

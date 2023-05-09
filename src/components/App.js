import React from "react";
import "./../styles/App.css";

const App = () => {
  // make timer using hooks in react

  const [timer, setTimer] = React.useState(0);

  let id;
  React.useEffect(() => {
    id = setInterval(() => {
      setTimer(timer + 1);
    });

    return () => {
      clearInterval(id);
    };
  }, [timer]);

  console.log("Hello World");
  return <div id= "main">"You have been in this page for {timer} seconds"</div>;
};

export default App;

import CoinPage from "./Pages/CoinPage.js";
import Header from "./components/Header";
import Homepage from "./Pages/HomePage.js";

import { BrowserRouter, Route } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import "./App.css";

const useStyles = makeStyles(() => ({
  App: {
    backgroundColor: "rgb(0, 0, 0)",
    color: "white",
    minHeight: "100vh",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Header />
        <Route path="/" component={Homepage} exact />
        <Route path="/coins/:id" component={CoinPage} exact />
      </div>
    </BrowserRouter>
  );
}

export default App;

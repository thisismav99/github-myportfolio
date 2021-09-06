import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";
import Projects from "./Projects";
import Top from "./Top";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Header />
            <Body />
            <Footer />
          </Route>
          
          <Route exact path="/projects/:id">
            <Projects />
          </Route>

          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </BrowserRouter>
        
      <Top />
    </>
  );
}

export default App;
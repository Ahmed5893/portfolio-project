import React, { useContext } from "react";
import { Switch, Route } from "react-router-dom";
import { __RouterContext } from "react-router";
import { useTransition, animated } from "react-spring";
import AboutMe from "./Screens/AboutMe";
import Header from "./Screens/Header";
import HomeScreen from "./Screens/HomeScreen";
import Card from "./Screens/skillsScreen/Card";
import Contact from "./Screens/ContactScreen/Contact";
import Success from "./Screens/ContactScreen/Success";
import Fail from "./Screens/ContactScreen/Fail";
import Project from "./Screens/Projectsscreen/Project";

function App() {
  const { location } = useContext(__RouterContext);
  const transitions = useTransition(location, (location) => location.pathname, {
    from: { opacity: 0, transform: "translate(100%, 0)" },
    enter: { opacity: 1, transform: "translate(0%, 0)" },
    leave: { opacity: 0, transform: "translate(-50%, 0)" },
  });
  return (
    <>
      <Header />
      <main className="container-fluid">
        {transitions.map(({ item, props, key }) => (
          <animated.div key={key} style={props}>
            <Switch location={item}>
              <Route exact path="/" component={HomeScreen} />
              <Route exact path="/about" component={AboutMe} />
              <Route exact path="/skills" component={Card} />
              {/* <Route exact path="/projects" component={Projects} /> */}
              <Route exact path="/projects" component={Project} />

              <Route exact path="/contact" component={Contact} />
              <Route exact path="/success" component={Success} />
              <Route exact path="/fail" component={Fail} />

            </Switch>
          </animated.div>
        ))}
      </main>
    </>
  );
}

export default App;

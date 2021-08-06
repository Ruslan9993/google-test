import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { Books } from "./components/Books/Books";
import { BookDetails } from "./components/BookDetails/BookDetails";

export const App = () => {
  return (
    <div>
      <Router>
        <SearchBar />
        <Switch>
          <Route path="/" exact component={Books} />
          <Route path="/:id" component={BookDetails} />
        </Switch>
      </Router>
    </div>
  );
};

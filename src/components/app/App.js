import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import AppHeader from '../appHeader/AppHeader';

import { MainPage, ComicsPage, Page404, SingleComicsPage } from '../pages';

const App = () => {
  return (
    <Router>
      <div className="app">
        <AppHeader />
        <main>
          <Switch>
            <Route exact path="/">
              <MainPage />
            </Route>
            <Route exact path="/comics">
              <ComicsPage />
            </Route>
            <Route exact path="/comics/:comicId">
              <SingleComicsPage />
            </Route>
            <Route path="*">
              <Page404 />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default App;

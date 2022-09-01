import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import HeaderContentLayout from "layout/HeaderContentLayout";
import DashboardView from "pages/DashboardView";
import ForumView from "pages/ForumView";
import PollsView from "pages/PollsView";

import routes from "routes";

const pages = [
  { exact: true, path: routes.polls, component: PollsView },
  { exact: true, path: routes.dashboard, component: DashboardView },
  { exact: true, path: routes.forum, component: ForumView },
];

const App = () => {
  return (
    <div className="page-wrapper" style={{ backgroundColor: "ghostwhite" }}>
      <HeaderContentLayout>
        <Switch>
          {pages.map(({ exact, path, component: Component }) => {
            return (
              <Route
                key={path}
                exact={exact}
                path={path}
                render={() => <Component />}
              />
            );
          })}
          <Redirect to={routes.polls} />
        </Switch>
      </HeaderContentLayout>
    </div>
  );
};

export default App;

import { Route, Switch } from "react-router";
import "./App.css";
import Home from "./screens/Home/Home";
import AllPosts from "./screens/AllPosts/AllPosts";
import PostDetail from "./screens/PostDetail/PostDetail";
import PostEdit from "./screens/PostEdit/PostEdit";
import PostCreate from "./screens/PostCreate/PostCreate";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/posts" component={AllPosts} />
        <Route exact path="/posts/:id" component={PostDetail} />
        <Route exact path="/posts/:id/edit" component={PostEdit} />
        <Route path="/new" component={PostCreate} />
      </Switch>
    </div>
  );
}

export default App;

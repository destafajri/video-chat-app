import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import CreateRoom from "./page/CreateRoom"
import Room from "./page/Room"

function App() {
    return <div className="App">
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={CreateRoom}></Route>
				<Route path="/room/:roomID" component={Room}></Route>
			</Switch>
		</BrowserRouter>
	</div>;
}

export default App;
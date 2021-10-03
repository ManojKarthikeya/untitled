import "./App.css";
import Homepage from "./pages/homepage/homepage.component";
import Header from "./components/header/header.component";
import React from "react";
import { Switch, Route } from "react-router";
import GalleryPage from "./pages/gallery/gallery.component.jsx";

class App extends React.Component {
	constructor() {
		super();
		this.state = null;
	}
	componentDidMount() {}
	render() {
		return (
			<div>
				<Header />
				<Switch>
					<Route exact path="/" component={Homepage} />
					<Route exact path="/gallery" component={GalleryPage} />
				</Switch>
			</div>
		);
	}
}

export default App;

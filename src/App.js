import "./App.css";
import Homepage from "./pages/homepage/homepage.component";
import Header from "./components/header/header.component";
import React from "react";
import { Switch, Route } from "react-router";
import GalleryPage from "./pages/gallery/gallery.component.jsx";
import AboutPage from "./pages/about/about.component";
import ContactPage from "./pages/contact/contact.component";
import store from "./redux/store";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

const App = () => {
	return (
		<div>
			<Provider store={store}>
				<BrowserRouter>
					<Header />
					<Switch>
						<Route exact path="/" component={Homepage} />
						<Route exact path="/gallery" component={GalleryPage} />
						<Route exact path="/about" component={AboutPage} />
						<Route exact path="/contact" component={ContactPage} />
					</Switch>
				</BrowserRouter>
			</Provider>
		</div>
	);
};

export default App;

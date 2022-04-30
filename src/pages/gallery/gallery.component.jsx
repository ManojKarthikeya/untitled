import React from "react";
import "./gallery.styles.scss";
import { useSpring, animated } from "react-spring";
import { useMove,useScroll } from "@use-gesture/react";
const GalleryPage = () => {
	const bind = useMove(({ direction, target }) => {
		const [a,b] = direction;
	});
	return <animated.div {...bind()} className="main-gallery">
		<div className="junk"></div>
		<div className="junk"></div>
		<div className="junk"></div>
		<div className="junk"></div>
		<div className="junk"></div>
		<div className="junk"></div>
	</animated.div>;
};

export default GalleryPage;

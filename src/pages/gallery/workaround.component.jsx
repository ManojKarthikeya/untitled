import React from "react";
import "./gallery.styles.scss";
import ScrollContainer from "react-indiana-drag-scroll";
const WorkAround = (props) => {
	// useEffect(() => {
	//     const scrollWidth = 3337;
	//     const scrollHeight = 1956;
	// 	window.scrollBy((props.position.x) - scrollWidth/2, (props.position.y) - scrollHeight/2);
	// });
	return (
		<div>
			<ScrollContainer horizontal={true} className="scroll-container">
			<div className="gallery">
				<div className="gallery-text">GALLERY</div>
			</div>
			</ScrollContainer>
		</div>
	);
};

export default WorkAround;

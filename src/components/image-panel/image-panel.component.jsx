import React from "react";
import "./image-panel.styles.scss";
import { connect } from "react-redux";
import { imagePaths } from "../../data/imagePaths";
import Anime from "react-anime";

const ImagePanel = (state) => {
	return (
		<div>
			<Anime key={Math.random()} scale={[0.95,1]}>
				<div>
					<img
						className="image-panel"
						src={imagePaths[state.item.itemNumber].src}
						alt="broken"
					/>
				</div>
			</Anime>
		</div>
	);
};
const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(ImagePanel);

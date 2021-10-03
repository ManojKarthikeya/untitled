import React from "react";
import "./share-buttons.styles.scss";
import { connect } from "react-redux";
import Anime from "react-anime";
import {
	WhatsappShareButton,
	TwitterShareButton,
	FacebookShareButton,
	FacebookIcon,
	TwitterIcon,
	WhatsappIcon,
} from "react-share";
import { imagePaths } from "../../data/imagePaths";

const ShareButtons = (state) => (
    <div className="share-buttons">
            <Anime scale={[0,1]} duration={2000} key={Math.random()}>
			<TwitterShareButton
				bgStyle={{ fill: "#ff7777" }}
				className="share-button"
				url={`spandanasirisina.hal/gallery/${
					imagePaths[state.item.itemNumber].name
				}/`}
				title={"Cool Art! \n"}
				via={"SpandanaUsername"}
			>
				<TwitterIcon size={32} round={true} />
			</TwitterShareButton>
            </Anime>
            <Anime scale={[0,1]} duration={2000} key={Math.random()}>
			<FacebookShareButton
				className="share-button"
				url={`spandanasirisina.hal/gallery/${
					imagePaths[state.item.itemNumber].name
				}/`}
				quote={"Look at what I found!"}
			>
				<FacebookIcon size={32} round={true} />
			</FacebookShareButton>
            </Anime>
            <Anime scale={[0,1]} duration={2000} key={Math.random()}>
			<WhatsappShareButton
				className="share-button"
				title={"Look at this!"}
				separator="\n"
				url={`spandanasirisina.hal/gallery/${
					imagePaths[state.item.itemNumber].name
				}/`}
			>
				<WhatsappIcon size={32} round={true} />
			</WhatsappShareButton>
            </Anime>
		</div>
);

const mapStatetoProps = (state) => state;

export default connect(mapStatetoProps)(ShareButtons);

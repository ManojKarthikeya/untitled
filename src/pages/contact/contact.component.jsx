import React from "react";
import Email from "../../components/email/email.component";
import "./contact.styles.scss";
import { EmailShareButton } from "react-share";
import { ReactComponent as Rocket } from './../../assets/rocket-svgrepo-com.svg';
import { ReactComponent as Star1 } from './../../assets/star-svgrepo-com.svg';
import { ReactComponent as Bowl } from "./../../assets/bowl-with-chopsticks-bowl-soup-noodle-soup-svgrepo-com.svg";
import { ReactComponent as Amogus } from "./../../assets/hat-steam-among-us-online-game-svgrepo-com.svg";
import { ReactComponent as Queen } from "./../../assets/queen-royal-crown-svgrepo-com.svg";
import { ReactComponent as Ghost } from "./../../assets/ghost-svgrepo-com.svg";
import { ReactComponent as Palette } from "./../../assets/paint-palette-artist-svgrepo-com.svg";
import { ReactComponent as Brush } from "./../../assets/artist-tools-svgrepo-com.svg";
import { ReactComponent as Robot } from "./../../assets/robot-svgrepo-com.svg";
import { ReactComponent as Bulb } from "./../../assets/bulb-svgrepo-com.svg";
import { ReactComponent as SnapChat } from "./../../assets/snapchat-svgrepo-com.svg";
import { ReactComponent as Painting } from "./../../assets/painting-art-svgrepo-com.svg";
import { ReactComponent as Fire } from "./../../assets/fire-svgrepo-com (1).svg";
import { ReactComponent as Duck } from "./../../assets/small-duck-svgrepo-com.svg";


const ContactPage = () => {
	const array = ["#ff7777","#1e4c4c","#78ae80",'#87517f',"#b68a63"];
	const colorIndex = Math.floor(Math.random()*array.length);
	return(
	<div className="contactPage" id={Math.random()}>
		<div className="email-container" style={{color:array[colorIndex]}}>
			<EmailShareButton>
				<Email />
			</EmailShareButton>
		</div>
		<div className="svg-container" style={{fill:array[colorIndex]}} >
			<div className="test star"><Star1/></div>
			<div className="test rocket"> <Rocket/> </div>
			<div className="test bowl"> <Bowl/></div>
			<div className="test among-us"> <Amogus/></div>
			<div className="test ghost"> <Ghost/></div>
			<div className="test palette"> <Palette/></div>
			<div className="test brush"> <Brush/></div>
			<div className="test robot"> <Robot/></div>
			<div className="test bulb"> <Bulb/></div>
			<div className="test snap"> <SnapChat/></div>
			<div className="test painting"> <Painting/></div>
			<div className="test fire"> <Fire/></div>
			<div className="test duck"> <Duck/></div>
		</div>
		<div className="container">
			<div className="filter" /> 
		</div>
			<div className="test queen"> <Queen/></div>
	</div>
);
};
export default ContactPage;

import React from "react";
import "./homepage.styles.scss";
import ItemList from "../../components/item-list/item-list.component";
import ImagePanel from "../../components/image-panel/image-panel.component";
import DescriptionBox from "../../components/description/description.component";
import ShareButtons from "../../components/share-buttons/share-buttons.component";

const Homepage = () => (
	<div>
		<div className="item-list">
			<ItemList />
		</div>
		<div className="image-panel">
			<ImagePanel />
		</div>
		<div className="box">
			<DescriptionBox />
		</div>
		<div className="buts">
			<ShareButtons/>
		</div>
	</div>
);


export default Homepage;

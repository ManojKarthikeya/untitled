import React from "react";
import "./item-list.component.scss";
import { connect } from "react-redux";
import { imagePaths } from "../../data/imagePaths";
import { nextItem, prevItem } from "../../redux/item/item.actions";

const ItemList = (state) => {
	return (
		<div className="list">
			<div
				className={
					state.item.itemNumber - 1 === 0 ? "up-disppear" : "up"
				}
				onClick={state.prevItem}
			>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><path fill="none" stroke="#5c6470" stroke-width="2.875" d="M48 36.5l-23-23-23 23" opacity=".339"></path></svg>
			</div>
			<div className="titles">
				<div className="title" onClick={state.prevItem}>
					{imagePaths[state.item.itemNumber - 1].name}
				</div>
				<div key={Math.random()} className="current-item">
					<span className="current-item-text">
						{imagePaths[state.item.itemNumber].name}
						</span> 
				</div>
				<div className="title" onClick={state.nextItem}>
					{imagePaths[state.item.itemNumber + 1].name}
				</div>
			</div>
			<div
				className={
					state.item.itemNumber === imagePaths.length - 2
						? "up-disppear"
						: "up"
				}
				onClick={state.nextItem}
			>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><path fill="none" stroke="#5c6470" stroke-width="2.875" d="M2 13.5l23 23 23-23" opacity=".339"></path></svg>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
	nextItem: () => dispatch(nextItem()),
	prevItem: () => dispatch(prevItem()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);

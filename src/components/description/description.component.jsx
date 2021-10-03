import React from "react";
import './description.styles.scss'
import { connect } from "react-redux";
import { imagePaths } from "../../data/imagePaths";

const DescriptionBox = (state) => (
    <div key={Math.random()} className="description-box">
        <div className="heading">{imagePaths[state.item.itemNumber].name.toUpperCase()}</div>
        <div className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.  </div>
    </div>
)

const mapDispatchToProps = (state) => state;

export default connect(mapDispatchToProps)(DescriptionBox)
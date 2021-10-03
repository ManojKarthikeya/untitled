import { imagePaths } from "../../data/imagePaths";

const INITIAL_STATE = {
	itemNumber: 1,
};

const itemReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case "NEXT_ITEM":
			if(state.itemNumber !== imagePaths.length-2){
				state.itemNumber += 1;
				return {
					...state,
				}
			} else {
				return state;
			}
		case "PREVIOUS_ITEM":
			if(state.itemNumber !== 1){
				state.itemNumber -= 1;
				return {
					...state,
				};
			} else {
				return state;
			}
		default:
			return state;
	}
};

export default itemReducer;

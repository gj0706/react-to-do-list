import { createStore } from "redux";

import thunk from "redux-thunk";
import { reducer } from "../reducers/index";

export const store = createStore(reducer);


//wrap all the components in the app in the store, so they can share global states from store

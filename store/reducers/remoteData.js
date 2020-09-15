import { GET_DATA, GET_GRAPH_DATA } from "../actions/remoteData";

const initialState = {
  data: {},
  graphData: [],
};

const remoteDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA:
      return {
        ...state,
        data: action.data,
      };
    case GET_GRAPH_DATA:
      return {
        ...state,
        graphData: action.data,
      };
    default:
      return state;
  }
};
export default remoteDataReducer;

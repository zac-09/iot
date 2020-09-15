export const GET_DATA = "GET_DATA";
export const GET_GRAPH_DATA = "GET_GRAPH_DATA";

const fetchUrl = "http://sonata.runautomations.com/classes";
export const getData = () => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(`${fetchUrl}/send.php`, {
        method: "GET",
        headers: new Headers({
          // "Content-Type": "application/json",
        }),
      });

      if (!response.ok) {
        const errorResData = await response.json();
        let message = errorResData.message;
        console.log("the error is", message);
        throw new Error(message);
      }

      const resData = await response.json();
      console.log("after json conversion", resData);
      //   const cases = resData.cases;
      dispatch({
        type: GET_DATA,
        data: resData,
      });
    } catch (error) {
      throw error;
    }
  };
};

export const getGraphData = () => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(`${fetchUrl}/lineGraph.php`, {
        method: "GET",
        headers: new Headers({
          // "Content-Type": "application/json",
        }),
      });

      if (!response.ok) {
        const errorResData = await response.json();
        let message = errorResData.message;
        console.log("the error is", message);
        throw new Error(message);
      }

      const resData = await response.json();
      console.log("after json conversion", resData);
      //   const cases = resData.cases;
      dispatch({
        type: GET_GRAPH_DATA,
        data: resData,
      });
    } catch (error) {
      throw error;
    }
  };
};

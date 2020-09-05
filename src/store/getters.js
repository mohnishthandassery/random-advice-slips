export default {
  //Get Advice Slip
  advice: (state) => {
    return state.advice && state.advice.slip ? state.advice.slip.advice : "";
  },
};

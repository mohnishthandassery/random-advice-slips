import axios from "axios";

export default {
  //Generate Random Advice
  async randomAdvice({ commit }) {
    try {
      const { data } = await axios.get("https://api.adviceslip.com/advice");
      commit("SET_ADVICE", data);
    } catch (error) {
      console.error(error);
    }
  },

  //Generate Random Background
  async randomBackground({ commit }) {
    try {
      //Set Dimensions
      const width = 1920;
      const height = 1080;
      //Append Timstamp for new image
      const background = `https://picsum.photos/${width}/${height}/?random&t=${new Date().getTime()}`;
      commit("SET_BACKGROUND", background);
    } catch (error) {
      console.error(error);
    }
  },
};

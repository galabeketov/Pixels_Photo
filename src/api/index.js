import axios from "axios";

const instanceAxios = axios.create({
  baseURL: "https://api.pexels.com/v1",
  headers: {
    common: {
      Authorization: "563492ad6f91700001000001656e76ab6f4d4d30af9caeedd458d453",
    },
  },
});
// category = "home"

export const searchImg = async (category, index) => {
  try {
    const res = await instanceAxios.get(
      `search?query=${index}&page=${category}&per_page=20`
    );

    return { success: true, data: res.data };
  } catch (error) {
    return { success: false };
  }
};

export const getNewsByCategory = async (category = "nature", index = 1) => {
  try {
    const res = await instanceAxios.get(
      `/search?query=${category}&page=${index}&per_page=40`
    );

    console.log(res.data);

    return { success: true, data: res.data };
  } catch (error) {
    return { success: false };
  }
};

import axios from "axios";

const getAllCategoryApi = async () => {
    return await axios
      .get(`/category`)
      .then((res) => {
        console.log(res.data);
        return res.data;
      })
      .catch((e) => {
        console.log({ e });
        const errMsg = e.response?.data?.message || "Network Error";
        throw new Error(errMsg);
      });
  };
  export{
    getAllCategoryApi
  }
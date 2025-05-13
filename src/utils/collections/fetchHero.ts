import axiosInstance from "../request";

const fetchHero = async (locale: string) => {
  try {
    const res = await axiosInstance.get(`/hero?locale=${locale}&populate=*`);

    console.log(res.data.data.image);

    return res.data.data;
  } catch (error) {
    console.error(error);
  }
};

export { fetchHero };

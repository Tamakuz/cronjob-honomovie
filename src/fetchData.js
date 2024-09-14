import axios from "axios";

export const fetchData = async () => {
  const response = await axios.get("https://filmapik.li/");
  if (response.status === 200) {
    console.log("Data fetched successfully " + new Date().toISOString());
  } else {
    console.log("Failed to fetch data " + new Date().toISOString());
  }
};
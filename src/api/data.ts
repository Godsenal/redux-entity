import axios from "axios";
import { Data } from "model/data";

export const getData = async (userId: string) => {
  const { data } = await axios.get<Data[]>(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  );
  return data;
};

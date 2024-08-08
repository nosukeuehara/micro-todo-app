import axios from "axios";
import { useEffect, useState } from "react";

export interface FetchData {
  message: string;
}

export interface Data {
  data: FetchData | undefined;
  loading: boolean;
}

export function useFetchData<S = undefined>(): [S | undefined, boolean] {
  const [data, setData] = useState<S>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:3000/test");
        setData(res.data);
        setLoading(false);
      } catch (error) {
        console.log("faild to fetch data:", error);
      }
    };

    fetchData();
  }, []);

  return [data, loading];
}

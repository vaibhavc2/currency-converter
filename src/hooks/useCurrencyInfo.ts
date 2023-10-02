import { useEffect, useState } from "react";
import { url } from "../constants";

const useCurrencyInfo = (currency: string) => {
  const [data, setData] = useState<Object>();

  useEffect(() => {
    fetch(`${url}/${currency}.json`)
      .then((res) => res.json())
      .then((res) => setData(res[currency]));
  }, [currency]);

  return data;
};

export default useCurrencyInfo;

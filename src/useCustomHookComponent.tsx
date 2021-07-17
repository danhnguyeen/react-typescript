import { useEffect, useState } from "react";

export interface Beverage {
  name: string;
  producerName: string;
  beverageName: string;
  beverageColor: string;
  beverageStyle: string;
  producerLocation: string;
  abv: number;
  ibu: number;
  logo: string;
  level: number;
}

function useFetchData(url: string): { data: Beverage[] | null, done: boolean } {
  const [data, setData] = useState<Beverage[] | null>(null);
  const [done, setDone] = useState(false);

  useEffect(() => {
    fetch(url).then((res) => res.json()).then(d => {
      setData(d);
      setDone(true)
    })
  }, [])

  return { data, done }
}

function CustomHookComponent() {
  const { data, done } = useFetchData('/hv-taplist.json');
  console.log(data)
  return <div>
    {done && <img src={data![0].logo} />}
  </div>
}

export default CustomHookComponent;
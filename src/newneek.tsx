import Card, { CardProps } from "./Card";
import Header from "./header";
import { useEffect, useState } from "react";

export default function Newneek(){
     const [data, setData] = useState<CardProps[]>([]);
    
      useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
          .then((response) => response.json())
          .then((json) => setData(json.slice(0, 5)));
      }, []);
    
      return (
        <>
        <header><Header /></header>
        <div className="flex flex-col items-center gap-8 py-16 max-w-[1280px] mx-auto">
          {data.map((item) => (
            <Card {...item} />
          ))}
        </div>
        </>
    );
}


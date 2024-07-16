"use client"
import Image from "next/image";
import Loading from "@/components/Loading";

export default function Home() {
  function getData(){
    const res = fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))
  }
  getData();

  return (
    <div>
    
    <Loading/> 
    </div>
  );
}

// import React from 'react';
import mongoose from 'mongoose';
import React from 'react'
// import styles from './page.module.css'
// import Image from "next/image";
// import Link from 'next/link';

async function fetchData() {
  const res = await fetch("http://localhost:3000/api/posts/", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

// const DataSchema = new mongoose.Schema({
//     _id: String,
//     title: String,
//     desc: String,
//     img: String,
//     content: String,
//     username: String,
//   });
  
  const Data = mongoose.model('Data', DataSchema);
   fetchData = () => {
    return new Promise((resolve, reject) => {
      Data.find({}, (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  };
  const DataList = ({ data }) => {
    return (
      <div>
        {data.map((item) => (
          <div key={item._id}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <img src={item.img} alt={item.title} />
            <p>{item.content}</p>
            <p>Username: {item.username}</p>
          </div>
        ))}
      </div>
    );
  };
  const index = ({ data }) => {
    return (
      <div>
        <h1>Data List</h1>
        <DataList data={data} />
      </div>
    );
  };
  
  export async function getStaticProps() {
    const data = await fetchData();
  
    return {
      props: {
        data,
      },
    };
  }
  
  export default index;
        
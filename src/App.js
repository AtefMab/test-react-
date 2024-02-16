import { useEffect, useState } from "react";
import "./App.css";
import Allproducts from "./allProducts.jsx";
import Productdetails from "./productdetails.jsx";

function App() {
  const [ts, setts] = useState({});
  const data = [
    {
      title: "pc",
      price: 50,
      img: "https://m.media-amazon.com/images/I/819XYUimTuL.jpg",
    },
    {
      title: "tel",
      price: 100,
      img: "https://mk-media.mytek.tn/media/catalog/product/cache/8be3f98b14227a82112b46963246dfe1/i/p/iph-11-64-black_2.jpg",
    },
    {
      title: "car",
      price: 98465,
      img: "https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&height=900&width=1600&fit=bounds",
    },
    {
      title: "moto",
      price: 65,
      img: "https://images.netdirector.co.uk/gforces-auto/image/upload/w_600,h_450,q_auto,c_fill,f_auto,fl_lossy/auto-client/af3902c7b00f562ebaa606c3f0c34516/2023_yam_yzf600r6rcomp_eu_mdnm6_stu_001_03_1.jpg",
    },
    {
      title: "casque",
      price: 865,
      img: "https://tn.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/57/3397/1.jpg?3045",
    },
    {
      title: "yellow",
      price: 845,
      img: "",
    },
    {
      title: "black",
      price: 9856,
      img: "",
    },
  ];
  useEffect(() => {
    console.log(ts);
  });
  const test = (x) => {
    setts(x);
  };
  return (
    <div className="App">
      <h1>This is react</h1>
      {Object.keys(ts).length === 0 ? (
        <Allproducts test={test} data={data} />
      ) : (
        <Productdetails test={test} one={ts} />
      )}
    </div>
  );
}

export default App;

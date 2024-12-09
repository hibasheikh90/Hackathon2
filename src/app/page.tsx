import Image from "next/image";
import Topbar from "./components/topbar";
import Nav from "./components/nav";
import Hero from "./components/hero";
import Brand from "./components/brand";
import NewCeramics from "./components/cer";
import PopularProducts from "./components/product";
import Signup from "./components/signup";
import Studio from "./components/studio";
import Footer from "./components/footer";
import Section from "./components/s";
import ProductPage from "./components/pro";
import Item from "./components/item"; 
import Cart from "./components/cart"
import List from "./components/list"

export default function Home() {
  return (
    <div>
      <Topbar />
      <Nav />
      <Hero />
      <Brand />  
      <NewCeramics />
      <PopularProducts />
      <Signup />
      <Studio />
      <Section />
      <ProductPage />
      <Item />
      <Cart />
      <List />
      <Footer />
    </div>
  );
}

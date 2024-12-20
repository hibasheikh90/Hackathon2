import Hero from "./components/hero";
import Brand from "./components/brand";
import NewCeramics from "./components/cer";
import PopularProducts from "./components/product";
import Signup from "./components/signup";
import ProductPage from "./components/chair";
import Item from "./components/item"; 
import Cart from "./components/cart"
import List from "./components/list"
import Table from "./components/table";

export default function Home() {
  return (
    <div>
      <Hero />
      <Brand />  
      <NewCeramics />
      <PopularProducts />
      <Signup />
      <Table />
      <ProductPage />
      <Item />
      <Cart />
      <List />
    </div>
  );
}

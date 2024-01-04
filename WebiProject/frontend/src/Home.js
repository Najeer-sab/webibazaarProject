import Navbar1 from "./navbar1";
import Navbar2 from "./navbar";
import Shopeur from "./shopeur";
import Cards from "./cards";
import Category from "./category";
import { FeatureProduct } from "./featureProduct";
import { CatProd } from "./CatProd";
 import Themeextimg from "./Themeextimg";

import LatestNews from "./latestNews";
import Scrollcards from "./scrollcards";
import Footer from "./footer";
import ProductList from "./productcomponent/ProductList";
import AllCategory from "./allCategory";

function Home() {
  return (
    <>
      <Navbar1 />
      <Shopeur />
      <Navbar2 />
      <AllCategory />
      
      <Cards /> 
      <Category />
      <ProductList />
      {/* <ProductDisplay />     */}
      <FeatureProduct />
      <CatProd />
      <Themeextimg />
      <LatestNews />
    
      <Scrollcards />
      <Footer />
    </>
  );
}

export default Home;

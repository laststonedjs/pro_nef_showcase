// components
import { Download, Features, SectionWrapper } from "./components";
// assets
import assets from "./assets";

const App = () => {
  return (
    <>
      <SectionWrapper
        title="You own store of Nifty NFTs. Start Selling & Growing."
        description="Buy, store, collect NFTs, exchange & earn crypto. 
        Join our community using ProNef Marketplace."
        showBtn
        mockupImg={assets.homeHero}
        banner="banner"
      />
    </>
  );
}

export default App;

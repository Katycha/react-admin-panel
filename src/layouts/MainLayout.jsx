import Footer from "../ExchangeRates/components/Footer/Footer";
import Header from "../ExchangeRates/components/Header/Header";
import SideBar from "../ExchangeRates/components/SideBar/SideBar";

function MainLayout(props) {
  return (
    <div>
      <Header />
      <SideBar />
      {props.children}
      <Footer />
    </div>
  );
}
export default MainLayout;

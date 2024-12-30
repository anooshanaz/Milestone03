import Image from "next/image";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Prograssive from "./components/Prograssive";
import Offer from "./components/Offer";
import SpecialOffers from "./components/Offer";
import Card from "./components/Card";
import Reservation from "./components/Reservation";
import Footer from "./components/Footer";
import Cardsoul from "./components/Cardsoul";
import Productlist from "./components/Productlist";
import Testimonals from "./components/Testimonals";
import Menu from "./components/Menuitems";
import Menuitems from "./components/Menuitems";

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-black to-slate-900">
      <Navbar/>
      <Cardsoul/>
      <Banner/>
      <Productlist/>
      <Menuitems/>
      <Prograssive/>
      <SpecialOffers/>
      <Card/>
      <Reservation/>
      <Testimonals/>
      <Footer/>
    </div>
  );
}

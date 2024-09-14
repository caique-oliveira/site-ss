import Image from "next/image";
import Header from "./components/header/header";
import Home from "./home/page";
import Footer from "./components/footer/footer";

export default function index() {
  return (
    <>
    <Header />
      <Home />
    <Footer />  
    </>
  );
}

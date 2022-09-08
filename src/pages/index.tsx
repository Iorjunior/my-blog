import type { NextPage } from "next";
import NavBar from "../components/navbar";

const Home: NextPage = () => {
  return(
    <>
    <NavBar/>
    <div className="bg-blue-600 h-60"></div>
    </>
  );
};

export default Home;

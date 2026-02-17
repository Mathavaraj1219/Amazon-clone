import Navbar from "./Navbar";
import Hero from "./Hero";
import CardSection from "./CardSection";
import SubNavbar from "./SubNavbar";

function Home() {
    return (<div className="bg-gray-100 min-h-screen">
      <Navbar />
      <SubNavbar />
      <Hero />
      <CardSection />
    </div>
    );  
}

export default Home;
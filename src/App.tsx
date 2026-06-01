import Benefits from "./components/Benefits";
import Contacts from "./components/Contacts";
import Features from "./components/Features";
import FeedBack from "./components/Feedback";
import Header from "./components/Header";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Specifications from "./components/Specifications";
import TrustedBy from "./components/TrustedBy";

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <TrustedBy />
      <Benefits />
      <Features />
      <Specifications />
      <FeedBack />
      <HowItWorks />
      <Contacts />
      <TrustedBy />
    </>
  );
}

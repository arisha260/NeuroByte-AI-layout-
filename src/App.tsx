import { ClientsSay } from "./components/ClientsSay";
import { Features } from "./components/Features";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { HomeBg } from "./components/HomeBg";
import { Integrations } from "./components/Integrations";
import { Join } from "./components/Join";
import { OurTeam } from "./components/OurTeam";
import { Security } from "./components/Security";
import { Trusted } from "./components/Trusted";


export default function App() {
  return (
    <div>
      <HomeBg />
      <Header />
      <Home />
      <Trusted />
      <Features />
      <Integrations />
      <Security />
      <OurTeam />
      <ClientsSay />
      <Join />
      <Footer />
    </div>
  )
}

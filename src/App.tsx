import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { HomeBg } from "./components/HomeBg";
import { Trusted } from "./components/Trusted";


export default function App() {
  return (
    <div>
      <HomeBg />
      <Header />
      <Home />
      <Trusted />
    </div>
  )
}

// COMPONENTS 
import { Header } from '../reusable-components/header/header.component.jsx';
import Banner from '../home-components/banner/banner.component.jsx';
import { Main } from './main/main.component.jsx'
import { Footer } from '../reusable-components/footer/footer.component.jsx';


export const Home = () => {

  return (
    <div className="home">
      <Header />
      <Banner />
      <Main />
      <Footer />
    </div>
  )
}
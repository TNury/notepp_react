// COMPONENTS 
import { Header } from '../reusable-components/header/header.jsx';
import Banner from './banner/banner.jsx';
import { Main } from './main/main.jsx'
import { Footer } from '../reusable-components/footer/footer.jsx';


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
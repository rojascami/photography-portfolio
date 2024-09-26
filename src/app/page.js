import Landing from './landing/page'
import Landscapes from './landscapes/page'
import Sports from './sports/page'
import Contact from './contact/page'
import "./globals.scss";
 

export default function Home() {
  return (
    <div className="container">
   <Landing></Landing>
    <Landscapes ></Landscapes>
    <Sports></Sports>
    <Contact></Contact>
    </div>

  );
}

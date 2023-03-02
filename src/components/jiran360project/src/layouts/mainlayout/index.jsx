import Footer2 from "./footer";
import Navbar2 from "./navbar";

export default function MainLayOut({children}) {
    return (
      <div>
      <Navbar2/>{children}<Footer2/>
      </div>
    )
  }
  
import Image from "next/image"
import Link from "next/link"

function Header() {
  return (
    <header className="header">
        <nav>
          <div className="logo">
            <Link href="/">
              {/* <Image src="vercel.svg" width={30} height={30}></Image> */}
              {/* <Image src="https://brandlogos.net/wp-content/uploads/2022/07/next.js-logo_brandlogos.net_zeccw-512x512.png" width={30} height={30}></Image> */}
              <Image src="https://freepng.com/uploads/images/202512/ext-js-logo-vector-png_1020x.jpg" width={30} height={30} alt="logo"></Image>
            </Link>
          </div>
          <div className="nav-links">
            <Link href="/">Home</Link>          
            <Link href="about">About</Link>          
          </div>
        </nav>
    </header>
  )
}

export default Header
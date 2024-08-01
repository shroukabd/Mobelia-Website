
import Link from "next/link"
import logo from "../public/image/logo.png"
import Image from "next/image"

const Logo = () => {
  return (
    <Link href='/'>
        <Image src={logo}
        width={160}
        height={55}
        alt=""/>
      
    </Link>
  )
}

export default Logo

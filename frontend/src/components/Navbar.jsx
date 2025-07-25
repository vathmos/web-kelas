import { Link } from "react-router"

export default function Navbar() {
  return (
    <div className="z-100 flex h-[60px] bg-background-secondary justify-between">
      <div className="flex justify-baseline items-center">
        <Link to={"/"}>
          <img src="/rpl-logo.svg" className="size-[38px] ml-[28px] cursor-pointer" />
        </Link>
      </div>

      <div className="flex text-primary font-semibold items-center gap-[60px] mr-[60px]">
        <div className="nav-item cursor-pointer">
          <Link to="/about-us">About Us</Link>
        </div>
        <div className="nav-item cursor-pointer">
          <Link to="/structure">Structure & Schedule</Link>
        </div>
        <div className="nav-item cursor-pointer">
          <Link to="/memories">Memories</Link>
        </div>
        <div className="nav-item cursor-pointer">
          <Link to="/menfess">Menfess</Link>
        </div>
      </div>
    </div>
  )
}

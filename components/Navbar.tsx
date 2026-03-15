"use client"

import Link from "next/link"

export default function Navbar(){

return(

<nav className="navbar">

<h2 className="logo">FinCal</h2>

<div className="nav-links">

<Link href="/">Home</Link>
<Link href="/education">Education</Link>
<Link href="/wedding">Wedding</Link>
<Link href="/travel">Travel</Link>

</div>

</nav>

)

}
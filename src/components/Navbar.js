'use client'
import React from 'react';
import { useRouter } from 'next/navigation'



const Navbar = () => {
  const router = useRouter()

  function signOut() {
    return router.push("/signup")




  }


    return (
<nav className="navbar">
  <div className="container-fluid">
    <form className="d-flex" role="search">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
      <button className="btn btn-outline-success" type="submit">Search</button>
    </form>

    {/* Icons */}
    <div className="ms-auto">
      <i className="fas fa-bell me-2"></i>
      <i className="fas fa-sign-out-alt" onClick={signOut}></i>
    </div>
  </div>
</nav>

    );
  }
  
  export default Navbar;









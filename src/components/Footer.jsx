import React from 'react'
import { GiWorld } from 'react-icons/gi';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

// BsGithub

function Footer() {
  return (
    <>
    <footer class="fbg text-center text-white">
  {/* <!-- Grid container --> */}
  <div class="container p-4 pb-0">
    {/* <!-- Section: Social media --> */}
    <section class="mb-4">
      {/* <!-- portfolio --> */}
      <a class="btn btn-outline-light btn-floating m-1" href="https://sumansaksh.netlify.app" role="button"
        ><i class="fab fa-portfolio"><GiWorld/></i></a>

      {/* <!-- Linkedin --> */}
      <a class="btn btn-outline-light btn-floating m-1" href="https://www.linkedin.com/in/suman-sakshi-751188218/" role="button"
        ><i class="fab fa-linkedin-in"><FaLinkedin/></i></a>

      {/* <!-- Github --> */}
      <a class="btn btn-outline-light btn-floating m-1" href="https://github.com/sumansaksh" role="button"
        ><i class="fab fa-github"><FaGithub/></i></a>
    </section>
    {/* <!-- Section: Social media --> */}
  </div>
  {/* <!-- Grid container --> */}

  {/* <!-- Copyright --> */}
  <div class="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
  𝔐𝔞𝔡𝔢 𝔴𝔦𝔱𝔥 ❤ 𝔟𝔶 𝔰𝔲𝔪𝔞𝔫 𝔰𝔞𝔨𝔰𝔥𝔦
  </div>
  {/* <!-- Copyright --> */}
</footer>
    </>
  )
}

export default Footer
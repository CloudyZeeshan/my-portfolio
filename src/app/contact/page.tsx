// "use client";
// import React from "react";
// import "./style.css";
// import Footer from "../components/Footer";
// import Link from "next/link";

// export default function Contact() {
//   return (
//     <>
//       <div className="contact-container" style={{ minHeight: '100vh', marginTop: 0 }}>
//         <nav className="flex justify-between items-center w-full h-16 px-8 z-50">
//           <h1 className="text-2xl text-white">My Portfolio</h1>
//           <div className="hidden md:flex space-x-6">
//             <Link href="/" className="hover:text-yellow-500 text-white">Home</Link>
//             <Link href="/project" className="hover:text-yellow-500 text-white">Projects</Link>
//             <Link href="/about" className="hover:text-yellow-500 text-white">About</Link>
//             <Link href="/contact" className="hover:text-yellow-500 text-white">Contact</Link>
//           </div>
//         </nav>
//         <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
//           <form action="https://api.web3forms.com/submit" method="POST" className="contact-left">
//             <div className="contact-left-title">
//               <h2>Get in touch</h2>
//               <hr />
//             </div>
//             <input type="hidden" name="access_key" value="1324a681-7d01-45ce-bc52-9742d70cf431" />
//             <input type="text" name="name" placeholder="Your Name" className="contact-input" required />
//             <input type="email" name="email" placeholder="Your Email" className="contact-input" required />
//             <textarea name="message" placeholder="Your Message" className="contact-input" required></textarea>
//             <button type="submit">Submit</button>
//           </form>
//           <div className="contact-right">
//             {/* <img src="/assistant/right_img.png" alt="right visual" style={{ maxWidth: '100%', height: 'auto' }} /> */}
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// }



"use client";
import React from "react";
import Footer from "../components/Footer";
import Link from "next/link";
import { FaHome, FaEnvelope, FaProjectDiagram, FaUserAlt } from "react-icons/fa";
import "./style.css";

export default function Contact() {
  return (
    <>
      <div className="contact-container">
        <nav className="nav-bar">
          <h1 className="logo">My Portfolio</h1>
          <div className="nav-links">
            <Link href="/"><FaHome /> Home</Link>
            <Link href="/project"><FaProjectDiagram /> Projects</Link>
            <Link href="/about"><FaUserAlt /> About</Link>
            <Link href="/contact"><FaEnvelope /> Contact</Link>
          </div>
        </nav>

        <div className="contact-content">
          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            className="contact-left"
          >
            <div className="contact-left-title">
              <h2>Get in touch</h2>
              <hr />
            </div>
            <input
              type="hidden"
              name="access_key"
              value="1324a681-7d01-45ce-bc52-9742d70cf431"
            />
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="contact-input"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="contact-input"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              className="contact-input"
              required
            ></textarea>
            <button type="submit">Submit</button>
          </form>

          <div className="contact-right">
            <img src="/assets/right_img.png" alt="Visual" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}


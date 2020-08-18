import Link from "next/link";
import Github from "./icons/Github";
import Linkedin from "./icons/Linkedin";
import Medium from "./icons/Medium";
import Twitter from "./icons/Twitter";

function Footer() {
  return (
    <section id="footer" className="contain">
      <nav>
        <ul>
          <li>
            <Link href="//twitter.com/portiiiix">
              <a target="_blank">
                <Twitter />
              </a>
            </Link>
          </li>
          <li>
            <Link href="//github.com/FurkanPortakal">
              <a target="_blank" rel="noopener noreferrer">
                <Github />
              </a>
            </Link>
          </li>
          <li>
            <Link href="//linkedin.com/in//furkan-portakal">
              <a target="_blank" rel="noopener noreferrer">
                <Linkedin />
              </a>
            </Link>
          </li>
          <li>
            <Link href="//medium.com/@furkanportakal">
              <a target="_blank" rel="noopener noreferrer">
                <Medium />
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default Footer;

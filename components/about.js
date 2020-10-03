import Link from "next/link";

function About() {
  return (
    <section id="about" className="contain">
      <img src="porti.jpeg" width="175" height="175" alt="Furkan Portakal" />
      <p>
        I'm <span className="name">Furkan Portakal</span>. I'm Jr. Frontend
        Developer and studying computer engineer student at Bursa Technical
        University.I'm build project for TEKNOFEST(it's a competition ) . I had
        the opportunity to lead artificial intelligence in the construction of
        the popular vtol aircraft. I have more web development skills.
        <br></br> I{" "}
        <Link href={"//twitter.com/furkanportakalx
"} prefetch={false}>
          <a target="_blank" rel="noopener noreferrer">
            <u>tweet</u>
          </a>
        </Link>{" "}
        about all topics, my projects on{" "}
        <Link href={"//githkb.com/FurkanPortakal"} prefetch={false}>
          <a target="_blank" rel="noopener noreferrer">
            <u>github</u>
          </a>
        </Link>{" "}
        and I writing blog on{" "}
        <Link href={"//medium.com/@furkanportakal"} prefetch={false}>
          <a target="_blank" rel="noopener noreferrer">
            <u>medium</u>
          </a>
        </Link>
        .{""}
      </p>
    </section>
  );
}

export default About;

import React from "react";
import { AiFillInstagram, AiFillYoutube, AiFillGithub } from "react-icons/ai";

const FooterContent = ({ title, description, tagline }) => (
  <div>
    <h2>{title}</h2>
    <p>{description}</p>
    <em>{tagline}</em>
    <strong>All right received @burgershop</strong>
  </div>
);

const SocialLinks = ({ youtubeLink, instagramLink, githubLink }) => (
  <aside>
    <h4>Follow Us</h4>
    <a href={youtubeLink}>
      <AiFillYoutube />
    </a>
    <a href={instagramLink}>
      <AiFillInstagram />
    </a>
    <a href={githubLink}>
      <AiFillGithub />
    </a>
  </aside>
);

const Footer = () => {
  return (
    <footer>
      <FooterContent
        title="Burger Shop"
        description="We are trying to give you the best taste possible."
        tagline="We give attention to genuine feedback."
      />
      <SocialLinks
        youtubeLink="https://youtube.com/hello"
        instagramLink="https://instagram.com/hello"
        githubLink="https://github.com/hello"
      />
    </footer>
  );
};

export default Footer;

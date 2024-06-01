/* eslint-disable @next/next/no-page-custom-font */
import { Hero, MainSection } from "../sections";

const heroProps = {
  image: { src: "/img/heroimg.png", alt: "", width: 1000, height: 1680 },
  title: "Agency procurement, outsourced.",
  description: "Start the process here",
  ctaText: "Start",
};

const mainSectionProps = {
  background: { src: "/img/mainsection/mainsectionbgr.png", alt: "" },
  image: {
    src: "/img/mainsection/mainsectionposter.png",
    alt: "",
    width: 400,
    height: 600,
  },
  title: "Managed agency selection",
  description: "Stenghten your onboarding process",
  margin: 20
};

export default function Home() {
  return (
    <>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <div>
        <Hero {...heroProps} />
        <MainSection {...mainSectionProps} />
      </div>
    </>
  );
}

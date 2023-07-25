import Hello from "./Section/Hello";
import AboutMe from "./Section/AboutMe";
import Portfolio from "./Section/Portfolio";
import Blogs from "./Section/Blogs";
import Contact from "./Section/Contact";

const blogs = [
  {
    id: Math.random() * 100,
    postDate: "2020/03/25",
    title: "[Tutorial] React Redux Know-How",
    content: "Fuck yeah.",
  },
  {
    id: Math.random() * 100,
    postDate: "2020/03/25",
    title: "[Tutorial] React Redux Know-How",
    content: "Fuck yeah.",
  },
];

const Main = () => {
  return (
    <main className="main-content">
      <Hello />
      <AboutMe />
      <Portfolio />
      <Blogs items={blogs} />
      <Contact />
    </main>
  );
};

export default Main;

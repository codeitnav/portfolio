import { FocusCards } from "@/components/ui/focus-cards";
import blog from "../../public/blog.jpeg";
import curr_img from "../../public/currency.jpeg";
import pass_img from "../../public/password.jpeg";

const ProjectsSection = () => {
  const cards = [
    {
      title: "Scribe - Blogging Website",
      desc: "A minimal and modern blogging website to share stories, insights, and creative content with readers around the world.",
      src: blog,
      link: "https://scribeblog.vercel.app/"
    },
    {
      title: "Password Generator",
      desc: "An interactive web app that lets users create secure, random passwords with customizable options like numbers and special characters, and copy them with a click.",
      src: pass_img,
      link: "https://strong-password-generator-tool.vercel.app/"
    },
    {
      title: "Currency Converter",
      desc: "A responsive and user-friendly web app enabling real-time conversion between 300+ global currencies",
      src: curr_img,
      link: "https://free-currency-converter-tool.vercel.app/"
    },
  ];

  return (
    <div> 
      <section className="text-black dark:text-white" id="projects">
        <div className="grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-8">
          <div className="text-left flex flex-col h-full">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Projects
            </h2>
          </div>
        </div>
      </section>
      <FocusCards cards={cards} />
    </div>
  );
}

export default ProjectsSection;
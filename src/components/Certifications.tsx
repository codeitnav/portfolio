import { FocusCards } from "@/components/ui/focus-cards";
import stanford from "../../public/stanford.png";
import yale from "../../public/yaleImg.jpg";

const CertificationsSection = () => {
  const cards = [
    {
      title: "Divide and Conquer, Sorting and Searching, and Randomized Algorithms",
      desc: "Stanford Online",
      src: stanford,
      link: "https://coursera.org/share/78b40646266fd1b6802e4e81986d91f6"
    },
    {
      title: "Financial Market",
      desc: "Yale Online [Ongoing]",
      src: yale,
    },
  ];

  return (
    <div> 
      <section className="text-black dark:text-white" id="certifications">
        <div className="grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-8">
          <div className="text-left flex flex-col h-full">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Certifications
            </h2>
          </div>
        </div>
      </section>
      <FocusCards cards={cards} />
    </div>
  );
}

export default CertificationsSection;
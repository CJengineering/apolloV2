import Image from "next/image";
import programmeImage from "@/public/images/home/blueCJMap.png";
import porgrammeImageWebp from "@/public/images/home/blueCJMap.webp";
export default function SectionHeroHome() {
    return (
      <section className="flex justify-center">
        <div className="hidden sm:block relative w-full">
          <Image
            className="h-full w-full object-cover"
            src={porgrammeImageWebp.src}
            priority={true}
            alt="Map of Community Jameel programmes"
            width={1980}
            height={1080}
          />
        </div>
      </section>
    );
  }
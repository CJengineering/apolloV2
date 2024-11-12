import { HomeCardProps } from "@/app/interfaces";
import HomeCard from "@/components/CJ-components/components-CJ/basic components/HomeCard";

export default function SectionHomeCard({ cardData }: { cardData: HomeCardProps[] }) {
    return (
      <section className="flex justify-center ">
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cardData.map((card, index) => (
            <HomeCard
              key={index}
              imageUrl={card.imageUrl}
              alt={card.alt}
              title={card.title}
              subtitle={card.subtitle}
              link={card.link}
              openInNewTab={card.openInNewTab}
              clickAction={card.clickAction || ""}
            />
          ))}
        </div>
      </section>
    );
  }
import ButtonCJ from "@/components/CJ-components/components-CJ/basic components/ButtonCJ";
interface ContentSectionProps {
    title: string;
    content: any[]; 
    buttonLink: string;
    buttonText: string;
    CardComponent: React.ElementType; 
    locale?: string;
    isLast?: boolean;
  }
const ContentColumn = ({ title, content, buttonLink, buttonText, CardComponent, locale = "en",isLast }:ContentSectionProps) => (
    <div className="col-span-12 lg:col-span-4">
      <h2 className="header-section pb-3">{title}</h2>
      <div className="w-full space-y-6">
        {content.map((value, index) => (
          <CardComponent content={value} locale={locale} key={index + title} />
        ))}
      </div>
      <div className="pt-2 mt-auto">
        <ButtonCJ
          href={buttonLink}
          text={buttonText}
          openInNewTab={false}
          styleType="secondary"
        />
      </div>
      {!isLast && (
      <div className="lg:hidden w-full py-6 md:py-12">
        <div className="w-full h-[1px] bg-slate-200 dark:bg-slate-700"></div>
      </div>
    )}
    </div>
  );
  
  export default ContentColumn;
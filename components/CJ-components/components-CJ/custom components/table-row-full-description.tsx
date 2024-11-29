import { RowContentData } from "@/app/interfaces";

export function TableRowFullDescription({
    content,
    isArabic,
  }: {
    content: RowContentData;
    isArabic: boolean;
  }) {
    return (
      <div className="mt-6">
        <div
          className="sans-serif text-xl md:w-11/12 md:text-2xl leading font-normal"
          dangerouslySetInnerHTML={{
            __html: isArabic
              ? content.fullDescriptionArabic
              : content.fullDescription,
          }}
        ></div>
      </div>
    );
  }
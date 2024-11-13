import { RowContentData } from "@/app/interfaces";
import Image    from "next/image";

export function TableRowLogoLightImage({ content }: { content: RowContentData }) {
    return (
      <div>
        {content.logo?.url && (
          <Image
            className="dark:hidden object-fit w-64 py-3"
            width={400}
            height={300}
            src={content.logo?.url || ""}
            alt={content.logo?.alt || ""}
          />
        )}
      </div>
    );
  }
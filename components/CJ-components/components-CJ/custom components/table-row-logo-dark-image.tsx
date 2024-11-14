import { RowContentData } from "@/app/interfaces";
import Image from "next/image";

export function TableRowLogoDarkImage({
  content,
}: {
  content: RowContentData;
}) {
  return (
    <div>
      {content.logoDark?.url && (
        <Image
          className="dark:block hidden object-fit w-64 py-3"
          width={400}
          height={300}
          src={content.logoDark?.url || ""}
          alt={content.logoDark?.alt || ""}
        />
      )}
    </div>
  );
}

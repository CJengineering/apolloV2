import { RowContentData } from "@/app/interfaces";
import SocialMediaList from "../basic components/SocialMediaList";
import ButtonCJ from "../basic components/ButtonCJ";
import { socialListChecker } from "@/functions/utils/social-list-checker";

export function TableRowSocialContent({
  content,
  slug,
}: {
  content: RowContentData;
  slug: string;
}) {
  return (
    <div className=" py-4">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-start">
        <div className="pb-3 lg:pb-0">
          <SocialMediaList socialMediaLinks={content.socialMediaLinks} />
        </div>

        <div className={`pb-3 lg:pb-0 `}>
          {content.button.text && (
              <div
              className={`${
                socialListChecker(content.socialMediaLinks) ? "" : "lg:pr-3"
              }`}
            >
            <ButtonCJ
              href={content.button.href}
              text={content.button.text}
              styleType="primary"
              openInNewTab={true}
            />
            </div>
          )}
        </div>
        <div
          className={`${
            socialListChecker(content.socialMediaLinks) ? "lg:pl-3" : ""
          }`}
        >
          <div>
           
              <ButtonCJ
                href={`/programmes/${slug}`}
                text="learn more"
                styleType="primary"
              />
           
          </div>
        </div>
      </div>
    </div>
  );
}

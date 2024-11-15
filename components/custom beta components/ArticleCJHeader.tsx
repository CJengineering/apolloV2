import LanguageChanger from "./LanguageChanger";

const ArticleHeader = ({ title, isArabic, locale }: any) => (
    <div
      className={`pt-6 w-full mb-4 flex justify-between ${
        locale === "ar" ? "rtl" : ""
      }`}
    >
      <div className="w-full">
        <h1
          className={`header-article leading-7 sm:leading-tight pb-0 pt-12 lg:pb-0 lg:pt-4 ${
            locale === "ar" ? "sans-serif-ar text-right" : "sans-serif text-left"
          }`}
        >
          {title}
        </h1>
      </div>
      {isArabic && (
        <div
          className={`pb-0 pt-12 lg:pb-4 lg:pt-4 ${
            locale === "ar" ? "order-1 ml-0 mr-auto" : "order-2 mr-0 ml-auto"
          }`}
        >
          <LanguageChanger />
        </div>
      )}
    </div>
  );
  export default ArticleHeader;
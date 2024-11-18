const ArticleMetadata = ({ date, location, locale }: any) => (
    <div className="mx-auto py-6 ">
      <div
        className={`pl-0 text-[1.1rem] ${
          locale === "ar" ? "sans-serif-ar" : "sans-serif"
        }`}
      >
        {date}
      </div>
      <div
        className={`pl-0 text-[1.1rem] ${
          locale === "ar" ? "sans-serif-ar" : "sans-serif"
        }`}
      >
        {location}
      </div>
    </div>
  );
  export default ArticleMetadata;
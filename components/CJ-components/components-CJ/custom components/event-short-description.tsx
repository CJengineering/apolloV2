export function EventShortDescription({
    shortDescription2,
  }: {
    shortDescription2: string;
  }) {
    return (
      <div
        className="b "
        dangerouslySetInnerHTML={{
          __html: shortDescription2,
        }}
      ></div>
    );
  }
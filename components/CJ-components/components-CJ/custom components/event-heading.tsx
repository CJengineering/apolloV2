export function EventHeading({ name }: { name: string }) {
    return (
      <div className="">
        <div className="text-left">
          <div className="pt-16 lg:pt-10 w-full mb-6">
            <h1 className="header-article leading-tight text-left">{name}</h1>
          </div>
        </div>
      </div>
    );
  }
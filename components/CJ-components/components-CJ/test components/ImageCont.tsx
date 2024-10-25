export const ImageContainer = ({ children }: { children: React.ReactNode }) => (
    <div className="
    relative h-32 w-32 lg:pb-[100%] lg:w-full group hover:cursor-pointer">
      {children}
      <div className="absolute inset-0 bg-blue-950 mix-blend-screen opacity-0 transition-opacity duration-[2100ms] group-hover:opacity-100 z-10"></div>
    </div>
);
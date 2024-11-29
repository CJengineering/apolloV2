export default function SectionDividerHiddenMobile() {
    return (
      <div className="flex justify-center ">
        <div className="hidden sm:block w-full py-6 lg:py-12">
          <div className="w-full h-px bg-slate-200 dark:bg-slate-700"></div>
        </div>
      </div>
    );
  }
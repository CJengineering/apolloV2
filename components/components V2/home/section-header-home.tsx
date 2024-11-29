import React from "react";
import { Suspense } from "react";
const ButtonCJ = React.lazy(() => import("@/components/CJ-components/components-CJ/basic components/ButtonCJ"));
export default function SectionHeaderHome() {
    return (
      <section className="">
        <div className="w-full lg:w-2/3">
          <h1 className="header-page leading-none">
            Advancing science and learning for communities to thrive
          </h1>
          <p className="pt-6 sans-serif text-lg sm:text-xl font-normal md:text-2x text-left leading-snug">
            An independent, global organisation, Community Jameel launched in 2003
            to continue the tradition of philanthropy and community service
            established by the Jameel family of Saudi Arabia in 1945.
          </p>
          <div className="pt-4 lg:pt-8">
          <Suspense fallback={<div>...</div>}>
            <ButtonCJ
              href={"/community"}
              text={"explore community"}
              openInNewTab={false}
              styleType="primary"
            />
            </Suspense>
          </div>
        </div>
      </section>
    );
  }
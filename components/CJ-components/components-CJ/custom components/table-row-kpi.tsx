import { StatProps } from "@/app/interfaces";
import Stats from "../basic components/Stats";

export 

function TableRowKPI({stats}: {stats: StatProps[]}) {
  return (
    <div className="grid grid-cols-2 gap-x-9 gap-y-6 mb-6 ">
      {stats.map((stat: StatProps) => (
        <Stats key={stat.title} title={stat.content} content={stat.title} />
      ))}
    </div>
  );
}

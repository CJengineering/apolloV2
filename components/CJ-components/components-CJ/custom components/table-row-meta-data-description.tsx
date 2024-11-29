import { ListSmallProps } from "@/app/interfaces";
import ListSmall from "../basic components/ListSmall";

export function TableRowMetaDataContent({
  dataChecks,
}: {
  dataChecks: Array<ListSmallProps["data"]>;
}) {
  return (
    <div className="">
      <div className="grid grid-cols-2 gap-x-9 gap-y-6 lg:grid-cols-2">
        {dataChecks.map(
          (data, index) =>
            data &&
            Object.keys(data).length > 0 &&
            data[Object.keys(data)[0]].length > 0 &&
            data[Object.keys(data)[0]][0].name !== "" && (
              <div key={index}>
                <ListSmall data={data} />
              </div>
            )
        )}
      </div>
    </div>
  );
}

import { Input } from "antd";

export function LoginInput({ data }: { data: INPUT[] }) {
  return (
    <div className=" space-y-6">
      {Array.isArray(data) &&
        data.map(({ value, setChange, prefix }, i) => {
          let returner = <></>;
          if (prefix.position === "left") {
            returner = (
              <div
                key={i}
                className="pl-4 rounded-lg h-16 bg-[#f3f7ff] flex items-center justify-center"
              >
                {prefix.data}
                <Input
                  placeholder="large size"
                  className="h-full bg-transparent border-0"
                  onChange={setChange}
                />
              </div>
            );
          }
          if (prefix.position === "right") {
            returner = (
              <div
                key={i}
                className="pl-2 rounded-lg h-16 bg-[#ffff] flex items-center justify-center"
              >
                <Input
                  placeholder="large size"
                  className="h-full bg-transparent border-0"
                  onChange={setChange}
                />
                {prefix.data}
              </div>
            );
          }

          return returner;
        })}
    </div>
  );
}

export interface INPUT {
  value: string;
  setChange: () => any;
  prefix: { data: any; position: "left" | "right" };
}

import { Input } from "antd";

export function LoginInput({ data }: { data: INPUT[] }) {
  return (
    <div className=" space-y-6">
      {Array.isArray(data) &&
        data.map(({ value, setChange, prefix }, i) => (
          <div key={i} className="pl-2 rounded-lg h-16 bg-[#f3f7ff] flex items-center justify-center">
            {prefix}
            <Input
              placeholder="large size"
              className="h-full bg-transparent border-0"
              // value={value}
              onChange={setChange}
            />
          </div>
        ))}
    </div>
  );
}

export interface INPUT {
  value: string;
  setChange: () => any;
  prefix: any;
}

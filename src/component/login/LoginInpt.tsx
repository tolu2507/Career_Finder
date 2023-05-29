import { Input } from "antd";

export function LoginInput({ data }: { data: INPUT[] }) {
  return (
    <div className=" space-y-6">
      {Array.isArray(data) &&
        data.map(({ value, setChange, prefix }) => (
          <Input
            size="large"
            placeholder="large size"
            prefix={prefix}
            className="h-16 bg-blue-50"
            // value={value}
            onChange={setChange}
          />
        ))}
    </div>
  );
}

export interface INPUT {
  value: string;
  setChange: () => any;
  prefix: any;
}

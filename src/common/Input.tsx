import { Input } from "antd";

export default function LoginInput({ icon, input }: INPUT) {
  return (
    <div className="md:h-[70px] flex items-center justify-center space-x-2 bg-[#e8f0fe] rounded-lg">
      {icon}
      <Input
        placeholder={input.placeholder}
        size="large"
        type={input.type}
        bordered={input.bordered}
        className="bg-[transparent] h-full"
      />
    </div>
  );
}

export interface INPUT {
  icon: JSX.Element;
  input: { placeholder: string; type: string; bordered: boolean };
}

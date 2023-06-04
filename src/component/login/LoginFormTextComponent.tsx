import { Typography } from "antd";
import { AiOutlineLock } from "react-icons/ai";
import { CONSTANT } from "../../constants";

const { Text } = Typography;

export function LoginTextFormComponent() {
  return (
    <div className="p-2">
      <div className="justify-end flex">
        <AiOutlineLock color="#d0d7df" size={20} />
        <Text className="text-primary-color font-[400]">
          {CONSTANT.SECURED}
        </Text>
      </div>
    </div>
  );
}

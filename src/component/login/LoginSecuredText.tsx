import { Typography, Space, Checkbox } from "antd";
import { LockOutlined } from "@ant-design/icons";
import type { CheckboxChangeEvent } from "antd/es/checkbox";
import { CONSTANT } from "../../constants";

const { Text } = Typography;

export function LoginSecuredtext() {
  return (
    <div className="py-6 text-right p-3 justify-center text-slate-400 font-semibol mb-16">
      <Text className="space-x-2">
        <LockOutlined
          style={{
            fontSize: 20,
            alignItems: "center",
            justifyContent: "center",
          }}
        />
        <Space>{CONSTANT.SECURED}</Space>
      </Text>
    </div>
  );
}

export function LoginCheckBox() {
  const onChange = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`);
  };

  return (
    <div className="flex justify-between items-center">
      <Checkbox onChange={onChange}>Remember Me</Checkbox>
      <Text className=" font-bold text-teal-500">
        {CONSTANT.FORGOT_PASSWORD}
      </Text>
    </div>
  );
}

import { Typography } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
import { CONSTANT } from "../../constants";

const { Title } = Typography;

export function TitleSubComponent() {
  return (
    <div className="flex items-center justify-center space-x-2">
      <div className=" bg-blue-600 w-10 flex rounded-lg h-10 items-center justify-center">
        <InfoCircleOutlined style={{ fontSize: 25 }} />
      </div>
      <div className="h-10 text-red-900">
        <Title level={2} style={{ color: "white" }}>
          {CONSTANT.TITLE}
        </Title>
      </div>
    </div>
  );
}

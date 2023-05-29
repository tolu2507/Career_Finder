import { Typography } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
import { CONSTANT } from "../../constants";

const { Title } = Typography;

export function TitleSubComponent() {
  return (
    <div className="flex items-center space-x-2">
      <div className=" bg-blue-600 w-12 flex rounded-lg h-12 items-center justify-center">
        <InfoCircleOutlined style={{ fontSize: 30 }} />
      </div>
      <div className="h-12 text-red-900">
        <Title level={1} style={{ color: "white" }}>
          {CONSTANT.TITLE}
        </Title>
      </div>
    </div>
  );
}

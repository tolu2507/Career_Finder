import { Typography } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
import { CONSTANT } from "../../constants";

const { Title } = Typography;

export function TitleTextComponent() {
  return (
    <div className="text-white md:ml-40 flex">
      <div className=" bg-loginicon w-10 flex text-white rounded-lg h-10 items-center justify-center">
        <InfoCircleOutlined style={{ fontSize: 25 }} color="white" />
      </div>
      <div className="ml-2 h-10 text-red-900">
        <Title level={2} style={{ color: "white" }}>
          {CONSTANT.TITLE}
        </Title>
      </div>
    </div>
  );
}

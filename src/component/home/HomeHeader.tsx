import { Typography, Divider } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
import { CONSTANT } from "../../constants";

const { Title, Text } = Typography;

export function HomeHeader() {
  return (
    <>
      <div className="flex items-center justify-between w-96">
        <div className="flex items-center space-x-2">
          <div className=" bg-[#0274e7] w-12 flex rounded-lg h-12 items-center justify-center">
            <InfoCircleOutlined style={{ fontSize: 30 }} />
          </div>
          <div className="h-12 text-red-900">
            <Title level={1} style={{ color: "#ffffff" }}>
              {CONSTANT.TITLE}
            </Title>
          </div>
        </div>
        <Divider type="vertical" className=" bg-[#618bd8] h-[50px]"></Divider>
        <Text className=" text-[#618bd8] text-[15px]">Hiring Simplified</Text>
      </div>
      <div>
        <Text className="text-[#618bd8] text-[15px]">Go to Profile</Text>
      </div>
    </>
  );
}

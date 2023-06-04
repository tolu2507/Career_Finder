import { ClockCircleOutlined } from "@ant-design/icons";
import { CONSTANT } from "../../constants";
import { Typography } from "antd";

const { Text, Paragraph } = Typography;

export function HomeCard() {
  return (
    <div className="w-[250px] border-[#a2afc4] border-[2px] flex-col p-4 pb-8 rounded-xl">
      <div className=" flex items-center justify-center h-[100px]">
        <ClockCircleOutlined style={{ fontSize: 50, color: "#a2afc4" }} />
      </div>
      <div className="my-5 flex items-center justify-center">
        <Text className="text-center font-semibold text-slate-500">
          {CONSTANT.TOP_5}
        </Text>
      </div>
      <Paragraph className="text-justify font-normal text-slate-500">
        {CONSTANT.CARD_PARAGRAPH_TEXT}
      </Paragraph>
    </div>
  );
}

import { Typography, Progress } from "antd";
import { ClockCircleOutlined} from "@ant-design/icons";

const { Text } = Typography;

export default function ContentProgress({data}:{data: HOMEDATA[]}) {
  return (
    <>
      {data.map(({ id, text, percent, time }) => (
        <div className="w-[200px] p-1 space-y-2" key={id}>
          <div className="flex space-x-2 items-center">
            <ClockCircleOutlined style={{ color: "#a2afc4" }} />
            <Text className=" text-[#a2afc4]">{time}</Text>
          </div>
          <div className="mt-16">
            <Text className=" text-[#a2afc4]">{text}</Text>
          </div>
          <Progress percent={percent} showInfo={false} size="small" />
        </div>
      ))}
    </>
  );
}

export interface HOMEDATA {
  id: string;
  text: string;
  percent: number;
  time: string;
}

import { Button } from "antd";
import { CONSTANT } from "../../constants";
import { Typography } from "antd";

const { Title, Paragraph } = Typography;

export default function ContentCard() {
  return (
    <div className="my-10 rounded-xl bg-[#004eec] px-8 py-4">
      <Title level={4} style={{ color: "white" }}>
        {CONSTANT.NEED_AN_EXPERT}
      </Title>
      <Paragraph className=" pr-[120px] text-slate-200">
        {CONSTANT.PARAGRAPH_TEXT}
      </Paragraph>
      <div className="flex items-center justify-between">
        <div>
          <div className="text-[#004eec]">hi</div>
          <div className="flex items-center h-2 space-x-[2px] justify-between">
            {[1, 2, 3].map((item) => (
              <div
                className=" bg-slate-200 h-full w-2 rounded-full"
                key={item}
              />
            ))}
          </div>
        </div>
        <Button
          className="bg-teal-500 text-[14px] font-semibold hover:bg-teal-200 text-slate-200 border-0 px-6 h-12"
          onClick={() => console.log("you clicked me")}
        >
          Schedule A call Now
        </Button>
      </div>
    </div>
  );
}

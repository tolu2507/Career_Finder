import ContentProgress, { HOMEDATA } from "./HomeProgressDetails";
import { CheckOutlined } from "@ant-design/icons";
import ContentCard from "./ContentCard";
import twStyled from "tailwind-styled-components";
import { Divider, Input, Button, Typography } from "antd";

const { Text } = Typography;

export function ContentRightComponent() {
  const StyledTitleText = twStyled(Text)` text-[34px] text-[#233d6b] ;
            `;
  const StyledText = twStyled(Text)` text-[30px] text-[#8496b2] ;
            `;

  const data: HOMEDATA[] = [
    { id: "1", text: "Talent Details", percent: 30, time: "2min" },
    { id: "2", text: "Project Details", percent: 0, time: "3min" },
    { id: "3", text: "Project Status", percent: 0, time: "2min" },
  ];

  const Inputs = [
    {
      id: 1,
      text: "What Role are you looking to hire ? (optional)",
    },
    {
      id: 2,
      text: "Develop a Strong job Title Description (optional)",
    },
  ];

  return (
    <div className="h-[100%]">
      <div className="flex justify-between items-center w-[85%]">
        <ContentProgress data={data} />
      </div>
      <Divider></Divider>
      <ContentCard />
      <StyledTitleText>
        Talent Details <StyledText>&gt; Role</StyledText>
      </StyledTitleText>
      <div className="my-[24px]">
        {Inputs.map((input) => (
          <div key={input.id}>
            <Text className="text-[14px] text-gray-400">{input.text}</Text>
            <div className="flex items-center bg-white p-2 rounded-xl my-2 border-[#bdc7d9] border-2">
              <Input size="large" className="border-0" />
              <CheckOutlined
                style={{ color: "green", fontSize: 20 }}
                size={50}
              />
            </div>
            <br />
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center p-2">
        <Button>Back</Button>
        <div className="flex justify-between items-center p-2">
          <Button
            type="default"
            className="text-[#619ae1] border-2 border-[#619ae1] px-6 h-10"
          >
            Skip Role
          </Button>
          <Button type="primary" className="bg-[#5f99fc] ml-4 px-10 h-10">
            Next : Skill
          </Button>
        </div>
      </div>
    </div>
  );
}

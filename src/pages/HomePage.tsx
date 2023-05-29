import React from "react";
import { Layout, Space, Progress, Button, Input, Row, Col } from "antd";
import { CONSTANT } from "../constants";
import { Typography, Divider } from "antd";
import { HomeHeader } from "../component/home/HomeHeader";
import { ClockCircleOutlined, CheckOutlined } from "@ant-design/icons";

const { Title, Text, Paragraph } = Typography;
const { Header, Content } = Layout;
interface HOMEDATA {
  id: string;
  text: string;
  percent: number;
  time: string;
}
const data: HOMEDATA[] = [
  { id: "1", text: "Talent Details", percent: 30, time: "2min" },
  { id: "2", text: "Project Details", percent: 0, time: "3min" },
  { id: "3", text: "Project Status", percent: 0, time: "2min" },
];

const companies = [
  { id: "1", name: "Trusted by global Brands." },
  { id: "2", name: "MICROSOFT." },
  { id: "3", name: "NETFLIX" },
  { id: "4", name: "GOOGLE" },
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

export const Home: React.FC = () => {
  function handleClick() {
    console.log("clicked, making a call.............");
  }
  return (
    <Space direction="vertical" style={{ width: "100%" }} size={[0, 48]}>
      <Layout>
        <Header className=" text-center text-white px-[120px] bg-blue-900 flex p-5 justify-between items-center">
          <HomeHeader />
        </Header>
        <Content className="bg-slate-400">
          <div className="justify-between flex h-[93vh]">
            <div className="p-10 px-[120px] flex-1 bg-blue-50">
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  {data.map(({ id, text, percent, time }) => (
                    <div className="w-[200px] p-1 space-y-2" key={id}>
                      <div className="flex space-x-2 items-center">
                        <ClockCircleOutlined />
                        <Text className=" text-slate-500">{time}</Text>
                      </div>
                      <div className="mt-16">
                        <Text className=" text-slate-500">{text}</Text>
                      </div>
                      <Progress
                        percent={percent}
                        showInfo={false}
                        size="small"
                      />
                    </div>
                  ))}
                </div>
                <Divider></Divider>
                <div className="my-10 rounded-xl bg-blue-700 p-4">
                  <Title level={4} style={{ color: "white" }}>
                    {CONSTANT.NEED_AN_EXPERT}
                  </Title>
                  <Paragraph className=" pr-[120px] text-slate-200">
                    {CONSTANT.PARAGRAPH_TEXT}
                  </Paragraph>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center h-2 space-x-[2px] justify-between">
                      {[1, 2, 3].map((item) => (
                        <div
                          className=" bg-slate-200 h-full w-2 rounded-full"
                          key={item}
                        />
                      ))}
                    </div>
                    <Button
                      className="bg-teal-500 text-[14px] font-semibold hover:bg-teal-200 text-slate-200 border-0"
                      onClick={handleClick}
                    >
                      Schedule A call Now
                    </Button>
                  </div>
                </div>
                <div>
                  <Title level={3} style={{ color: "grey" }}>
                    {CONSTANT.TALENT_DESCRIPTON}
                  </Title>
                </div>
                <div className="my-[24px]">
                  {Inputs.map((input) => (
                    <div key={input.id}>
                      <Text className="text-[14px] text-gray-400">
                        {input.text}
                      </Text>
                      <div className="flex items-center bg-white p-2 rounded-xl my-2">
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
                    <Button type="default">Skip Role</Button>
                    <Button type="primary" className="bg-blue-500 ml-4 px-12">
                      Next: Skill
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-10 bg-slate-50 border flex w-[800px]">
              <div>
                <Row gutter={[50, 70]}>
                  {[1, 2, 3, 4].map((item) => (
                    <Col span={12} key={item}>
                      <div className="w-[300px] h-[300px] border flex-col p-4 rounded-2xl">
                        <div className="my-4 flex items-center justify-center">
                          <ClockCircleOutlined style={{ fontSize: 50 }} />
                        </div>
                        <div className="my-14 flex items-center justify-center">
                          <Text className="text-center font-semibold text-slate-500">
                            {CONSTANT.TOP_5}
                          </Text>
                        </div>
                        <Paragraph className="text-justify font-normal text-slate-500">
                          {CONSTANT.CARD_PARAGRAPH_TEXT}
                        </Paragraph>
                      </div>
                    </Col>
                  ))}
                </Row>
                <div className="flex justify-between items-center text-center my-10">
                  {companies.map(({ id, name }) => (
                    <Text
                      className=" font-semibold text-slate-700 text-lg"
                      key={id}
                    >
                      {name}
                    </Text>
                  ))}
                </div>
                <div className="flex items-center h-2 space-x-[2px] justify-center">
                  {[1, 2].map((item) => (
                    <div
                      className=" bg-blue-200 h-full w-2 rounded-full"
                      key={item}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Content>
      </Layout>
    </Space>
  );
};

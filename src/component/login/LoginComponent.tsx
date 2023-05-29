import { Row, Col } from "antd";
import { TitleSubComponent } from "./LoginSubComponentBottom";
import { LoginComponentContent } from "./LoginSubComponentTop";

export function LoginComponent() {
  return (
    <div className="h-screen w-screen ">
      <Row className="px-[85px] h-screen w-screen py-12">
        <Col flex={1} className=" bg-white mx-9 rounded-xl px-10 py-[3rem]">
          <LoginComponentContent />
        </Col>
        <Col
          flex={1}
          className="mx-9 rounded-xl px-10 py-[3rem] flex items-center h-[100%] text-white"
        >
          <TitleSubComponent />
        </Col>
      </Row>
    </div>
  );
}

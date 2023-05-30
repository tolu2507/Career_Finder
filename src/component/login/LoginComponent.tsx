import { Col } from "antd";
import { TitleSubComponent } from "./LoginSubComponentBottom";
import { LoginComponentContent } from "./LoginSubComponentTop";

export function LoginComponent() {
  return (
    <div className="h-screen w-[100%] flex">
      <div className="h-screen w-[100%] py-10 flex">
        <Col className="rounded-xl flex-1">
          <LoginComponentContent />
        </Col>
        <Col className=" rounded-xl pl-48 h-[100%] flex-1 items-center flex text-white">
          <TitleSubComponent />
        </Col>
      </div>
    </div>
  );
}

import { Col } from "antd";
import { TitleSubComponent } from "./LoginSubComponentBottom";
import { LoginComponentContent } from "./LoginSubComponentTop";
import twStyled from "tailwind-styled-components";

export function LoginComponent({
  height,
  width,
}: {
  height: number;
  width: number;
}) {
  const StyledColumnLeft = twStyled(
    Col
  )`rounded-xl flex bg-white h-[100%] min-w-[420px] p-12 ;`;

  const StyledColumnRight = twStyled(
    Col
  )`rounded-xl h-[100%] items-center min-w-[300px] flex text-white ;`;

  const StyledDiv = twStyled.div`py-14 mx-[10%] flex min-w-[850px] min-h-[950px] ;`;
  let diBox = (width * 10) / 100;

  return (
    <div className="flex">3
      <StyledDiv style={{ height: height, width: width }}>
        <StyledColumnLeft style={{ width: width / 2 - diBox }}>
          <LoginComponentContent />
        </StyledColumnLeft>
        <StyledColumnRight style={{ width: width / 2 - diBox }}>
          <TitleSubComponent />
        </StyledColumnRight>
      </StyledDiv>
    </div>
  );
}

import { Row, Col } from "antd";
import { HomeCard } from "./HomeCardComponent";
import HomeFooter from "./HomeFooterComponent";
import twStyled from "tailwind-styled-components";

const StyledDiv = twStyled.div`h-[100%] ;`;

export function HomeContent() {
  return (
    <StyledDiv>
      <Row gutter={[40, 50]}>
        {[1, 2, 3, 4].map((item) => (
          <Col span={12} key={item}>
            <HomeCard />
          </Col>
        ))}
      </Row>
      <HomeFooter />
    </StyledDiv>
  );
}

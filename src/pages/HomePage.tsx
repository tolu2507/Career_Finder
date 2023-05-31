import React from "react";
import { Layout} from "antd";
import { HomeHeader } from "../component/home/HomeHeader";
import { HomeContent } from "../component/home/HomeContent";
import twStyled from "tailwind-styled-components";
import { ContentRightComponent } from "../component/home/ContentRightComponent";
const { Header, Content } = Layout;

const StyledHeader = twStyled(Header)`
  text-center text-white px-[120px] bg-[#023399] flex p-5 justify-between items-center px-40 ;
`;
const StyledLayout = twStyled.div`
  flex flex-col ;
`;
const StyledContent = twStyled(Content)`
  flex ;
`;

const StyledContentRight = twStyled.div`w-[60%] h-[100vh] bg-[#f6f9fe] px-40 pb-28 pt-10 ;`;
const StyledContentLeft = twStyled.div`w-[40%] h-[100vh] bg-[#fefefe] pt-20 px-[5%] ;`;

export const Home: React.FC = () => {
  return (
    <StyledLayout>
      <StyledHeader>
        <HomeHeader />
      </StyledHeader>
      <StyledContent>
        <StyledContentRight>
          <ContentRightComponent />
        </StyledContentRight>
        <StyledContentLeft>
          <HomeContent />
        </StyledContentLeft>
      </StyledContent>
    </StyledLayout>
  );
};

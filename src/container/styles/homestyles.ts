import tw from "tailwind-styled-components";
import { Layout } from "antd";

const { Header, Content } = Layout;

export const StyledLayout = tw.div`
  flex flex-col min-w-[1660px] ;
`;
export const StyledHeader = tw(Header)`
  text-center text-white px-[120px] bg-[#023399] flex p-5 justify-between items-center px-40 ;
`;

export const StyledContent = tw(Content)`
  flex ;
`;

export const StyledContentRight = tw.div`w-[60%] h-[100vh] bg-[#f6f9fe] px-40 pb-28 pt-10 ;`;
export const StyledContentLeft = tw.div`w-[40%] h-[100vh] bg-[#fefefe] pt-20 px-[5%] ;`;

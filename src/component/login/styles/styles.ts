import tw from "tailwind-styled-components";
import { Typography } from "antd";

const { Text } = Typography;

export const StyledLoginComponent = tw.div`md:p-12 p-4 rounded-lg h-[100%] space-y-8 flex-col ;`;
export const StyledLoginText = tw(
  Text
)`text-[#26406a] text-3xl md:text-[3rem] font-semibold ;`;
export const StyledDivider = tw.div`hidden md:flex my-6 ;`;
export const StyledOrDiv = tw.div`text-primary-color border rounded-full p-4 ;`;

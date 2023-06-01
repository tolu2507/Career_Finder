import { Typography, Button, Divider } from "antd";
import { FcGoogle } from "react-icons/fc";
import { CONSTANT } from "../../constants";
import twStyled from "tailwind-styled-components";

const { Text } = Typography;

const StyledDividerOr = twStyled.div`
   items-center text-center px-3 py-2 justify-center text-[#696f86] border rounded-full ;
`;
const StyledButtonDefault = twStyled(Button)`
  border-[#808195] border-2 hover:bg-teal-200 w-[100%] h-16 ;
`;
const StyledButton = twStyled(Button)`
  bg-[#04adc0] text-[18px] text-white hover:bg-teal-200 w-[100%] h-16 border-0;
`;
const StyledButtonWrapper = twStyled.div`
  my-5 ;
`;
const StyledText = twStyled(Text)`
  text-[18px] text-[#808195] font-semibold ;
`;
const StyledDiv = twStyled.div`
  flex items-center space-x-8 justify-center ;
  `;

export function LoginButtons({
  handleClick,
  handleLogin,
}: {
  handleClick: () => void;
  handleLogin: () => void;
}) {
  return (
    <>
      <StyledButtonWrapper>
        <StyledButton onClick={handleClick}>Log in</StyledButton>
      </StyledButtonWrapper>
      <Divider>
        <StyledDividerOr>Or</StyledDividerOr>
      </Divider>
      <StyledButtonWrapper>
        <StyledButtonDefault onClick={handleLogin}>
          <StyledDiv>
            <FcGoogle size={34} />
            <StyledText>{CONSTANT.CONTINUEWITHGOGGLE}</StyledText>
          </StyledDiv>
        </StyledButtonDefault>
      </StyledButtonWrapper>
    </>
  );
}

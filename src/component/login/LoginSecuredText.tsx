import { Typography, Checkbox } from "antd";
import type { CheckboxChangeEvent } from "antd/es/checkbox";
import { CONSTANT } from "../../constants";
import { BiLockAlt } from "react-icons/bi";
import twStyled from "tailwind-styled-components";

const { Text } = Typography;
const StyledTitleText = twStyled(Text)`
  ml-2 text-[15px] text-[#b7bdc9] ;
  `;

const StyledDiv = twStyled.div`
   p-3 mb-10 flex justify-end ;
  `;

const StyledText = twStyled(Text)`
  font-semibold text-[#558fe4] ;
  `;
const StyledWrapper = twStyled.div`
  flex justify-between items-center  ;
`;

export function LoginSecuredtext() {
  return (
    <StyledDiv>
        <BiLockAlt size={24} color="#b7bdc9" />
        <StyledTitleText>{CONSTANT.SECURED}</StyledTitleText>
    </StyledDiv>
  );
}
export function LoginCheckBox() {
  const onChange = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`);
  };

  return (
    <StyledWrapper>
      <Checkbox onChange={onChange} className="text-[#b7bdc9]">
        Remember Me
      </Checkbox>
      <StyledText>{CONSTANT.FORGOT_PASSWORD}</StyledText>
    </StyledWrapper>
  );
}

import { Link } from "react-router-dom";
import { Typography } from "antd";
import twStyled from "tailwind-styled-components";

const { Text } = Typography;
const StyledText = twStyled(Text)`
  text-center text-[#b7bdc9] ;
  `;
export function LoginFooter() {
  return (
    <div className=" text-center mt-16">
      <StyledText>
        No account yet ? Join Expaat as a<Link to="/register"> freelancer</Link>{" "}
        or
        <Link to="/register"> company</Link>
      </StyledText>
      <br />
      <StyledText>Copyright 2013-2023 Expaat, LLC </StyledText>
    </div>
  );
}

import { LoginComponent } from "../component/login/LoginComponent";
import { useDimension } from "../hooks/dimension";
import twStyled from "tailwind-styled-components";

export function Login() {
  const backgroundImageUrl = "url(/images/background.png)";
  const { screenHeight, screenWidth } = useDimension();

  const StyledDiv = twStyled.div`relative min-w-[700px] font-hind ;`;

  return (
    <StyledDiv>
      <div
        className="absolute inset-0 bg-cover bg-no-repeat bg-center min-w-[700px]"
        style={{ backgroundImage: backgroundImageUrl, height: screenHeight }}
      />
      <div className="absolute inset-0 bg-blue-700 opacity-70 min-w-[700px] h-screen" />
      {/* <StyledDiv /> */}

      {/* Content of the project */}
      <LoginComponent height={screenHeight} width={screenWidth} />
    </StyledDiv>
  );
}

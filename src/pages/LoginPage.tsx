import { LoginComponent } from "../component/login/LoginComponent";
import { useDimension } from "../hooks/dimension";
import twStyled from "tailwind-styled-components";

export function Login() {
  const backgroundImageUrl = "url(/images/background.png)";
  const { screenHeight, screenWidth } = useDimension();

  const StyledDiv = twStyled.div`relative min-w-[965px]  font-hind ;`;

  return (
    <StyledDiv>
      <div
        className={`absolute inset-0 bg-cover bg-no-repeat bg-center h-${screenHeight}`}
        style={{ backgroundImage: backgroundImageUrl}}
      />
      <div className={`absolute inset-0 bg-blue-700 opacity-70 h-${screenHeight}`} />

      {/* Content of the project */}
      <LoginComponent height={screenHeight} width={screenWidth} />
    </StyledDiv>
  );
}

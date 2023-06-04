import LoginContainer from "../container/login/LoginContainer";
import LoginScreenContainer from "../container/login/LoginScreenContainer";
import LoginLeftColumnContainer from "../container/login/LoginLeftColumn";
import LoginRightColumnContainer from "../container/login/LoginRightContainer";
export function Login() {
  return (
    <LoginContainer>
      <LoginScreenContainer>
        <>
          <LoginLeftColumnContainer />
          <LoginRightColumnContainer />
        </>
      </LoginScreenContainer>
    </LoginContainer>
  );
}

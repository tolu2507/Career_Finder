import { ContentRightComponent } from "../../component/home/ContentRightComponent";
import { HomeContent } from "../../component/home/HomeContent";
import { StyledContentLeft, StyledContentRight } from "../styles/homestyles";

export function HomeContentRightContainer() {
  return (
    <StyledContentRight>
      <ContentRightComponent />
    </StyledContentRight>
  );
}

export function HomeContentLefttContainer() {
  return (
    <StyledContentLeft>
      <HomeContent />
    </StyledContentLeft>
  );
}

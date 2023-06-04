import { ContentRightComponent } from "../../component/home/ContentRightComponent";
import { HomeContent } from "../../component/home/HomeContent";
import { StyledContent, StyledContentLeft, StyledContentRight } from "../styles/homestyles";

export default function HomeContentContainer() {
  return (
    <StyledContent>
      <StyledContentRight>
        <ContentRightComponent />
      </StyledContentRight>
      <StyledContentLeft>
        <HomeContent />
      </StyledContentLeft>
    </StyledContent>
  );
}

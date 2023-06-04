import HeaderContainer from "../container/home/HeaerContainer";
import HomePageContainer from "../container/home/HomePageContainer";
import HomeContentContainer from "../container/home/HomeContentContainer";
import { HomeHeader } from "../component/home/HomeHeader";
import {
  HomeContentLefttContainer,
  HomeContentRightContainer,
} from "../container/home/HomeContentsContainer";

export const Home: React.FC = () => {
  return (
    <HomePageContainer>
      <>
        <HeaderContainer>
          <HomeHeader />
        </HeaderContainer>
        <HomeContentContainer>
          <HomeContentRightContainer />
          <HomeContentLefttContainer />
        </HomeContentContainer>
      </>
    </HomePageContainer>
  );
};

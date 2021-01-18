import NavigationBar from 'components/common/NavigationBar';
import HomePageComponents from 'components/resources/HomePage';

const HomePage = () => (
  <div>
    <NavigationBar />

    <HomePageComponents.PlayNow />
    <HomePageComponents.TheGames />
    <HomePageComponents.Feature />
    <HomePageComponents.Sysreq />
    <HomePageComponents.TopScores />
    <HomePageComponents.Newsletter />
  </div>
);

export default HomePage;
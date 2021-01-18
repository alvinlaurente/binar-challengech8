import NavigationBar from 'components/common/NavigationBar';
import HomePageComponents from 'components/resources/HomePage';

const HomePage = () => (
  <div>
    <NavigationBar />

    <HomePageComponents.PlayNow />
    <HomePageComponents.TheGames />
    <HomePageComponents.Feature />
  </div>
  
);

export default HomePage;
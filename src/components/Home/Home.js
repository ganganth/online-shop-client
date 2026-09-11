import MainLayout from "../MainLayout";
import HomeDetail from "./HomeDetail";

const Home = () => {
  return (
    <MainLayout window={() => window}>
      <HomeDetail />
    </MainLayout>
  );
};

export default Home;

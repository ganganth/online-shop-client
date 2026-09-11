import MainLayout from "../MainLayout";
import AboutDetails from "./AboutDetail";
const About = () => {
   return (
        <MainLayout window={() => window}>
            <AboutDetails />
        </MainLayout>
    );
};

export default About;

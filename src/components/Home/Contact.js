import MainLayout from "../MainLayout";
import ContactDetails from "./ContactDetails";

const Contact = () => {
    return (
        <MainLayout window={() => window}>
            <ContactDetails />
        </MainLayout>
    );
}

export default Contact;
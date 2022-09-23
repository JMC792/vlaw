import Navbar from "@components/Layout/Navbar/Navbar";
import Footer from "@components/Layout/Footer";

export default function Layout({ children }) {
    return (
        <>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </>
    )
}

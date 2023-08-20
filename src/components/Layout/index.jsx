import { NavBar } from "../NavBar";

export const Layout = ({ children }) => {
    return (
        <>
            <NavBar />
            {children}
        </>
    );
}

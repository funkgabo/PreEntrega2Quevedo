import { useParams } from "react-router";
import { NavBar } from "../../components/NavBar";
import { ItemListContainer } from "../../components/ItemListContainer";


export const Category = () => {
    const params = useParams()
    return (
        <>
            <NavBar />
            <ItemListContainer category={params.id} />
        </>
    );
}

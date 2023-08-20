import { useParams } from "react-router";
import { ItemListContainer } from "../../components/ItemListContainer";
import { Layout } from "../../components/Layout";


export const Category = () => {
    const params = useParams()
    return (
        <>
            <Layout>
                <ItemListContainer category={params.id} />
            </Layout>
        </>
    );
}

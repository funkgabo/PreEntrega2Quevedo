import './ItemList.css'

export const ItemList = ({ children }) => {
    return (
        <section className="il-container">
            {children}
        </section>
    );
}

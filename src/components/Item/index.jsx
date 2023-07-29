import './item.css'
export const Item = ({id, name, description, stock}) => {
    return (
        <div className="item-card">{stock}</div>
    );
}

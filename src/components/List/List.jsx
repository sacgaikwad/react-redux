import { ListItem } from "../ListItem/ListItem";

export function List({ items }) {
  let itemsArray = [];

  // for (let item of items) {
  //   itemsArray.push(<ListItem item={{ name: item.name, price: item.price }} />);
  // }

  return (
    <div style={{ overflowY: "scroll", height: "40%" }}>
      <table className="table table-hover table-borderless">
        <tbody>
          {items.map((item) => (
            <ListItem key={item.name} item={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

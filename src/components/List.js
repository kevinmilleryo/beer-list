import Beer from "./Beer";

const List = ({ beers }) => {
  return (
    <div style={listStyle}>
      {beers.map((beer) => (
        <Beer key={beer.id} beer={beer} />
      ))}
    </div>
  );
};
const listStyle = {
  // fontSize: "40px",
  // textDecoration: "underline",
  color: "purple",
};

export default List;

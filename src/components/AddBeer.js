import { useState } from "react";

const AddBeer = ({ onAdd }) => {
  const [item, setItem] = useState("");
  const [item2, setItem2] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    onAdd({ item, item2 });

    setItem("");
    setItem2("");
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Add Beer:</label>
      <input
        type="text"
        placeholder="Name"
        value={item}
        onChange={(e) => setItem(e.target.value)}
      />
      <input
        type="text"
        placeholder="Style"
        value={item2}
        onChange={(e) => setItem2(e.target.value)}
      />
      <input type="submit" value="Cheers!" />
    </form>
  );
};

export default AddBeer;

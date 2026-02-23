const Pizza = (props) => {
  return (
    <div className="pizza">
      <label htmlFor=""></label>
      <h3>{props.name}</h3>
      <p>{props.description}</p>
    </div>
  );
};

export default Pizza;

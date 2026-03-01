const Pizza = (props) => {
  return (
    <div className="pizza">
      <h1>{props.name}</h1>
      <p>{props.description}</p>
      <img src={props.image ?? "https://picsum.photos/200"} alt={props.name} />
      <p>{props.prize}</p>
    </div>
  );
};

export default Pizza;

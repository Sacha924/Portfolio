import "../styles/Card.css";

export default function Card(props) {
  return (
    <div className="App">
      <div className="card">
        <div className="container">
          <h1 className="title">{props.name}</h1>
          <img className="imageInCard" src={`images/${props.image}`} />
        </div>
      </div>
    </div>
  );
}

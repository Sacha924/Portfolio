import "../styles/Card.css";

export default function Card(props) {
  return (
    <div className="App">
      <div className="card">
        <div className="container">
          <h1 className="title">{props.name}</h1>
          <img className="imageInCard" src={`images/${props.image}`} />
          <div className="easterEgg">
            <a href="https://dino-chrome.com/fr">Easter egg</a>
          </div>
          <div className="skills">
            {props.skillDev &&
              props.skillDev.map((skill) => {
                return (
                  <p className="skill" data-skill={skill}>
                    {skill}
                  </p>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

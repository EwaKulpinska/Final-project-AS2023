import { img10 } from "../../img/images";

export default function ImproveSkills() {
  const check = localStorage.getItem("random");
  const recipes = JSON.parse(check);

  const list = [
    "Learn new recipes",
    "Experiment with food",
    "Write your own resipes",
    "Know nutrition facts",
    "Get cooking tips",
    "Get ranked",
  ];

  return (
    <div className="section improve-skills">
      <div className="col img">
        <img src={recipes ? recipes[5].image : img10} alt="Sushi" />
      </div>
      <div className="col typography">
        <h1 className="title">Improve Your Culinary Skills</h1>
        {list.map((item, index) => (
          <p className="skill-item" key={index}>
            {item}
          </p>
        ))}
        <button className="btn">signup now</button>
      </div>
    </div>
  );
}

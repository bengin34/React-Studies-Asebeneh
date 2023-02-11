import React from "react";
import ReactDOM from "react-dom";

//Renderin array of Objects

const countries = [
  { name: "Finland", city: "Helsinki" },
  { name: "Sweden", city: "Stockholm" },
  { name: "Denmark", city: "Copenhagen" },
  { name: "Norway", city: "Oslo" },
  { name: "Iceland", city: "Reykjavík" },
];

//Country Component
const Country = ({ country: { name, city } }) => {
  return (
    <div>
      <h1>{name}</h1>
      <small>{city}</small>
    </div>
  );
};

//countries component
const Countries = ({ countries }) => {
  const countryList = countries.map((country) => (
    <Country key={country.name} country={country} />
  ));
  return <div>{countryList}</div>;
};

//App component
const App = () => (
  <div className="container">
    <div>
      <h1>Contries List</h1>
      <Countries countries={countries} />
    </div>
  </div>
);

// const skills = [
//   ['HTML', 10],
//   ['CSS', 7],
//   ['JavaScript', 9],
//   ['React', 8],
// ]

// // Skill Component
// const Skill = ({ skill: [tech, level] }) => (
//   <li>
//     {tech} {level}
//   </li>
// )

// // Skills Component
// const Skills = ({ skills }) => {
//   const skillsList = skills.map((skill) => <Skill skill={skill} />)
//   console.log(skillsList)
//   return <ul>{skillsList}</ul>
// }

// const App = () => {
//   return (
//     <div className='container'>
//       <div>
//         <h1>Skills Level</h1>
//         <Skills skills={skills} />
//       </div>
//     </div>
//   )
// }

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

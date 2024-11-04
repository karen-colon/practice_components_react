


export const MyFirstComponent = () => {

const name = "Karen Steffany Colon Caraballo";
const github_profile = "https://github.com/karen-colon/practice_components_react";


const student = {
  name: "Karen",
  last_name: "Colon",
  mobile: "30000000",
  linkedin_profile:"https://www.linkedin.com/in/karen-steffany-colon-caraballo-3b03a3275/"
};

console.log(student);

  return (
    <>
    <div>MyFirstComponent</div>
    <div className="constainer bg-primary">
    <h1>Temas de React </h1>
    <ul>
      <li>components</li>
      <li>Eventos</li>
      <li>Estados de Hooks</li>
      <li>Props</li>
      </ul>
    </div>

    <div className="constainer bg-primary-subtle">
    <h1>Datos del Docente </h1>
    <p>Nombre: <strong>{name}</strong></p>
    <p>github: {github_profile}</p>
    </div>

    <div className="constainer bg-warning-subtle">
    <h1>Datos del Estuadiante </h1>
    <p>Nombre: <strong>{student.name}</strong></p>
    <p>apellido: {student.last_name}</p>
    <p>celular: {student.mobile}</p>
    <p>linkedin: <a href={ student.linkedin_profile }>{ student.linkedin_profile }</a> </p>
    </div>

    <div className = "constainer mt-2 pt-2">
        <h1>Objeto Completo</h1>
        <pre>{JSON.stringify(student)} </pre>
      </div>
    </>
  )
}







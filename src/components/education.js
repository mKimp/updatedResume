import { format } from "../utils";

export default function Education({ data }) {
  const { title, list, courses } = data;
  //      <h4>Relavant courses:<span style={{fontWeight:"normal"}}> {courses} </span></h4>

  return (
    <section className='education'>
      <h2>{title}</h2>
      <ul>
        {list.map(({ institution, description, date }) => (
          <li key={description}>
            <div className='header'>
              <h4>{description}</h4>
              <span className='date'>
                {format(date.start)} - {format(date.end)}
              </span>
            </div>
            <p>{institution}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

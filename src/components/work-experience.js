import { format } from '../utils';

export default function WorkExperience({ data }) {
  const { title, list } = data;

  return (
    <section className="work-experience">
      <h2>{title}</h2>
      <ul >
        {list.map(({ company, jobTitle, location, date, description}) => (
          <li key={company}>
            <h4>{jobTitle} <br /></h4>
            <div className="header sm-border-bottom">
              <p> {company}, {location} <br /> </p>          
              <span className="date">
                {format(date.start)} - {format(date.end)}
              </span>
            </div>
            <div><ul style={{"listStyle": "square", "marginLeft": "15px"}}><li>{description} </li></ul></div>
          </li>
        ))}
      </ul>
    </section>
  );
}

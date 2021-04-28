import { format } from '../utils';

export default function WorkExperience({ data }) {
  const { title, list } = data;

  return (
    <section className="work-experience">
      <h2>{title}</h2>
      <ul>
        {list.map(({ company, jobTitle, location, date, description, description_team }) => (
          <li key={company}>
            <h4>{jobTitle} <br /></h4>
            <div className="header sm-border-bottom">
              <p> {company}, {location} <br /> </p>          
              <span className="date">
                {format(date.start)} - {format(date.end)}
              </span>
            </div>

            <p>- {description}</p> 
            <p>- {description_team}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function Hackathon({ data }) {
  const { title, list } = data;

  return (
    <section className="hackathon">
      <h2>{title}</h2>
      <ul>
        {list.map(({ name, provider }) => (
          <li key={name}>
            <h4>
              {name}
              <span className="provider"> &mdash; {provider}</span>
            </h4>
          </li>
        ))}
      </ul>
    </section>
  );
}

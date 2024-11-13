import sections from "./textos";

const Start = () => {
  return (
    <main id="main-doc">
      {sections.map((section) => (
        <section key={section.id} id={section.id} className="main-section">
          <header>{section.header}</header>
          {section.content.map((item, index) => {
            if (typeof item === "string") {
              return <p key={index}>{item}</p>;
            } else if (item.type === "subheader") {
              return <h3 key={index}>{item.text}</h3>;
            } else if (item.type === "list") {
              return (
                <ul key={index}>
                  {item.items.map((li, idx) => (
                    <li key={idx}>{li}</li>
                  ))}
                </ul>
              );
            } else if (item.type === "code") {
              return (
                <code id="code" key={index}>
                  {item.text.split(";").map((line, idx) => (
                    <div key={idx}>{line.trim()};
                    </div>
                  ))}
                </code>
              );
              
            }
            return null;
          })}
        </section>
      ))}
    </main>
  );
};

export default Start;

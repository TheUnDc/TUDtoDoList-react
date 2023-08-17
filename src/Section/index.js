import "./style.css";

const Section = ({ title, headerAddons, specialAddons }) => (
  <section className="section">
    
    <header className="section__header">
      <header className="section__innterHeader">
        {title}
      </header>

      {headerAddons}
    </header>

    <div className="section__specialAddon">
      {specialAddons}
    </div>
  </section>
);

export default Section;
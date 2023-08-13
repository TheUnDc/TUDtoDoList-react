import "./style.css";

const Section = ({title, headerAddons, specialAddons}) => (
    <section className="section">
    <header className="section__header section__header--flex">
      <header className="section__innterHeader">{title}</header>
        {headerAddons}
    </header>
    
    <div className="section__content">
      {specialAddons}
    </div>
  </section>
);

export default Section;
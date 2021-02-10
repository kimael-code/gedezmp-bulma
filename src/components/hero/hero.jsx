import logo from './assets/gedezmpLogo.png';

/**
 * Banner tipo heroe de Bulma.
 */
const Hero = () => (
  <section className="hero is-info">
    <div className="hero-head">
      <header className="navbar">
        <div className="container">
          <div className="navbar-brand">
            <a className="navbar-item">
              <img src={logo} alt="Logo" />
            </a>
          </div>
        </div>
      </header>
    </div>
    <div className="hero-body">
      <div className="container has-text-centered">
        <p className="title">Generador de archivos zmp para Zimbra.</p>
        <p className="subtitle">
          Para comenzar: haga clic en el botón Importar csv.
          A continuación, busque y seleccione el archivo csv que necesita
          exportar a zmp.
          </p>
      </div>
    </div>
  </section>
);

export default Hero;
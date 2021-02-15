import logo from './assets/gedezmpLogo.png';

/**
 * Banner tipo heroe de Bulma.
 */
const Hero = () => (
  <section className="hero is-small has-background-grey-lighter">
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
        <p className="title has-text-black">Generador de archivos zmp para Zimbra.</p>
        <p className="subtitle">
          Es simple: haga clic en Importar CSV, busque y seleccione el
          archivo CSV, finalmente haga clic en Exportar como ZMP.
          </p>
      </div>
    </div>
  </section>
);

export default Hero;
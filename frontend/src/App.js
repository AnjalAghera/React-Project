import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <section className="ftco-section">
		<div className="container">
			<div classNameName="row justify-content-center">
				<div className="col-md-6 text-center mb-5">
					<h2 className="heading-section">Website menu #01</h2>
				</div>
			</div>
		</div>

		<nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
	    <div className="container">
	      <a className="navbar-brand" href="index.html">Resto</a>
	      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
	        <span className="fa fa-bars"></span> Menu
	      </button>

	      <div className="collapse navbar-collapse" id="ftco-nav">
	        <ul className="navbar-nav ml-auto">
	        	<li className="nav-item active"><a href="#" className="nav-link">Home</a></li>
	        	<li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="dropdown04" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Page</a>
              <div className="dropdown-menu" aria-labelledby="dropdown04">
              	<a className="dropdown-item" href="#">Page 1</a>
                <a className="dropdown-item" href="#">Page 2</a>
                <a className="dropdown-item" href="#">Page 3</a>
                <a className="dropdown-item" href="#">Page 4</a>
              </div>
            </li>
	        	<li className="nav-item"><a href="/about" className="nav-link">About</a></li>
	        	<li className="nav-item"><a href="#" className="nav-link">Menu</a></li>
	        	<li className="nav-item"><a href="#" className="nav-link">Blog</a></li>
	          <li className="nav-item"><a href="#" className="nav-link">Contact</a></li>
	          <li className="nav-item cta"><a href="#" className="nav-link">Book a table</a></li>
	        </ul>
	      </div>
	    </div>
	  </nav>

	</section>
  );
}

export default App;

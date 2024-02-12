import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">Healthy Eating</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
                <a className="nav-link" href="#">Wellness</a>
                <a className="nav-link" href="#">Health</a>
                <a className="nav-link" href="#">Contact</a>
                <a className="nav-link" href="#">Q</a>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <main>
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <article className="blog-post">
                <h2 className="blog-post-title">5 Tips for Making Healthy Brownies</h2>
                <p className="blog-post-meta">By Jane Doe on January 1, 2024</p>
                <img src="https://example.com/healthy-brownies.jpg" alt="Healthy Brownies" className="blog-post-thumbnail" />
                <p className="blog-post-content">Making healthy brownies doesn't have to be difficult. With a few simple swaps, you can enjoy this delicious treat without all the guilt. Here are 5 tips for making healthy brownies:</p>
                <ol>
                  <li>Use whole-wheat flour instead of all-purpose flour.</li>
                  <li>Reduce the amount of sugar.</li>
                  <li>Use applesauce or mashed banana as a substitute for some of the oil.</li>
                  <li>Add in some healthy ingredients like nuts, seeds, or dark chocolate.</li>
                  <li>Bake them for a shorter amount of time so they're not too dry.</li>
                </ol>
                <p className="blog-post-tags">healthy, brownies, dessert, snack</p>
              </article>
            </div>
            <div className="col-md-4">
              <aside className="sidebar">
                <h2 className="sidebar-title">Categories</h2>
                <ul className="sidebar-list">
                  <li><a href="#">Guide</a></li>
                  <li><a href="#">Cooking</a></li>
                  <li><a href="#">Quick read</a></li>
                </ul>

                <h2 className="sidebar-title">About</h2>
                <p className="sidebar-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Nulla porttitor leo at auctor mollis. Sed posuere consectetur est at lobortis.</p>
              </aside>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;

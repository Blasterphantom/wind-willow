import Image from "next/image";

export default function Home() {
  return (
    <main className="home flex min-h-screen flex-col items-center justify-between p-24 bg-white relative">
      <nav className="navbar navbar-expand-lg bg-body-tertiary position-absolute top-0 start-0 w-100">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">WindWillow</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#">Poems</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      
    </main>
  );
}

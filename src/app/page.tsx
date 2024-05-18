import Image from "next/image";
import fs from 'fs/promises';
import path from 'path';
import { Poem } from "./interfaces/poem";

interface HomeProps {
  poem: Poem | null;
}

async function fetchPoem(): Promise<Poem | null> {
  const filePath = path.join(process.cwd(), 'src/app/Data/poems.json');
  const jsonData = await fs.readFile(filePath, 'utf-8');
  const poems: Poem[] = JSON.parse(jsonData);
  return poems.length > 0 ? poems[0] : null;
}


export default async function Home() {
  const poem = await fetchPoem();

  if (!poem) {
    return <div>No poem found</div>;
  }

  const formattedContent = poem.content.split(',').map((segment, index) => (
    <span key={index}>
      {segment}
      {index < poem.content.split(',').length - 1 && <br />}
    </span>
  ));

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

      <div className="home-top-poem poem w-100 bg-white min-h-[300px] flex flex-col justify-between">
        <h2 className="text-2xl p-2">{poem.title}</h2>
        <div className="w-100 flex justify-center">
          <p className="main-content text-xl">{formattedContent}</p>
        </div>
        <p className="text-sm text-gray-500 p-2">By {poem.author} on {poem.date}</p>
      </div>

    </main>
  );
}

import './App.css';
import User from "./User";
import User2 from "./User2";
import { albums } from "./data";

export default function App() {
  return (
    <div>
      <h1> Albums </h1>
       <User2 />
      { albums.map((singer) => (
        <User name={singer.name} coverImg={singer.coverImg} />
      )) }
    </div>
  );
}


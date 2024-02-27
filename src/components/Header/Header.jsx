import reactImg from "../../assets/atoms.png";
import "./Header.css";

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>Maciej Pietrasz</h1>
      <p>
        Jestem studentem pierwszego semestru studiów drugiego stopnia na
        Politechnice Rzeszowskiej, kierunek informatyka. Aktywnie uczestniczyłem
        w działalności Studenckiego Koła Naukowego Informatyków "Kod". Moje
        zainteresowania obejmują aplikacje webowe, kinematografię oraz szachy.
      </p>
    </header>
  );
}

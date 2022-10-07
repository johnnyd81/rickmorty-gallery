import Link from "next/link";
import styles from "../../styles/Result.module.css";

export const getStaticProps = async () => {
  //getStaticProps runs when the app is built and fetches the data that can be rendered in the Characters component

  const res = await fetch("https://rickandmortyapi.com/api/character/?page=1"); //the base-url fetches the characters with the query of page 1. This fetches all the characters on page 1
  const data = await res.json();

  console.log(data);
  return {
    props: { characters: data.results }, //the characters are available on data.results
  };
};

const Characters = ({ characters }) => {
  //the characters prop contains all 20 characters
  return (
    <div className={styles.resultPage}>
      {characters.map((character) => (
        <div key={character.id} className={styles.item}>
          <Link href={"/characters/" + character.id}>
            <a>
              <img src={character.image} alt="a pic" />
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Characters;

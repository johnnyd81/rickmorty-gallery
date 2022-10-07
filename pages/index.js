import Head from "next/head"; //a head tag can be imported to define things like the title and metadata
import Link from "next/link";
import styles from "../styles/Home.module.css"; //styles are imported from the styles folder

export default function Home() {
  return (
    <>
      <Head>
        <title>Homepage -- Rick and Morty</title>
        <meta name="keywords" content="rick and morty" />
      </Head>
      <div className={styles.home}>
        <h1 className={styles.heading}>Rick and Morty</h1>
        <p className={styles.intro}>
          This application features the main characters in the cartoon Rick and
          Morty. The characters in the gallery can be selected to reveal details
          about that particular character.
        </p>
        <div className={styles.characterButton}>
          <Link href="/characters">
            <a>See Character Gallery</a>
          </Link>
        </div>
      </div>
    </>
  );
}

import styles from "../../styles/Result.module.css"; //I created a custom css module called Result.module.css

export const getStaticPaths = async () => {
  //getStaticPaths is needed to statically pre-render pages that use dynamic routes
  const res = await fetch("https://rickandmortyapi.com/api/character/?page=1");
  const data = await res.json();

  const paths = data.results.map((character) => {
    return {
      params: { id: character.id.toString() }, //the toString() method converts the id to a string value to be used in the url
    };
  });

  return {
    paths,
    fallback: false, //fallback shows an error page if the user tries to access a page that doesn't exist
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id; //the context object has keys like params and preview. In my case I'm using params to dynamically access data
  const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
  const data = await res.json();

  return {
    props: { character: data },
  };
};

const showDetails = ({ character }) => {
  return (
    <div className={styles.details}>
      <img src={character.image} alt="a pic" />
      <div className={styles.stats}>
        <p>
          <b>Name</b>: {character.name}
        </p>
        <p>
          <b>Status</b>: {character.status}
        </p>
        <p>
          <b>Gender</b>: {character.gender}
        </p>
        <p>
          <b>Species</b>: {character.species}
        </p>
      </div>
    </div>
  );
};

export default showDetails;

import useFetch from "../hooks/useFetch";
import Card from "../components/Card";

import UseTitle from "../hooks/UseTitle";

const MovieList = ({apiPath, title}) => {
UseTitle(title);

  const {data : movies} = useFetch(apiPath);



  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 other: justify-evenly">
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default MovieList;
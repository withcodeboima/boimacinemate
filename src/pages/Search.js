import useFetch from '../hooks/useFetch'
import Card from '../components/Card'
import { useSearchParams } from 'react-router-dom';
// import { useEffect } from 'react';
import UseTitle from '../hooks/UseTitle';


const Search = ({apiPath}) => {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q") || "";
 const { data: movies = [] } = useFetch(apiPath, queryTerm);

UseTitle(`Search result for ${queryTerm}`);


  return (
    <main className='pt-20'>
    <section className="max-w-7xl mx-auto px-4 mt-5">
  <p className='text-3xl text-gray-700 dark:text-white'>
    {queryTerm === "" 
      ? "Search movies"
      : movies.length === 0 
      ? `No results found for "${queryTerm}"`
      : `Search results for "${queryTerm}"`
    }
  </p>
</section>
       <section className="max-w-7xl mx-auto py-7">
              <div className="flex justify-start flex-wrap">       
                { movies.map((movie) => (
                  <Card key={movie.id} movie={movie} />
                )) }          
              </div>
            </section>
    </main>
  )
}

export default Search
import React from 'react';
import HeroImage from '../elements/HeroImage/HeroImage';
import SearchBar from '../elements/SearchBar/SearchBar';
import FourColGrid from '../elements/FourColGrid/FourColGrid';
import MovieThumb from '../elements/MovieThumb/MovieThumb';
import LoadMoreBtn from '../elements/LoadMoreBtn/LoadMoreBtn';
import Spinner from '../elements/Spinner/Spinner';
import { IMAGE_BASE_URL, POSTER_SIZE, POSTER_TITLE, POSTER_TEXT } from '../../config';
import './Home.css';

const Home = ({ movies, heroImage, loading, currentPage, totalPages, searchTerm, searchMovies, loadMoreMovies }) => (

  <div className="rmdb-home">
    {heroImage ?
      <div>
        <HeroImage
          image={"images/banner2.jpg"}
          title={POSTER_TITLE}
          text={POSTER_TEXT}
        />
        <SearchBar callback={searchMovies} />
      </div> : null}
    <div className="rmdb-home-grid">
      <FourColGrid
        header={searchTerm ? 'Search Result' : 'Popular Cards'}
        loading={loading}
      >
        {movies.map((element, i) => (
          <MovieThumb
            key={i}
            clickable={true}
            image={element.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${element.poster_path}` : './images/no_image.jpg'}
            movieId={element.id}
            movieName={element.original_title}
          />
        ))}
      </FourColGrid>
      {loading ? <Spinner /> : null}
      {(currentPage <= totalPages && !loading) ?
        <LoadMoreBtn text="Load More" onClick={loadMoreMovies} />
        : null
      }
    </div>
  </div>
)

export default Home;
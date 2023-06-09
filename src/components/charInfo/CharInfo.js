import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Skeleton from '../skeleton/Skeleton';

import useMarvelService from '../../services/MarvelService';

import './charInfo.scss';

const CharInfo = ({ charId }) => {
  const [char, setChar] = useState(null);

  const { loading, error, getCharacter, clearError } = useMarvelService();

  useEffect(() => {
    updateChar();
  }, [charId]);

  const onCharLoaded = char => {
    setChar(char);
  };

  const updateChar = () => {
    if (!charId) {
      return;
    }

    clearError();
    getCharacter(charId).then(onCharLoaded);
  };

  const skeleton = char || loading || error ? null : <Skeleton />;
  const errorMessage = error ? <ErrorMessage /> : null;
  const spinner = loading ? <Spinner /> : null;
  const content = !(loading || error || !char) ? <View char={char} /> : null;

  return (
    <div className="char__info">
      {skeleton}
      {errorMessage}
      {spinner}
      {content}
    </div>
  );
};

CharInfo.propTypes = {
  charId: PropTypes.number
};

const View = ({ char }) => {
  const { comics, description, homepage, name, thumbnail, wiki } = char;

  const comicsList = comics.map(({ name, resourceURI }, i) => {
    const id = resourceURI.split('/').pop();
    return (
      <li key={i} className="char__comics-item">
        <Link className="char__comics-link" to={`/comics/${id}`}>
          {name}
        </Link>
      </li>
    );
  });

  const thumbnailStyle =
    thumbnail ===
      'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg' ||
    thumbnail ===
      'http://i.annihil.us/u/prod/marvel/i/mg/f/60/4c002e0305708.gif'
      ? {
          objectFit: 'contain'
        }
      : null;

  return (
    <>
      <div className="char__basics">
        <img style={thumbnailStyle} src={thumbnail} alt={name} />
        <div>
          <div className="char__info-name">{name}</div>
          <div className="char__btns">
            <a href={homepage} className="button button__main">
              <div className="inner">homepage</div>
            </a>
            <a href={wiki} className="button button__secondary">
              <div className="inner">Wiki</div>
            </a>
          </div>
        </div>
      </div>
      <div className="char__descr">
        {!description ? 'No Description' : description}
      </div>
      {comicsList.length === 0 ? (
        <div className="char__comics">Comics not found</div>
      ) : (
        <>
          <div className="char__comics">Comics:</div>
          <ul className="char__comics-list">{comicsList}</ul>
        </>
      )}
    </>
  );
};

export default CharInfo;

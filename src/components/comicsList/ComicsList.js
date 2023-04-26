import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';

import useMarvelService from '../../services/MarvelService';

import './comicsList.scss';

const ComicsList = () => {
  const [comicsList, setComicsList] = useState([]);
  const [newItemLoading, setNewItemLoading] = useState(false);
  const [offset, setOffset] = useState(210);
  const [comicsEnded, setComicsEnded] = useState(false);

  const { loading, error, getTotalComics, getAllComics } = useMarvelService();

  useEffect(() => {
    updateComicsList();
  }, []);

  const onRequest = offset => {
    setNewItemLoading(true);
    getAllComics(offset).then(onComicsListLoaded);
  };

  const onComicsListLoaded = async newComicsList => {
    let totalComics = await getTotalComics();
    let ended = false;
    if (totalComics - 8 <= offset) {
      ended = true;
    }

    setComicsList(characters => [...characters, ...newComicsList]);
    setNewItemLoading(false);
    setOffset(offset => offset + 8);
    setComicsEnded(ended);
  };

  const updateComicsList = () => {
    getAllComics()
      .then(onComicsListLoaded)
      .catch(() => setComicsEnded(true));
  };

  const errorMessage = error ? <ErrorMessage /> : null;
  const spinner = loading && !newItemLoading ? <Spinner /> : null;

  return (
    <div className="comics__list">
      {errorMessage}
      {spinner}
      <View comicsList={comicsList} />
      <button
        style={{ display: comicsEnded ? 'none' : 'block' }}
        disabled={newItemLoading}
        onClick={() => {
          onRequest(offset);
        }}
        className="button button__main button__long"
      >
        <div className="inner">load more</div>
      </button>
    </div>
  );
};

const View = ({ comicsList }) => {
  const comicsItems = comicsList.map(({ name, thumbnail, price, id }, i) => {
    const duration = 500;

    return (
      <CSSTransition key={id} timeout={duration} classNames="csstransition">
        <li key={i} className="comics__item">
          <Link to={`/comics/${id}`}>
            <img src={thumbnail} alt={name} className="comics__item-img" />
            <div className="comics__item-name">{name}</div>
            <div className="comics__item-price">{price}</div>
          </Link>
        </li>
      </CSSTransition>
    );
  });

  return (
    <ul className="comics__grid">
      <TransitionGroup component={null}>{comicsItems}</TransitionGroup>
    </ul>
  );
};

export default ComicsList;

import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';

import useMarvelService from '../../services/MarvelService';

import './charList.scss';

const CharList = ({ onCharSelected }) => {
  const [characters, setCharacters] = useState([]);
  const [newItemLoading, setNewItemLoading] = useState(false);
  const [offset, setOffset] = useState(210);
  const [charEnded, setCharEnded] = useState(false);

  const { loading, error, getTotalCharacters, getAllCharacters } =
    useMarvelService();

  useEffect(() => {
    updateCharacters();
  }, []);

  const onRequest = offset => {
    setNewItemLoading(true);
    getAllCharacters(offset).then(onCharactersLoaded);
  };

  const onCharactersLoaded = async newCharacters => {
    let totalCharacters = await getTotalCharacters();
    let ended = false;
    if (totalCharacters - 9 <= offset) {
      ended = true;
    }

    setCharacters(characters => [...characters, ...newCharacters]);
    setNewItemLoading(false);
    setOffset(offset => offset + 9);
    setCharEnded(ended);
  };

  const itemRefs = useRef([]);

  const onFocusItem = itemId => {
    itemRefs.current.forEach(item =>
      item.classList.remove('char__item_selected')
    );
    itemRefs.current[itemId].classList.add('char__item_selected');
    itemRefs.current[itemId].focus();
  };

  const updateCharacters = () => {
    getAllCharacters()
      .then(onCharactersLoaded)
      .catch(() => setCharEnded(true));
  };

  const errorMessage = error ? <ErrorMessage /> : null;
  const spinner = loading && !newItemLoading ? <Spinner /> : null;

  return (
    <div className="char__list">
      {errorMessage}
      {spinner}
      <View
        onFocusItem={onFocusItem}
        onCharSelected={onCharSelected}
        characters={characters}
        itemRefs={itemRefs}
      />
      <button
        style={{ display: charEnded ? 'none' : 'block' }}
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

CharList.propTypes = {
  onCharSelected: PropTypes.func
};

const View = ({ characters, onCharSelected, onFocusItem, itemRefs }) => {
  const charactersList = characters.map(({ name, thumbnail, id }, i) => {
    const thumbnailStyle =
      thumbnail ===
        'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg' ||
      thumbnail ===
        'http://i.annihil.us/u/prod/marvel/i/mg/f/60/4c002e0305708.gif'
        ? {
            objectFit: 'fill'
          }
        : null;

    const duration = 500;

    return (
      <CSSTransition key={id} timeout={duration} classNames="csstransition">
        <li
          ref={el => (itemRefs.current[i] = el)}
          tabIndex={0}
          onClick={() => {
            onCharSelected(id);
            onFocusItem(i);
          }}
          onKeyDown={e => {
            if (e.key === ' ' || e.key === 'Enter') {
              onCharSelected(id);
              onFocusItem(i);
            }
          }}
          key={id}
          className="char__item"
        >
          <img style={thumbnailStyle} src={thumbnail} alt={name} />
          <div className="char__name">{name}</div>
        </li>
      </CSSTransition>
    );
  });

  return (
    <ul className="char__grid">
      <TransitionGroup component={null}>{charactersList}</TransitionGroup>
    </ul>
  );
};

export default CharList;

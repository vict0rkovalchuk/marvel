import { Component } from 'react';
import PropTypes from 'prop-types';

import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';

import MarvelService from '../../services/MarvelService';

import './charList.scss';

class CharList extends Component {
  state = {
    characters: [],
    loading: true,
    error: false,
    newItemLoading: false,
    offset: 210,
    charEnded: false,
    totalCharacters: null
  };

  marvelService = new MarvelService();

  componentDidMount() {
    this.updateCharacters();
    this.updateTotalCharacters();
  }

  onRequest = offset => {
    this.onCharListLoading();
    this.marvelService
      .getAllCharacters(offset)
      .then(this.onCharactersLoaded)
      .catch(this.onError);
  };

  onCharListLoading = () => {
    this.setState({
      newItemLoading: true
    });
  };

  onTotalCharactersLoaded = total => {
    this.setState({
      totalCharacters: total
    });
  };

  onCharactersLoaded = newCharacters => {
    let ended = false;
    if (
      // ==
      newCharacters.length < 9 &&
      // ==
      this.state.totalCharacters - 9 <= this.state.offset
    ) {
      ended = true;
    }

    this.setState(({ characters, offset }) => {
      return {
        characters: [...characters, ...newCharacters],
        loading: false,
        newItemLoading: false,
        offset: offset + 9,
        charEnded: ended
      };
    });
  };

  onError = () => {
    this.setState({ loading: false, error: true });
  };

  updateTotalCharacters = () => {
    this.marvelService
      .getTotalCharacters()
      .then(this.onTotalCharactersLoaded)
      .catch(this.onError);
  };

  updateCharacters = () => {
    this.marvelService
      .getAllCharacters()
      .then(this.onCharactersLoaded)
      .catch(this.onError);
  };

  render() {
    const { characters, loading, error, offset, newItemLoading, charEnded } =
      this.state;

    const errorMessage = error ? <ErrorMessage /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = !(loading || error) ? (
      <View
        onCharSelected={this.props.onCharSelected}
        characters={characters}
      />
    ) : null;

    return (
      <div className="char__list">
        {errorMessage}
        {spinner}
        {content}
        <button
          style={{ display: charEnded ? 'none' : 'block' }}
          disabled={newItemLoading}
          onClick={() => {
            this.onRequest(offset);
          }}
          className="button button__main button__long"
        >
          <div className="inner">load more</div>
        </button>
      </div>
    );
  }
}

CharList.propTypes = {
  onCharSelected: PropTypes.func
};

const View = ({ characters, onCharSelected }) => {
  const charactersList = characters.map(({ name, thumbnail, id }) => (
    <li onClick={() => onCharSelected(id)} key={id} className="char__item">
      <img src={thumbnail} alt={name} />
      <div className="char__name">{name}</div>
    </li>
  ));

  return <ul className="char__grid">{charactersList}</ul>;
};

export default CharList;

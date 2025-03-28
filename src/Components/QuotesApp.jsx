import { useState } from "react";

const QuotesApp = () => {
  const [quote, setQuote] = useState({
    text: "Ask not what your country can do for you, ask what you can do for your country.",
    author: "John Fitzgerald Kennedy",
  });

  const [favorites, setFavorites] = useState([]);

  const [showFavorites, setShowFavorites] = useState(false);

  const fetchNewQuote = async () => {
    try {
      // const url = "https://www.quoterism.com/api/quotes/random";
      const url = "https://api.quotable.io/random";
      const response = await fetch(url);
      const data = await response.json();
      setQuote({
        text: data.content,
        author: data.author,
      });
    } catch (err) {
      console.error("Error fetching quote", err);
    }
  };

  const toggleFavorites = () => setShowFavorites(!showFavorites);

  const addToFavorites = () => {
    const isAlreadyInFavorite = favorites.some(
      (fav) => fav.text === quote.text && fav.author === quote.author
    );
    !isAlreadyInFavorite && setFavorites([...favorites, quote]);
  };

  const deleteFavorite = (index) => {
    const updatedFavorites = favorites.filter((_, i) => i !== index);
    setFavorites(updatedFavorites);
  };

  return (
    <div className="container">
      <div className="quotes-app">
        <h1 className="app-heading">Quotes...</h1>
        <i className="bx bxs-heart fav-icon" onClick={toggleFavorites}></i>
        <div className="quote">
          <i className="bx bxs-quote-alt-left left-quote"></i>
          <p className="quote-text">{quote.text}</p>
          <p className="quote-author">{quote.author}</p>
          <i className="bx bxs-quote-alt-right right-quote"></i>
        </div>
        <div className="circles">
          <div className="circle-1"></div>
          <div className="circle-2"></div>
          <div className="circle-3"></div>
          <div className="circle-4"></div>
        </div>
        <div className="buttons">
          <button className="btn btn-new" onClick={fetchNewQuote}>
            New Quote
          </button>
          <button className="btn btn-fav" onClick={addToFavorites}>
            Add to Favorites
          </button>
        </div>
        {showFavorites && (
          <div className="favorites">
            <button className="btn-close" onClick={toggleFavorites}>
              <i className="bx bx-x"> </i>
            </button>
            {favorites.map((favQuote, index) => (
              <div className="fav-quote" key={index}>
                <div
                  className="fav-quote-delete"
                  onClick={() => deleteFavorite(index)}
                >
                  <i className="bx bx-x-circle"></i>
                </div>
                <div className="fav-quote-content">
                  <div className="fav-quote-text">{favQuote.text}</div>
                  <div className="fav-quote-author">{favQuote.author}</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default QuotesApp;

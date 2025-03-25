const QuotesApp = () => {
  return (
    <div className="container">
      <div className="quotes-app">
        <h1 className="app-heading">Quote.</h1>
        <i className="bx bxs-heart fav-icon"></i>
        <div className="quote">
          <i className="bx bxs-quote-alt-left left-quote"></i>
          <p className="quote-text">
            Ask not what your country can do for you, ask what you can do for
            your country.
          </p>
          <p className="quote-author">J. F. Kennedy</p>
          <i className="bx bxs-quote-alt-right right-quote"></i>
        </div>
        <div className="circles">
          <div className="circle-1"></div>
          <div className="circle-2"></div>
          <div className="circle-3"></div>
          <div className="circle-4"></div>
        </div>
        <div className="buttons">
          <button className="btn btn-new">New Quote</button>
          <button className="btn btn-fav">Add to Favorites</button>
        </div>
      </div>
    </div>
  );
};

export default QuotesApp;

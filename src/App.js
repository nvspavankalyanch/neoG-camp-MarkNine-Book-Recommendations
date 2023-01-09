import { useState } from "react";
import "./styles.css";

export default function App() {
  const [state, setState] = useState("javascript");

  function ClickHandler(input) {
    var state = input;
    setState(state);
  }

  return (
    <div className="App">
      <h1> 📚 Book Recommendations 📚</h1>
      <p>Find your next great read with this application</p>

      <button
        className="btn"
        onClick={() => ClickHandler("Science-Fiction&Fantasy")}
      >
        Science Fiction and Fantasy
      </button>
      <button className="btn" onClick={() => ClickHandler("Analysis&Strategy")}>
        Analysis & Strategy
      </button>
      <button className="btn" onClick={() => ClickHandler("business")}>
        Business
      </button>

      <hr />

      <div>
        {state === "Science-Fiction&Fantasy" ? (
          <div>
            <ul className="unordered">
              <li className="list-style">
                <div className="book-style">Dune</div>
                <div>
                  <small>
                    By Frank Herbert is a science fiction novel by Frank
                    Herbert, first published in 1965. It is set in the distant
                    future and tells the story of Paul Atreides, whose family is
                    given control of the desert planet Arrakis, the only known
                    source of the spice melange. The spice is a valuable
                    commodity and the key to space travel, making control of
                    Arrakis a highly coveted prize.
                  </small>
                </div>
                <div>4/5</div>
              </li>
              <li className="list-style">
                <div className="book-style">The Chronicles of Narnia</div>
                <div>
                  <small>
                    "The Chronicles of Narnia" is a series of fantasy novels by
                    C.S. Lewis. The series consists of seven books, which were
                    published between 1950 and 1956. The books have been widely
                    translated and have been popular with both children and
                    adults.
                  </small>
                </div>
                <div>4/5</div>
              </li>
              <li className="list-style">
                <div className="book-style">The Foundation Trilogy</div>
                <div>
                  <small>
                    "The Foundation Trilogy" is a science fiction series by
                    Isaac Asimov, consisting of three books: "Foundation,"
                    "Foundation and Empire," and "Second Foundation." The books
                    were published between 1951 and 1953 and are set in a future
                    in which humanity has spread out across the galaxy and is
                    ruled by a large, centralized Galactic Empire.
                  </small>
                </div>
                <div>4.7/5</div>
              </li>
            </ul>
          </div>
        ) : null}

        {state === "Analysis&Strategy" ? (
          <div>
            <ul className="unordered">
              <li className="list-style">
                <div className="book-style">Blue Ocean Strategy</div>
                <div>
                  <small>
                    Book by W. Chan Kim and Renée Mauborgne that introduces the
                    concept of creating new market space, or a "blue ocean,"
                    rather than competing in a crowded, existing market, or a
                    "red ocean." The authors argue that companies can achieve
                    significant growth by focusing on creating and capturing new
                    demand rather than fighting for a share of existing demand.
                  </small>
                </div>
                <div>4/5</div>
              </li>
              <li className="list-style">
                <div className="book-style">
                  Competitive Strategy: Techniques for Analyzing Industries and
                  Competitors
                </div>
                <div>
                  <small>
                    Book by Michael E. Porter,a professor at Harvard Business
                    School and a leading authority on competitive strategy. The
                    book discusses the principles of how firms can achieve and
                    sustain a competitive advantage in their industries.
                  </small>
                </div>
                <div>4/5</div>
              </li>
              <li className="list-style">
                <div className="book-style">Thinking, Fast and Slow</div>
                <div>
                  <small>
                    Book by Daniel Kahneman that explores the psychological
                    processes behind decision-making and judgment. The book is
                    based on Kahneman's work on the psychology of judgment and
                    decision-making, which has been recognized with a Nobel
                    Prize in Economics.
                  </small>
                </div>
                <div>4.8/5</div>
              </li>
            </ul>
          </div>
        ) : null}

        {state === "business" ? (
          <div>
            <ul className="unordered">
              <li className="list-style">
                <div className="book-style">
                  The 7 Habits of Highly Effective People
                </div>
                <div>
                  <small>
                    Book by Stephen R. Covey, as this book proposes seven habits
                    that, if adopted, can lead to increased effectiveness and
                    success in both personal and professional life.
                  </small>
                </div>
                <div>4/5</div>
              </li>
              <li className="list-style">
                <div className="book-style">Good to Great </div>
                <div>
                  <small>
                    Book by Jim Collins that aims to identify the factors that
                    contribute to a company's transition from good to great
                    performance. The book is based on a five-year research
                    project in which Collins and his team analyzed the histories
                    of 28 companies and identified common themes among those
                    that made the leap from good to great results.
                  </small>
                </div>
                <div>4/5</div>
              </li>
              <li className="list-style">
                <div className="book-style">The Innovator's Dilemma</div>
                <div>
                  <small>
                    Book by Clayton M. Christensen,explores the concept of
                    disruptive innovation, which is the process by which a new
                    entrant to a market introduces a product or service that
                    eventually overturns the existing market leaders.
                  </small>
                </div>
                <div>4/5</div>
              </li>
            </ul>
          </div>
        ) : null}
      </div>
    </div>
  );
}

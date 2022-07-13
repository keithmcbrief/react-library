import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Highlight from "./ui/Highlight";

const Highlights = () => {
  return (
    <section id="highlights">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            Why Choose <span className="purple">Library</span>
            <div className="highlight__wrapper">

                <Highlight 
                icon={<FontAwesomeIcon icon="bolt" />}
                title="Easy and Quick" 
                para="Get access to the book you purchased online instantly."
                />
                
                <Highlight 
                icon={<FontAwesomeIcon icon="book-open" />}
                title="10,000+ Books" 
                para="Library has books in all your favorite categories."
                />

                <Highlight 
                icon={<FontAwesomeIcon icon="tags" />}
                title='Affordable' 
                para="Get access to the book you purchased online instantly."
                />

            </div>
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Highlights;

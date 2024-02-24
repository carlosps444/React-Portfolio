import React from 'react';

function Portfolio() {
    return (
        <section>
            <div className="container">
                <h2>Portfolio</h2>
                <div className="portfolio-grid">
                    <div className="project">
                        <img src="" alt="project1" />
                        <div className="title">Project 1</div>
                        <div className="links">
                            <a href="#">Deployed</a>
                            <a href="#">Github Repo</a>

                        </div>
                    </div>

                    <div className="project">
                        <img src="" alt="project2" />
                        <div className="title"> Project 2</div>
                        <div className="links">
                            <a href="#">Deployed</a>
                            <a href="#">Github Repo</a>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Portfolio;
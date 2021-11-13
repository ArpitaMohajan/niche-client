import React from 'react';
import './About.css';
const About = () => {
    return (
        <div>
            <section id="about">
                <div className="about-container">
                    <div className="about-title w-50">
                        <h1>Best shampoos of 2021 for every hair type and budget</h1>
                        <button className="button">
                            <a href='https://www.shampooadvice.com/main-ingredients-of-shampoo/'>Ingredients<i class="fas fa-arrow-right"></i></a>
                        </button>
                    </div>
                    <div className="about-description w-50">
                        <h3>All best Shampoo Review</h3>
                        <ul>

                            <div>Dove Nutritive </div>
                            <div>Keranique Shampoo</div>
                            <div>Fructis Full and Plush</div>
                            <div>Keratin Smooth Color </div>

                            <div>Pantene Shampoo</div>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
export default function About() {
    return (
        <main>
            <div className="page-header">
                <h1>About Us</h1>
            </div>

            <section className="about-section">
                <h2>Our Values</h2>

                <div className="values-list">
                    <div className="value-item">
                        <h3>Holistic Development</h3>
                        <p>
                            We believe education goes beyond textbooks. Our approach focuses on the intellectual, physical, emotional, and social growth of every student.
                            Through diverse extracurricular activities, sports, and arts programs, we ensure our students develop well-rounded personalities ready to face the world.
                        </p>
                    </div>

                    <div className="value-item">
                        <h3>Learning with Purpose</h3>
                        <p>
                            Education should be meaningful and applicable. We design our curriculum to encourage critical thinking, problem-solving, and innovation.
                            Our educators strive to connect classroom concepts with real-world scenarios, inspiring students to become lifelong learners with a clear sense of direction.
                        </p>
                    </div>

                    <div className="value-item">
                        <h3>Respect, Values &amp; Responsibility</h3>
                        <p>
                            Character building is at the core of our institution. We foster an environment where mutual respect, discipline, and ethical behavior are paramount.
                            We teach our students to take responsibility for their actions and to contribute positively to their communities and society at large.
                        </p>
                    </div>
                </div>

                <div className="principal-message">
                    <div>
                        <img src="/assets/images/Principal.jpg" alt="Principal N.S. Bhutani" className="principal-photo" />
                    </div>

                    <div className="message-content">
                        <h2>Principal&apos;s Message</h2>
                        <blockquote>
                            At our school, we strive to create an open and inspiring environment where every child is encouraged to learn, grow, and discover their true potential.
                            Through strong values, discipline, and quality education, we prepare our students to face the future with confidence and integrity.
                        </blockquote>
                        <p className="signature">N.S. Bhutani</p>
                    </div>
                </div>
            </section>
        </main>
    );
}

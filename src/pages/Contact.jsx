export default function Contact() {
    return (
        <main>
            <div className="page-header">
                <h1>Contact Us</h1>
            </div>

            <section className="contact-container">
                <div className="contact-details">
                    <h2>Get in Touch</h2>
                    <p style={{ marginBottom: "2rem", color: "#666" }}>
                        We welcome your inquiries and feedback. Please find our contact details below.
                    </p>

                    <div className="contact-item">
                        <h3>School Name</h3>
                        <p>Doon Valley Secondary School</p>
                    </div>

                    <div className="contact-item">
                        <h3>Phone</h3>
                        <p>+91 - 9001735290</p>
                    </div>

                    <div className="contact-item">
                        <h3>Email</h3>
                        <p>info@doonvalleyalwar.com</p>
                    </div>

                    <div className="contact-item">
                        <h3>Address</h3>
                        <p>
                            Janta Colony, Jyoti Nagar,<br />
                            Alwar, Rajasthan 301001
                        </p>
                    </div>
                </div>

                <div className="map-container">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14161.46452296057!2d76.6340646!3d27.5604057!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397299f3f2604c01%3A0x283e4d6cdcb58c2c!2sDoon%20Valley%20School!5e0!3m2!1sen!2sin!4v1709280000000!5m2!1sen!2sin"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Doon Valley School Map">
                    </iframe>
                </div>
            </section>
        </main>
    );
}

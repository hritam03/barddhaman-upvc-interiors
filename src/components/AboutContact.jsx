function AboutContact() {
  return (
    <section id="about" className="about-contact-section">
      <div className="about-contact-container">
         {/* ABOUT US */}
        <div className="about-box">
          <h2>About Us</h2>
           <p>
            Barddhaman UPVC Interiors specializes in premium UPVC and
            customized interior solutions including modular kitchens, wardrobes,
            wall paneling, office furniture, and complete interior fit-outs.
          </p>

          <p>
            We design and deliver durable, functional, and aesthetically pleasing 
            solutions tailored to modern homes and commercial spaces across Barddhaman
            and nearby areas.
          </p>

          <p>
            We focus on quality materials, precise workmanship, 
            and timely delivery to ensure customer satisfaction.
          </p>
        
        </div>

        {/* CONTACT US */}
        <div className="contact-box" id="contact">
          <h2>Contact Us</h2>

          <div className="contact-item">
            <strong>Address:</strong>
            <p>
              Muchipara, Sripally,
              Barddhaman - 713103, West Bengal, India
            </p>
          </div>

          <div className="contact-item">
            <strong>Phone:</strong>
            <p>
              <a href="tel:+919999999999">+91 9932449360</a>
            </p>
          </div>

          <div className="contact-item">
            <strong>WhatsApp:</strong>
            <p>
              <a
                href="https://wa.me/919932449360"
                target="_blank"
                rel="noopener noreferrer"
              >
                Chat on WhatsApp
              </a>
            </p>
          </div>

          <div className="contact-item">
            <strong>Email:</strong>
            <p>
              <a href="mailto:info@barddhamanupvc.com">
                info@barddhamanupvc.com
              </a>
            </p>
          </div>

          {/* Google Map placeholder */}
          <div className="map-placeholder">
            Google Map will be added here soon.
          </div>
        </div>

      </div>
      
      
    </section>
  );
}

export default AboutContact;

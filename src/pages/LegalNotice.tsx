import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const LegalNotice: React.FC = () => {
  return (
    <div className="min-h-screen bg-remixr-dark text-white">
      <Header />
      <div className="max-w-3xl mx-auto px-6 py-32">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 gradient-text">Legal Notice</h1>

        <div className="space-y-6 text-white/70">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Contact Information</h2>
            <p>Festim Jetishi</p>
            <p>Zelglistrasse 7</p>
            <p>5623 Boswil</p>
            <p>Switzerland</p>
            <br />
            <p>
              <strong>Phone:</strong> <a href="tel:+41763441820" className="text-remixr-magenta hover:underline">+41 76 344 18 20</a>
            </p>
            <p>
              <strong>Email:</strong> <a href="mailto:jetishi.festim@gmail.com" className="text-remixr-magenta hover:underline">jetishi.festim@gmail.com</a>
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Disclaimer</h2>
            <p>
              The contents of our pages were created with the greatest care. However, we cannot guarantee the accuracy, completeness, or timeliness of the content. As a service provider, we are responsible for our own content on these pages according to general laws. However, we are not obligated to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity. Obligations to remove or block the use of information under general laws remain unaffected. However, liability in this regard is only possible from the date of knowledge of a specific infringement. Upon notification of corresponding violations, we will remove this content immediately.
            </p>
          </section>

          <section className="mt-10 pt-6 border-t border-white/10">
            <div className="mt-6">
              <Link to="/" className="text-remixr-magenta hover:text-white transition-colors">&larr; Return to Home</Link>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LegalNotice;

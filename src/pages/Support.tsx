import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Support: React.FC = () => {
  return (
    <div className="min-h-screen bg-remixr-dark text-white">
      <Header />
      <div className="max-w-3xl mx-auto px-6 py-32">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 gradient-text">Support</h1>

        <div className="space-y-6 text-white/70">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Get Help</h2>
            <p>
              If you need assistance or have any questions, please reach out to us through the following channels:
            </p>
            <br />
            <p>
              <strong>Email:</strong> <a href="mailto:jetishi.festim@gmail.com" className="text-remixr-magenta hover:underline">jetishi.festim@gmail.com</a>
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Feedback</h2>
            <p>
              We appreciate your feedback! If you have any suggestions or comments, please let us know.
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

export default Support;

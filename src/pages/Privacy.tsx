import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-remixr-dark text-white">
      <Header />
      <div className="max-w-3xl mx-auto px-6 py-32">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 gradient-text">Privacy Policy</h1>
        
        <div className="p-6 mb-8 bg-white/5 border border-white/10 rounded-xl">
          <h2 className="text-xl font-bold text-remixr-magenta mb-4">Image Privacy Commitment</h2>
          <p className="text-white mb-4">At Remixr, we take your privacy very seriously. Here's our commitment to you:</p>
          <ul className="list-disc pl-6 space-y-2 text-white/80">
            <li><strong className="text-white">Immediate Deletion:</strong> All images you upload are automatically and permanently deleted from our servers as soon as we've processed them and delivered your results.</li>
            <li><strong className="text-white">No Data Retention:</strong> We do not store, archive, or maintain any copies of your uploaded images.</li>
            <li><strong className="text-white">No Secondary Use:</strong> Your images are never used to train our AI models or for any purpose other than providing you with the specific service you requested.</li>
            <li><strong className="text-white">Temporary Storage Only:</strong> Images are only temporarily stored on Google Cloud Storage for the brief period needed to process your request.</li>
          </ul>
        </div>
        
        <div className="space-y-6 text-white/70">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
            <p>This Privacy Policy explains how Remixr ("we", "our", or "us") collects, uses, and discloses information about you when you use our mobile application and related services (collectively, the "Services").</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Information We Collect</h2>
            <p>We collect minimal information to provide our services:</p>
            <ul className="list-disc pl-6 mt-2">
              <li>Images you upload for processing (temporarily stored and immediately deleted after processing)</li>
              <li>Basic usage analytics to improve our services</li>
              <li>Device information to ensure compatibility</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. How We Use Your Information</h2>
            <p>We use your information solely to:</p>
            <ul className="list-disc pl-6 mt-2">
              <li>Process your images and deliver the requested transformations</li>
              <li>Improve our services and user experience</li>
              <li>Troubleshoot technical issues</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. User Registration</h2>
            <p>Remixr does not require user registration or accounts to use the basic features of the application.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Image Processing & Storage</h2>
            <div className="bg-white/5 rounded-lg p-4 border border-remixr-magenta/30">
              <p className="mb-2">We want to be exceptionally clear about how we handle your images:</p>
              <ul className="list-disc pl-6">
                <li><strong className="text-white">Temporary Storage:</strong> Images are temporarily stored on Google Cloud Storage only for the duration needed to process them.</li>
                <li><strong className="text-white">Processing:</strong> Images are processed using OpenAI and other AI services to create the transformations you request.</li>
                <li><strong className="text-white">Immediate Deletion:</strong> All uploaded images are PERMANENTLY DELETED from our servers immediately after processing is complete and results are delivered to your device.</li>
                <li><strong className="text-white">No Training Data:</strong> We DO NOT use your images to train our AI models under any circumstances.</li>
              </ul>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Data Security</h2>
            <p>We implement industry-standard security measures to protect your information from unauthorized access, disclosure, or alteration. These measures include encryption, firewalls, and secure server infrastructure.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. Data Sharing</h2>
            <p>We do not share your personal information with third parties except as necessary to provide our services (e.g., with our AI processing partners) or as required by law.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">8. Children's Privacy</h2>
            <p>Our Services are not intended for children under the age of 13, and we do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe that your child has provided us with personal information, please contact us, and we will take steps to delete that information.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">9. Changes to This Privacy Policy</h2>
            <p>We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on our website or within the app. You are advised to review this Privacy Policy periodically for any changes.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">10. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at:</p>
            <p><a href="mailto:privacy@remixr.com" className="text-remixr-magenta hover:underline">privacy@remixr.com</a></p>
          </section>
          
          <section className="mt-10 pt-6 border-t border-white/10">
            <p>Last updated: April 26, 2023</p>
            <div className="mt-6">
              <Link to="/" className="text-remixr-magenta hover:underline">Return to Home</Link>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Privacy;

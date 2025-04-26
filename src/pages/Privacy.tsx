
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-remixr-dark text-white">
      <Header />
      
      <main className="pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 gradient-text">Privacy Policy</h1>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-white/70 mb-6">
              Last updated: April 26, 2024
            </p>
            
            <p className="text-white/70 mb-4">
              This Privacy Policy describes how Remixr ("we", "our", or "us") collects, uses, and shares your personal information 
              when you use our mobile application ("the App").
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">1. Information We Collect</h2>
            <p className="text-white/70 mb-4">
              <strong>Images and Content:</strong> When you use our App, we temporarily process the images you upload to provide 
              our AI transformation services. These images are stored on Google Cloud Storage (GCS) during processing.
            </p>
            <p className="text-white/70 mb-4">
              <strong>Usage Data:</strong> We collect data about how you interact with the App, including features used, 
              time spent in the App, and transformation types selected.
            </p>
            <p className="text-white/70 mb-4">
              <strong>Device Information:</strong> We collect information about your device, including model, operating system, 
              unique device identifiers, and mobile network information.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">2. How We Use Your Information</h2>
            <p className="text-white/70 mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-8 mb-4 text-white/70 space-y-2">
              <li>Provide, maintain, and improve our services</li>
              <li>Process your images with our AI transformation features</li>
              <li>Analyze usage patterns to enhance user experience</li>
              <li>Detect and address technical issues</li>
              <li>Send you app-related notifications</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">3. Data Retention and Deletion</h2>
            <p className="text-white/70 mb-4">
              Your uploaded images are temporarily stored on our servers during processing via OpenAI's services. 
              Once processing is complete, these images are automatically deleted. We do not retain your images 
              beyond the time needed for processing unless you explicitly save them to your account.
            </p>
            <p className="text-white/70 mb-4">
              <strong>Important:</strong> We do not use your images to train our AI models.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">4. Third-Party Services</h2>
            <p className="text-white/70 mb-4">
              We use the following third-party services:
            </p>
            <ul className="list-disc pl-8 mb-4 text-white/70 space-y-2">
              <li>Google Cloud Storage (GCS) for temporary image storage</li>
              <li>OpenAI for AI image processing</li>
              <li>Standard analytics tools to measure app performance and usage</li>
              <li>App store payment processing for subscription services</li>
            </ul>
            <p className="text-white/70 mb-4">
              These services may collect information sent by your device. Their use of this information is governed 
              by their respective privacy policies.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">5. User Registration</h2>
            <p className="text-white/70 mb-4">
              Remixr does not require user registration to use basic features. If you choose to subscribe to Remixr Pro, 
              payment information is processed by your app store (Apple App Store or Google Play Store) and is subject to 
              their privacy policies.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">6. Data Security</h2>
            <p className="text-white/70 mb-4">
              We implement appropriate security measures to protect against unauthorized access, alteration, disclosure, 
              or destruction of your information. However, no method of electronic transmission or storage is 100% secure.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">7. Children's Privacy</h2>
            <p className="text-white/70 mb-4">
              Our App is not intended for children under the age of 13. We do not knowingly collect personal information 
              from children under 13. If you believe we have collected information from a child under 13, please contact us.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">8. Changes to This Privacy Policy</h2>
            <p className="text-white/70 mb-4">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new 
              Privacy Policy on this page and updating the "Last updated" date.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">9. Contact Us</h2>
            <p className="text-white/70 mb-4">
              If you have questions or concerns about this Privacy Policy, please contact us at privacy@remixrapp.com.
            </p>
            
            <div className="mt-12 mb-8">
              <Link to="/" className="text-remixr-magenta hover:text-white transition-colors">
                &larr; Back to Home
              </Link>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

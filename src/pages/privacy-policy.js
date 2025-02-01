import { FaShieldAlt, FaUserSecret, FaLock, FaExchangeAlt, FaTrashAlt } from 'react-icons/fa';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200">
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-4xl font-bold text-black mb-8">Privacy Policy</h1>
        <div className="space-y-8">
          <section className="bg-white rounded-lg shadow-lg p-8 mb-8 transform hover:scale-102 transition-all duration-300 ease-in-out">
            <div className="flex items-center space-x-4">
              <FaShieldAlt className="text-blue-800 w-8 h-8" />
              <h2 className="text-2xl font-semibold text-black">Introduction</h2>
            </div>
            <p className="mt-4 text-gray-700">
              Welcome to Social Engineering News Aggregator. We are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner. This Privacy Policy outlines how we collect, use, and protect your information.
            </p>
          </section>
          <section className="bg-white rounded-lg shadow-lg p-8 mb-8 transform hover:scale-102 transition-all duration-300 ease-in-out">
            <div className="flex items-center space-x-4">
              <FaUserSecret className="text-blue-800 w-8 h-8" />
              <h2 className="text-2xl font-semibold text-black">Information We Collect</h2>
            </div>
            <p className="mt-4 text-gray-700">
              We collect information that you provide to us directly, such as when you create an account, subscribe to our newsletter, or contact us for support. This information may include your name, email address, and any other details you provide.
            </p>
            <p className="mt-4 text-gray-700">
              Additionally, we may collect information automatically when you use our services, such as your IP address, browser type, and usage data. This information helps us understand how our services are being used and improve them.
            </p>
          </section>
          <section className="bg-white rounded-lg shadow-lg p-8 mb-8 transform hover:scale-102 transition-all duration-300 ease-in-out">
            <div className="flex items-center space-x-4">
              <FaLock className="text-blue-800 w-8 h-8" />
              <h2 className="text-2xl font-semibold text-black">How We Use Your Information</h2>
            </div>
            <p className="mt-4 text-gray-700">
              We use your information to provide and improve our services, communicate with you, and ensure the security of our platform. We do not share your personal information with third parties without your consent, except as required by law.
            </p>
            <p className="mt-4 text-gray-700">
              Your information may be used to personalize your experience, send you updates and promotional materials, and respond to your inquiries. We may also use aggregated data for analytical purposes to better understand our user base.
            </p>
          </section>
          <section className="bg-white rounded-lg shadow-lg p-8 mb-8 transform hover:scale-102 transition-all duration-300 ease-in-out">
            <div className="flex items-center space-x-4">
              <FaExchangeAlt className="text-blue-800 w-8 h-8" />
              <h2 className="text-2xl font-semibold text-black">Data Sharing and Transfers</h2>
            </div>
            <p className="mt-4 text-gray-700">
              We may share your information with trusted third-party service providers who assist us in operating our services, conducting our business, or serving our users. These third parties are obligated to keep your information confidential and use it only for the purposes for which we disclose it to them.
            </p>
            <p className="mt-4 text-gray-700">
              In the event of a merger, acquisition, or sale of all or a portion of our assets, your information may be transferred to the acquiring entity. We will notify you of any such change in ownership or control of your personal information.
            </p>
          </section>
          <section className="bg-white rounded-lg shadow-lg p-8 mb-8 transform hover:scale-102 transition-all duration-300 ease-in-out">
            <div className="flex items-center space-x-4">
              <FaTrashAlt className="text-blue-800 w-8 h-8" />
              <h2 className="text-2xl font-semibold text-black">Data Retention and Deletion</h2>
            </div>
            <p className="mt-4 text-gray-700">
              We retain your personal information for as long as necessary to provide our services and fulfill the purposes outlined in this Privacy Policy. When your information is no longer needed, we will securely delete or anonymize it.
            </p>
            <p className="mt-4 text-gray-700">
              You have the right to request the deletion of your personal information at any time. To do so, please contact us using the information provided below.
            </p>
          </section>
          <section className="bg-white rounded-lg shadow-lg p-8 mb-8 transform hover:scale-102 transition-all duration-300 ease-in-out">
            <div className="flex items-center space-x-4">
              <FaShieldAlt className="text-blue-800 w-8 h-8" />
              <h2 className="text-2xl font-semibold text-black">Contact Us</h2>
            </div>
            <p className="mt-4 text-gray-700">
              If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
            </p>
            <p className="mt-4 text-gray-700">
              Email: support@socialengineeringnews.com
            </p>
            <p className="mt-4 text-gray-700">
              Address: 123 Privacy St, Security City, SC 12345
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <header className=" py-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">Privacy Policy</h1>
          <p className="mt-2 text-gray-300">Your privacy is important to us</p>
        </div>
      </header>

      <main className="container mx-auto p-8">
        <section className="bg-gray-800 shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-100">Introduction</h2>
          <p className="mt-4 text-gray-300">
            Welcome to our website. We value your privacy and are committed to
            protecting your personal information. This Privacy Policy explains how
            we collect, use, and protect your data.
          </p>
        </section>

        <section className="bg-gray-800 shadow-lg rounded-lg p-6 mt-6">
          <h2 className="text-2xl font-semibold text-gray-100">Information We Collect</h2>
          <p className="mt-4 text-gray-300">
            We may collect the following types of information:
          </p>
          <ul className="list-disc pl-6 mt-4 text-gray-300">
            <li>Personal Identification Information (Name, Email, etc.)</li>
            <li>Order History and Payment Details</li>
            <li>Usage Data (How you interact with our website)</li>
          </ul>
        </section>

        <section className="bg-gray-800 shadow-lg rounded-lg p-6 mt-6">
          <h2 className="text-2xl font-semibold text-gray-100">How We Use Your Information</h2>
          <p className="mt-4 text-gray-300">
            The information we collect is used to:
          </p>
          <ul className="list-disc pl-6 mt-4 text-gray-300">
            <li>Process your orders and payments</li>
            <li>Provide customer support</li>
            <li>Send marketing and promotional emails</li>
            <li>Improve our website and services</li>
          </ul>
        </section>

        <section className="bg-gray-800 shadow-lg rounded-lg p-6 mt-6">
          <h2 className="text-2xl font-semibold text-gray-100">How We Protect Your Information</h2>
          <p className="mt-4 text-gray-300">
            We implement a variety of security measures to ensure the protection of
            your personal data. This includes encryption and secure servers to
            safeguard your information.
          </p>
        </section>

        <section className="bg-gray-800 shadow-lg rounded-lg p-6 mt-6">
          <h2 className="text-2xl font-semibold text-gray-100">Third-Party Sharing</h2>
          <p className="mt-4 text-gray-300">
            We do not sell, trade, or rent your personal information to third
            parties. However, we may share data with trusted partners who assist in
            operating our website and conducting our business.
          </p>
        </section>

        <section className="bg-gray-800 shadow-lg rounded-lg p-6 mt-6">
          <h2 className="text-2xl font-semibold text-gray-100">Your Rights</h2>
          <p className="mt-4 text-gray-300">
            You have the right to access, modify, or delete your personal data.
            You can contact us anytime if you wish to exercise these rights.
          </p>
        </section>

        <section className="bg-gray-800 shadow-lg rounded-lg p-6 mt-6">
          <h2 className="text-2xl font-semibold text-gray-100">Changes to This Privacy Policy</h2>
          <p className="mt-4 text-gray-300">
            We may update our Privacy Policy from time to time. Any changes will be
            posted on this page with an updated revision date.
          </p>
        </section>
      </main>

    </div>
  );
};

export default PrivacyPolicy;

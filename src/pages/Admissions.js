// src/pages/Admissions.js
import React from 'react';

const Admissions = () => {
  return (
    <div className="container mx-auto p-8 mt-20">
      <h2 className="text-4xl font-bold mb-6">Admissions at LBSSN</h2>
      <p className="mb-6">
        Welcome to LBSSN! We are excited to offer an enriching educational experience for your child. Our admission process is
        designed to be straightforward and transparent. We believe in providing equal opportunities for all students to
        grow academically, socially, and emotionally. Below, you will find all the information you need to apply.
      </p>

      <h3 className="text-3xl font-semibold mb-4">Admission Process</h3>
      <p className="mb-6">
        The admission process at LBSSN involves the following steps:
      </p>
      <ul className="list-disc pl-8 mb-6">
        <li>Step 1: Fill out the online admission form.</li>
        <li>Step 2: Submit the required documents (see below for list).</li>
        <li>Step 3: Schedule an interview or assessment, if required for the grade level.</li>
        <li>Step 4: Await admission decision (usually within two weeks).</li>
        <li>Step 5: Receive the admission offer and confirm the seat.</li>
      </ul>

      <h3 className="text-3xl font-semibold mb-4">Required Documents</h3>
      <p className="mb-6">
        Please ensure the following documents are submitted as part of the admission process:
      </p>
      <ul className="list-disc pl-8 mb-6">
        <li>Birth Certificate (for new students)</li>
        <li>Previous school reports (if applicable)</li>
        <li>Proof of Address (e.g., utility bill or rental agreement)</li>
        <li>Passport-sized photographs (2)</li>
        <li>Valid Aadhar Card (for Indian students)</li>
        <li>Transfer Certificate (if transferring from another school)</li>
      </ul>

      <h3 className="text-3xl font-semibold mb-4">Tuition Fees and Payment</h3>
      <p className="mb-6">
        The school fee structure for the academic year is as follows:
      </p>
      <ul className="list-disc pl-8 mb-6">
        <li>Admission Fee: ₹10,000 (one-time payment)</li>
        <li>Tuition Fee: ₹25,000 per term (3 terms per year)</li>
        <li>Activity Fee: ₹5,000 annually</li>
        <li>Transport Fee: Varies based on location</li>
      </ul>
      <p className="mb-6">
        Fees are payable via cheque, bank transfer, or online payment methods. For further details, please contact our
        accounts department.
      </p>

      <h3 className="text-3xl font-semibold mb-4">How to Apply</h3>
      <p className="mb-6">
        To apply, simply follow these steps:
      </p>
      <ol className="list-decimal pl-8 mb-6">
        <li>Visit our online application portal (link provided below).</li>
        <li>Fill out the online application form with necessary details.</li>
        <li>Upload scanned copies of the required documents.</li>
        <li>Submit the application and make the payment (if applicable).</li>
      </ol>

      <h3 className="text-3xl font-semibold mb-4">Important Dates</h3>
      <table className="table-auto w-full mb-6 border-collapse border border-gray-200">
        <thead>
          <tr className="bg-green-500 text-white">
            <th className="py-2 px-4">Event</th>
            <th className="py-2 px-4">Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-2 px-4">Application Deadline for Academic Year 2024</td>
            <td className="py-2 px-4">March 31, 2024</td>
          </tr>
          <tr>
            <td className="py-2 px-4">Interview/Assessment Dates</td>
            <td className="py-2 px-4">April 5-10, 2024</td>
          </tr>
          <tr>
            <td className="py-2 px-4">Admission Results Announcement</td>
            <td className="py-2 px-4">April 15, 2024</td>
          </tr>
          <tr>
            <td className="py-2 px-4">Last Date for Fee Payment</td>
            <td className="py-2 px-4">April 20, 2024</td>
          </tr>
        </tbody>
      </table>

      <h3 className="text-3xl font-semibold mb-4">Contact Us</h3>
      <p className="mb-6">
        If you have any questions or need assistance with the admission process, please don't hesitate to get in touch with our
        Admissions Office:
      </p>
      <ul className="list-none pl-6 mb-6">
        <li>Email: <a href="mailto:admissions@LBSSN.com" className="text-blue-500">admissions@LBSSN.com</a></li>
        <li>Phone: +91 123 456 7890</li>
        <li>Address: LBSSN, 123 School Street, City, State, ZIP</li>
      </ul>

      <div className="mb-6">
        <h4 className="text-2xl font-semibold">Application Portal</h4>
        <a
          href="https://LBSSN-application-portal.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline"
        >
          Click here to apply online
        </a>
      </div>
    </div>
  );
};

export default Admissions;

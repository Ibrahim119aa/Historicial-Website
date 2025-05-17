import React from "react";
import { motion } from "framer-motion";

const Section = ({ title, children }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="mb-10"
  >
    <h2 className="text-2xl sm:text-3xl font-bold text-[#fca311] mb-4">{title}</h2>
    <div className="text-gray-300 text-lg leading-relaxed">{children}</div>
  </motion.div>
);

const TermsAndPrivacy = () => {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white px-6 py-16 font-sans">
      <div className="max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-extrabold text-center text-white mb-12 tracking-wide"
        >
          Terms of Service – Histopedia
        </motion.h1>

        <p className="text-gray-400 mb-8 text-center">Last updated: April 24, 2025</p>

        <Section title="1. Overview">
          Histopedia is an educational platform that allows users to explore historical content, participate in quizzes, read and write blogs, and interact through comments. It is intended for anyone interested in learning about the past and its impact on the present.
        </Section>

        <Section title="2. Account Registration">
          Users may create an account by providing their name and email address. You are responsible for keeping your account credentials secure and for all activities under your account.
        </Section>

        <Section title="3. User Contributions">
          Registered users can post comments, submit blog content, and participate in quizzes. We reserve the right to moderate or remove any content that violates our guidelines or applicable laws.
        </Section>

        <Section title="4. Acceptable Use">
          You agree not to:
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Violate any applicable law or regulation</li>
            <li>Post misleading, harmful, or offensive content</li>
            <li>Interfere with the website's normal operation</li>
            <li>Attempt unauthorized access to our systems</li>
          </ul>
        </Section>

        <Section title="5. Intellectual Property">
          All content created by Histopedia is protected by copyright and intellectual property laws. You retain ownership of your submitted blogs, but by posting, you grant Histopedia a non-exclusive license to display and share your content on the platform.
        </Section>

        <Section title="6. Termination">
          We reserve the right to suspend or terminate accounts that violate these terms, with or without notice.
        </Section>

        <Section title="7. Liability Disclaimer">
          Histopedia is provided “as is.” While we strive to keep the platform secure and reliable, we cannot guarantee it will always be error-free or uninterrupted.
        </Section>

        <Section title="8. Changes to These Terms">
          We may update these Terms of Service at any time. All changes will be posted on this page with an updated date.
        </Section>

        <Section title="9. Contact">
          If you have questions about these Terms, please contact us at <a href="mailto:shzdv@gmail.com" className="text-[#fca311] hover:underline">shzdv@gmail.com</a>.
        </Section>

        <hr className="border-gray-700 my-12" />

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-extrabold text-center text-white mb-12 tracking-wide"
        >
          Privacy Policy – Histopedia
        </motion.h1>

        <p className="text-gray-400 mb-8 text-center">Last updated: April 24, 2025</p>

        <Section title="1. Information We Collect">
          We collect name and email address during sign-up, and content you submit such as comments and blog posts.
        </Section>

        <Section title="2. How We Use Your Information">
          We use your data to:
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Create and manage user accounts</li>
            <li>Deliver educational content and quizzes</li>
            <li>Enable interaction (e.g., blog posting and comments)</li>
            <li>Improve platform performance and features</li>
          </ul>
        </Section>

        <Section title="3. Third-Party Services">
          Histopedia uses Firebase for authentication and may use Google Analytics to analyze traffic.
        </Section>

        <Section title="4. User-Generated Content">
          Content you post may be publicly visible. Avoid sharing sensitive information in public areas.
        </Section>

        <Section title="5. Data Security">
          We use Firebase's secure infrastructure. However, no system is 100% secure.
        </Section>

        <Section title="6. Your Rights">
          You may:
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Request access to your data</li>
            <li>Ask us to correct or delete your data</li>
            <li>Withdraw consent anytime (e.g., request account deletion)</li>
          </ul>
        </Section>

        <Section title="8. Policy Updates">
          We may revise this Privacy Policy and post updates here.
        </Section>

        <Section title="9. Contact">
          For privacy-related concerns, contact us at <a href="mailto:shzdv@gmail.com" className="text-[#fca311] hover:underline">shzdv@gmail.com</a>.
        </Section>
      </div>
    </div>
  );
};

export default TermsAndPrivacy;

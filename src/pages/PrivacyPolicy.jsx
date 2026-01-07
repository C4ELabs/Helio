import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const PrivacyPolicy = () => {
  return (
    <>
      <Navbar />
      <main className="flex-grow-1 py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-xl-9">
              <h1 className="display-4 fw-bold mb-3" style={{ color: '#4870b8' }}>
                Privacy Policy
              </h1>
              <div className="mb-4 pb-3 border-bottom">
                <p className="text-muted mb-1">
                  <strong>Effective Date:</strong> 5/1/2026
                </p>
                <p className="text-muted mb-0">
                  <strong>Last Updated:</strong> 5/1/2026
                </p>
              </div>

              <div className="privacy-content">
                <section className="mb-5">
                  <h2 className="h4 fw-bold mb-3">1. Introduction</h2>
                  <p className="mb-3">
                    HelioCoach ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application (the "App").
                  </p>
                  <p>
                    Please read this Privacy Policy carefully. By using the App, you agree to the collection and use of information in accordance with this policy. If you do not agree with the terms of this Privacy Policy, please do not access the App.
                  </p>
                </section>

                <section className="mb-5">
                  <h2 className="h4 fw-bold mb-3">2. Data Controller</h2>
                  <p className="mb-3">
                    The data controller responsible for your personal information is:
                  </p>
                  <div className="ms-3 mb-3">
                    <p className="mb-1"><strong>Adventure Works Solutions LLP</strong></p>
                    <p className="mb-1">Incorporated in: India</p>
                    <p className="mb-0">Email: <a href="mailto:heliocoach02@gmail.com">heliocoach02@gmail.com</a></p>
                  </div>
                  <p>
                    Your personal data may be processed in India and other jurisdictions where we or our service providers operate. By using the App, you acknowledge and consent to such cross-border data processing.
                  </p>
                </section>

                <section className="mb-5">
                  <h2 className="h4 fw-bold mb-3">3. Information We Collect</h2>
                  
                  <div className="mb-4">
                    <h3 className="h5 fw-semibold mb-2">3.1 Personal Information</h3>
                    <p className="mb-2">
                      We may collect personally identifiable information that you voluntarily provide to us when you:
                    </p>
                    <ul className="mb-3">
                      <li>Register for an account</li>
                      <li>Use certain features of the App</li>
                      <li>Contact us for support</li>
                      <li>Participate in surveys or promotions</li>
                    </ul>
                    <p className="mb-2">This information may include:</p>
                    <ul>
                      <li>Name</li>
                      <li>Email address</li>
                      <li>Phone number</li>
                      <li>Username and password</li>
                      <li>Profile picture</li>
                      <li>Payment information (processed securely by third-party payment processors)</li>
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h3 className="h5 fw-semibold mb-2">3.2 Automatically Collected Information</h3>
                    <p className="mb-2">
                      When you use the App, we may automatically collect certain information, including:
                    </p>
                    <ul>
                      <li>Device information (model, operating system, unique device identifiers)</li>
                      <li>IP address</li>
                      <li>Usage data (features accessed, time spent, actions taken)</li>
                      <li>Location data (with your permission)</li>
                      <li>Cookies and similar tracking technologies</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="h5 fw-semibold mb-2">3.3 Wellness and Habit Data</h3>
                    <p className="mb-2">
                      The App collects wellness and habit-tracking data for informational and self-tracking purposes. This may include:
                    </p>
                    <ul className="mb-3">
                      <li>Daily habits and routines you track</li>
                      <li>Goals and progress metrics</li>
                      <li>Behavioral patterns and trends</li>
                    </ul>
                    <p className="mb-2"><strong>Important clarifications:</strong></p>
                    <ul>
                      <li>We collect wellness and habit data, not medical records or clinical health information</li>
                      <li>This data is processed solely for informational, motivational, and self-tracking purposes</li>
                      <li>The App does not provide medical diagnosis, treatment recommendations, or clinical decision-making</li>
                      <li>This data should not be considered a substitute for professional medical advice</li>
                    </ul>
                  </div>
                </section>

                <section className="mb-5">
                  <h2 className="h4 fw-bold mb-3">4. Legal Basis for Processing Your Information</h2>
                  <p className="mb-3">
                    We process your personal information on the following legal bases:
                  </p>
                  
                  <div className="mb-3">
                    <h3 className="h5 fw-semibold mb-2">4.1 Contractual Necessity</h3>
                    <p>
                      Processing is necessary to provide you with the App's services and fulfill our contract with you (e.g., account management, service delivery).
                    </p>
                  </div>

                  <div className="mb-3">
                    <h3 className="h5 fw-semibold mb-2">4.2 Consent</h3>
                    <p>
                      Where required, we obtain your explicit consent before processing certain data (e.g., location data, marketing communications). You may withdraw consent at any time through your account settings.
                    </p>
                  </div>

                  <div className="mb-3">
                    <h3 className="h5 fw-semibold mb-2">4.3 Legitimate Interest</h3>
                    <p className="mb-2">
                      We may process your information based on our legitimate interests in:
                    </p>
                    <ul className="mb-2">
                      <li>Improving and personalizing the App</li>
                      <li>Detecting and preventing fraud and abuse</li>
                      <li>Conducting analytics and research</li>
                      <li>Ensuring security and system integrity</li>
                    </ul>
                    <p>
                      We balance these interests against your rights and will not process data where your rights override our legitimate interests.
                    </p>
                  </div>

                  <div>
                    <h3 className="h5 fw-semibold mb-2">4.4 Legal Obligation</h3>
                    <p>
                      We process data when required to comply with legal obligations (e.g., tax reporting, law enforcement requests, regulatory compliance).
                    </p>
                  </div>
                </section>

                <section className="mb-5">
                  <h2 className="h4 fw-bold mb-3">5. How We Use Your Information</h2>
                  <p className="mb-2">
                    We use the information we collect to:
                  </p>
                  <ul>
                    <li>Provide, operate, and maintain the App</li>
                    <li>Improve, personalize, and expand the App</li>
                    <li>Understand and analyze how you use the App</li>
                    <li>Develop new products, services, features, and functionality</li>
                    <li>Communicate with you for customer service, updates, and promotional purposes</li>
                    <li>Process your transactions</li>
                    <li>Send you marketing communications (with your consent)</li>
                    <li>Find and prevent fraud</li>
                    <li>Comply with legal obligations</li>
                  </ul>
                </section>

                <section className="mb-5">
                  <h2 className="h4 fw-bold mb-3">6. How We Share Your Information</h2>
                  <p className="mb-2">
                    We may share your information in the following situations:
                  </p>
                  <ul className="mb-3">
                    <li><strong>With service providers:</strong> We may share your information with third-party vendors who perform services on our behalf (e.g., hosting, analytics, payment processing). These providers are contractually obligated to protect your information.</li>
                    <li><strong>For business transfers:</strong> If we are involved in a merger, acquisition, or sale of assets, your information may be transferred.</li>
                    <li><strong>With your consent:</strong> We may disclose your information for any other purpose with your consent.</li>
                    <li><strong>For legal purposes:</strong> We may disclose your information if required by law or in response to valid requests by public authorities.</li>
                  </ul>
                  <p>
                    <strong>We do not sell your personal information to third parties.</strong>
                  </p>
                </section>

                <section className="mb-5">
                  <h2 className="h4 fw-bold mb-3">7. Data Security</h2>
                  <p className="mb-3">
                    We implement appropriate technical and organizational security measures to protect your information, including:
                  </p>
                  <ul className="mb-3">
                    <li>Encryption of data in transit and at rest</li>
                    <li>Regular security assessments and audits</li>
                    <li>Access controls and authentication mechanisms</li>
                    <li>Employee training on data protection</li>
                  </ul>
                  <p>
                    However, please note that no method of transmission over the internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your information, we cannot guarantee its absolute security.
                  </p>
                </section>

                <section className="mb-5">
                  <h2 className="h4 fw-bold mb-3">8. Data Retention</h2>
                  <p className="mb-3">
                    We will retain your information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When we no longer need your information, we will securely delete or anonymize it.
                  </p>
                  <p className="mb-2"><strong>Typical retention periods:</strong></p>
                  <ul>
                    <li><strong>Account data:</strong> Retained while your account is active and for 1 year after account closure</li>
                    <li><strong>Transaction records:</strong> Retained for 1 year for legal and tax compliance</li>
                    <li><strong>Support communications:</strong> Retained for 1 year</li>
                  </ul>
                </section>

                <section className="mb-5">
                  <h2 className="h4 fw-bold mb-3">9. Children's Privacy</h2>
                  <p className="mb-3">
                    Our App is not intended for children under the age of 13, or the minimum age required in your jurisdiction (e.g., 16 under GDPR in the EU, unless parental consent is provided).
                  </p>
                  <p>
                    We do not knowingly collect personal information from children below the applicable age threshold. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately, and we will take steps to delete such information.
                  </p>
                </section>

                <section className="mb-5">
                  <h2 className="h4 fw-bold mb-3">10. Your Privacy Rights</h2>
                  <p className="mb-3">
                    Depending on your location, you may have certain rights regarding your personal information:
                  </p>
                  
                  <div className="mb-4">
                    <h3 className="h5 fw-semibold mb-2">10.1 Rights Under GDPR (EU/UK Users)</h3>
                    <ul>
                      <li><strong>Access:</strong> Request access to the personal information we hold about you</li>
                      <li><strong>Rectification:</strong> Request correction of inaccurate or incomplete information</li>
                      <li><strong>Erasure:</strong> Request deletion of your personal information ("right to be forgotten")</li>
                      <li><strong>Restriction:</strong> Request restriction of processing your information</li>
                      <li><strong>Objection:</strong> Object to the processing of your information</li>
                      <li><strong>Data portability:</strong> Request transfer of your information to another service</li>
                      <li><strong>Withdraw consent:</strong> Withdraw consent for processing based on consent</li>
                      <li><strong>Lodge a complaint:</strong> File a complaint with your local data protection authority</li>
                    </ul>
                  </div>

                  <div className="mb-3">
                    <h3 className="h5 fw-semibold mb-2">10.2 Rights Under Other Privacy Laws</h3>
                    <p>
                      Users in California (CCPA), India (Digital Personal Data Protection Act), and other jurisdictions may have additional rights. Please contact us to exercise your rights.
                    </p>
                  </div>

                  <p>
                    To exercise any of these rights, please contact us at <a href="mailto:heliocoach02@gmail.com">heliocoach02@gmail.com</a>. We will respond to your request within the timeframes required by applicable law (typically 30 days).
                  </p>
                </section>

                <section className="mb-5">
                  <h2 className="h4 fw-bold mb-3">11. Third-Party Links and Services</h2>
                  <p>
                    The App may contain links to third-party websites or services that are not operated by us. We are not responsible for the privacy practices of these third parties. We encourage you to review the privacy policies of any third-party sites you visit.
                  </p>
                </section>

                <section className="mb-5">
                  <h2 className="h4 fw-bold mb-3">12. International Data Transfers</h2>
                  <p className="mb-3">
                    Your information may be transferred to and maintained on servers located outside of your country, including India and other jurisdictions where data protection laws may differ from those in your country.
                  </p>
                  <p className="mb-2">
                    <strong>For users in the European Economic Area (EEA), United Kingdom, or Switzerland:</strong>
                  </p>
                  <ul className="mb-3">
                    <li>We ensure appropriate safeguards are in place for cross-border data transfers</li>
                    <li>We use Standard Contractual Clauses (SCCs) approved by the European Commission where applicable</li>
                    <li>We implement equivalent safeguards as required by applicable data protection laws</li>
                  </ul>
                  <p>
                    By using the App, you acknowledge and consent to such cross-border data transfers and processing. We will ensure that any such transfers comply with applicable data protection laws.
                  </p>
                </section>

                <section className="mb-5">
                  <h2 className="h4 fw-bold mb-3">13. Changes to This Privacy Policy</h2>
                  <p className="mb-2">
                    We may update this Privacy Policy from time to time. We will notify you of any material changes by:
                  </p>
                  <ul className="mb-3">
                    <li>Posting the new Privacy Policy on this page</li>
                    <li>Updating the "Last Updated" date</li>
                    <li>Sending you an email notification (for significant changes)</li>
                    <li>Displaying an in-app notification</li>
                  </ul>
                  <p>
                    You are advised to review this Privacy Policy periodically for any changes. Changes are effective when posted, unless otherwise stated.
                  </p>
                </section>

                <section className="mb-5">
                  <h2 className="h4 fw-bold mb-3">14. Contact Us</h2>
                  <p className="mb-3">
                    If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at:
                  </p>
                  <div className="ms-3 mb-3">
                    <p className="mb-1"><strong>Adventure Works Solutions LLP</strong></p>
                    <p className="mb-1">Email: <a href="mailto:heliocoach02@gmail.com">heliocoach02@gmail.com</a></p>
                    <p className="mb-0">Phone: <a href="tel:+919819981337">+91 9819981337</a></p>
                  </div>
                  <p className="text-muted small">
                    For users in the EU/UK: If you are not satisfied with our response, you have the right to lodge a complaint with your local data protection authority.
                  </p>
                </section>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default PrivacyPolicy

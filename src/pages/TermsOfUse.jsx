import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const TermsOfUse = () => {
  return (
    <>
      <Navbar />
      <main className="flex-grow-1 py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-xl-9">
              <h1 className="display-4 fw-bold mb-3" style={{ color: '#4870b8' }}>
                Terms of Service
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
                  <h2 className="h4 fw-bold mb-3">1. Acceptance of Terms</h2>
                  <p className="mb-3">
                    Welcome to HelioCoach (the "App"). These Terms of Service ("Terms") constitute a legally binding agreement between you and Adventure Works Solutions LLP, a company incorporated in India ("we," "us," or "our") regarding your use of the App.
                  </p>
                  <p>
                    By downloading, accessing, or using the App, you agree to be bound by these Terms and our Privacy Policy. If you do not agree to these Terms, please do not use the App.
                  </p>
                </section>

                <section className="mb-5">
                  <h2 className="h4 fw-bold mb-3">2. Relationship with App Stores</h2>
                  <p className="mb-3">
                    These Terms are between you and Adventure Works Solutions LLP, not Apple Inc., Google LLC, or any other app store provider ("App Store Providers"). App Store Providers are not responsible for the App, its content, maintenance, support, or any claims related to the App.
                  </p>
                  <p>
                    Your use of the App must also comply with the applicable App Store's Terms of Service.
                  </p>
                </section>

                <section className="mb-5">
                  <h2 className="h4 fw-bold mb-3">3. Description of Service and Medical Disclaimer</h2>
                  
                  <div className="mb-4">
                    <h3 className="h5 fw-semibold mb-2">3.1 Service Description</h3>
                    <p>
                      HelioCoach provides a digital platform for organizing supplement routines, sending intake reminders, and visualizing adherence patterns. The App supports habit formation and personal wellness tracking and is not a medical device or healthcare service. All information and features are provided for informational and self-management purposes only.
                    </p>
                  </div>

                  <div className="mb-4">
                    <h3 className="h5 fw-semibold mb-2">3.2 Not a Medical Device or Medical Advice</h3>
                    <p className="mb-2 fw-bold text-danger">IMPORTANT - PLEASE READ CAREFULLY:</p>
                    <ul className="mb-3">
                      <li>The App is NOT a medical device and is not intended for medical use</li>
                      <li>The App does NOT provide medical advice, diagnosis, or treatment</li>
                      <li>The App is designed for informational, educational, and self-tracking purposes only</li>
                      <li>The content and features are not a substitute for professional medical advice, diagnosis, or treatment</li>
                      <li>Always seek the advice of your physician or other qualified health provider with any questions regarding a medical condition</li>
                      <li>Never disregard professional medical advice or delay seeking it because of something you have read or tracked in the App</li>
                      <li>If you think you may have a medical emergency, call your doctor or emergency services immediately</li>
                    </ul>
                    <p>
                      We make no representations or warranties regarding the accuracy, completeness, or suitability of any wellness information provided through the App. You use the App at your own risk.
                    </p>
                  </div>

                  <div>
                    <h3 className="h5 fw-semibold mb-2">3.3 Service Modifications</h3>
                    <p>
                      We reserve the right to modify, suspend, or discontinue any aspect of the App at any time, with or without notice. We shall not be liable to you or any third party for any modification, suspension, or discontinuation of the App.
                    </p>
                  </div>
                </section>

                <section className="mb-5">
                  <h2 className="h4 fw-bold mb-3">4. User Accounts and Registration</h2>
                  
                  <div className="mb-4">
                    <h3 className="h5 fw-semibold mb-2">4.1 Account Creation</h3>
                    <p className="mb-2">
                      To access certain features of the App, you may be required to create an account. You agree to:
                    </p>
                    <ul>
                      <li>Provide accurate, current, and complete information during registration</li>
                      <li>Maintain and promptly update your account information</li>
                      <li>Keep your password secure and confidential</li>
                      <li>Accept responsibility for all activities under your account</li>
                      <li>Notify us immediately of any unauthorized use of your account</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="h5 fw-semibold mb-2">4.2 Account Eligibility</h3>
                    <p>
                      You must be at least 13 years old, or the minimum age required in your jurisdiction (e.g., 16 under GDPR), to use the App. By using the App, you represent and warrant that you meet this age requirement.
                    </p>
                  </div>
                </section>

                <section className="mb-5">
                  <h2 className="h4 fw-bold mb-3">5. User Conduct</h2>
                  <p className="mb-2">
                    You agree not to:
                  </p>
                  <ul>
                    <li>Use the App for any illegal purpose or in violation of any applicable laws</li>
                    <li>Impersonate any person or entity or misrepresent your affiliation</li>
                    <li>Interfere with or disrupt the App or servers connected to the App</li>
                    <li>Attempt to gain unauthorized access to any portion of the App</li>
                    <li>Upload or transmit viruses, malware, or other harmful code</li>
                    <li>Harass, abuse, or harm other users</li>
                    <li>Collect or store personal data about other users without permission</li>
                    <li>Use automated systems (bots, scripts) to access the App</li>
                    <li>Reverse engineer, decompile, or disassemble the App</li>
                    <li>Remove or modify any copyright, trademark, or proprietary notices</li>
                  </ul>
                </section>

                <section className="mb-5">
                  <h2 className="h4 fw-bold mb-3">6. User Content</h2>
                  
                  <div className="mb-4">
                    <h3 className="h5 fw-semibold mb-2">6.1 Your Content</h3>
                    <p>
                      You may be able to submit, upload, or post content to the App ("User Content"). You retain ownership of your User Content. You grant us a worldwide, non-exclusive, royalty-free, sublicensable license to use, reproduce, modify, adapt, publish, and distribute your User Content in connection with operating and providing the App. This license exists solely to operate, improve, and provide the App's services to you and other users.
                    </p>
                  </div>

                  <div className="mb-4">
                    <h3 className="h5 fw-semibold mb-2">6.2 Content Standards</h3>
                    <p className="mb-2">
                      You are solely responsible for your User Content. You represent and warrant that your User Content:
                    </p>
                    <ul>
                      <li>Does not violate any applicable laws or regulations</li>
                      <li>Does not infringe on any third-party intellectual property rights</li>
                      <li>Does not contain defamatory, obscene, or offensive material</li>
                      <li>Does not contain viruses or other harmful code</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="h5 fw-semibold mb-2">6.3 Content Moderation</h3>
                    <p>
                      We reserve the right (but are not obligated) to monitor, review, and remove User Content that violates these Terms or is otherwise objectionable. We may terminate accounts of users who repeatedly infringe on others' intellectual property rights.
                    </p>
                  </div>
                </section>

                <section className="mb-5">
                  <h2 className="h4 fw-bold mb-3">7. Intellectual Property Rights</h2>
                  <p className="mb-3">
                    The App and its entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio) are owned by Adventure Works Solutions LLP, its licensors, or other content providers and are protected by Indian and international copyright, trademark, patent, and other intellectual property laws.
                  </p>
                  <p>
                    You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any material from the App without our prior written consent.
                  </p>
                </section>

                <section className="mb-5">
                  <h2 className="h4 fw-bold mb-3">8. Fees and Payment</h2>
                  <p className="mb-4">
                    Certain features of the App may require payment of fees. All fees are stated in the applicable currency and are subject to applicable taxes.
                  </p>

                  <div className="mb-4">
                    <h3 className="h5 fw-semibold mb-2">8.1 Refund Policy</h3>
                    <p className="mb-2">
                      All fees are generally non-refundable except as required by applicable law or as explicitly stated in these Terms.
                    </p>
                    <p className="mb-2">
                      Refunds for purchases made through App Store Providers (Apple App Store, Google Play) are subject to the respective App Store Provider's refund policies and procedures. We defer to and comply with:
                    </p>
                    <ul className="mb-3">
                      <li>Apple App Store refund policies</li>
                      <li>Google Play refund policies</li>
                      <li>Any other applicable app marketplace policies</li>
                    </ul>
                    <p>
                      Please contact the relevant App Store Provider directly for refund requests on app store purchases.
                    </p>
                  </div>

                  <div>
                    <h3 className="h5 fw-semibold mb-2">8.2 Payment Authorization</h3>
                    <p className="mb-2">
                      By providing payment information, you represent and warrant that you are authorized to use the designated payment method and authorize us (or our payment processor) to charge your payment method for any fees.
                    </p>
                    <p>
                      We reserve the right to change our fees at any time. We will provide you with reasonable advance notice of any fee changes.
                    </p>
                  </div>
                </section>

                <section className="mb-5">
                  <h2 className="h4 fw-bold mb-3">9. Subscriptions and Auto-Renewal</h2>
                  <p className="mb-3">
                    If you purchase a subscription, your subscription will automatically renew at the end of each subscription period unless you cancel before the renewal date. You will be charged the then-current subscription fee.
                  </p>
                  <p className="mb-2">
                    You may cancel your subscription at any time through:
                  </p>
                  <ul className="mb-3">
                    <li>Your account settings in the App</li>
                    <li>The subscription management interface of your App Store Provider</li>
                    <li>Contacting our support team</li>
                  </ul>
                  <p>
                    Cancellation will take effect at the end of the current billing period. You will retain access to subscription features until that time.
                  </p>
                </section>

                <section className="mb-5">
                  <h2 className="h4 fw-bold mb-3">10. Disclaimers and Warranties</h2>
                  <p className="mb-3 fw-bold">
                    THE APP IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
                  </p>
                  <p className="mb-2">
                    We do not warrant that:
                  </p>
                  <ul>
                    <li>The App will be uninterrupted or error-free</li>
                    <li>Defects will be corrected</li>
                    <li>The App or servers are free of viruses or harmful components</li>
                    <li>Results obtained from using the App will be accurate or reliable</li>
                    <li>Any information, content, or materials in the App are complete, accurate, or reliable</li>
                  </ul>
                </section>

                <section className="mb-5">
                  <h2 className="h4 fw-bold mb-3">11. Limitation of Liability</h2>
                  <p className="mb-3 fw-bold">
                    TO THE FULLEST EXTENT PERMITTED BY LAW, ADVENTURE WORKS SOLUTIONS LLP AND ITS OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES RESULTING FROM:
                  </p>
                  <ul className="mb-3">
                    <li>Your use or inability to use the App</li>
                    <li>Any unauthorized access to or use of your data</li>
                    <li>Any interruption or cessation of the App</li>
                    <li>Any bugs, viruses, or harmful code transmitted through the App</li>
                    <li>Any errors or omissions in any content</li>
                    <li>Any reliance on health or wellness information provided through the App</li>
                  </ul>
                  <p className="mb-2 fw-bold">
                    IN NO EVENT SHALL OUR TOTAL LIABILITY TO YOU FOR ALL DAMAGES EXCEED THE AMOUNT PAID BY YOU TO US IN THE TWELVE (12) MONTHS PRECEDING THE EVENT GIVING RISE TO LIABILITY, OR ₹5,000 (INDIAN RUPEES FIVE THOUSAND), WHICHEVER IS GREATER.
                  </p>
                  <p>
                    Some jurisdictions do not allow the exclusion or limitation of certain warranties or liabilities. In such jurisdictions, the above limitations may not apply to you to the extent prohibited by law.
                  </p>
                </section>

                <section className="mb-5">
                  <h2 className="h4 fw-bold mb-3">12. Indemnification</h2>
                  <p className="mb-2">
                    You agree to indemnify, defend, and hold harmless Adventure Works Solutions LLP, its officers, directors, employees, contractors, and agents from and against any claims, liabilities, damages, losses, and expenses, including reasonable attorneys' fees, arising out of or in any way connected with:
                  </p>
                  <ul>
                    <li>Your access to or use of the App</li>
                    <li>Your User Content</li>
                    <li>Your violation of these Terms</li>
                    <li>Your violation of any third-party rights</li>
                    <li>Any harm caused to third parties through your use of the App</li>
                  </ul>
                </section>

                <section className="mb-5">
                  <h2 className="h4 fw-bold mb-3">13. Termination</h2>
                  
                  <div className="mb-4">
                    <h3 className="h5 fw-semibold mb-2">13.1 Termination by Us</h3>
                    <p className="mb-2">
                      We may terminate or suspend your account and access to the App immediately, without prior notice or liability, for any reason, including if you breach these Terms.
                    </p>
                    <p className="mb-2">
                      Where practicable, we will provide reasonable notice before termination, except in cases involving:
                    </p>
                    <ul>
                      <li>Violation of law or these Terms</li>
                      <li>Fraud or security concerns</li>
                      <li>Risk of harm to other users or our systems</li>
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h3 className="h5 fw-semibold mb-2">13.2 Termination by You</h3>
                    <p className="mb-2">
                      You may terminate your account at any time by:
                    </p>
                    <ul>
                      <li>Using the account deletion feature in the App settings</li>
                      <li>Contacting our support team at <a href="mailto:heliocoach02@gmail.com">heliocoach02@gmail.com</a></li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="h5 fw-semibold mb-2">13.3 Effect of Termination</h3>
                    <p>
                      Upon termination, your right to use the App will cease immediately. We may delete your account and data in accordance with our data retention policies, subject to legal obligations.
                    </p>
                  </div>
                </section>

                <section className="mb-5">
                  <h2 className="h4 fw-bold mb-3">14. Governing Law and Dispute Resolution</h2>
                  
                  <div className="mb-4">
                    <h3 className="h5 fw-semibold mb-2">14.1 Governing Law</h3>
                    <p>
                      These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions.
                    </p>
                  </div>

                  <div className="mb-4">
                    <h3 className="h5 fw-semibold mb-2">14.2 Arbitration</h3>
                    <p className="mb-2">
                      Any dispute arising from or relating to these Terms or the App shall be resolved through binding arbitration conducted in English in accordance with the Arbitration and Conciliation Act, 1996 (India). The seat of arbitration shall be Mumbai, India.
                    </p>
                    <p>
                      To the extent arbitration is not permitted or enforceable under applicable consumer protection laws in your jurisdiction, disputes shall be resolved in accordance with those laws, and you may bring claims in your local courts as permitted.
                    </p>
                  </div>

                  <div className="mb-4">
                    <h3 className="h5 fw-semibold mb-2">14.3 Class Action Waiver</h3>
                    <p className="mb-2">
                      To the extent permitted by law, you agree that any dispute resolution proceedings will be conducted only on an individual basis and not in a class, consolidated, or representative action.
                    </p>
                    <p>
                      This class action waiver does not apply where prohibited by law.
                    </p>
                  </div>

                  <div>
                    <h3 className="h5 fw-semibold mb-2">14.4 Exceptions to Arbitration</h3>
                    <p>
                      Either party may seek injunctive or other equitable relief in any court of competent jurisdiction to protect intellectual property rights or confidential information.
                    </p>
                  </div>
                </section>

                <section className="mb-5">
                  <h2 className="h4 fw-bold mb-3">15. Force Majeure</h2>
                  <p className="mb-3">
                    We shall not be liable for any failure or delay in performance of our obligations under these Terms due to circumstances beyond our reasonable control, including but not limited to:
                  </p>
                  <ul className="mb-3">
                    <li>Acts of God (natural disasters, pandemics, etc.)</li>
                    <li>War, terrorism, or civil unrest</li>
                    <li>Government actions or regulations</li>
                    <li>Internet or telecommunications failures</li>
                    <li>Infrastructure or hosting provider outages</li>
                    <li>Labor disputes or strikes</li>
                  </ul>
                  <p>
                    During any such period, our obligations shall be suspended, and the time for performance shall be extended for the duration of the force majeure event.
                  </p>
                </section>

                <section className="mb-5">
                  <h2 className="h4 fw-bold mb-3">16. Changes to These Terms</h2>
                  <p className="mb-2">
                    We reserve the right to modify these Terms at any time. We will notify you of any material changes by:
                  </p>
                  <ul className="mb-3">
                    <li>Posting the new Terms in the App</li>
                    <li>Updating the "Last Updated" date</li>
                    <li>Sending you an email notification (for significant changes)</li>
                    <li>Displaying an in-app notification</li>
                  </ul>
                  <p>
                    Your continued use of the App after changes are posted constitutes acceptance of the modified Terms. If you do not agree to the modified Terms, you must stop using the App.
                  </p>
                </section>

                <section className="mb-5">
                  <h2 className="h4 fw-bold mb-3">17. Severability</h2>
                  <p>
                    If any provision of these Terms is found to be unenforceable or invalid by a court of competent jurisdiction, that provision shall be limited or eliminated to the minimum extent necessary so that these Terms shall otherwise remain in full force and effect and enforceable.
                  </p>
                </section>

                <section className="mb-5">
                  <h2 className="h4 fw-bold mb-3">18. Entire Agreement</h2>
                  <p>
                    These Terms, together with our Privacy Policy and any other legal notices or agreements published by us in connection with the App, constitute the entire agreement between you and us regarding the use of the App and supersede all prior agreements and understandings.
                  </p>
                </section>

                <section className="mb-5">
                  <h2 className="h4 fw-bold mb-3">19. Survival</h2>
                  <p className="mb-2">
                    The following sections shall survive any termination or expiration of these Terms:
                  </p>
                  <ul>
                    <li>Section 6 (User Content - license grant)</li>
                    <li>Section 7 (Intellectual Property Rights)</li>
                    <li>Section 10 (Disclaimers and Warranties)</li>
                    <li>Section 11 (Limitation of Liability)</li>
                    <li>Section 12 (Indemnification)</li>
                    <li>Section 14 (Governing Law and Dispute Resolution)</li>
                    <li>Section 19 (Survival)</li>
                  </ul>
                </section>

                <section className="mb-5">
                  <h2 className="h4 fw-bold mb-3">20. Contact Us</h2>
                  <p className="mb-3">
                    If you have any questions about these Terms, please contact us at:
                  </p>
                  <div className="ms-3">
                    <p className="mb-1"><strong>Adventure Works Solutions LLP</strong></p>
                    <p className="mb-1">Email: <a href="mailto:heliocoach02@gmail.com">heliocoach02@gmail.com</a></p>
                    <p className="mb-0">Phone: <a href="tel:+919819981337">+91 9819981337</a></p>
                  </div>
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

export default TermsOfUse

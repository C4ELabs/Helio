import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const RefundsAndSupport = () => {
  return (
    <>
      <Navbar />
      <main className="flex-grow-1 py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-xl-9">
              <h1 className="display-4 fw-bold mb-3" style={{ color: '#4870b8' }}>
                Refund Policy
              </h1>
              <div className="mb-4 pb-3 border-bottom">
                <p className="text-muted mb-1">
                  <strong>Effective Date:</strong> 6/1/2026
                </p>
                <p className="text-muted mb-0">
                  <strong>Last Updated:</strong> 6/1/2026
                </p>
              </div>

              <div className="privacy-content">
                <section className="mb-5">
                  <h2 className="h4 fw-bold mb-3">1. Overview</h2>
                  <p className="mb-3">
                    At HelioCoach, we want you to be completely satisfied with your purchase. This Refund Policy explains our policies regarding refunds and cancellations for purchases made through our mobile application.
                  </p>
                  <p>
                    Please read this policy carefully before making any purchases. By making a purchase, you acknowledge that you have read and understood this Refund Policy.
                  </p>
                </section>

                <section className="mb-5">
                  <h2 className="h4 fw-bold mb-3">2. Where Did You Make Your Purchase?</h2>
                  <p className="mb-4">
                    Your refund rights and process depend on where you purchased your subscription or in-app purchase:
                  </p>
                  
                  <div className="mb-4">
                    <h3 className="h5 fw-semibold mb-2">2.1 Apple App Store Purchases</h3>
                    <p className="mb-2">
                      If you purchased through the Apple App Store:
                    </p>
                    <ul className="mb-3">
                      <li>All purchases are subject to Apple's refund policies</li>
                      <li>We (the app developer) do not have access to process refunds for App Store purchases</li>
                      <li>You must request refunds directly from Apple</li>
                    </ul>
                    <p className="mb-2"><strong>How to request a refund from Apple:</strong></p>
                    <ul className="mb-3">
                      <li>Visit: <a href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer">https://reportaproblem.apple.com</a></li>
                      <li>Sign in with your Apple ID</li>
                      <li>Find the purchase and select 'Report a Problem'</li>
                      <li>Choose the reason and submit your request</li>
                    </ul>
                    <p className="mb-2"><strong>Alternatively:</strong></p>
                    <ul className="mb-3">
                      <li>Open the App Store app on your device</li>
                      <li>Tap your profile icon</li>
                      <li>Tap 'Purchased'</li>
                      <li>Find the app and tap 'Report a Problem'</li>
                    </ul>
                    <p>
                      For more help, contact Apple Support: <a href="https://support.apple.com/billing" target="_blank" rel="noopener noreferrer">https://support.apple.com/billing</a>
                    </p>
                  </div>

                  <div className="mb-4">
                    <h3 className="h5 fw-semibold mb-2">2.2 Google Play Store Purchases</h3>
                    <p className="mb-2">
                      If you purchased through the Google Play Store:
                    </p>
                    <ul className="mb-3">
                      <li>All purchases are subject to Google Play's refund policies</li>
                      <li>Google handles all refund requests for Play Store purchases</li>
                      <li>You may be eligible for an automatic refund within 48 hours of purchase</li>
                    </ul>
                    <p className="mb-2"><strong>How to request a refund from Google:</strong></p>
                    <ul className="mb-3">
                      <li>Visit: <a href="https://play.google.com/store/account/subscriptions" target="_blank" rel="noopener noreferrer">https://play.google.com/store/account/subscriptions</a></li>
                      <li>Sign in to your Google Account</li>
                      <li>Find the subscription or purchase</li>
                      <li>Select 'Request a refund' or 'Report a problem'</li>
                    </ul>
                    <p>
                      For more help, contact Google Play Support: <a href="https://support.google.com/googleplay" target="_blank" rel="noopener noreferrer">https://support.google.com/googleplay</a>
                    </p>
                  </div>

                  <div>
                    <h3 className="h5 fw-semibold mb-2">2.3 Direct Purchases (Website/In-App)</h3>
                    <p className="mb-2">
                      If you purchased directly from us (not through an app store):
                    </p>
                    <ul>
                      <li>Refund requests are handled directly by our support team</li>
                      <li>Please contact us at <a href="mailto:heliocoach02@gmail.com">heliocoach02@gmail.com</a> with your order details</li>
                      <li>We will review your request within 2-3 business days</li>
                    </ul>
                  </div>
                </section>

                <section className="mb-5">
                  <h2 className="h4 fw-bold mb-3">3. Refund Eligibility</h2>
                  
                  <div className="mb-4">
                    <h3 className="h5 fw-semibold mb-2">3.1 When Refunds Are Available</h3>
                    <p className="mb-2">
                      We may approve refunds in the following situations:
                    </p>
                    <ul>
                      <li>Technical issues preventing you from using the app</li>
                      <li>You were charged incorrectly or multiple times</li>
                      <li>The app does not perform as described in our App Store listing</li>
                      <li>You did not authorize the purchase</li>
                      <li>Within 7/14/30 days of purchase for new subscriptions (specify your policy)</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="h5 fw-semibold mb-2">3.2 When Refunds Are Not Available</h3>
                    <p className="mb-2">
                      Refunds are generally not provided in these cases:
                    </p>
                    <ul className="mb-3">
                      <li>You changed your mind after using the app for an extended period</li>
                      <li>You forgot to cancel before the renewal date</li>
                      <li>You simply didn't use the features you paid for</li>
                      <li>Your account was terminated for violating our Terms of Service</li>
                      <li>After the refund eligibility period has expired</li>
                    </ul>
                    <p className="text-muted small">
                      Note: These restrictions are subject to applicable consumer protection laws in your jurisdiction. Where local laws provide greater refund rights, those laws will apply.
                    </p>
                  </div>
                </section>

                <section className="mb-5">
                  <h2 className="h4 fw-bold mb-3">4. Subscription Cancellations</h2>
                  
                  <div className="mb-4">
                    <h3 className="h5 fw-semibold mb-2">4.1 How to Cancel Your Subscription</h3>
                    <p className="mb-2">
                      You can cancel your subscription at any time. Here's how:
                    </p>
                    <p className="mb-2"><strong>Cancel through the App:</strong></p>
                    <ul className="mb-3">
                      <li>Open HelioCoach</li>
                      <li>Go to Settings &gt; Account &gt; Subscription</li>
                      <li>Tap 'Cancel Subscription'</li>
                      <li>Confirm cancellation</li>
                    </ul>
                    <p className="mb-2"><strong>Cancel through Apple App Store:</strong></p>
                    <ul className="mb-3">
                      <li>Open Settings on your iPhone/iPad</li>
                      <li>Tap your name at the top</li>
                      <li>Tap 'Subscriptions'</li>
                      <li>Select HelioCoach</li>
                      <li>Tap 'Cancel Subscription'</li>
                    </ul>
                    <p className="mb-2"><strong>Cancel through Google Play:</strong></p>
                    <ul>
                      <li>Open the Google Play Store app</li>
                      <li>Tap Menu &gt; Subscriptions</li>
                      <li>Select HelioCoach</li>
                      <li>Tap 'Cancel Subscription'</li>
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h3 className="h5 fw-semibold mb-2">4.2 What Happens After Cancellation</h3>
                    <ul>
                      <li>Your subscription will remain active until the end of the current billing period</li>
                      <li>You will continue to have access to premium features until that date</li>
                      <li>You will not be charged for the next billing period</li>
                      <li>After the billing period ends, your account will revert to the free tier</li>
                      <li>Your data will be retained according to our Privacy Policy</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="h5 fw-semibold mb-2">4.3 Cancellation Does Not Equal Refund</h3>
                    <p className="fw-semibold">
                      Important: Canceling your subscription stops future charges but does not automatically refund your current billing period. If you want a refund for the current period, you must follow the refund request process outlined in Section 2.
                    </p>
                  </div>
                </section>

                <section className="mb-5">
                  <h2 className="h4 fw-bold mb-3">5. Free Trials</h2>
                  
                  <div className="mb-4">
                    <h3 className="h5 fw-semibold mb-2">5.1 Trial Period</h3>
                    <p className="mb-2">
                      We may offer free trial periods for new subscribers. During the trial:
                    </p>
                    <ul>
                      <li>You have full access to premium features at no charge</li>
                      <li>You can cancel anytime during the trial without being charged</li>
                      <li>If you don't cancel before the trial ends, you will automatically be charged for a subscription</li>
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h3 className="h5 fw-semibold mb-2">5.2 Canceling During Free Trial</h3>
                    <p className="mb-2">
                      To avoid being charged:
                    </p>
                    <ul>
                      <li>Cancel at least 24 hours before the trial period ends</li>
                      <li>Follow the cancellation process in Section 4.1</li>
                      <li>You will receive a confirmation of your cancellation</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="h5 fw-semibold mb-2">5.3 Trial Eligibility</h3>
                    <p className="mb-2">
                      Free trials are typically limited to:
                    </p>
                    <ul>
                      <li>One trial per user/account</li>
                      <li>One trial per payment method</li>
                      <li>New subscribers only (not available if you've subscribed before)</li>
                    </ul>
                  </div>
                </section>

                <section className="mb-5">
                  <h2 className="h4 fw-bold mb-3">6. Refund Request Process</h2>
                  
                  <div className="mb-4">
                    <h3 className="h5 fw-semibold mb-2">6.1 How to Request a Refund</h3>
                    <p className="mb-2">
                      If your purchase qualifies for a refund under this policy and was made directly through us:
                    </p>
                    <p className="mb-2"><strong>Step 1: Contact our support team</strong></p>
                    <ul className="mb-3">
                      <li>Email: <a href="mailto:heliocoach02@gmail.com">heliocoach02@gmail.com</a></li>
                      <li>Subject: Refund Request - [Your Order Number]</li>
                    </ul>
                    <p className="mb-2"><strong>Step 2: Include the following information:</strong></p>
                    <ul className="mb-3">
                      <li>Your full name</li>
                      <li>Email address associated with your account</li>
                      <li>Date of purchase</li>
                      <li>Order/Transaction ID</li>
                      <li>Reason for refund request</li>
                      <li>Details of any technical issues (if applicable)</li>
                    </ul>
                    <p className="mb-2"><strong>Step 3: Wait for our response</strong></p>
                    <ul>
                      <li>We will review your request within 2-3 business days</li>
                      <li>We may contact you for additional information</li>
                      <li>You will receive an email with our decision</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="h5 fw-semibold mb-2">6.2 Refund Processing Time</h3>
                    <p className="mb-2">
                      If your refund is approved:
                    </p>
                    <ul>
                      <li>We will process the refund within 5-7 business days</li>
                      <li>The refund will be issued to your original payment method</li>
                      <li>It may take an additional 5-10 business days for the refund to appear in your account, depending on your bank/card issuer</li>
                    </ul>
                  </div>
                </section>

                <section className="mb-5">
                  <h2 className="h4 fw-bold mb-3">7. Chargebacks and Disputes</h2>
                  <p className="mb-2">
                    If you dispute a charge with your bank or credit card company (a "chargeback") without first contacting us:
                  </p>
                  <ul className="mb-3">
                    <li>Your account may be immediately suspended</li>
                    <li>We may terminate your account</li>
                    <li>You may be liable for chargeback fees</li>
                  </ul>
                  <p>
                    Please contact us first to resolve any billing issues. We're here to help and can often resolve issues faster than the chargeback process.
                  </p>
                </section>

                <section className="mb-5">
                  <h2 className="h4 fw-bold mb-3">8. Exceptions and Special Circumstances</h2>
                  <p className="mb-2">
                    We may make exceptions to this policy in cases of:
                  </p>
                  <ul className="mb-3">
                    <li>Extended technical outages affecting all users</li>
                    <li>Significant changes to the app that materially reduce functionality</li>
                    <li>Billing errors on our part</li>
                    <li>Exceptional circumstances reviewed on a case-by-case basis</li>
                  </ul>
                  <p>
                    These exceptions are at our sole discretion.
                  </p>
                </section>

                <section className="mb-5">
                  <h2 className="h4 fw-bold mb-3">9. Regional Variations</h2>
                  <p className="mb-4">
                    This Refund Policy is subject to applicable consumer protection laws in your jurisdiction. If you are located in:
                  </p>
                  
                  <div className="mb-4">
                    <h3 className="h5 fw-semibold mb-2">9.1 European Union</h3>
                    <ul>
                      <li>You have a 14-day right of withdrawal for distance purchases under EU law</li>
                      <li>This right may not apply if you've fully accessed digital content with your consent</li>
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h3 className="h5 fw-semibold mb-2">9.2 Australia</h3>
                    <ul>
                      <li>Our goods and services come with guarantees under Australian Consumer Law</li>
                      <li>You may be entitled to a refund for a major failure</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="h5 fw-semibold mb-2">9.3 India</h3>
                    <ul>
                      <li>Consumer protection rights under the Consumer Protection Act, 2019 may apply</li>
                      <li>You may have additional rights under Indian law</li>
                    </ul>
                  </div>

                  <p className="mt-3">
                    Where local laws provide you with greater rights than this policy, those laws will prevail.
                  </p>
                </section>

                <section className="mb-5">
                  <h2 className="h4 fw-bold mb-3">10. Changes to This Policy</h2>
                  <p>
                    We may update this Refund Policy from time to time. Changes will be posted on this page with an updated "Last Updated" date. Continued use of the app after changes constitutes acceptance of the updated policy.
                  </p>
                </section>

                <section className="mb-5">
                  <h2 className="h4 fw-bold mb-3">11. Questions?</h2>
                  <p className="mb-3">
                    If you have any questions about refunds or this policy, please contact us:
                  </p>
                  <div className="ms-3">
                    <p className="mb-1"><strong>Adventure Works Solutions LLP</strong></p>
                    <p className="mb-1">Email: <a href="mailto:heliocoach02@gmail.com">heliocoach02@gmail.com</a></p>
                    <p className="mb-0">Phone: <a href="tel:+919819981337">+91 9819981337</a></p>
                  </div>
                  <p className="mt-3">
                    We're here to help and want to ensure you have a positive experience with HelioCoach.
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

export default RefundsAndSupport

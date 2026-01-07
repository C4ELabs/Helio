import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Contact = () => {
  return (
    <>
      <Navbar />
      <main className="flex-grow-1 py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-xl-9">
              <h1 className="display-4 fw-bold mb-3" style={{ color: '#4870b8' }}>
                Support & Help Center
              </h1>
              <p className="lead mb-4">
                Welcome to HelioCoach Support! We're here to help you get the most out of your experience.
              </p>

              <div className="mb-4 pb-3 border-bottom">
                <h3 className="h5 fw-semibold mb-3">Quick Links</h3>
                <ul>
                  <li><a href="#getting-started" className="text-decoration-none" style={{ color: '#4870b8' }}><strong>Getting Started</strong></a></li>
                  <li><a href="#common-issues" className="text-decoration-none" style={{ color: '#4870b8' }}><strong>Common Issues</strong></a></li>
                  <li><a href="#account-billing" className="text-decoration-none" style={{ color: '#4870b8' }}><strong>Account & Billing</strong></a></li>
                  <li><a href="#contact-support" className="text-decoration-none" style={{ color: '#4870b8' }}><strong>Contact Support</strong></a></li>
                </ul>
              </div>

              <div className="privacy-content">
                <section id="getting-started" className="mb-5">
                  <h2 className="h4 fw-bold mb-3">1. Getting Started</h2>
                  
                  <div className="mb-4">
                    <h3 className="h5 fw-semibold mb-2">1.1 Download & Installation</h3>
                    <p className="mb-2"><strong>iOS (iPhone/iPad):</strong></p>
                    <ul className="mb-3">
                      <li>Visit the App Store and search for HelioCoach</li>
                      <li>Tap "Get" or the download icon</li>
                      <li>Open the app once installed</li>
                    </ul>
                    <p className="mb-2"><strong>Android:</strong></p>
                    <ul>
                      <li>Visit the Google Play Store and search for HelioCoach</li>
                      <li>Tap "Install"</li>
                      <li>Open the app once installed</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="h5 fw-semibold mb-2">1.2 Creating Your Account</h3>
                    <ul>
                      <li><strong>Step 1:</strong> Open HelioCoach</li>
                      <li><strong>Step 2:</strong> Tap "Sign Up" or "Get Started"</li>
                      <li><strong>Step 3:</strong> Choose your sign-up method:
                        <ul>
                          <li>Email and password</li>
                          <li>Sign in with Apple</li>
                          <li>Sign in with Google</li>
                        </ul>
                      </li>
                      <li><strong>Step 4:</strong> Complete your profile</li>
                      <li><strong>Step 5:</strong> Start using the app!</li>
                    </ul>
                  </div>
                </section>

                <section id="common-issues" className="mb-5">
                  <h2 className="h4 fw-bold mb-3">2. Troubleshooting Common Issues</h2>
                  
                  <div className="mb-4">
                    <h3 className="h5 fw-semibold mb-2">2.1 App Won't Open / Crashes</h3>
                    <p className="mb-2">Try these steps:</p>
                    <ul>
                      <li>Close the app completely and reopen it</li>
                      <li>Restart your device</li>
                      <li>Check for app updates in the App Store/Play Store</li>
                      <li>Ensure you have a stable internet connection</li>
                      <li>Uninstall and reinstall the app (your data should be backed up if you're signed in)</li>
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h3 className="h5 fw-semibold mb-2">2.2 Login Issues</h3>
                    <p className="mb-2">Can't log in? Try these solutions:</p>
                    <p className="mb-2"><strong>Forgot Password:</strong></p>
                    <ul className="mb-3">
                      <li>Tap "Forgot Password" on the login screen</li>
                      <li>Enter your email address</li>
                      <li>Check your email for a password reset link</li>
                      <li>Click the link and create a new password</li>
                    </ul>
                    <p className="mb-2"><strong>Account Not Found:</strong></p>
                    <ul>
                      <li>Verify you're using the correct email address</li>
                      <li>Check if you signed up with Apple/Google instead</li>
                      <li>Try the "Sign in with Apple/Google" button</li>
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h3 className="h5 fw-semibold mb-2">2.3 Syncing Issues</h3>
                    <p className="mb-2">If your data isn't syncing across devices:</p>
                    <ul>
                      <li>Ensure you're logged into the same account on all devices</li>
                      <li>Check your internet connection</li>
                      <li>Force close and reopen the app</li>
                      <li>Tap "Sync Now" in Settings (if available)</li>
                      <li>Wait a few minutes - syncing can take time with large datasets</li>
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h3 className="h5 fw-semibold mb-2">2.4 Notification Problems</h3>
                    <p className="mb-2">Not receiving notifications?</p>
                    <p className="mb-2"><strong>Check in-app settings:</strong></p>
                    <ul className="mb-3">
                      <li>Go to Settings &gt; Notifications in the app</li>
                      <li>Enable the notifications you want to receive</li>
                    </ul>
                    <p className="mb-2"><strong>Check device settings:</strong></p>
                    <p className="mb-2"><strong>iOS:</strong></p>
                    <ul className="mb-3">
                      <li>Go to Settings &gt; Notifications &gt; HelioCoach</li>
                      <li>Enable "Allow Notifications"</li>
                    </ul>
                    <p className="mb-2"><strong>Android:</strong></p>
                    <ul>
                      <li>Go to Settings &gt; Apps &gt; HelioCoach &gt; Notifications</li>
                      <li>Enable notifications</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="h5 fw-semibold mb-2">2.5 Payment/Subscription Issues</h3>
                    <p>See Section 3 (Account & Billing) below</p>
                  </div>
                </section>

                <section id="account-billing" className="mb-5">
                  <h2 className="h4 fw-bold mb-3">3. Account & Billing</h2>
                  
                  <div className="mb-4">
                    <h3 className="h5 fw-semibold mb-2">3.1 Subscription Plans</h3>
                    <p className="mb-2">We offer the following subscription options:</p>
                    <ul className="mb-3">
                      <li><strong>Pro:</strong> $1 per month</li>
                      <li><strong>Free tier:</strong> Available features</li>
                    </ul>
                    <p className="mb-2">To upgrade or change your plan:</p>
                    <ul>
                      <li>Go to Settings &gt; Subscription in the app</li>
                      <li>Choose your desired plan</li>
                      <li>Follow the payment prompts</li>
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h3 className="h5 fw-semibold mb-2">3.2 Managing Your Subscription</h3>
                    <p className="mb-2"><strong>View subscription details:</strong></p>
                    <ul className="mb-3">
                      <li>Open the app and go to Settings &gt; Account &gt; Subscription</li>
                    </ul>
                    <p className="mb-2"><strong>Cancel subscription:</strong></p>
                    <ul>
                      <li>See our <a href="/refunds-and-support">Refund Policy</a> document for detailed cancellation instructions</li>
                      <li>For App Store/Play Store purchases, you must cancel through their platforms</li>
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h3 className="h5 fw-semibold mb-2">3.3 Billing Questions</h3>
                    <p className="mb-2"><strong>"Why was I charged?"</strong></p>
                    <ul className="mb-3">
                      <li>Check if you signed up for a free trial that recently ended</li>
                      <li>Subscriptions auto-renew unless canceled</li>
                      <li>Verify the charge is from Adventure Works Solutions LLP or helioCoach</li>
                    </ul>
                    <p className="mb-2"><strong>"I was charged twice"</strong></p>
                    <ul className="mb-3">
                      <li>Contact us immediately at <a href="mailto:heliocoach02@gmail.com">heliocoach02@gmail.com</a></li>
                      <li>Include your transaction IDs</li>
                      <li>We'll investigate and issue a refund if necessary</li>
                    </ul>
                    <p className="mb-2"><strong>"How do I get a refund?"</strong></p>
                    <ul>
                      <li>See our <a href="/refunds-and-support">Refund Policy</a> document for complete details</li>
                      <li>App Store/Play Store purchases: request through Apple/Google</li>
                      <li>Direct purchases: email <a href="mailto:heliocoach02@gmail.com">heliocoach02@gmail.com</a></li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="h5 fw-semibold mb-2">3.4 Changing Account Information</h3>
                    <p className="mb-2"><strong>Update email address:</strong></p>
                    <ul className="mb-3">
                      <li>Go to Settings &gt; Account &gt; Email</li>
                      <li>Enter your new email</li>
                      <li>Verify through the confirmation email</li>
                    </ul>
                    <p className="mb-2"><strong>Change password:</strong></p>
                    <ul className="mb-3">
                      <li>Go to Settings &gt; Account &gt; Security</li>
                      <li>Tap "Change Password"</li>
                      <li>Enter your current and new password</li>
                    </ul>
                    <p className="mb-2"><strong>Delete account:</strong></p>
                    <ul>
                      <li>Go to Settings &gt; Account &gt; Delete Account</li>
                      <li>Follow the prompts (this action is permanent)</li>
                      <li>Or email us at <a href="mailto:heliocoach02@gmail.com">heliocoach02@gmail.com</a> to request deletion</li>
                    </ul>
                  </div>
                </section>

                <section className="mb-5">
                  <h2 className="h4 fw-bold mb-3">4. Privacy & Security</h2>
                  
                  <div className="mb-4">
                    <h3 className="h5 fw-semibold mb-2">4.1 Your Data</h3>
                    <p className="mb-2">We take your privacy seriously:</p>
                    <ul>
                      <li>Your data is encrypted in transit and at rest</li>
                      <li>We never sell your personal information</li>
                      <li>You can export your data at any time</li>
                      <li>Read our <a href="/privacy-policy">Privacy Policy</a> for complete details</li>
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h3 className="h5 fw-semibold mb-2">4.2 Export Your Data</h3>
                    <p className="mb-2">To download a copy of your data:</p>
                    <ul>
                      <li>Go to Settings &gt; Account &gt; Data & Privacy</li>
                      <li>Tap "Export My Data"</li>
                      <li>We'll email you a download link within 24-48 hours</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="h5 fw-semibold mb-2">4.3 Two-Factor Authentication (if available)</h3>
                    <p className="mb-2">Add extra security to your account:</p>
                    <ul>
                      <li>Go to Settings &gt; Account &gt; Security</li>
                      <li>Enable "Two-Factor Authentication"</li>
                      <li>Follow the setup instructions</li>
                    </ul>
                  </div>
                </section>

                <section id="contact-support" className="mb-5">
                  <h2 className="h4 fw-bold mb-3">5. Contact Support</h2>
                  
                  <div className="mb-4">
                    <h3 className="h5 fw-semibold mb-2">5.1 Before You Contact Us</h3>
                    <p className="mb-2">Please check:</p>
                    <ul>
                      <li>Have you reviewed the troubleshooting section above?</li>
                      <li>Is your app updated to the latest version?</li>
                      <li>Have you restarted the app and your device?</li>
                    </ul>
                    <p>This helps us resolve your issue faster!</p>
                  </div>

                  <div className="mb-4">
                    <h3 className="h5 fw-semibold mb-2">5.2 How to Reach Us</h3>
                    <p className="mb-2"><strong>Email Support (Recommended):</strong></p>
                    <ul className="mb-3">
                      <li>Send to: <a href="mailto:heliocoach02@gmail.com">heliocoach02@gmail.com</a></li>
                      <li>Response time: Within 24-48 hours</li>
                      <li>Include: Your account email, device info, and detailed description</li>
                    </ul>
                    <p className="mb-2"><strong>In-App Support:</strong></p>
                    <ul className="mb-3">
                      <li>Go to Settings &gt; Help & Support</li>
                      <li>Tap "Contact Support"</li>
                      <li>Fill out the support form</li>
                    </ul>
                    <p className="mb-2"><strong>Phone Support:</strong></p>
                    <ul className="mb-3">
                      <li>Call: <a href="tel:+919819981337">+91 9819981337</a></li>
                    </ul>
                    <p className="mb-2"><strong>Social Media:</strong></p>
                    <ul>
                      <li>Instagram: @heliocoach</li>
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h3 className="h5 fw-semibold mb-2">5.3 What to Include in Your Support Request</h3>
                    <p className="mb-2">To help us assist you faster, please include:</p>
                    <ul>
                      <li>Your account email address</li>
                      <li>Device type (iPhone 14, Samsung Galaxy S23, etc.)</li>
                      <li>Operating system version (iOS 17, Android 13, etc.)</li>
                      <li>App version (found in Settings &gt; About)</li>
                      <li>Detailed description of the issue</li>
                      <li>Screenshots or screen recordings (if applicable)</li>
                      <li>Steps to reproduce the problem</li>
                      <li>When the issue started</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="h5 fw-semibold mb-2">5.4 Response Times</h3>
                    <p className="mb-2">We strive to respond to all inquiries promptly:</p>
                    <ul>
                      <li><strong>Email:</strong> Within 24-48 hours on business days</li>
                      <li><strong>Critical issues:</strong> Within 4-8 hours</li>
                      <li><strong>Weekends/Holidays:</strong> May experience slight delays</li>
                    </ul>
                    <p className="mt-3">We're committed to resolving your issue as quickly as possible!</p>
                  </div>
                </section>

                <section className="mb-5">
                  <h2 className="h4 fw-bold mb-3">6. Additional Resources</h2>
                  
                  <div className="mb-4">
                    <h3 className="h5 fw-semibold mb-2">6.1 Documentation</h3>
                    <ul>
                      <li>Full User Guide: [heliocoach.com/guide]</li>
                      <li>Video Tutorials: [heliocoach.com/videos or YouTube channel]</li>
                      <li>Blog with Tips & Tricks: [heliocoach.com/blog]</li>
                      <li>FAQ: [heliocoach.com/faq]</li>
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h3 className="h5 fw-semibold mb-2">6.2 Community</h3>
                    <ul>
                      <li>User Forum: [heliocoach.com/community]</li>
                      <li>Discord/Slack Community: [Link]</li>
                      <li>Reddit: [r/HelioCoach]</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="h5 fw-semibold mb-2">6.3 Legal Documents</h3>
                    <ul>
                      <li><a href="/privacy-policy">Privacy Policy</a></li>
                      <li><a href="/terms-of-use">Terms of Service</a></li>
                      <li><a href="/refunds-and-support">Refund Policy</a></li>
                    </ul>
                  </div>
                </section>

                <section className="mb-5">
                  <h2 className="h4 fw-bold mb-3">7. Feedback & Feature Requests</h2>
                  <p className="mb-4">We love hearing from our users!</p>
                  
                  <div className="mb-4">
                    <h3 className="h5 fw-semibold mb-2">7.1 Share Your Feedback</h3>
                    <ul>
                      <li><strong>In-app:</strong> Settings &gt; Help & Support &gt; Send Feedback</li>
                      <li><strong>Email:</strong> <a href="mailto:heliocoach02@gmail.com">heliocoach02@gmail.com</a></li>
                      <li><strong>Feature requests:</strong> <a href="mailto:heliocoach02@gmail.com">heliocoach02@gmail.com</a></li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="h5 fw-semibold mb-2">7.2 Rate Us</h3>
                    <p className="mb-2">Enjoying HelioCoach? Please leave us a review:</p>
                    <ul>
                      <li><strong>iOS:</strong> Open App Store &gt; Search for HelioCoach &gt; Rate & Review</li>
                      <li><strong>Android:</strong> Open Play Store &gt; Search for HelioCoach &gt; Write a Review</li>
                    </ul>
                    <p className="mt-3">Your feedback helps us improve and helps others discover the app!</p>
                  </div>
                </section>

                <section className="mb-5">
                  <p className="lead fw-semibold" style={{ color: '#4870b8' }}>
                    Thank you for choosing HelioCoach! We're here to support you on your journey.
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

export default Contact

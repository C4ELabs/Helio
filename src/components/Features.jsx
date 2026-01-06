const Features = () => {
  return (
    <section id="features" className="py-5 py-lg-6 section-spacing bg-white">
      <div className="container">
        <div className="row mb-5">
          <div className="col-12 text-center">
            <h2 className="section-main-heading mb-0">Our Features</h2>
          </div>
        </div>
        <div className="row g-5 g-lg-6">
          <div className="col-12">
            <div className="feature-card">
              <h2 className="feature-heading mb-5">Built for real routines, not ideal ones.</h2>
              <p className="feature-body mb-5">
                Helio doesn't remind you at a fixed time every day. It learns when
                you typically take supplements-and adapts when your routine shifts.
              </p>
              <div className="row g-4 mb-5">
                <div className="col-md-4">
                  <div className="feature-icon-card">
                    <div className="feature-icon-circle feature-icon-pink">
                      <span className="feature-icon">☀</span>
                    </div>
                    <h3 className="feature-icon-heading">Late wake-up on Saturday?</h3>
                    <p className="feature-icon-text">Your reminder adjusts.</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="feature-icon-card">
                    <div className="feature-icon-circle feature-icon-pink">
                      <span className="feature-icon">🌍</span>
                    </div>
                    <h3 className="feature-icon-heading">Traveling across timezones?</h3>
                    <p className="feature-icon-text">Helio recalculates automatically.</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="feature-icon-card">
                    <div className="feature-icon-circle feature-icon-purple">
                      <span className="feature-icon">✓</span>
                    </div>
                    <h3 className="feature-icon-heading">Chaotic week with missed days?</h3>
                    <p className="feature-icon-text">Your progress doesn't reset to zero.</p>
                  </div>
                </div>
              </div>
              <p className="feature-body">
                Instead of forcing you into a rigid schedule, Helio works around how
                your life actually happens.
              </p>
            </div>
          </div>
          <div className="col-12">
            <div className="feature-card">
              <h2 className="feature-heading mb-5">Track progress, not perfection.</h2>
              <p className="feature-body mb-5">
                Whether you take one supplement or a dozen, Helio keeps things
                simple. You see your progress over time-not just today's checkboxes.
              </p>
              <p className="feature-body mb-5">
                Missed days are visible, but they don't erase your streak. No guilt.
                No shame. Just clarity on what's working.
              </p>
              <p className="feature-body mb-0">
                Most tracking apps are built for rigid compliance. Helio is built for
                human beings.
              </p>
            </div>
          </div>
          <div className="col-12">
            <div className="feature-card">
              <h2 className="feature-heading mb-5">
                Built by people who've tried every other app.
              </h2>
              <p className="feature-body mb-5">
                We spent months analyzing what works (and what frustrates people) in
                20+ supplement and habit apps.
              </p>
              <p className="feature-body mb-5">
                Helio is designed for long-term consistency-not short-term engagement
                tricks.
              </p>
              <div className="d-flex flex-wrap gap-3 mb-5">
                <div className="feature-badge feature-badge-pink">
                  <span className="feature-badge-check">✓</span>
                  <span>No ads</span>
                </div>
                <div className="feature-badge feature-badge-dark-pink">
                  <span className="feature-badge-check">✓</span>
                  <span>No selling your data</span>
                </div>
                <div className="feature-badge feature-badge-purple">
                  <span className="feature-badge-check">✓</span>
                  <span>No upselling supplements</span>
                </div>
              </div>
              <p className="feature-body">
                Just a tool that helps you stay consistent without adding noise to your day.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features


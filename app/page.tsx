export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          For Product Managers &amp; Founders
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Know the moment your competitors ship new features
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          CompetitorWatch monitors rival websites around the clock, uses AI vision to detect changes, and sends you instant alerts with screenshots — so you never get blindsided again.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Monitoring — $59/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Cancel anytime. No setup fees.</p>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">📸</div>
            <h3 className="font-semibold text-white mb-1">Screenshot Diffs</h3>
            <p className="text-sm text-[#8b949e]">Visual before/after screenshots every time a competitor page changes.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">🤖</div>
            <h3 className="font-semibold text-white mb-1">AI Feature Detection</h3>
            <p className="text-sm text-[#8b949e]">GPT-4 Vision describes exactly what changed — not just that something did.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">🔔</div>
            <h3 className="font-semibold text-white mb-1">Slack &amp; Email Alerts</h3>
            <p className="text-sm text-[#8b949e]">Instant notifications delivered where your team already works.</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 text-center">
          <p className="text-[#58a6ff] font-semibold uppercase tracking-widest text-xs mb-3">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$59</p>
          <p className="text-[#8b949e] mb-6">per month</p>
          <ul className="text-sm text-[#c9d1d9] space-y-3 mb-8 text-left">
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Monitor up to 20 competitor URLs</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Checks every 6 hours</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> AI-powered change summaries</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Screenshot history (90 days)</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Slack + email notifications</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Cancel anytime</li>
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">How does the monitoring work?</h3>
            <p className="text-sm text-[#8b949e]">We use headless browsers (Puppeteer) to visit your tracked URLs on a schedule, capture full-page screenshots, and run them through GPT-4 Vision to detect and describe any meaningful changes — new buttons, pricing updates, feature announcements, and more.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Which URLs can I track?</h3>
            <p className="text-sm text-[#8b949e]">Any publicly accessible web page — competitor homepages, pricing pages, feature pages, changelog pages, or landing pages. If a browser can load it, we can monitor it.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Can I cancel my subscription?</h3>
            <p className="text-sm text-[#8b949e]">Yes, cancel anytime from your billing portal with one click. You keep access until the end of your billing period with no questions asked.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-8 text-xs text-[#8b949e]">
        &copy; {new Date().getFullYear()} CompetitorWatch. All rights reserved.
      </footer>
    </main>
  );
}

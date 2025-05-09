const WelcomeBanner = () => (
  <div className="welcome-banner bg-yellow-100 border-l-4 border-yellow-500 text-yellow-800 p-4 rounded shadow mb-6">
    <h2 className="text-xl font-semibold mb-1"> Welcome, Admin!</h2>
    <p>
      Hello and welcome! You're in control of the event ecosystem — from creating and managing
      events, tracking RSVPs, sending updates, to gathering feedback and analyzing participation.
    </p>
    <p className="mt-2">
      Your leadership helps drive engaging experiences for all users. Head over to the{" "}
      <strong>Events</strong> tab to get started or explore the <strong>Analytics</strong> to gain insights!
    </p>
  </div>
);
export default WelcomeBanner;

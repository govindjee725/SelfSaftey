import React, { useState } from "react";

const SOS = () => {
  const [responseText, setResponseText] = useState("Waiting for action...");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSOSClick = () => {
    if (!phoneNumber) {
      setResponseText("Please enter a valid phone number.");
      return;
    }

    setResponseText("Sending SOS Alert...");

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;

          try {
            const response = await fetch("http://localhost:5000/api/send-sos", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ latitude, longitude, phone: "+91"+phoneNumber }),
            });

            if (!response.ok) {
              const errorData = await response.json();
              throw new Error(errorData.message || "Failed to send SOS alert.");
            }

            const data = await response.json();
            setResponseText(
              `🚨 SOS Alert Sent!<br><a href="https://www.google.com/maps?q=${latitude},${longitude}" target="_blank" class="text-black underline">View Location on Google Maps</a>`
            );
          } catch (error) {
            console.error("Error sending SOS alert:", error);
            setResponseText(
              `An error occurred: ${error.message}. Please try again.`
            );
          }
        },
        (error) => {
          console.error("Geolocation error:", error);
          setResponseText(
            "Failed to retrieve location. Please enable location permissions."
          );
        }
      );
    } else {
      setResponseText("Geolocation is not supported by your browser.");
    }
  };

  return (
    <div className="flex flex-col min-h-screen text-center text-white font-roboto bg-slate-500">
      <header className="p-4 text-xl font-bold">
        <i className="fas fa-exclamation-triangle"></i> SOS Emergency Alert
      </header>

      <main className="flex-1 flex flex-col items-center justify-center p-4">
        <section className="max-w-lg mb-8 text-lg leading-relaxed">
          <p>
            Press the button below to send an emergency alert. Your location
            will be shared as a Google Maps link.
          </p>
          <div className="mt-4">
            <input
              type="tel"
              placeholder="Enter recipient's phone number"
              className="p-2 rounded text-black w-full max-w-sm"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
        </section>

        <section className="flex flex-col items-center">
          <button
            className="bg-red-700 hover:bg-red-800 text-black font-medium text-lg px-8 py-3 rounded-full flex items-center gap-2 transition"
            onClick={handleSOSClick}
          >
            <i className="fas fa-bell"></i> Send SOS
          </button>
          {responseText && (
            <div className="mt-8 p-4 rounded-lg bg-white/10 flex items-center gap-2">
              <i className="fas fa-info-circle"></i>
              <span
                className="text-sm"
                dangerouslySetInnerHTML={{ __html: responseText }}
              ></span>
            </div>
          )}
        </section>
      </main>

      <footer className="bg-gray-900 text-gray-400 py-4 text-sm">
        &copy; 2024 SOS Emergency | <i className="fas fa-phone-alt"></i> Contact:8757894455-HELP
      </footer>
    </div>
  );
};

export default SOS;

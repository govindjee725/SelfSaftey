import React from "react";

const Helpline = () => {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Emergency Helpline Numbers</h2>
      <div style={{ margin: "10px" }}>
        <a
          href="tel:100"
          style={{
            display: "inline-block",
            margin: "10px",
            padding: "15px 25px",
            backgroundColor: "#ff4d4d",
            color: "white",
            textDecoration: "none",
            borderRadius: "5px",
            fontSize: "16px",
          }}
        >
          📞 Call Police (100)
        </a>
      </div>
      <div style={{ margin: "10px" }}>
        <a
          href="tel:108"
          style={{
            display: "inline-block",
            margin: "10px",
            padding: "15px 25px",
            backgroundColor: "#4caf50",
            color: "white",
            textDecoration: "none",
            borderRadius: "5px",
            fontSize: "16px",
          }}
        >
          🚑 Call Ambulance (108)
        </a>
      </div>
      <div style={{ margin: "10px" }}>
        <a
          href="tel:1091"
          style={{
            display: "inline-block",
            margin: "10px",
            padding: "15px 25px",
            backgroundColor: "#2196f3",
            color: "white",
            textDecoration: "none",
            borderRadius: "5px",
            fontSize: "16px",
          }}
        >
          🛡️ Women Helpline (1091)
        </a>
      </div>
    </div>
  );
};

export default Helpline;

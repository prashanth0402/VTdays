import { useEffect, useState } from "react";

export function Welcome() {
const dayConfig = {
  rose: {
    emoji: "🌹",
    title: "Happy Rose Day",
    color: "#ff4d6d",
    question:
      "I searched my garden of 10,000 roses… but the most beautiful one is standing right in front of me 🌹",
    answer:
      "You accepted my rose… now my heart will bloom only for you forever 🌹❤️"
  },

  propose: {
    emoji: "💍",
    title: "Happy Propose Day",
    color: "#ff6b81",
    question:
      "My heart has already chosen you… it just needs your smile to say yes 💍",
    answer:
      "You said YES! 💍 From today, you are My dreams ✨"
  },

  teddy: {
    emoji: "🧸",
    title: "Happy Teddy Day",
    color: "#f78fb3",
    question:
      "Whenever you feel lonely, imagine this teddy hugging you tight… that's me 🧸❤️",
    answer:
      "Now I promise to be your real-life teddy… always close, always warm 🧸💕"
  },

  hug: {
    emoji: "🤗",
    title: "Happy Hug Day",
    color: "#f368e0",
    question:
      "If hugs could talk, mine would whisper ‘I never want to let you go’ 🤗",
    answer:
      "Come here… this hug is lifetime valid, no expiry 🤗❤️"
  },

  kiss: {
    emoji: "😘",
    title: "Happy Kiss Day",
    color: "#ff4757",
    question:
      "A tiny kiss from you can turn my worst day into the happiest one 😘",
    answer:
      "That kiss just stole my heart completely… and I'm not taking it back 😘💕"
  },

  promise: {
    emoji: "🤞",
    title: "Happy Promise Day",
    color: "#ff7f50",
    question:
      "No matter where life takes us, my hand will always look for yours 🤞❤️",
    answer:
      "I promise to stand beside you… today, tomorrow, and every lifetime 🤞❤️"
  },

  valentine: {
    emoji: "❤️",
    title: "Happy Valentine's Day",
    color: "#ff1744",
    question:
      "Out of everyone in this world… my heart chose only you. Today, tomorrow, forever ❤️",
    answer:
      "You are officially mine and I am officially yours… Happy Valentine’s my love ❤️✨"
  }
};
  const [config, setConfig] = useState(dayConfig.valentine);
    const [yesClicked, setYesClicked] = useState(false);
  const [noPos, setNoPos] = useState({ x: 0, y: 0 });
   useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const day = params.get("day");
    if (day && dayConfig[day]) {
      setConfig(dayConfig[day]);
    }
  }, [])

    // move NO button randomly
  const moveNoButton = () => {
  const range = 200; // smaller movement for mobile
  const x = Math.random() * range - range / 2;
  const y = Math.random() * range - range / 2;

  setNoPos({ x, y });
};


const styles = {
  // full screen center layout
  page: (color) => ({
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "16px",
    background: `linear-gradient(135deg, ${color}, #ffc1cc)`,
    fontFamily: "Poppins, sans-serif",
    overflow: "hidden"
  }),

  // responsive card
  card: {
    background: "white",
    padding: "24px",
    borderRadius: "24px",
    textAlign: "center",

    width: "100%",
    maxWidth: "360px", // mobile friendly
    minHeight: "360px",

    boxShadow: "0 20px 50px rgba(0,0,0,0.15)",

    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    position: "relative"
  },

  emoji: {
    fontSize: "64px",
    marginBottom: "8px"
  },

  title: {
    margin: "6px 0",
    fontSize: "22px",
    fontWeight: "700"
  },

  question: {
    margin: "14px 0 24px",
    fontSize: "16px",
    lineHeight: "1.5",
    padding: "0 6px"
  },

  // button wrapper (fixed area so NO button moves safely)
btnWrap: {
  position: "relative",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "16px",
  marginTop: "10px"
},

  yesBtn: {
    padding: "12px 22px",
    fontSize: "16px",
    background: "#ff4d6d",
    border: "none",
    borderRadius: "14px",
    color: "white",
    fontWeight: "600",
    cursor: "pointer",

    boxShadow: "0 6px 16px rgba(255,77,109,0.4)",
    transition: "0.2s",
    zIndex: 2
  },

  noBtn: {
    padding: "10px 20px",
    fontSize: "16px",
    background: "#bbb",
    border: "none",
    borderRadius: "14px",
    color: "white",
    cursor: "pointer",
    transition: "transform 0.2s ease"
  },

  success: {
    fontSize: "18px",
    lineHeight: "1.6",
    color: "#ff1744",
    fontWeight: "bold",
    padding: "10px",
    animation: "fadeIn 0.4s ease"
  }
};


  return (
   <>
    <div style={styles.page(config.color)}>
      <div style={styles.card}>
        <div style={styles.emoji}>{config.emoji}</div>

        <h1 style={styles.title}>{config.title}</h1>

        {!yesClicked ? (
          <>
            <p style={styles.question}>{config.question}</p>

            <div style={styles.btnWrap}>
              <button
                style={styles.yesBtn}
                onClick={() => setYesClicked(true)}
              >
                YES 💖
              </button>

              <button
                style={{
                  ...styles.noBtn,
                  transform: `translate(${noPos.x}px, ${noPos.y}px)`
                }}
                onMouseEnter={moveNoButton}
                onTouchStart={moveNoButton}
                onClick={moveNoButton}
              >
                NO 😜
              </button>
            </div>
          </>
        ) : (
          <div style={styles.success}>
            <br />
           {config.answer}
          </div>
        )}
      </div>
    </div>
   </>
  );
}


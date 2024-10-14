import { CSSProperties } from "react";

const styles: { [key: string]: CSSProperties } = {
  container: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100vw",
    height: "100vh",
    backgroundImage: "url('/images/404/EMPTY_QUARTER_WEB.webp')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    fontFamily: "Arial, sans-serif",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.24)", // Adjust transparency here
    zIndex: 1,
  },
  textContainer: {
    position: "relative",
    zIndex: 2,
    textAlign: "center",
    color: "white",
    paddingBottom: "20px",
  },
  heading: {
    fontSize: "2rem", // Adjust this size as needed
  },
  button: {
    fontFamily: "Arial, sans-serif",
    marginTop: "40px",
    padding: "10px 20px",
    backgroundColor: "transparent",
    border: "2px solid white",
    color: "white",
    cursor: "pointer",
    fontSize: "1rem",
    textDecoration: "none",
    borderRadius: "5px",
    transition: "background-color 0.3s ease",
  },
  buttonHover: {
    backgroundColor: "white",
    color: "black",
  },
};

export default function NotFound() {
  return (
    <div style={styles.container}>
      {/* Overlay */}
      <div style={styles.overlay}></div>

      {/* Text content */}
      <div style={styles.textContainer}>
        <h1 style={styles.heading}>Have you lost your way?</h1>
        <a href="/" style={styles.button}>
          Back to the Community
        </a>
      </div>
    </div>
  );
}

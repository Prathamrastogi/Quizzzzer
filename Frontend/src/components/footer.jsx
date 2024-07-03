import React from "react";
import "../components_style/footer.css";

const footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer">
      <p>Made With By Pratham Rastogi</p>
    </footer>
  );
};

export default footer;

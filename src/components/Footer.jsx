const Footer = () => {
  return (
    <footer className="footer">
      <p className="copyright">
        Copyright &copy; Catherine Ihuoma Anokwuru
        <span id="date"> {new Date().getFullYear()}</span>. All Rights Reserved
      </p>
    </footer>
  );
};
export default Footer;

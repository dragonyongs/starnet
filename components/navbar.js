const Navbar = ({ links }) => {
    return (
      <nav>
        {links.map((link) => (
          <a key={link.url} href={link.url}>
            {link.title}
          </a>
        ))}
      </nav>
    );
};
  
export default Navbar;  
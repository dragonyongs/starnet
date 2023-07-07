// pages/api/navigation.js
export default function handler(req, res) {
    const navigationLinks = [
      {
        title: "Home",
        url: "/",
      },
      {
        title: "About",
        url: "/about",
      },
      {
        title: "Contact",
        url: "/contact",
      },
    ];
  
    res.status(200).json({ links: navigationLinks });
}
  
import "../styles/Footer.css";

const footerLinks = [
    {
        name: "Meta",
        link: "/"
    },
    {
        name: "Informacje",
        link: "/"
    },
    {
        name: "Blog",
        link: "/"
    },
    {
        name: "Praca",
        link: "/"
    },
    {
        name: "Pomoc",
        link: "/"
    },
    {
        name: "API",
        link: "/"
    },
    {
        name: "Prywatność",
        link: "/"
    },
    {
        name: "Regulamin",
        link: "/"
    },
    {
        name: "Najpopularniejsze konta",
        link: "/"
    },
    {
        name: "Hasztagi",
        link: "/"
    },
    {
        name: "Lokalizacje",
        link: "/"
    },
    {
        name: "Instagram Lite",
        link: "/"
    },
    {
        name: "Przesyłanie listy kontaktów i osób niebędących użytkownikami",
        link: "/"
    },
]

const Footer = () => {

    return (
        <footer>
            <div className="links">
                {footerLinks.map(link => (
                    <a key={link.name} href={link.link}>
                        {link.name}
                    </a>
                ))}
            </div>
            <div className="copyrights">
                <div className="lang">
                    Polski
                </div>
                <div className="rights">
                    © 2022 Instagram from Meta
                </div>
            </div>
        </footer>
    )
}

export default Footer;
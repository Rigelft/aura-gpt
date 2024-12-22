import Link from "next/link";

const Footer = () => {
    const resources = [
        { href: "/privacy-policy", label: "Politique de confidentialité" },
        { href: "#", label: "Politique d'utilisation" },
    ];

    return (
        <footer className="mt-8 border-t border-white pt-4">
            <div>
                <p className="mb-2 text-lg font-semibold">Ressources :</p>
                <ul className="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0">
                    {resources.map((resource) => (
                        <li key={resource.href}>
                            <Link
                                href={resource.href}
                                className="text-blue-500 hover:underline"
                            >
                                {resource.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </footer>
    );
};

export default Footer;

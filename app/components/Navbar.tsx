import Image from "next/image";

const Navbar = () => {
    return (
        <nav className="mb-8 flex items-center">
            {/* Photo de profil */}
            <div className="flex items-center mr-4">
                <Image
                    src="/profil-picture.jpeg" 
                    alt="IA Profile"
                    width={48} 
                    height={48}
                    className="w-12 h-12 rounded-full border-2 border-gray-200 shadow-md"
                />
            </div>

            {/* Texte avec effet glitch */}
            <div className="glitch-wrapper">
                <div className="glitch text-4xl font-bold" data-text="Aura">
                    Aura
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

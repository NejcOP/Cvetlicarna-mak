const { useState, useEffect } = React;

// Navigation Component
const Navigation = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Domov', href: '#home' },
        { name: 'Galerija', href: '#gallery' },
        { name: 'O nas', href: '#about' },
        { name: 'Kontakt', href: '#contact' },
    ];

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            isScrolled ? 'bg-white/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'
        }`}>
            <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <a href="#home" className="flex items-center">
                        <h2 className={`text-2xl md:text-3xl font-serif font-light tracking-wide transition-colors ${
                            isScrolled ? 'text-charcoal' : 'text-white'
                        }`}>
                            Cvetličarna Mak
                        </h2>
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className={`font-sans text-sm tracking-wide uppercase transition-colors hover:text-gold ${
                                    isScrolled ? 'text-charcoal' : 'text-white'
                                }`}
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href="#contact"
                            className="px-6 py-2 bg-gold text-charcoal font-sans text-sm tracking-wide uppercase hover:bg-gold/90 transition-all duration-300"
                        >
                            Naroči
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden p-2"
                    >
                        <svg
                            className={`w-6 h-6 ${
                                isScrolled ? 'text-charcoal' : 'text-white'
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {isMobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden mt-4 pb-4 space-y-3 bg-white/95 backdrop-blur-lg -mx-6 px-6 py-4 rounded-b-lg shadow-lg">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block font-sans text-sm tracking-wide uppercase transition-colors hover:text-gold text-charcoal py-2 border-b border-charcoal/10 last:border-0"
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href="#contact"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block text-center px-6 py-3 bg-gold text-charcoal font-sans text-sm tracking-wide uppercase hover:bg-gold/90 transition-all duration-300 mt-2 active:scale-95"
                        >
                            Naroči
                        </a>
                    </div>
                )}
            </div>
        </nav>
    );
};

// Hero Section Component
const Hero = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <section id="home" className="relative h-screen w-full overflow-hidden bg-cream">
            {/* Hero Image */}
            <div className="absolute inset-0">
                <img 
                    src="https://images.unsplash.com/photo-1487070183336-b863922373d4?w=1920&h=1080&fit=crop&q=90" 
                    alt="Luxury floral arrangement"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50"></div>
            </div>

            {/* Hero Content */}
            <div className={`relative h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 transition-all duration-1500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif font-light text-white mb-4 sm:mb-6 tracking-wide">
                    Cvetličarna Mak
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-serif font-light text-white/90 mb-8 sm:mb-12 max-w-3xl px-4">
                    Kjer narava postane umetnost.
                </p>
                <a 
                    href="#contact" 
                    className="inline-block px-8 sm:px-10 py-3 sm:py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white font-sans text-xs sm:text-sm tracking-widest uppercase hover:bg-white hover:text-charcoal transition-all duration-300 hover:scale-105 active:scale-95"
                >
                    Naroči unikatno kreacijo
                </a>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
            </div>
        </section>
    );
};

// Gallery Item Component
const GalleryItem = ({ image, title, delay }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => setIsVisible(true), delay);
                }
            },
            { threshold: 0.1 }
        );

        const element = document.getElementById(`gallery-${title}`);
        if (element) observer.observe(element);

        return () => observer.disconnect();
    }, [delay, title]);

    return (
        <div 
            id={`gallery-${title}`}
            className={`group relative overflow-hidden bg-soft-gray transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
            <div className="relative aspect-[3/4] overflow-hidden">
                <img 
                    src={image} 
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/30 transition-all duration-500"></div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-all duration-500">
                <h3 className="text-xl font-serif font-light tracking-wide">{title}</h3>
            </div>
        </div>
    );
};

// Gallery Section Component
const Gallery = () => {
    const galleryItems = [
        {
            image: "https://images.unsplash.com/photo-1561181286-d3fee7d55364?w=800&h=1000&fit=crop&q=90",
            title: "Romantična eleganca"
        },
        {
            image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=800&h=1000&fit=crop&q=90",
            title: "Pomladno prebujenje"
        },
        {
            image: "https://images.unsplash.com/photo-1563241832-b2f8e5ee2c66?w=800&h=1000&fit=crop&q=90",
            title: "Divja lepota"
        },
        {
            image: "https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?w=800&h=1000&fit=crop&q=90",
            title: "Minimalistična harmonija"
        },
        {
            image: "https://images.unsplash.com/photo-1455659817273-f96807779a8a?w=800&h=1000&fit=crop&q=90",
            title: "Jesenska paleta"
        },
        {
            image: "https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?w=800&h=1000&fit=crop&q=90",
            title: "Sanjska kompozicija"
        },
        {
            image: "https://images.unsplash.com/photo-1464360723614-d37f33117983?w=800&h=1000&fit=crop&q=90",
            title: "Podeželska poetika"
        },
        {
            image: "https://images.unsplash.com/photo-1508610048659-a06b669e3321?w=800&h=1000&fit=crop&q=90",
            title: "Eksotična eleganca"
        },
        {
            image: "https://images.unsplash.com/photo-1496062031456-07b8f162a322?w=800&h=1000&fit=crop&q=90",
            title: "Sveža nežnost"
        }
    ];

    return (
        <section id="gallery" className="py-16 sm:py-20 md:py-32 px-4 sm:px-6 bg-cream">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12 sm:mb-16 md:mb-24">
                    <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif font-light text-charcoal mb-4 tracking-wide">
                        Izbrana dela
                    </h2>
                    <div className="w-20 h-px bg-gold mx-auto"></div>
                </div>

                {/* Masonry Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                    {galleryItems.map((item, index) => (
                        <GalleryItem 
                            key={index}
                            image={item.image}
                            title={item.title}
                            delay={index * 100}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

// About Section Component
const About = () => {
    return (
        <section id="about" className="py-16 sm:py-20 md:py-32 px-4 sm:px-6 bg-white">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-12 sm:mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif font-light text-charcoal mb-6 sm:mb-8 tracking-wide">
                        Umetnost ustvarjanja
                    </h2>
                    <div className="w-20 h-px bg-gold mx-auto mb-8 sm:mb-12"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
                    <div className="space-y-4 sm:space-y-6 text-charcoal/80 font-light leading-relaxed">
                        <p className="text-base sm:text-lg md:text-xl">
                            V Cvetličarni Mak ne ustvarjamo zgolj šopkov – ustvarjamo čustvene zgodbe, 
                            ujete v poetični harmoniji barv, oblik in dišav.
                        </p>
                        <p className="text-sm sm:text-base md:text-lg">
                            Vsaka cvetlična kreacija je edinstveno umetniško delo, ki ga oblikujemo 
                            z globokim spoštovanjem do narave in osebnim pristopom do vsakega posameznika. 
                            Naša strast je pretvoriti vaše emocije v cvetlično stvaritev, ki presega navadno darilo.
                        </p>
                        <p className="text-sm sm:text-base md:text-lg">
                            Z izbranimi sezonskimi cvetovi, naravnimi materiali in premišljeno kompozicijo 
                            vsak šopek postane izraz najčistejše umetnosti – tiste, ki raste iz zemlje in govori jeziku srca.
                        </p>
                    </div>

                    <div className="relative">
                        <img 
                            src="cvetličar2.jpg" 
                            alt="Florist at work"
                            className="w-full h-auto rounded-sm shadow-2xl"
                        />
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-gold/30 -z-10"></div>
                    </div>
                </div>

                {/* Features */}
                <div className="grid sm:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16 md:mt-20">
                    <div className="text-center p-6">
                        <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                            <svg className="w-12 h-12 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"></path>
                            </svg>
                        </div>
                        <h3 className="text-xl font-serif text-charcoal mb-2">Sezonski cvetovi</h3>
                        <p className="text-sm text-charcoal/70 font-light">Samo najsvežejši, lokalno pridelani cvetovi</p>
                    </div>

                    <div className="text-center p-6">
                        <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                            <svg className="w-12 h-12 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                            </svg>
                        </div>
                        <h3 className="text-xl font-serif text-charcoal mb-2">Ročno delo</h3>
                        <p className="text-sm text-charcoal/70 font-light">Vsaka kreacija je unikat, narejen z ljubeznijo</p>
                    </div>

                    <div className="text-center p-6">
                        <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                            <svg className="w-12 h-12 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                        </div>
                        <h3 className="text-xl font-serif text-charcoal mb-2">Osebni pristop</h3>
                        <p className="text-sm text-charcoal/70 font-light">Poslušamo vaše želje in ustvarjamo zanje</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Contact/CTA Section Component
const Contact = () => {
    return (
        <section id="contact" className="py-16 sm:py-20 md:py-32 px-4 sm:px-6 bg-charcoal text-white">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif font-light mb-6 sm:mb-8 tracking-wide">
                    Ustvarimo skupaj
                </h2>
                <div className="w-20 h-px bg-gold mx-auto mb-8 sm:mb-12"></div>
                
                <p className="text-lg sm:text-xl md:text-2xl font-light mb-12 sm:mb-16 text-white/90 px-4">
                    Vsaka kreacija je unikatna. Kontaktirajte naju in skupaj bomo ustvarili 
                    cvetlično zgodbo, ki bo popolno odražala vaše želje.
                </p>

                <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 max-w-3xl mx-auto">
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 sm:p-8 rounded-sm hover:bg-white/10 transition-all duration-300">
                        <svg className="w-10 h-10 text-gold mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                        </svg>
                        <h3 className="text-xl sm:text-2xl font-serif mb-2">Pokličite</h3>
                        <p className="text-white/70 text-xs sm:text-sm mb-3 sm:mb-4">Ponedeljek - Sobota, 9:00 - 18:00</p>
                        <a href="tel:+38640123456" className="text-lg sm:text-xl text-gold hover:text-gold/80 transition-colors active:text-gold/70">
                            +386 40 123 456
                        </a>
                    </div>

                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 sm:p-8 rounded-sm hover:bg-white/10 transition-all duration-300">
                        <svg className="w-10 h-10 text-gold mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        </svg>
                        <h3 className="text-xl sm:text-2xl font-serif mb-2">Obiščite salon</h3>
                        <p className="text-white/70 text-xs sm:text-sm mb-3 sm:mb-4">Vstopite v svet cvetličnega čudeža</p>
                        <p className="text-base sm:text-lg text-gold">
                            Slovenčeva ulica 12<br />
                            1000 Ljubljana
                        </p>
                    </div>
                </div>

                <div className="mt-12 sm:mt-16">
                    <a 
                        href="mailto:info@cvetlicarnamak.si"
                        className="inline-block px-8 sm:px-12 py-3 sm:py-4 bg-gold text-charcoal font-sans text-xs sm:text-sm tracking-widest uppercase hover:bg-gold/90 transition-all duration-300 hover:scale-105 active:scale-95"
                    >
                        Pošlji sporočilo
                    </a>
                </div>
            </div>

            {/* Google Maps */}
            <div className="max-w-6xl mx-auto mt-12 sm:mt-16 md:mt-20 px-4 sm:px-6">
                <div className="rounded-lg overflow-hidden shadow-2xl">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2768.0645894327!2d14.509982576490824!3d46.06518097111561!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47652d5b73e314e9%3A0x400f81c823747a0!2sSloven%C4%8Deva%20ulica%2012%2C%201000%20Ljubljana!5e0!3m2!1ssl!2ssi!4v1709990000000!5m2!1ssl!2ssi"
                        width="100%" 
                        height="300" 
                        style={{ border: 0 }}
                        allowFullScreen="" 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                        className="w-full sm:h-96 md:h-[450px]"
                    ></iframe>
                </div>
                <div className="text-center mt-6">
                    <p className="text-white/70 text-sm">
                        📍 Slovenčeva ulica 12, 1000 Ljubljana
                    </p>
                    <p className="text-white/60 text-xs mt-2">
                        Brezplačno parkiranje na voljo v bližini
                    </p>
                </div>
            </div>
        </section>
    );
};

// Footer Component
const Footer = () => {
    return (
        <footer className="bg-cream py-10 sm:py-12 px-4 sm:px-6">
            <div className="max-w-6xl mx-auto">
                {/* Social Media */}
                <div className="flex justify-center gap-4 sm:gap-6 mb-6 sm:mb-8">
                    <a 
                        href="https://instagram.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-12 h-12 flex items-center justify-center border border-charcoal/20 hover:border-gold hover:bg-gold/10 transition-all duration-300 group"
                    >
                        <svg className="w-6 h-6 text-charcoal group-hover:text-gold transition-colors" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                    </a>
                    <a 
                        href="https://facebook.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-12 h-12 flex items-center justify-center border border-charcoal/20 hover:border-gold hover:bg-gold/10 transition-all duration-300 group"
                    >
                        <svg className="w-6 h-6 text-charcoal group-hover:text-gold transition-colors" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                    </a>
                    <a 
                        href="https://pinterest.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-12 h-12 flex items-center justify-center border border-charcoal/20 hover:border-gold hover:bg-gold/10 transition-all duration-300 group"
                    >
                        <svg className="w-6 h-6 text-charcoal group-hover:text-gold transition-colors" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
                        </svg>
                    </a>
                </div>

                {/* Brand & Info */}
                <div className="text-center">
                    <h3 className="text-2xl sm:text-3xl font-serif text-charcoal mb-2 sm:mb-3">Cvetličarna Mak</h3>
                    <p className="text-charcoal/60 text-xs sm:text-sm mb-1 sm:mb-2">Slovenčeva ulica 12, 1000 Ljubljana</p>
                    <p className="text-charcoal/60 text-xs sm:text-sm mb-4 sm:mb-6">info@cvetlicarnamak.si</p>
                    <div className="w-16 h-px bg-gold/50 mx-auto mb-4 sm:mb-6"></div>
                    <p className="text-charcoal/50 text-xs">
                        © 2026 Cvetličarna Mak. Vse pravice pridržane.
                    </p>
                </div>
            </div>
        </footer>
    );
};

// Sticky CTA Button
const StickyButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 500) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <div className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 z-50 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
            <a 
                href="#contact"
                className="flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 sm:py-4 bg-gold text-charcoal font-sans text-xs sm:text-sm tracking-wide uppercase shadow-2xl hover:bg-gold/90 transition-all duration-300 hover:scale-105 active:scale-95 group"
            >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                Kontakt
            </a>
        </div>
    );
};

// Main App Component
const App = () => {
    return (
        <div className="bg-cream">
            <Navigation />
            <Hero />
            <Gallery />
            <About />
            <Contact />
            <Footer />
            <StickyButton />
        </div>
    );
};

// Render App
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

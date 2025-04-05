import { MapPin, Phone, Mail } from "lucide-react";
import {
Facebook,
Instagram,
Twitter,
Youtube,
} from "lucide-react";
import { scroller } from "react-scroll";

const HomeFooter = () => {

  const scrollTo = (event, target) => {
    event.preventDefault();
    scroller.scrollTo(target, {
      duration: 500,
      delay: 0,
      smooth: "easeInOutQuart",
      offset: -100,
    });
    return false;
  };

  return (
    <div className="bg-black text-white px-6 py-10 rounded-t-[60px]">
      <div className="max-w-7xl mx-auto">

        {/* Logo at the top */}
        <div className="flex items-center gap-2 mb-8">
          <img src="/assets/logos/dar-mic-logo.png" alt="Dar El Mic" className="h-20" />
        </div>

        {/* Flex row: À propos, Navigation, Map */}
        <div className="flex flex-col md:flex-row justify-between gap-10">

          {/* À propos */}
          <div className="flex-1">
            <h2 className="text-lg !font-bold text-white mb-4">À propos</h2>

            <div className="flex items-start gap-2 text-sm">
              <MapPin className="w-4 h-4 text-pink-500 mt-[2px]" />
              <p className="text-white">Les palmiers, en face ex. CLO, Oran, Algeria 31000</p>
            </div>

            <div className="flex items-start gap-2 text-sm">
              <Phone className="w-4 h-4 text-pink-500 mt-[2px]" />
              <p className="text-white">+213 55555555</p>
            </div>

            <div className="flex items-start gap-2 text-sm mb-4">
              <Mail className="w-4 h-4 text-pink-500 mt-[2px]" />
              <p className="text-white">booking@darelmic.com</p>
            </div>

            <div className="flex items-center gap-4">
              <h3 className="!font-semibold text-white m-0">Suivez nous !</h3>
              <div className="flex gap-3">
                <Instagram className="w-5 h-5 text-pink-500 hover:scale-110 transition cursor-pointer" />
                <Facebook className="w-5 h-5 text-blue-500 hover:scale-110 transition cursor-pointer" />
                <Twitter className="w-5 h-5 text-sky-400 hover:scale-110 transition cursor-pointer" />
                <Youtube className="w-5 h-5 text-red-500 hover:scale-110 transition cursor-pointer" />
              </div>
            </div>
          </div>

          {/* Navigation rapides */}
          <div className="flex-1">
            <h2 className="text-lg !font-bold text-white mb-4">Navigation rapides</h2>
            <ul className="space-y-2 text-sm">
              <li><a href="#" onClick={(event) => scrollTo(event, "home")} className="hover:underline text-white">Accueil</a></li>
              <li><a href="#" onClick={(event) => scrollTo(event, "decors")} className="hover:underline text-white">Décors</a></li>
              <li><a href="#" onClick={(event) => scrollTo(event, "apps")} className="hover:underline text-white">Matériels</a></li>
              <li><a href="#" onClick={(event) => scrollTo(event, "themes")} className="hover:underline text-white">Packages</a></li>
              <li><a href="#" onClick={(event) => scrollTo(event, "services")} className="hover:underline text-white">Services supplémentaires</a></li>
            </ul>
          </div>

          {/* Map */}
          <iframe
            title="Dar El Mic Location"
            className="w-full max-w-[350px] h-[300px] rounded-xl border-none"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d721.8413783720372!2d-0.6430982572240463!3d35.678033209783386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e0!4m0!4m3!3m2!1d35.6783874543184!2d-0.642758937331532!5e0!3m2!1sfr!2sfr!4v1743884303802!5m2!1sfr!2sfr"
          />

          <div className="flex flex-col items-center lg:items-start justify-start lg:justify-end">
            <a
              className="btn btn-circle btn-outline-semi-light !flex !justify-center !items-center c-pointer"
              href="#scroll"
              onClick={(event) => scrollTo(event, "home")}
            >
              <i className="simple-icon-arrow-up" />
            </a>
          </div>

        </div>

        {/* Bottom legal row */}
        <div className="mt-10 border-t border-white/10 pt-4 text-xs flex flex-col md:flex-row justify-between gap-2 text-center text-white/80">
          <span>© 2025 Dar El Mic – Tous droits réservés.</span>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#" className="hover:underline">Mentions légales</a>
            <a href="#" className="hover:underline">Politique de confidentialité</a>
            <a href="#" className="hover:underline">Conditions générales d'utilisation</a>
            <a href="#" className="hover:underline">Politique d'annulation et de remboursement</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeFooter;

// constants.js - Couleurs de la charte graphique et données

// Palette de couleurs exacte de la charte graphique
export const COLORS = {
  cream: "#fffaf2",
  pinkPastel: "#f8caf1",
  orangePrimary: "#ef712e",
  redOrange: "#f65d38",
  brownMedium: "#89604a",
  brownDark: "#473126",
};

// Typographies
export const FONTS = {
  primary: "'Fredoka One', cursive", // Alternative à Nectarine
  secondary: "'Poppins', sans-serif",
};

// Données des services
export const SERVICES_DATA = [
  {
    id: 1,
    title: "Coupe Femme",
    description:
      "Coupe personnalisée selon votre style et la forme de votre visage",
    price: "À partir de 35€",
    duration: "45 min",
    includes: ["Shampooing", "Coupe", "Brushing"],
  },
  {
    id: 2,
    title: "Coupe Homme",
    description: "Coupe moderne et tendance adaptée à votre personnalité",
    price: "À partir de 25€",
    duration: "30 min",
    includes: ["Shampooing", "Coupe", "Finition"],
  },
  {
    id: 3,
    title: "Coupe Enfant",
    description: "Coupe douce et patiente pour les plus petits",
    price: "À partir de 20€",
    duration: "25 min",
    includes: ["Shampooing", "Coupe", "Séchage"],
  },
  {
    id: 4,
    title: "Mise en Plis",
    description: "Brushing professionnel pour une coiffure parfaite",
    price: "À partir de 25€",
    duration: "30 min",
    includes: ["Shampooing", "Brushing", "Finition"],
  },
];

// Données des témoignages
export const TESTIMONIALS_DATA = [
  {
    id: 1,
    name: "Sophie M.",
    location: "Albi",
    rating: 5,
    comment:
      "Amel est très professionnelle et à l'écoute. Le service à domicile est vraiment pratique, surtout avec les enfants !",
    date: "Il y a 2 semaines",
  },
  {
    id: 2,
    name: "Claire L.",
    location: "Castres",
    rating: 5,
    comment:
      "Excellente coiffeuse ! Ma coupe est parfaite et Amel m'a donné de bons conseils pour l'entretien.",
    date: "Il y a 1 mois",
  },
  {
    id: 3,
    name: "Marie-Claude R.",
    location: "Gaillac",
    rating: 5,
    comment:
      "Service impeccable, ponctuelle et très sympathique. Je recommande vivement !",
    date: "Il y a 3 semaines",
  },
];

// Zone de couverture
export const COVERAGE_DATA = {
  mainAreas: [
    "Albi et agglomération",
    "Castres et environs",
    "Gaillac et vignoble",
    "Lavaur et région",
    "Carmaux et alentours",
  ],
  additionalInfo:
    "Service disponible dans un rayon de 30km autour d'Albi. Pour les communes plus éloignées, nous consulter pour les frais de déplacement.",
};

// Informations de contact
export const CONTACT_INFO = {
  phone: "06 12 34 56 78",
  email: "amel.coiffure@email.fr",
  hours: {
    weekdays: "9h00 - 18h00",
    saturday: "9h00 - 16h00",
    sunday: "Sur rendez-vous",
  },
  socialMedia: {
    facebook: "https://facebook.com/amelcoiffure",
    instagram: "https://instagram.com/amel_coiffure_tarn",
  },
};

// Styles communs réutilisables
export const COMMON_STYLES = {
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 20px",
  },
  section: {
    padding: "80px 0",
  },
  button: {
    fontFamily: FONTS.secondary,
    fontWeight: "500",
    fontSize: "1.1rem",
    padding: "15px 35px",
    border: "none",
    borderRadius: "50px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    textDecoration: "none",
    display: "inline-block",
    textAlign: "center",
  },
  buttonPrimary: {
    backgroundColor: COLORS.orangePrimary,
    color: "white",
  },
  buttonSecondary: {
    backgroundColor: COLORS.pinkPastel,
    color: COLORS.brownDark,
  },
};

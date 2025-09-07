import React from "react";
import { Scissors, Phone, Mail, MapPin, Heart, ArrowUp } from "lucide-react";
import { COLORS, FONTS, COMMON_STYLES, CONTACT_INFO } from "../utils/constants";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Services", id: "services" },
    { name: "À propos", id: "about" },
    { name: "Zone d'intervention", id: "coverage" },
    { name: "Galerie", id: "gallery" },
    { name: "Témoignages", id: "testimonials" },
    { name: "Contact", id: "contact" },
  ];

  const servicesLinks = [
    "Coupe Femme",
    "Coupe Homme",
    "Coupe Enfant",
    "Mise en Plis",
  ];

  return (
    <>
      <footer style={styles.footer}>
        <div style={styles.container}>
          {/* Contenu principal du footer */}
          <div style={styles.footerContent}>
            {/* Section Logo et description */}
            <div style={styles.footerSection}>
              <div style={styles.footerLogo}>
                <Scissors style={styles.footerLogoIcon} />
                <div style={styles.footerLogoText}>
                  <span style={styles.footerLogoName}>AMEL</span>
                  <span style={styles.footerLogoSubtitle}>
                    coupe des cheveux
                  </span>
                </div>
              </div>

              <p style={styles.footerDescription}>
                Coiffeuse itinérante passionnée dans le Tarn. Je me déplace chez
                vous pour des coupes personnalisées dans le confort de votre
                domicile.
              </p>

              <div style={styles.footerContact}>
                <div style={styles.footerContactItem}>
                  <Phone style={styles.footerContactIcon} />
                  <a
                    href={`tel:${CONTACT_INFO.phone}`}
                    style={styles.footerContactLink}
                    onMouseEnter={(e) =>
                      (e.target.style.color = COLORS.orangePrimary)
                    }
                    onMouseLeave={(e) =>
                      (e.target.style.color = "rgba(255, 255, 255, 0.8)")
                    }
                  >
                    {CONTACT_INFO.phone}
                  </a>
                </div>
                <div style={styles.footerContactItem}>
                  <Mail style={styles.footerContactIcon} />
                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    style={styles.footerContactLink}
                    onMouseEnter={(e) =>
                      (e.target.style.color = COLORS.orangePrimary)
                    }
                    onMouseLeave={(e) =>
                      (e.target.style.color = "rgba(255, 255, 255, 0.8)")
                    }
                  >
                    {CONTACT_INFO.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Section Liens rapides */}
            <div style={styles.footerSection}>
              <h4 style={styles.footerSectionTitle}>Navigation</h4>
              <ul style={styles.footerList}>
                {quickLinks.map((link, index) => (
                  <li key={index} style={styles.footerListItem}>
                    <button
                      onClick={() => scrollToSection(link.id)}
                      style={styles.footerLink}
                      onMouseEnter={(e) => {
                        e.target.style.color = COLORS.orangePrimary;
                        e.target.style.paddingLeft = "10px";
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.color = "rgba(255, 255, 255, 0.8)";
                        e.target.style.paddingLeft = "0";
                      }}
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Section Services */}
            <div style={styles.footerSection}>
              <h4 style={styles.footerSectionTitle}>Mes Services</h4>
              <ul style={styles.footerList}>
                {servicesLinks.map((service, index) => (
                  <li key={index} style={styles.footerListItem}>
                    <button
                      onClick={() => scrollToSection("services")}
                      style={styles.footerLink}
                      onMouseEnter={(e) => {
                        e.target.style.color = COLORS.orangePrimary;
                        e.target.style.paddingLeft = "10px";
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.color = "rgba(255, 255, 255, 0.8)";
                        e.target.style.paddingLeft = "0";
                      }}
                    >
                      {service}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Section Zone et horaires */}
            <div style={styles.footerSection}>
              <h4 style={styles.footerSectionTitle}>Informations</h4>

              <div style={styles.footerInfo}>
                <div style={styles.footerInfoItem}>
                  <MapPin style={styles.footerInfoIcon} />
                  <div>
                    <p style={styles.footerInfoTitle}>Zone d'intervention</p>
                    <p style={styles.footerInfoText}>Tarn et environs (30km)</p>
                  </div>
                </div>

                <div style={styles.footerInfoItem}>
                  <div style={styles.footerInfoIcon}>⏰</div>
                  <div>
                    <p style={styles.footerInfoTitle}>Horaires</p>
                    <p style={styles.footerInfoText}>Lun-Sam: 9h-18h</p>
                    <p style={styles.footerInfoText}>Dim: Sur RDV</p>
                  </div>
                </div>
              </div>

              <button
                onClick={() => scrollToSection("contact")}
                style={styles.footerCtaButton}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = COLORS.redOrange;
                  e.target.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = COLORS.orangePrimary;
                  e.target.style.transform = "translateY(0)";
                }}
              >
                Prendre RDV
              </button>
            </div>
          </div>

          {/* Séparateur */}
          <div style={styles.footerDivider}></div>

          {/* Bas du footer */}
          <div style={styles.footerBottom}>
            <div style={styles.footerCopyright}>
              <p style={styles.copyrightText}>
                © {currentYear} Amel - Coupe des cheveux. Fait avec{" "}
                <Heart style={styles.heartIcon} /> dans le Tarn.
              </p>
            </div>

            <div style={styles.footerActions}>
              <button
                onClick={scrollToTop}
                style={styles.backToTopButton}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = COLORS.orangePrimary;
                  e.target.style.transform = "translateY(-3px)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
                  e.target.style.transform = "translateY(0)";
                }}
              >
                <ArrowUp style={styles.backToTopIcon} />
                Haut de page
              </button>
            </div>
          </div>
        </div>
      </footer>

      <style>{`
        @media (max-width: 968px) {
          .footer-content { 
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 40px !important;
          }
        }
        @media (max-width: 640px) {
          .footer-content { 
            grid-template-columns: 1fr !important;
            gap: 30px !important;
          }
          .footer-bottom {
            flex-direction: column !important;
            gap: 20px !important;
            text-align: center !important;
          }
        }
      `}</style>
    </>
  );
};

// Styles CSS en fin de fichier
const styles = {
  footer: {
    backgroundColor: COLORS.brownDark,
    color: "white",
    paddingTop: "60px",
    paddingBottom: "30px",
  },
  container: {
    ...COMMON_STYLES.container,
  },
  footerContent: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "50px",
    marginBottom: "50px",
  },

  // Section logo
  footerSection: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  footerLogo: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    marginBottom: "10px",
  },
  footerLogoIcon: {
    width: "35px",
    height: "35px",
    stroke: COLORS.orangePrimary,
    strokeWidth: 2.5,
  },
  footerLogoText: {
    display: "flex",
    flexDirection: "column",
    lineHeight: 1,
  },
  footerLogoName: {
    fontFamily: FONTS.primary,
    fontSize: "1.6rem",
    color: COLORS.orangePrimary,
    fontWeight: 400,
  },
  footerLogoSubtitle: {
    fontFamily: FONTS.secondary,
    fontSize: "0.9rem",
    color: "rgba(255, 255, 255, 0.7)",
    fontWeight: 400,
    marginTop: "-2px",
  },
  footerDescription: {
    fontFamily: FONTS.secondary,
    fontSize: "1rem",
    lineHeight: 1.6,
    color: "rgba(255, 255, 255, 0.8)",
    maxWidth: "280px",
  },
  footerContact: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  footerContactItem: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  footerContactIcon: {
    width: "18px",
    height: "18px",
    stroke: COLORS.orangePrimary,
    strokeWidth: 2,
  },
  footerContactLink: {
    fontFamily: FONTS.secondary,
    fontSize: "1rem",
    color: "rgba(255, 255, 255, 0.8)",
    textDecoration: "none",
    transition: "color 0.3s ease",
  },

  // Sections de liens
  footerSectionTitle: {
    fontFamily: FONTS.primary,
    fontSize: "1.3rem",
    color: "white",
    marginBottom: "5px",
    fontWeight: 400,
  },
  footerList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
  footerListItem: {
    margin: 0,
  },
  footerLink: {
    fontFamily: FONTS.secondary,
    fontSize: "0.95rem",
    color: "rgba(255, 255, 255, 0.8)",
    textDecoration: "none",
    background: "none",
    border: "none",
    cursor: "pointer",
    padding: 0,
    textAlign: "left",
    transition: "all 0.3s ease",
  },

  // Section info
  footerInfo: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  footerInfoItem: {
    display: "flex",
    gap: "10px",
    alignItems: "flex-start",
  },
  footerInfoIcon: {
    width: "18px",
    height: "18px",
    stroke: COLORS.orangePrimary,
    strokeWidth: 2,
    flexShrink: 0,
    marginTop: "2px",
  },
  footerInfoTitle: {
    fontFamily: FONTS.secondary,
    fontSize: "0.9rem",
    fontWeight: 600,
    color: "white",
    margin: "0 0 3px 0",
  },
  footerInfoText: {
    fontFamily: FONTS.secondary,
    fontSize: "0.85rem",
    color: "rgba(255, 255, 255, 0.7)",
    margin: 0,
    lineHeight: 1.4,
  },
  footerCtaButton: {
    ...COMMON_STYLES.button,
    backgroundColor: COLORS.orangePrimary,
    color: "white",
    fontSize: "1rem",
    fontWeight: 600,
    padding: "12px 25px",
    marginTop: "10px",
    boxShadow: "0 5px 15px rgba(239, 113, 46, 0.3)",
  },

  // Bas du footer
  footerDivider: {
    height: "1px",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    marginBottom: "30px",
  },
  footerBottom: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "20px",
  },
  footerCopyright: {
    flex: 1,
  },
  copyrightText: {
    fontFamily: FONTS.secondary,
    fontSize: "0.9rem",
    color: "rgba(255, 255, 255, 0.7)",
    margin: 0,
    display: "flex",
    alignItems: "center",
    gap: "5px",
  },
  heartIcon: {
    width: "16px",
    height: "16px",
    stroke: COLORS.orangePrimary,
    fill: COLORS.orangePrimary,
  },
  footerActions: {
    display: "flex",
    alignItems: "center",
  },
  backToTopButton: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    fontFamily: FONTS.secondary,
    fontSize: "0.9rem",
    fontWeight: 500,
    padding: "10px 20px",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    color: "rgba(255, 255, 255, 0.8)",
    border: "none",
    borderRadius: "25px",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
  backToTopIcon: {
    width: "16px",
    height: "16px",
    strokeWidth: 2,
  },
};

export default Footer;

import React from "react";
import { Scissors, Clock, Euro, CheckCircle } from "lucide-react";
import {
  COLORS,
  FONTS,
  COMMON_STYLES,
  SERVICES_DATA,
} from "../utils/constants";

const Services = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <section style={styles.services} id="services">
        <div style={styles.container}>
          <h2 style={styles.title}>Mes Services</h2>

          <div style={styles.servicesGrid}>
            {SERVICES_DATA.map((service) => (
              <div
                key={service.id}
                style={styles.serviceCard}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px)";
                  e.currentTarget.style.boxShadow =
                    "0 20px 40px rgba(71, 49, 38, 0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 10px 30px rgba(71, 49, 38, 0.1)";
                }}
              >
                <div style={styles.serviceIcon}>
                  <Scissors style={styles.serviceIconSvg} />
                </div>

                <h3 style={styles.serviceTitle}>{service.title}</h3>
                <p style={styles.serviceDescription}>{service.description}</p>

                <div style={styles.serviceDetails}>
                  <div style={styles.serviceDetail}>
                    <Euro style={styles.serviceDetailIcon} />
                    <span>{service.price}</span>
                  </div>
                  <div style={styles.serviceDetail}>
                    <Clock style={styles.serviceDetailIcon} />
                    <span>{service.duration}</span>
                  </div>
                </div>

                <div style={styles.serviceIncludes}>
                  <h4 style={styles.serviceIncludesTitle}>Inclus :</h4>
                  <ul style={styles.serviceIncludesList}>
                    {service.includes.map((item, index) => (
                      <li key={index} style={styles.serviceIncludesItem}>
                        <CheckCircle style={styles.serviceIncludesIcon} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={scrollToContact}
                  style={styles.serviceButton}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = COLORS.redOrange;
                    e.target.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = COLORS.orangePrimary;
                    e.target.style.transform = "translateY(0)";
                  }}
                >
                  Réserver
                </button>
              </div>
            ))}
          </div>

          <div style={styles.servicesFooter}>
            <p style={styles.servicesNote}>
              * Frais de déplacement inclus dans un rayon de 15km autour d'Albi.
              Au-delà, nous consulter pour un devis personnalisé.
            </p>
            <button
              onClick={scrollToContact}
              style={styles.servicesCtaButton}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = COLORS.brownMedium;
                e.target.style.color = "white";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = COLORS.pinkPastel;
                e.target.style.color = COLORS.brownDark;
              }}
            >
              Demander un devis personnalisé
            </button>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 968px) {
          .services-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .services-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
};

// Styles CSS en fin de fichier
const styles = {
  services: {
    ...COMMON_STYLES.section,
    backgroundColor: COLORS.pinkPastel,
  },
  container: {
    ...COMMON_STYLES.container,
  },
  title: {
    fontFamily: FONTS.primary,
    fontSize: "2.8rem",
    color: COLORS.orangePrimary,
    textAlign: "center",
    marginBottom: "60px",
    fontWeight: 400,
  },
  servicesGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "30px",
    marginBottom: "60px",
  },
  serviceCard: {
    backgroundColor: "white",
    padding: "30px",
    borderRadius: "15px",
    textAlign: "center",
    boxShadow: "0 10px 30px rgba(71, 49, 38, 0.1)",
    transition: "all 0.3s ease",
    border: "1px solid rgba(239, 113, 46, 0.1)",
  },
  serviceIcon: {
    width: "80px",
    height: "80px",
    backgroundColor: COLORS.orangePrimary,
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto 20px",
    boxShadow: "0 10px 20px rgba(239, 113, 46, 0.3)",
  },
  serviceIconSvg: {
    width: "40px",
    height: "40px",
    stroke: "white",
    strokeWidth: 2,
  },
  serviceTitle: {
    fontFamily: FONTS.primary,
    fontSize: "1.8rem",
    color: COLORS.brownDark,
    marginBottom: "15px",
    fontWeight: 400,
  },
  serviceDescription: {
    fontFamily: FONTS.secondary,
    fontSize: "1rem",
    color: COLORS.brownMedium,
    lineHeight: 1.6,
    marginBottom: "25px",
  },
  serviceDetails: {
    display: "flex",
    justifyContent: "space-around",
    gap: "20px",
    marginBottom: "25px",
    padding: "15px",
    backgroundColor: COLORS.cream,
    borderRadius: "10px",
  },
  serviceDetail: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    fontFamily: FONTS.secondary,
    fontSize: "0.9rem",
    fontWeight: 600,
    color: COLORS.brownDark,
  },
  serviceDetailIcon: {
    width: "16px",
    height: "16px",
    stroke: COLORS.orangePrimary,
  },
  serviceIncludes: {
    textAlign: "left",
    marginBottom: "25px",
  },
  serviceIncludesTitle: {
    fontFamily: FONTS.secondary,
    fontSize: "1rem",
    fontWeight: 600,
    color: COLORS.brownDark,
    marginBottom: "10px",
  },
  serviceIncludesList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  serviceIncludesItem: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    fontFamily: FONTS.secondary,
    fontSize: "0.9rem",
    color: COLORS.brownMedium,
    marginBottom: "5px",
  },
  serviceIncludesIcon: {
    width: "14px",
    height: "14px",
    stroke: COLORS.orangePrimary,
    fill: COLORS.orangePrimary,
    flexShrink: 0,
  },
  serviceButton: {
    ...COMMON_STYLES.button,
    ...COMMON_STYLES.buttonPrimary,
    width: "100%",
    fontSize: "1rem",
    fontWeight: 600,
  },
  servicesFooter: {
    textAlign: "center",
    paddingTop: "40px",
    borderTop: "1px solid rgba(239, 113, 46, 0.2)",
  },
  servicesNote: {
    fontFamily: FONTS.secondary,
    fontSize: "0.9rem",
    color: COLORS.brownMedium,
    fontStyle: "italic",
    marginBottom: "25px",
    maxWidth: "600px",
    margin: "0 auto 25px",
  },
  servicesCtaButton: {
    ...COMMON_STYLES.button,
    ...COMMON_STYLES.buttonSecondary,
    fontSize: "1.1rem",
    fontWeight: 600,
  },
};

export default Services;

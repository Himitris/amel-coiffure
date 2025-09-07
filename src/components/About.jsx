import React from "react";
import { Heart, Award, Users, Smile } from "lucide-react";
import { COLORS, FONTS, COMMON_STYLES } from "../utils/constants";

const About = () => {
  const qualities = [
    {
      icon: Heart,
      title: "Passion",
      description:
        "Une véritable passion pour la coiffure et le bien-être de mes clientes",
    },
    {
      icon: Award,
      title: "Expertise",
      description:
        "Formation professionnelle et 3 années d'expérience dans la coiffure",
    },
    {
      icon: Users,
      title: "Proximité",
      description:
        "Un service personnalisé et à l'écoute de vos envies et besoins",
    },
    {
      icon: Smile,
      title: "Bienveillance",
      description:
        "Une approche douce et bienveillante pour un moment de détente",
    },
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <section style={styles.about} id="about">
        <div style={styles.container}>
          <div style={styles.aboutContent}>
            {/* Partie gauche - Photo et présentation */}
            <div style={styles.aboutLeft}>
              <div style={styles.aboutImageContainer}>
                {/* Placeholder pour la photo d'Amel */}
                <div style={styles.aboutImagePlaceholder}>
                  <div style={styles.aboutImageIcon}>
                    <Heart style={styles.aboutImageIconSvg} />
                  </div>
                </div>

                {/* Badge expérience */}
                <div style={styles.aboutBadge}>
                  <span style={styles.aboutBadgeNumber}>3+</span>
                  <span style={styles.aboutBadgeText}>années d'expérience</span>
                </div>
              </div>
            </div>

            {/* Partie droite - Texte */}
            <div style={styles.aboutRight}>
              <h2 style={styles.aboutTitle}>À propos d'Amel</h2>

              <div style={styles.aboutText}>
                <p style={styles.aboutParagraph}>
                  Bonjour ! Je suis Amel, coiffeuse passionnée installée dans le
                  Tarn. Après plusieurs années d'expérience en salon, j'ai
                  décidé de me lancer dans la coiffure à domicile pour offrir un
                  service plus personnel et convivial.
                </p>

                <p style={styles.aboutParagraph}>
                  Mon objectif ? Vous faire vivre un moment de détente et de
                  bien-être tout en sublimant votre beauté naturelle. Chaque
                  coupe est pensée selon votre personnalité, votre style de vie
                  et la forme de votre visage.
                </p>

                <p style={styles.aboutParagraph}>
                  Je me déplace dans tout le Tarn avec mon matériel
                  professionnel pour vous offrir la même qualité qu'en salon,
                  mais dans le confort de votre domicile.
                </p>
              </div>

              <button
                onClick={scrollToContact}
                style={styles.aboutButton}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = COLORS.redOrange;
                  e.target.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = COLORS.orangePrimary;
                  e.target.style.transform = "translateY(0)";
                }}
              >
                Prendre rendez-vous
              </button>
            </div>
          </div>

          {/* Section qualités */}
          <div style={styles.aboutQualities}>
            <h3 style={styles.aboutQualitiesTitle}>Mes engagements</h3>

            <div style={styles.qualitiesGrid}>
              {qualities.map((quality, index) => {
                const IconComponent = quality.icon;
                return (
                  <div
                    key={index}
                    style={styles.qualityCard}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-5px)";
                      e.currentTarget.style.boxShadow =
                        "0 15px 30px rgba(239, 113, 46, 0.2)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow =
                        "0 5px 15px rgba(71, 49, 38, 0.1)";
                    }}
                  >
                    <div style={styles.qualityIcon}>
                      <IconComponent style={styles.qualityIconSvg} />
                    </div>
                    <h4 style={styles.qualityTitle}>{quality.title}</h4>
                    <p style={styles.qualityDescription}>
                      {quality.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 968px) {
          .about-content { 
            grid-template-columns: 1fr !important;
            gap: 40px !important;
            text-align: center !important;
          }
          .qualities-grid { 
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          .qualities-grid { 
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  );
};

// Styles CSS en fin de fichier
const styles = {
  about: {
    ...COMMON_STYLES.section,
    backgroundColor: COLORS.cream,
  },
  container: {
    ...COMMON_STYLES.container,
  },
  aboutContent: {
    display: "grid",
    gridTemplateColumns: "1fr 1.2fr",
    gap: "60px",
    alignItems: "center",
    marginBottom: "80px",
  },
  aboutLeft: {
    position: "relative",
  },
  aboutImageContainer: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
  },
  aboutImagePlaceholder: {
    width: "300px",
    height: "350px",
    backgroundColor: COLORS.pinkPastel,
    borderRadius: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 20px 40px rgba(248, 202, 241, 0.4)",
    border: "3px solid white",
  },
  aboutImageIcon: {
    width: "80px",
    height: "80px",
    backgroundColor: COLORS.orangePrimary,
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  aboutImageIconSvg: {
    width: "40px",
    height: "40px",
    stroke: "white",
    fill: "white",
  },
  aboutBadge: {
    position: "absolute",
    bottom: "-20px",
    right: "20px",
    backgroundColor: COLORS.orangePrimary,
    color: "white",
    padding: "15px 20px",
    borderRadius: "15px",
    textAlign: "center",
    boxShadow: "0 10px 25px rgba(239, 113, 46, 0.4)",
    border: "3px solid white",
  },
  aboutBadgeNumber: {
    display: "block",
    fontFamily: FONTS.primary,
    fontSize: "1.8rem",
    fontWeight: 400,
    lineHeight: 1,
  },
  aboutBadgeText: {
    display: "block",
    fontFamily: FONTS.secondary,
    fontSize: "0.8rem",
    fontWeight: 500,
    marginTop: "2px",
  },
  aboutRight: {
    maxWidth: "600px",
  },
  aboutTitle: {
    fontFamily: FONTS.primary,
    fontSize: "2.8rem",
    color: COLORS.orangePrimary,
    marginBottom: "30px",
    fontWeight: 400,
  },
  aboutText: {
    marginBottom: "40px",
  },
  aboutParagraph: {
    fontFamily: FONTS.secondary,
    fontSize: "1.1rem",
    lineHeight: 1.8,
    color: COLORS.brownDark,
    marginBottom: "20px",
  },
  aboutButton: {
    ...COMMON_STYLES.button,
    ...COMMON_STYLES.buttonPrimary,
    fontSize: "1.1rem",
    fontWeight: 600,
    padding: "16px 35px",
  },
  aboutQualities: {
    textAlign: "center",
  },
  aboutQualitiesTitle: {
    fontFamily: FONTS.primary,
    fontSize: "2.2rem",
    color: COLORS.brownMedium,
    marginBottom: "50px",
    fontWeight: 400,
  },
  qualitiesGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "30px",
  },
  qualityCard: {
    backgroundColor: "white",
    padding: "30px 20px",
    borderRadius: "15px",
    textAlign: "center",
    boxShadow: "0 5px 15px rgba(71, 49, 38, 0.1)",
    transition: "all 0.3s ease",
    border: "1px solid rgba(248, 202, 241, 0.3)",
  },
  qualityIcon: {
    width: "60px",
    height: "60px",
    backgroundColor: COLORS.pinkPastel,
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto 20px",
  },
  qualityIconSvg: {
    width: "30px",
    height: "30px",
    stroke: COLORS.orangePrimary,
    strokeWidth: 2,
  },
  qualityTitle: {
    fontFamily: FONTS.primary,
    fontSize: "1.3rem",
    color: COLORS.brownDark,
    marginBottom: "10px",
    fontWeight: 400,
  },
  qualityDescription: {
    fontFamily: FONTS.secondary,
    fontSize: "0.9rem",
    color: COLORS.brownMedium,
    lineHeight: 1.5,
  },
};

export default About;

import React from "react";
import { Scissors, MapPin, Clock, Star, ArrowRight } from "lucide-react";
import { COLORS, FONTS, COMMON_STYLES } from "../utils/constants";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToServices = () => {
    const element = document.getElementById("services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <section style={styles.hero} id="hero">
        <div style={styles.container}>
          <div style={styles.heroContent}>
            {/* Contenu textuel principal */}
            <div style={styles.heroLeft}>
              <div style={styles.heroBadge}>
                <Star style={styles.heroBadgeIcon} />
                <span>Coiffeuse professionnelle certifiée</span>
              </div>

              <h1 style={styles.heroTitle}>
                <span style={styles.heroTitleMain}>AMEL</span>
                <span style={styles.heroTitleSub}>coupe des cheveux</span>
              </h1>

              <p style={styles.heroDescription}>
                Coiffeuse itinérante passionnée dans le Tarn, je viens chez vous
                avec tout mon matériel professionnel pour des coupes sur-mesure.
                Profitez d'un moment de détente dans le confort de votre
                domicile.
              </p>

              <div style={styles.heroFeatures}>
                <div style={styles.heroFeature}>
                  <div style={styles.heroFeatureIcon}>
                    <MapPin style={styles.heroFeatureIconSvg} />
                  </div>
                  <div style={styles.heroFeatureText}>
                    <h4 style={styles.heroFeatureTitle}>À domicile</h4>
                    <p style={styles.heroFeatureDesc}>Dans tout le Tarn</p>
                  </div>
                </div>

                <div style={styles.heroFeature}>
                  <div style={styles.heroFeatureIcon}>
                    <Clock style={styles.heroFeatureIconSvg} />
                  </div>
                  <div style={styles.heroFeatureText}>
                    <h4 style={styles.heroFeatureTitle}>Flexible</h4>
                    <p style={styles.heroFeatureDesc}>Horaires adaptés</p>
                  </div>
                </div>

                <div style={styles.heroFeature}>
                  <div style={styles.heroFeatureIcon}>
                    <Scissors style={styles.heroFeatureIconSvg} />
                  </div>
                  <div style={styles.heroFeatureText}>
                    <h4 style={styles.heroFeatureTitle}>Personnalisé</h4>
                    <p style={styles.heroFeatureDesc}>Selon vos envies</p>
                  </div>
                </div>
              </div>

              <div style={styles.heroCta}>
                <button
                  onClick={scrollToContact}
                  style={styles.btnPrimary}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = COLORS.redOrange;
                    e.target.style.transform = "translateY(-3px)";
                    e.target.style.boxShadow =
                      "0 15px 35px rgba(239, 113, 46, 0.4)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = COLORS.orangePrimary;
                    e.target.style.transform = "translateY(0)";
                    e.target.style.boxShadow =
                      "0 10px 25px rgba(239, 113, 46, 0.3)";
                  }}
                >
                  Réserver maintenant
                  <ArrowRight style={styles.btnIcon} />
                </button>

                <button
                  onClick={scrollToServices}
                  style={styles.btnSecondary}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = COLORS.brownMedium;
                    e.target.style.color = "white";
                    e.target.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = COLORS.pinkPastel;
                    e.target.style.color = COLORS.brownDark;
                    e.target.style.transform = "translateY(0)";
                  }}
                >
                  Mes services
                </button>
              </div>
            </div>

            {/* Section visuelle droite */}
            <div style={styles.heroRight}>
              <div style={styles.heroVisual}>
                {/* Cercle principal avec ciseaux */}
                <div style={styles.heroMainCircle}>
                  <Scissors style={styles.heroMainIcon} />
                </div>

                {/* Éléments flottants décoratifs */}
                <div
                  style={{
                    ...styles.heroFloatingElement,
                    ...styles.heroFloat1,
                  }}
                >
                  <div style={styles.heroFloatingIcon}>
                    <Star style={styles.heroFloatingIconSvg} />
                  </div>
                </div>

                <div
                  style={{
                    ...styles.heroFloatingElement,
                    ...styles.heroFloat2,
                  }}
                >
                  <div style={styles.heroFloatingText}>3+</div>
                  <div style={styles.heroFloatingSubtext}>ans</div>
                </div>

                <div
                  style={{
                    ...styles.heroFloatingElement,
                    ...styles.heroFloat3,
                  }}
                >
                  <div style={styles.heroFloatingIcon}>
                    <MapPin style={styles.heroFloatingIconSvg} />
                  </div>
                </div>

                <div
                  style={{
                    ...styles.heroFloatingElement,
                    ...styles.heroFloat4,
                  }}
                >
                  <div style={styles.heroFloatingText}>150+</div>
                  <div style={styles.heroFloatingSubtext}>clients</div>
                </div>

                {/* Cercles décoratifs en arrière-plan */}
                <div
                  style={{
                    ...styles.heroDecorativeCircle,
                    ...styles.heroDecoCircle1,
                  }}
                ></div>
                <div
                  style={{
                    ...styles.heroDecorativeCircle,
                    ...styles.heroDecoCircle2,
                  }}
                ></div>
                <div
                  style={{
                    ...styles.heroDecorativeCircle,
                    ...styles.heroDecoCircle3,
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Indicateur de scroll */}
        <div style={styles.heroScrollIndicator}>
          <div style={styles.heroScrollLine}></div>
          <div style={styles.heroScrollText}>Découvrir</div>
        </div>
      </section>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        .hero-float-1 { animation: float 3s ease-in-out infinite; }
        .hero-float-2 { animation: float 3s ease-in-out infinite 0.5s; }
        .hero-float-3 { animation: float 3s ease-in-out infinite 1s; }
        .hero-float-4 { animation: float 3s ease-in-out infinite 1.5s; }
        
        .hero-main-circle { animation: rotate 20s linear infinite; }
        
        @media (max-width: 968px) {
          .hero-content { 
            grid-template-columns: 1fr !important;
            gap: 50px !important;
            text-align: center !important;
          }
          .hero-right { order: -1 !important; }
          .hero-visual { 
            width: 300px !important;
            height: 300px !important;
            margin: 0 auto !important;
          }
        }
        
        @media (max-width: 640px) {
          .hero-cta { 
            flex-direction: column !important;
            gap: 15px !important;
          }
          .btn-primary, .btn-secondary { 
            width: 100% !important;
            justify-content: center !important;
          }
        }
      `}</style>
    </>
  );
};

// Styles CSS en fin de fichier
const styles = {
  hero: {
    minHeight: "100vh",
    paddingTop: "100px",
    paddingBottom: "60px",
    backgroundColor: COLORS.cream,
    position: "relative",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
  },
  container: {
    ...COMMON_STYLES.container,
    width: "100%",
  },
  heroContent: {
    display: "grid",
    gridTemplateColumns: "1.2fr 1fr",
    gap: "80px",
    alignItems: "center",
    minHeight: "600px",
  },
  heroLeft: {
    maxWidth: "600px",
  },
  heroBadge: {
    display: "inline-flex",
    alignItems: "center",
    gap: "10px",
    backgroundColor: COLORS.pinkPastel,
    color: COLORS.brownDark,
    padding: "10px 25px",
    borderRadius: "50px",
    fontFamily: FONTS.secondary,
    fontSize: "0.95rem",
    fontWeight: 600,
    marginBottom: "35px",
    border: "2px solid white",
    boxShadow: "0 5px 15px rgba(248, 202, 241, 0.4)",
  },
  heroBadgeIcon: {
    width: "18px",
    height: "18px",
    stroke: COLORS.orangePrimary,
    fill: COLORS.orangePrimary,
  },
  heroTitle: {
    marginBottom: "35px",
    lineHeight: 1,
  },
  heroTitleMain: {
    display: "block",
    fontFamily: FONTS.primary,
    fontSize: "5rem",
    color: COLORS.orangePrimary,
    fontWeight: 400,
    marginBottom: "8px",
    textShadow: "0 2px 4px rgba(239, 113, 46, 0.1)",
  },
  heroTitleSub: {
    display: "block",
    fontFamily: FONTS.secondary,
    fontSize: "1.5rem",
    color: COLORS.brownMedium,
    fontWeight: 300,
    letterSpacing: "2px",
    textTransform: "lowercase",
  },
  heroDescription: {
    fontFamily: FONTS.secondary,
    fontSize: "1.25rem",
    lineHeight: 1.7,
    color: COLORS.brownDark,
    marginBottom: "45px",
    maxWidth: "550px",
  },
  heroFeatures: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    marginBottom: "45px",
  },
  heroFeature: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
  },
  heroFeatureIcon: {
    width: "50px",
    height: "50px",
    backgroundColor: COLORS.orangePrimary,
    borderRadius: "12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    boxShadow: "0 8px 20px rgba(239, 113, 46, 0.3)",
  },
  heroFeatureIconSvg: {
    width: "24px",
    height: "24px",
    stroke: "white",
    strokeWidth: 2,
  },
  heroFeatureText: {
    flex: 1,
  },
  heroFeatureTitle: {
    fontFamily: FONTS.secondary,
    fontSize: "1.1rem",
    fontWeight: 600,
    color: COLORS.brownDark,
    marginBottom: "2px",
  },
  heroFeatureDesc: {
    fontFamily: FONTS.secondary,
    fontSize: "0.95rem",
    color: COLORS.brownMedium,
    margin: 0,
  },
  heroCta: {
    display: "flex",
    gap: "20px",
    alignItems: "center",
  },
  btnPrimary: {
    ...COMMON_STYLES.button,
    backgroundColor: COLORS.orangePrimary,
    color: "white",
    fontSize: "1.15rem",
    fontWeight: 600,
    padding: "18px 35px",
    display: "flex",
    alignItems: "center",
    gap: "10px",
    boxShadow: "0 10px 25px rgba(239, 113, 46, 0.3)",
  },
  btnSecondary: {
    ...COMMON_STYLES.button,
    backgroundColor: COLORS.pinkPastel,
    color: COLORS.brownDark,
    fontSize: "1.1rem",
    fontWeight: 500,
    padding: "16px 30px",
  },
  btnIcon: {
    width: "18px",
    height: "18px",
    strokeWidth: 2,
  },
  heroRight: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  heroVisual: {
    position: "relative",
    width: "400px",
    height: "400px",
  },
  heroMainCircle: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "200px",
    height: "200px",
    background: `linear-gradient(135deg, ${COLORS.orangePrimary}, ${COLORS.redOrange})`,
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 25px 50px rgba(239, 113, 46, 0.4)",
    border: "5px solid white",
    zIndex: 5,
  },
  heroMainIcon: {
    width: "80px",
    height: "80px",
    stroke: "white",
    strokeWidth: 2,
  },
  heroFloatingElement: {
    position: "absolute",
    backgroundColor: "white",
    borderRadius: "15px",
    padding: "15px",
    boxShadow: "0 10px 30px rgba(71, 49, 38, 0.15)",
    border: "2px solid rgba(248, 202, 241, 0.5)",
    zIndex: 3,
  },
  heroFloat1: {
    top: "10%",
    left: "10%",
    padding: "12px",
  },
  heroFloat2: {
    top: "15%",
    right: "5%",
    textAlign: "center",
  },
  heroFloat3: {
    bottom: "15%",
    left: "5%",
    padding: "12px",
  },
  heroFloat4: {
    bottom: "10%",
    right: "15%",
    textAlign: "center",
  },
  heroFloatingIcon: {
    width: "35px",
    height: "35px",
    backgroundColor: COLORS.pinkPastel,
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  heroFloatingIconSvg: {
    width: "18px",
    height: "18px",
    stroke: COLORS.orangePrimary,
    strokeWidth: 2,
  },
  heroFloatingText: {
    fontFamily: FONTS.primary,
    fontSize: "1.4rem",
    color: COLORS.orangePrimary,
    fontWeight: 400,
    lineHeight: 1,
  },
  heroFloatingSubtext: {
    fontFamily: FONTS.secondary,
    fontSize: "0.8rem",
    color: COLORS.brownMedium,
    fontWeight: 500,
    marginTop: "2px",
  },
  heroDecorativeCircle: {
    position: "absolute",
    borderRadius: "50%",
    opacity: 0.6,
    zIndex: 1,
  },
  heroDecoCircle1: {
    width: "120px",
    height: "120px",
    backgroundColor: COLORS.pinkPastel,
    top: "5%",
    right: "25%",
  },
  heroDecoCircle2: {
    width: "80px",
    height: "80px",
    backgroundColor: COLORS.brownMedium,
    bottom: "25%",
    left: "10%",
  },
  heroDecoCircle3: {
    width: "60px",
    height: "60px",
    backgroundColor: COLORS.redOrange,
    top: "60%",
    right: "10%",
  },
  heroScrollIndicator: {
    position: "absolute",
    bottom: "30px",
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "10px",
    opacity: 0.7,
  },
  heroScrollLine: {
    width: "2px",
    height: "30px",
    backgroundColor: COLORS.orangePrimary,
    borderRadius: "1px",
  },
  heroScrollText: {
    fontFamily: FONTS.secondary,
    fontSize: "0.8rem",
    color: COLORS.brownMedium,
    fontWeight: 500,
    textTransform: "uppercase",
    letterSpacing: "1px",
  },
};

export default Hero;

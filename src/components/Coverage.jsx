import React from "react";
import { MapPin, Car, Clock, Phone } from "lucide-react";
import {
  COLORS,
  FONTS,
  COMMON_STYLES,
  COVERAGE_DATA,
} from "../utils/constants";

const Coverage = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <section style={styles.coverage} id="coverage">
        <div style={styles.container}>
          <h2 style={styles.title}>Zone d'intervention</h2>
          <p style={styles.subtitle}>
            Je me déplace dans tout le Tarn pour vous offrir mes services à
            domicile
          </p>

          <div style={styles.coverageContent}>
            {/* Carte/Zone principale */}
            <div style={styles.coverageMap}>
              <div style={styles.mapContainer}>
                {/* Simulation d'une carte avec icônes */}
                <div style={styles.mapBackground}>
                  <div style={styles.mapCenter}>
                    <MapPin style={styles.mapCenterIcon} />
                    <span style={styles.mapCenterText}>ALBI</span>
                  </div>

                  {/* Points d'intérêt */}
                  <div style={{ ...styles.mapPoint, ...styles.mapPoint1 }}>
                    <div style={styles.mapPointDot}></div>
                    <span style={styles.mapPointLabel}>Castres</span>
                  </div>
                  <div style={{ ...styles.mapPoint, ...styles.mapPoint2 }}>
                    <div style={styles.mapPointDot}></div>
                    <span style={styles.mapPointLabel}>Gaillac</span>
                  </div>
                  <div style={{ ...styles.mapPoint, ...styles.mapPoint3 }}>
                    <div style={styles.mapPointDot}></div>
                    <span style={styles.mapPointLabel}>Lavaur</span>
                  </div>
                  <div style={{ ...styles.mapPoint, ...styles.mapPoint4 }}>
                    <div style={styles.mapPointDot}></div>
                    <span style={styles.mapPointLabel}>Carmaux</span>
                  </div>

                  {/* Cercle de couverture */}
                  <div style={styles.coverageCircle}></div>
                </div>
              </div>
            </div>

            {/* Informations détaillées */}
            <div style={styles.coverageInfo}>
              <h3 style={styles.infoTitle}>Zones desservies</h3>

              <div style={styles.areasList}>
                {COVERAGE_DATA.mainAreas.map((area, index) => (
                  <div key={index} style={styles.areaItem}>
                    <MapPin style={styles.areaIcon} />
                    <span style={styles.areaText}>{area}</span>
                  </div>
                ))}
              </div>

              <div style={styles.infoDetails}>
                <div style={styles.infoCard}>
                  <Car style={styles.infoCardIcon} />
                  <div style={styles.infoCardContent}>
                    <h4 style={styles.infoCardTitle}>Déplacement inclus</h4>
                    <p style={styles.infoCardText}>
                      Dans un rayon de 15km autour d'Albi
                    </p>
                  </div>
                </div>

                <div style={styles.infoCard}>
                  <Clock style={styles.infoCardIcon} />
                  <div style={styles.infoCardContent}>
                    <h4 style={styles.infoCardTitle}>Horaires flexibles</h4>
                    <p style={styles.infoCardText}>
                      Du lundi au samedi, créneaux adaptés
                    </p>
                  </div>
                </div>

                <div style={styles.infoCard}>
                  <Phone style={styles.infoCardIcon} />
                  <div style={styles.infoCardContent}>
                    <h4 style={styles.infoCardTitle}>Sur mesure</h4>
                    <p style={styles.infoCardText}>
                      Commune éloignée ? Contactez-moi
                    </p>
                  </div>
                </div>
              </div>

              <div style={styles.additionalInfo}>
                <p style={styles.additionalInfoText}>
                  {COVERAGE_DATA.additionalInfo}
                </p>
              </div>

              <button
                onClick={scrollToContact}
                style={styles.coverageButton}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = COLORS.redOrange;
                  e.target.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = COLORS.orangePrimary;
                  e.target.style.transform = "translateY(0)";
                }}
              >
                Vérifier ma zone et réserver
              </button>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 968px) {
          .coverage-content { 
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .map-container { 
            height: 300px !important;
          }
        }
        @media (max-width: 640px) {
          .info-details { 
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  );
};

// Styles CSS en fin de fichier
const styles = {
  coverage: {
    ...COMMON_STYLES.section,
    backgroundColor: COLORS.orangePrimary,
    color: "white",
  },
  container: {
    ...COMMON_STYLES.container,
  },
  title: {
    fontFamily: FONTS.primary,
    fontSize: "2.8rem",
    color: "white",
    textAlign: "center",
    marginBottom: "15px",
    fontWeight: 400,
  },
  subtitle: {
    fontFamily: FONTS.secondary,
    fontSize: "1.2rem",
    color: "rgba(255, 255, 255, 0.9)",
    textAlign: "center",
    marginBottom: "60px",
    maxWidth: "600px",
    margin: "0 auto 60px",
  },
  coverageContent: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "60px",
    alignItems: "center",
  },
  coverageMap: {
    display: "flex",
    justifyContent: "center",
  },
  mapContainer: {
    width: "400px",
    height: "400px",
    position: "relative",
  },
  mapBackground: {
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: "20px",
    position: "relative",
    border: "2px solid rgba(255, 255, 255, 0.2)",
    backdropFilter: "blur(10px)",
  },
  mapCenter: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "8px",
  },
  mapCenterIcon: {
    width: "40px",
    height: "40px",
    stroke: "white",
    fill: "white",
  },
  mapCenterText: {
    fontFamily: FONTS.primary,
    fontSize: "1.2rem",
    color: "white",
    fontWeight: 400,
  },
  mapPoint: {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "4px",
  },
  mapPoint1: {
    bottom: "15%",
    right: "20%",
  },
  mapPoint2: {
    top: "25%",
    right: "15%",
  },
  mapPoint3: {
    bottom: "20%",
    left: "15%",
  },
  mapPoint4: {
    top: "20%",
    left: "25%",
  },
  mapPointDot: {
    width: "12px",
    height: "12px",
    backgroundColor: COLORS.pinkPastel,
    borderRadius: "50%",
    border: "2px solid white",
  },
  mapPointLabel: {
    fontFamily: FONTS.secondary,
    fontSize: "0.8rem",
    color: "white",
    fontWeight: 500,
  },
  coverageCircle: {
    position: "absolute",
    top: "50%",
    left: "50%",
    width: "80%",
    height: "80%",
    border: "2px dashed rgba(255, 255, 255, 0.4)",
    borderRadius: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 1,
  },
  coverageInfo: {
    maxWidth: "500px",
  },
  infoTitle: {
    fontFamily: FONTS.primary,
    fontSize: "2.2rem",
    color: "white",
    marginBottom: "30px",
    fontWeight: 400,
  },
  areasList: {
    marginBottom: "40px",
  },
  areaItem: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    marginBottom: "15px",
    fontFamily: FONTS.secondary,
    fontSize: "1.1rem",
    color: "white",
    fontWeight: 500,
  },
  areaIcon: {
    width: "20px",
    height: "20px",
    stroke: COLORS.pinkPastel,
    flexShrink: 0,
  },
  areaText: {
    flex: 1,
  },
  infoDetails: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "20px",
    marginBottom: "30px",
  },
  infoCard: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
    padding: "20px",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: "12px",
    border: "1px solid rgba(255, 255, 255, 0.2)",
  },
  infoCardIcon: {
    width: "24px",
    height: "24px",
    stroke: COLORS.pinkPastel,
    flexShrink: 0,
  },
  infoCardContent: {
    flex: 1,
  },
  infoCardTitle: {
    fontFamily: FONTS.secondary,
    fontSize: "1rem",
    fontWeight: 600,
    color: "white",
    marginBottom: "4px",
  },
  infoCardText: {
    fontFamily: FONTS.secondary,
    fontSize: "0.9rem",
    color: "rgba(255, 255, 255, 0.8)",
    lineHeight: 1.4,
  },
  additionalInfo: {
    padding: "20px",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: "12px",
    marginBottom: "30px",
  },
  additionalInfoText: {
    fontFamily: FONTS.secondary,
    fontSize: "0.95rem",
    color: "rgba(255, 255, 255, 0.9)",
    lineHeight: 1.6,
    fontStyle: "italic",
  },
  coverageButton: {
    ...COMMON_STYLES.button,
    backgroundColor: "white",
    color: COLORS.orangePrimary,
    fontSize: "1.1rem",
    fontWeight: 600,
    padding: "16px 35px",
    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
  },
};

export default Coverage;

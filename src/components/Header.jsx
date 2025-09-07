import React, { useState } from "react";
import { Scissors, Menu, X } from "lucide-react";
import { COLORS, FONTS, COMMON_STYLES } from "../utils/constants";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <header style={styles.header}>
        <div style={styles.headerContent}>
          {/* Logo avec icône ciseaux */}
          <div style={styles.logo}>
            <Scissors style={styles.scissorsIcon} />
            <div style={styles.logoText}>
              <span style={styles.logoName}>AMEL</span>
              <span style={styles.logoSubtitle}>coupe des cheveux</span>
            </div>
          </div>

          {/* Navigation desktop */}
          <nav style={styles.navDesktop} className="nav-desktop">
            <ul style={styles.navList}>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  style={styles.navLink}
                  onMouseEnter={(e) =>
                    (e.target.style.color = COLORS.orangePrimary)
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.color = COLORS.brownDark)
                  }
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  style={styles.navLink}
                  onMouseEnter={(e) =>
                    (e.target.style.color = COLORS.orangePrimary)
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.color = COLORS.brownDark)
                  }
                >
                  À propos
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("coverage")}
                  style={styles.navLink}
                  onMouseEnter={(e) =>
                    (e.target.style.color = COLORS.orangePrimary)
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.color = COLORS.brownDark)
                  }
                >
                  Zone d'intervention
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("gallery")}
                  style={styles.navLink}
                  onMouseEnter={(e) =>
                    (e.target.style.color = COLORS.orangePrimary)
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.color = COLORS.brownDark)
                  }
                >
                  Galerie
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  style={styles.navLink}
                  onMouseEnter={(e) =>
                    (e.target.style.color = COLORS.orangePrimary)
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.color = COLORS.brownDark)
                  }
                >
                  Contact
                </button>
              </li>
            </ul>
          </nav>

          {/* Bouton contact principal */}
          <div style={styles.headerCta} className="header-cta">
            <button
              onClick={() => scrollToSection("contact")}
              style={styles.btnPrimary}
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

          {/* Menu burger mobile */}
          <button
            style={styles.menuToggle}
            className="menu-toggle"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Navigation mobile */}
        <nav style={styles.navMobile} className="nav-mobile">
          <ul style={styles.navMobileList}>
            <li>
              <button
                onClick={() => scrollToSection("services")}
                style={styles.navMobileLink}
                onMouseEnter={(e) =>
                  (e.target.style.color = COLORS.orangePrimary)
                }
                onMouseLeave={(e) => (e.target.style.color = COLORS.brownDark)}
              >
                Services
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("about")}
                style={styles.navMobileLink}
                onMouseEnter={(e) =>
                  (e.target.style.color = COLORS.orangePrimary)
                }
                onMouseLeave={(e) => (e.target.style.color = COLORS.brownDark)}
              >
                À propos
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("coverage")}
                style={styles.navMobileLink}
                onMouseEnter={(e) =>
                  (e.target.style.color = COLORS.orangePrimary)
                }
                onMouseLeave={(e) => (e.target.style.color = COLORS.brownDark)}
              >
                Zone d'intervention
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("gallery")}
                style={styles.navMobileLink}
                onMouseEnter={(e) =>
                  (e.target.style.color = COLORS.orangePrimary)
                }
                onMouseLeave={(e) => (e.target.style.color = COLORS.brownDark)}
              >
                Galerie
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("contact")}
                style={styles.navMobileLink}
                onMouseEnter={(e) =>
                  (e.target.style.color = COLORS.orangePrimary)
                }
                onMouseLeave={(e) => (e.target.style.color = COLORS.brownDark)}
              >
                Contact
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("contact")}
                style={{ ...styles.btnPrimary, ...styles.navMobileCta }}
              >
                Prendre rendez-vous
              </button>
            </li>
          </ul>
        </nav>
      </header>

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop, .header-cta { display: none !important; }
          .menu-toggle { display: block !important; }
          .nav-mobile { display: block !important; }
        }
      `}</style>
    </>
  );
};

// Styles CSS en fin de fichier
const styles = {
  header: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: COLORS.cream,
    boxShadow: "0 2px 20px rgba(71, 49, 38, 0.1)",
    zIndex: 1000,
    padding: "15px 0",
  },
  headerContent: {
    ...COMMON_STYLES.container,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "30px",
  },
  logo: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    textDecoration: "none",
    cursor: "pointer",
  },
  scissorsIcon: {
    width: "35px",
    height: "35px",
    stroke: COLORS.orangePrimary,
    strokeWidth: "2.5",
  },
  logoText: {
    display: "flex",
    flexDirection: "column",
    lineHeight: 1,
  },
  logoName: {
    fontFamily: FONTS.primary,
    fontSize: "1.6rem",
    color: COLORS.orangePrimary,
    fontWeight: 400,
  },
  logoSubtitle: {
    fontFamily: FONTS.secondary,
    fontSize: "0.9rem",
    color: COLORS.brownMedium,
    fontWeight: 400,
    marginTop: "-2px",
  },
  navDesktop: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
  },
  navList: {
    display: "flex",
    listStyle: "none",
    gap: "40px",
    margin: 0,
    padding: 0,
  },
  navLink: {
    fontFamily: FONTS.secondary,
    fontSize: "1rem",
    fontWeight: 500,
    color: COLORS.brownDark,
    textDecoration: "none",
    background: "none",
    border: "none",
    cursor: "pointer",
    padding: "8px 0",
    position: "relative",
    transition: "color 0.3s ease",
  },
  headerCta: {
    display: "flex",
  },
  btnPrimary: {
    ...COMMON_STYLES.button,
    ...COMMON_STYLES.buttonPrimary,
  },
  menuToggle: {
    display: "none",
    background: "none",
    border: "none",
    cursor: "pointer",
    padding: "5px",
    color: COLORS.brownDark,
  },
  navMobile: {
    display: "none",
    position: "absolute",
    top: "100%",
    left: 0,
    right: 0,
    backgroundColor: COLORS.cream,
    boxShadow: "0 10px 30px rgba(71, 49, 38, 0.15)",
    transition: "all 0.3s ease",
  },
  navMobileList: {
    listStyle: "none",
    padding: "20px",
    margin: 0,
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  navMobileLink: {
    fontFamily: FONTS.secondary,
    fontSize: "1.1rem",
    fontWeight: 500,
    color: COLORS.brownDark,
    textDecoration: "none",
    background: "none",
    border: "none",
    cursor: "pointer",
    padding: "12px 0",
    textAlign: "left",
    width: "100%",
    borderBottom: "1px solid rgba(71, 49, 38, 0.1)",
    transition: "color 0.3s ease",
  },
  navMobileCta: {
    marginTop: "10px",
    width: "100%",
  },
};

export default Header;

import React, { useState, useEffect } from "react";
import {
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Calendar,
} from "lucide-react";
import {
  COLORS,
  FONTS,
  COMMON_STYLES,
  TESTIMONIALS_DATA,
} from "../utils/constants";

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-défilement des témoignages
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev === 0 ? TESTIMONIALS_DATA.length - 1 : prev - 1
    );
    setIsAutoPlaying(false);
  };

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index);
    setIsAutoPlaying(false);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        style={{
          ...styles.star,
          fill: index < rating ? COLORS.orangePrimary : "transparent",
          stroke: index < rating ? COLORS.orangePrimary : COLORS.brownMedium,
        }}
      />
    ));
  };

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <section style={styles.testimonials} id="testimonials">
        <div style={styles.container}>
          <h2 style={styles.title}>Ce que disent mes clientes</h2>
          <p style={styles.subtitle}>
            La satisfaction de mes clientes est ma plus belle récompense
          </p>

          {/* Carousel principal */}
          <div style={styles.testimonialCarousel}>
            <button
              style={styles.carouselNav}
              onClick={prevTestimonial}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = COLORS.orangePrimary;
                e.target.style.transform = "scale(1.1)";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "rgba(255, 255, 255, 0.9)";
                e.target.style.transform = "scale(1)";
              }}
            >
              <ChevronLeft style={styles.carouselNavIcon} />
            </button>

            <div style={styles.testimonialCard}>
              {/* Icône de citation */}
              <div style={styles.quoteIcon}>
                <Quote style={styles.quoteIconSvg} />
              </div>

              {/* Étoiles */}
              <div style={styles.starsContainer}>
                {renderStars(TESTIMONIALS_DATA[currentTestimonial].rating)}
              </div>

              {/* Commentaire */}
              <blockquote style={styles.testimonialComment}>
                "{TESTIMONIALS_DATA[currentTestimonial].comment}"
              </blockquote>

              {/* Informations du client */}
              <div style={styles.testimonialAuthor}>
                <div style={styles.authorAvatar}>
                  {TESTIMONIALS_DATA[currentTestimonial].name.charAt(0)}
                </div>
                <div style={styles.authorInfo}>
                  <h4 style={styles.authorName}>
                    {TESTIMONIALS_DATA[currentTestimonial].name}
                  </h4>
                  <div style={styles.authorDetails}>
                    <div style={styles.authorDetail}>
                      <MapPin style={styles.authorDetailIcon} />
                      <span>
                        {TESTIMONIALS_DATA[currentTestimonial].location}
                      </span>
                    </div>
                    <div style={styles.authorDetail}>
                      <Calendar style={styles.authorDetailIcon} />
                      <span>{TESTIMONIALS_DATA[currentTestimonial].date}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <button
              style={{ ...styles.carouselNav, right: "0" }}
              onClick={nextTestimonial}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = COLORS.orangePrimary;
                e.target.style.transform = "scale(1.1)";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "rgba(255, 255, 255, 0.9)";
                e.target.style.transform = "scale(1)";
              }}
            >
              <ChevronRight style={styles.carouselNavIcon} />
            </button>
          </div>

          {/* Indicateurs de pagination */}
          <div style={styles.testimonialDots}>
            {TESTIMONIALS_DATA.map((_, index) => (
              <button
                key={index}
                style={{
                  ...styles.dot,
                  ...(index === currentTestimonial ? styles.dotActive : {}),
                }}
                onClick={() => goToTestimonial(index)}
                onMouseEnter={(e) => {
                  if (index !== currentTestimonial) {
                    e.target.style.backgroundColor = COLORS.pinkPastel;
                  }
                }}
                onMouseLeave={(e) => {
                  if (index !== currentTestimonial) {
                    e.target.style.backgroundColor = "rgba(137, 96, 74, 0.3)";
                  }
                }}
              />
            ))}
          </div>

          {/* Statistiques de satisfaction */}
          <div style={styles.satisfactionStats}>
            <div style={styles.statItem}>
              <div style={styles.statNumber}>100%</div>
              <div style={styles.statLabel}>Satisfaction client</div>
            </div>
            <div style={styles.statItem}>
              <div style={styles.statNumber}>150+</div>
              <div style={styles.statLabel}>Clientes heureuses</div>
            </div>
            <div style={styles.statItem}>
              <div style={styles.statNumber}>4.9/5</div>
              <div style={styles.statLabel}>Note moyenne</div>
            </div>
          </div>

          {/* Call to action */}
          <div style={styles.testimonialCta}>
            <h3 style={styles.ctaTitle}>Rejoignez mes clientes satisfaites</h3>
            <p style={styles.ctaText}>
              Réservez dès maintenant votre coupe à domicile
            </p>
            <button
              onClick={scrollToContact}
              style={styles.ctaButton}
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
              Prendre rendez-vous
            </button>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .satisfaction-stats { 
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
          .testimonial-card {
            margin: 0 40px !important;
          }
        }
      `}</style>
    </>
  );
};

// Styles CSS en fin de fichier
const styles = {
  testimonials: {
    ...COMMON_STYLES.section,
    backgroundColor: COLORS.pinkPastel,
    paddingBottom: "100px",
  },
  container: {
    ...COMMON_STYLES.container,
  },
  title: {
    fontFamily: FONTS.primary,
    fontSize: "2.8rem",
    color: COLORS.orangePrimary,
    textAlign: "center",
    marginBottom: "15px",
    fontWeight: 400,
  },
  subtitle: {
    fontFamily: FONTS.secondary,
    fontSize: "1.2rem",
    color: COLORS.brownMedium,
    textAlign: "center",
    marginBottom: "60px",
    maxWidth: "600px",
    margin: "0 auto 60px",
  },
  testimonialCarousel: {
    position: "relative",
    marginBottom: "40px",
  },
  carouselNav: {
    position: "absolute",
    top: "50%",
    left: "0",
    transform: "translateY(-50%)",
    width: "50px",
    height: "50px",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    border: "none",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    zIndex: 10,
    transition: "all 0.3s ease",
    boxShadow: "0 5px 15px rgba(71, 49, 38, 0.2)",
  },
  carouselNavIcon: {
    width: "24px",
    height: "24px",
    stroke: COLORS.brownDark,
    strokeWidth: 2,
  },
  testimonialCard: {
    backgroundColor: "white",
    padding: "50px 40px",
    borderRadius: "20px",
    textAlign: "center",
    margin: "0 60px",
    boxShadow: "0 20px 60px rgba(71, 49, 38, 0.15)",
    border: "2px solid rgba(239, 113, 46, 0.1)",
    position: "relative",
  },
  quoteIcon: {
    width: "60px",
    height: "60px",
    backgroundColor: COLORS.orangePrimary,
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto 30px",
    boxShadow: "0 10px 25px rgba(239, 113, 46, 0.3)",
  },
  quoteIconSvg: {
    width: "30px",
    height: "30px",
    stroke: "white",
    fill: "white",
  },
  starsContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "5px",
    marginBottom: "25px",
  },
  star: {
    width: "20px",
    height: "20px",
    strokeWidth: 1.5,
  },
  testimonialComment: {
    fontFamily: FONTS.secondary,
    fontSize: "1.3rem",
    lineHeight: 1.7,
    color: COLORS.brownDark,
    fontStyle: "italic",
    marginBottom: "35px",
    maxWidth: "600px",
    margin: "0 auto 35px",
    fontWeight: 400,
  },
  testimonialAuthor: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "20px",
  },
  authorAvatar: {
    width: "60px",
    height: "60px",
    backgroundColor: COLORS.orangePrimary,
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: FONTS.primary,
    fontSize: "1.5rem",
    color: "white",
    fontWeight: 400,
    flexShrink: 0,
  },
  authorInfo: {
    textAlign: "left",
  },
  authorName: {
    fontFamily: FONTS.secondary,
    fontSize: "1.2rem",
    fontWeight: 600,
    color: COLORS.brownDark,
    marginBottom: "8px",
  },
  authorDetails: {
    display: "flex",
    flexDirection: "column",
    gap: "4px",
  },
  authorDetail: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    fontFamily: FONTS.secondary,
    fontSize: "0.9rem",
    color: COLORS.brownMedium,
  },
  authorDetailIcon: {
    width: "14px",
    height: "14px",
    stroke: COLORS.orangePrimary,
    strokeWidth: 2,
  },
  testimonialDots: {
    display: "flex",
    justifyContent: "center",
    gap: "12px",
    marginBottom: "60px",
  },
  dot: {
    width: "12px",
    height: "12px",
    borderRadius: "50%",
    border: "none",
    backgroundColor: "rgba(137, 96, 74, 0.3)",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
  dotActive: {
    backgroundColor: COLORS.orangePrimary,
    transform: "scale(1.3)",
  },
  satisfactionStats: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "40px",
    marginBottom: "60px",
    padding: "40px",
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    borderRadius: "15px",
    border: "1px solid rgba(239, 113, 46, 0.1)",
  },
  statItem: {
    textAlign: "center",
  },
  statNumber: {
    fontFamily: FONTS.primary,
    fontSize: "2.5rem",
    color: COLORS.orangePrimary,
    fontWeight: 400,
    marginBottom: "8px",
  },
  statLabel: {
    fontFamily: FONTS.secondary,
    fontSize: "1rem",
    color: COLORS.brownMedium,
    fontWeight: 500,
  },
  testimonialCta: {
    textAlign: "center",
    padding: "50px 30px",
    backgroundColor: "white",
    borderRadius: "20px",
    boxShadow: "0 15px 40px rgba(71, 49, 38, 0.1)",
  },
  ctaTitle: {
    fontFamily: FONTS.primary,
    fontSize: "2.2rem",
    color: COLORS.brownDark,
    marginBottom: "15px",
    fontWeight: 400,
  },
  ctaText: {
    fontFamily: FONTS.secondary,
    fontSize: "1.1rem",
    color: COLORS.brownMedium,
    marginBottom: "30px",
    lineHeight: 1.6,
  },
  ctaButton: {
    ...COMMON_STYLES.button,
    backgroundColor: COLORS.orangePrimary,
    color: "white",
    fontSize: "1.2rem",
    fontWeight: 600,
    padding: "18px 40px",
    boxShadow: "0 10px 25px rgba(239, 113, 46, 0.3)",
  },
};

export default Testimonials;

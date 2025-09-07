import React, { useState } from "react";
import { Camera, X, ChevronLeft, ChevronRight } from "lucide-react";
import { COLORS, FONTS, COMMON_STYLES } from "../utils/constants";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Données simulées pour la galerie
  const galleryImages = [
    {
      id: 1,
      title: "Coupe moderne femme",
      category: "femme",
      alt: "Coupe dégradée moderne",
    },
    {
      id: 2,
      title: "Coupe homme tendance",
      category: "homme",
      alt: "Coupe fade avec dégradé",
    },
    {
      id: 3,
      title: "Coupe enfant ludique",
      category: "enfant",
      alt: "Coupe courte enfant",
    },
    {
      id: 4,
      title: "Brushing élégant",
      category: "femme",
      alt: "Brushing volume et brillance",
    },
    {
      id: 5,
      title: "Coupe classique homme",
      category: "homme",
      alt: "Coupe courte classique",
    },
    {
      id: 6,
      title: "Coupe fillette",
      category: "enfant",
      alt: "Coupe au carré fillette",
    },
    {
      id: 7,
      title: "Coupe dégradée femme",
      category: "femme",
      alt: "Long dégradé avec mèches",
    },
    {
      id: 8,
      title: "Coupe moderne homme",
      category: "homme",
      alt: "Undercut stylé",
    },
  ];

  const categories = [
    { id: "all", name: "Toutes", count: galleryImages.length },
    {
      id: "femme",
      name: "Femmes",
      count: galleryImages.filter((img) => img.category === "femme").length,
    },
    {
      id: "homme",
      name: "Hommes",
      count: galleryImages.filter((img) => img.category === "homme").length,
    },
    {
      id: "enfant",
      name: "Enfants",
      count: galleryImages.filter((img) => img.category === "enfant").length,
    },
  ];

  const [activeCategory, setActiveCategory] = useState("all");

  const filteredImages =
    activeCategory === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  const openLightbox = (image, index) => {
    setSelectedImage(image);
    setCurrentImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentImageIndex + 1) % filteredImages.length;
    setCurrentImageIndex(nextIndex);
    setSelectedImage(filteredImages[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex =
      currentImageIndex === 0
        ? filteredImages.length - 1
        : currentImageIndex - 1;
    setCurrentImageIndex(prevIndex);
    setSelectedImage(filteredImages[prevIndex]);
  };

  return (
    <>
      <section style={styles.gallery} id="gallery">
        <div style={styles.container}>
          <h2 style={styles.title}>Mes Réalisations</h2>
          <p style={styles.subtitle}>
            Découvrez quelques exemples de mes créations et laissez-vous
            inspirer
          </p>

          {/* Filtres par catégorie */}
          <div style={styles.categoryFilters}>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                style={{
                  ...styles.categoryButton,
                  ...(activeCategory === category.id
                    ? styles.categoryButtonActive
                    : {}),
                }}
                onMouseEnter={(e) => {
                  if (activeCategory !== category.id) {
                    e.target.style.backgroundColor = COLORS.pinkPastel;
                    e.target.style.color = COLORS.brownDark;
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeCategory !== category.id) {
                    e.target.style.backgroundColor = "transparent";
                    e.target.style.color = COLORS.brownMedium;
                  }
                }}
              >
                {category.name}
                <span style={styles.categoryCount}>({category.count})</span>
              </button>
            ))}
          </div>

          {/* Grille d'images */}
          <div style={styles.galleryGrid}>
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                style={styles.galleryItem}
                onClick={() => openLightbox(image, index)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                  e.currentTarget.querySelector(
                    ".gallery-overlay"
                  ).style.opacity = "1";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.querySelector(
                    ".gallery-overlay"
                  ).style.opacity = "0";
                }}
              >
                {/* Placeholder pour l'image */}
                <div style={styles.galleryImagePlaceholder}>
                  <Camera style={styles.galleryPlaceholderIcon} />
                </div>

                {/* Overlay avec informations */}
                <div style={styles.galleryOverlay} className="gallery-overlay">
                  <h4 style={styles.galleryItemTitle}>{image.title}</h4>
                  <p style={styles.galleryItemCategory}>
                    {categories.find((cat) => cat.id === image.category)
                      ?.name || "Autre"}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Note sur les photos */}
          <div style={styles.galleryNote}>
            <p style={styles.galleryNoteText}>
              📸 Toutes les photos sont prises avec l'accord de mes clientes.
              Votre confidentialité est respectée.
            </p>
          </div>
        </div>
      </section>

      {/* Lightbox pour affichage en grand */}
      {selectedImage && (
        <div style={styles.lightbox} onClick={closeLightbox}>
          <div
            style={styles.lightboxContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button style={styles.lightboxClose} onClick={closeLightbox}>
              <X style={styles.lightboxCloseIcon} />
            </button>

            <button style={styles.lightboxNav} onClick={prevImage}>
              <ChevronLeft style={styles.lightboxNavIcon} />
            </button>

            <div style={styles.lightboxImage}>
              <Camera style={styles.lightboxPlaceholderIcon} />
              <h3 style={styles.lightboxTitle}>{selectedImage.title}</h3>
            </div>

            <button
              style={{ ...styles.lightboxNav, right: "20px" }}
              onClick={nextImage}
            >
              <ChevronRight style={styles.lightboxNavIcon} />
            </button>

            <div style={styles.lightboxInfo}>
              <span>
                {currentImageIndex + 1} / {filteredImages.length}
              </span>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 968px) {
          .gallery-grid { 
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 20px !important;
          }
        }
        @media (max-width: 640px) {
          .gallery-grid { 
            grid-template-columns: 1fr !important;
          }
          .category-filters {
            flex-wrap: wrap !important;
            gap: 10px !important;
          }
        }
      `}</style>
    </>
  );
};

// Styles CSS en fin de fichier
const styles = {
  gallery: {
    ...COMMON_STYLES.section,
    backgroundColor: COLORS.cream,
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
    marginBottom: "50px",
    maxWidth: "600px",
    margin: "0 auto 50px",
  },
  categoryFilters: {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
    marginBottom: "50px",
  },
  categoryButton: {
    fontFamily: FONTS.secondary,
    fontSize: "1rem",
    fontWeight: 500,
    padding: "12px 25px",
    border: `2px solid ${COLORS.orangePrimary}`,
    borderRadius: "50px",
    backgroundColor: "transparent",
    color: COLORS.brownMedium,
    cursor: "pointer",
    transition: "all 0.3s ease",
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  categoryButtonActive: {
    backgroundColor: COLORS.orangePrimary,
    color: "white",
  },
  categoryCount: {
    fontSize: "0.9rem",
    opacity: 0.8,
  },
  galleryGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "25px",
    marginBottom: "60px",
  },
  galleryItem: {
    position: "relative",
    borderRadius: "15px",
    overflow: "hidden",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0 10px 30px rgba(71, 49, 38, 0.1)",
    aspectRatio: "4/3",
  },
  galleryImagePlaceholder: {
    width: "100%",
    height: "100%",
    backgroundColor: COLORS.pinkPastel,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  galleryPlaceholderIcon: {
    width: "60px",
    height: "60px",
    stroke: COLORS.orangePrimary,
    opacity: 0.7,
  },
  galleryOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "linear-gradient(to top, rgba(71, 49, 38, 0.9), transparent)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    padding: "20px",
    opacity: 0,
    transition: "opacity 0.3s ease",
  },
  galleryItemTitle: {
    fontFamily: FONTS.secondary,
    fontSize: "1.1rem",
    fontWeight: 600,
    color: "white",
    marginBottom: "5px",
  },
  galleryItemCategory: {
    fontFamily: FONTS.secondary,
    fontSize: "0.9rem",
    color: "rgba(255, 255, 255, 0.8)",
    margin: 0,
    textTransform: "capitalize",
  },
  galleryNote: {
    textAlign: "center",
    padding: "30px",
    backgroundColor: "rgba(248, 202, 241, 0.3)",
    borderRadius: "15px",
    border: "1px solid rgba(248, 202, 241, 0.5)",
  },
  // Lightbox styles
  lightbox: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.9)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
    padding: "20px",
  },
  lightboxContent: {
    position: "relative",
    maxWidth: "90vw",
    maxHeight: "90vh",
    backgroundColor: "white",
    borderRadius: "15px",
    overflow: "hidden",
  },
  lightboxClose: {
    position: "absolute",
    top: "15px",
    right: "15px",
    width: "40px",
    height: "40px",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    border: "none",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    zIndex: 1001,
    transition: "all 0.3s ease",
  },
  lightboxCloseIcon: {
    width: "20px",
    height: "20px",
    stroke: "white",
    strokeWidth: 2,
  },
  lightboxNav: {
    position: "absolute",
    top: "50%",
    left: "20px",
    transform: "translateY(-50%)",
    width: "50px",
    height: "50px",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    border: "none",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    zIndex: 1001,
    transition: "all 0.3s ease",
  },
  lightboxNavIcon: {
    width: "24px",
    height: "24px",
    stroke: "white",
    strokeWidth: 2,
  },
  lightboxImage: {
    width: "600px",
    height: "400px",
    backgroundColor: COLORS.pinkPastel,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "20px",
  },
  lightboxPlaceholderIcon: {
    width: "80px",
    height: "80px",
    stroke: COLORS.orangePrimary,
    opacity: 0.7,
  },
  lightboxTitle: {
    fontFamily: FONTS.secondary,
    fontSize: "1.3rem",
    fontWeight: 600,
    color: COLORS.brownDark,
    textAlign: "center",
  },
  lightboxInfo: {
    position: "absolute",
    bottom: "15px",
    left: "50%",
    transform: "translateX(-50%)",
    padding: "8px 15px",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    borderRadius: "20px",
    fontFamily: FONTS.secondary,
    fontSize: "0.9rem",
    color: "white",
    fontWeight: 500,
  },
};

export default Gallery;

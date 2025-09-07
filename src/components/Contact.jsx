import React, { useState } from "react";
import {
  Phone,
  Mail,
  Clock,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import {
  COLORS,
  FONTS,
  COMMON_STYLES,
  CONTACT_INFO,
  SERVICES_DATA,
} from "../utils/constants";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    location: "",
    date: "",
    time: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulation d'envoi de formulaire
    setTimeout(() => {
      setFormStatus("success");
      setIsSubmitting(false);
      // Reset form after success
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          location: "",
          date: "",
          time: "",
          message: "",
        });
        setFormStatus(null);
      }, 3000);
    }, 2000);
  };

  const contactMethods = [
    {
      icon: Phone,
      title: "Téléphone",
      value: CONTACT_INFO.phone,
      action: `tel:${CONTACT_INFO.phone}`,
      description: "Appelez-moi directement",
    },
    {
      icon: Mail,
      title: "Email",
      value: CONTACT_INFO.email,
      action: `mailto:${CONTACT_INFO.email}`,
      description: "Écrivez-moi un message",
    },
    {
      icon: MapPin,
      title: "Zone",
      value: "Tarn et environs",
      action: "#coverage",
      description: "Voir ma zone d'intervention",
    },
  ];

  const timeSlots = [
    "09:00",
    "10:00",
    "11:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
  ];

  return (
    <>
      <section style={styles.contact} id="contact">
        <div style={styles.container}>
          <h2 style={styles.title}>Prendre Rendez-vous</h2>
          <p style={styles.subtitle}>
            Réservez votre coupe à domicile en quelques clics
          </p>

          <div style={styles.contactContent}>
            {/* Formulaire de réservation */}
            <div style={styles.contactForm}>
              <div style={styles.formHeader}>
                <h3 style={styles.formTitle}>Formulaire de réservation</h3>
                <p style={styles.formDescription}>
                  Remplissez ce formulaire et je vous recontacterai rapidement
                </p>
              </div>

              {formStatus === "success" && (
                <div style={styles.successMessage}>
                  <CheckCircle style={styles.successIcon} />
                  <div>
                    <h4 style={styles.successTitle}>Demande envoyée !</h4>
                    <p style={styles.successText}>
                      Je vous recontacterai dans les plus brefs délais pour
                      confirmer votre rendez-vous.
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} style={styles.form}>
                <div style={styles.formRow}>
                  <div style={styles.formGroup}>
                    <label style={styles.label}>Nom complet *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      style={styles.input}
                      placeholder="Votre nom et prénom"
                    />
                  </div>
                  <div style={styles.formGroup}>
                    <label style={styles.label}>Téléphone *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      style={styles.input}
                      placeholder="06 12 34 56 78"
                    />
                  </div>
                </div>

                <div style={styles.formGroup}>
                  <label style={styles.label}>Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    style={styles.input}
                    placeholder="votre@email.fr"
                  />
                </div>

                <div style={styles.formRow}>
                  <div style={styles.formGroup}>
                    <label style={styles.label}>Service souhaité *</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      required
                      style={styles.select}
                    >
                      <option value="">Choisir un service</option>
                      {SERVICES_DATA.map((service) => (
                        <option key={service.id} value={service.title}>
                          {service.title} - {service.price}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div style={styles.formGroup}>
                    <label style={styles.label}>Ville *</label>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      required
                      style={styles.input}
                      placeholder="Votre ville"
                    />
                  </div>
                </div>

                <div style={styles.formRow}>
                  <div style={styles.formGroup}>
                    <label style={styles.label}>Date souhaitée *</label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      required
                      style={styles.input}
                      min={new Date().toISOString().split("T")[0]}
                    />
                  </div>
                  <div style={styles.formGroup}>
                    <label style={styles.label}>Heure souhaitée *</label>
                    <select
                      name="time"
                      value={formData.time}
                      onChange={handleInputChange}
                      required
                      style={styles.select}
                    >
                      <option value="">Choisir un créneau</option>
                      {timeSlots.map((time) => (
                        <option key={time} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div style={styles.formGroup}>
                  <label style={styles.label}>Message (optionnel)</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    style={styles.textarea}
                    placeholder="Précisions sur votre demande, coupe souhaitée, etc."
                    rows="4"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    ...styles.submitButton,
                    ...(isSubmitting ? styles.submitButtonDisabled : {}),
                  }}
                  onMouseEnter={(e) => {
                    if (!isSubmitting) {
                      e.target.style.backgroundColor = COLORS.redOrange;
                      e.target.style.transform = "translateY(-2px)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isSubmitting) {
                      e.target.style.backgroundColor = COLORS.orangePrimary;
                      e.target.style.transform = "translateY(0)";
                    }
                  }}
                >
                  {isSubmitting ? "Envoi en cours..." : "Envoyer ma demande"}
                  <Send style={styles.submitIcon} />
                </button>
              </form>
            </div>

            {/* Informations de contact */}
            <div style={styles.contactInfo}>
              <h3 style={styles.infoTitle}>Autres moyens de contact</h3>

              <div style={styles.contactMethods}>
                {contactMethods.map((method, index) => {
                  const IconComponent = method.icon;
                  return (
                    <a
                      key={index}
                      href={method.action}
                      style={styles.contactMethod}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = "white";
                        e.currentTarget.style.transform = "translateY(-5px)";
                        e.currentTarget.style.boxShadow =
                          "0 15px 35px rgba(71, 49, 38, 0.2)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor =
                          "rgba(255, 255, 255, 0.9)";
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow =
                          "0 10px 25px rgba(71, 49, 38, 0.1)";
                      }}
                    >
                      <div style={styles.contactMethodIcon}>
                        <IconComponent style={styles.contactMethodIconSvg} />
                      </div>
                      <div style={styles.contactMethodContent}>
                        <h4 style={styles.contactMethodTitle}>
                          {method.title}
                        </h4>
                        <p style={styles.contactMethodValue}>{method.value}</p>
                        <p style={styles.contactMethodDescription}>
                          {method.description}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>

              {/* Horaires d'ouverture */}
              <div style={styles.scheduleSection}>
                <h4 style={styles.scheduleTitle}>
                  <Clock style={styles.scheduleIcon} />
                  Mes horaires
                </h4>
                <div style={styles.scheduleList}>
                  <div style={styles.scheduleItem}>
                    <span style={styles.scheduleDay}>Lundi - Vendredi</span>
                    <span style={styles.scheduleTime}>
                      {CONTACT_INFO.hours.weekdays}
                    </span>
                  </div>
                  <div style={styles.scheduleItem}>
                    <span style={styles.scheduleDay}>Samedi</span>
                    <span style={styles.scheduleTime}>
                      {CONTACT_INFO.hours.saturday}
                    </span>
                  </div>
                  <div style={styles.scheduleItem}>
                    <span style={styles.scheduleDay}>Dimanche</span>
                    <span style={styles.scheduleTime}>
                      {CONTACT_INFO.hours.sunday}
                    </span>
                  </div>
                </div>
              </div>

              {/* Informations importantes */}
              <div style={styles.importantInfo}>
                <div style={styles.infoCard}>
                  <AlertCircle style={styles.infoCardIcon} />
                  <div style={styles.infoCardContent}>
                    <h5 style={styles.infoCardTitle}>Réservation conseillée</h5>
                    <p style={styles.infoCardText}>
                      Je recommande de réserver 24h à l'avance pour garantir
                      votre créneau.
                    </p>
                  </div>
                </div>

                <div style={styles.infoCard}>
                  <CheckCircle style={styles.infoCardIcon} />
                  <div style={styles.infoCardContent}>
                    <h5 style={styles.infoCardTitle}>Matériel inclus</h5>
                    <p style={styles.infoCardText}>
                      J'apporte tout le matériel professionnel nécessaire.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 968px) {
          .contact-content { 
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .form-row {
            flex-direction: column !important;
          }
        }
        @media (max-width: 640px) {
          .contact-methods {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  );
};

// Styles CSS en fin de fichier
const styles = {
  contact: {
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
    marginBottom: "60px",
    maxWidth: "600px",
    margin: "0 auto 60px",
  },
  contactContent: {
    display: "grid",
    gridTemplateColumns: "1.2fr 1fr",
    gap: "60px",
    alignItems: "start",
  },

  // Formulaire
  contactForm: {
    backgroundColor: "white",
    padding: "40px",
    borderRadius: "20px",
    boxShadow: "0 20px 60px rgba(71, 49, 38, 0.1)",
    border: "2px solid rgba(248, 202, 241, 0.3)",
  },
  formHeader: {
    marginBottom: "30px",
  },
  formTitle: {
    fontFamily: FONTS.primary,
    fontSize: "2rem",
    color: COLORS.brownDark,
    marginBottom: "10px",
    fontWeight: 400,
  },
  formDescription: {
    fontFamily: FONTS.secondary,
    fontSize: "1rem",
    color: COLORS.brownMedium,
    lineHeight: 1.6,
  },
  successMessage: {
    display: "flex",
    gap: "15px",
    padding: "20px",
    backgroundColor: "rgba(34, 197, 94, 0.1)",
    borderRadius: "12px",
    border: "1px solid rgba(34, 197, 94, 0.3)",
    marginBottom: "30px",
  },
  successIcon: {
    width: "24px",
    height: "24px",
    stroke: "#22c55e",
    flexShrink: 0,
    marginTop: "2px",
  },
  successTitle: {
    fontFamily: FONTS.secondary,
    fontSize: "1.1rem",
    fontWeight: 600,
    color: "#16a34a",
    marginBottom: "5px",
  },
  successText: {
    fontFamily: FONTS.secondary,
    fontSize: "0.95rem",
    color: "#166534",
    margin: 0,
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  formRow: {
    display: "flex",
    gap: "20px",
  },
  formGroup: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
  label: {
    fontFamily: FONTS.secondary,
    fontSize: "1rem",
    fontWeight: 600,
    color: COLORS.brownDark,
  },
  input: {
    fontFamily: FONTS.secondary,
    fontSize: "1rem",
    padding: "15px",
    border: `2px solid ${COLORS.pinkPastel}`,
    borderRadius: "10px",
    backgroundColor: "white",
    color: COLORS.brownDark,
    transition: "all 0.3s ease",
    outline: "none",
  },
  select: {
    fontFamily: FONTS.secondary,
    fontSize: "1rem",
    padding: "15px",
    border: `2px solid ${COLORS.pinkPastel}`,
    borderRadius: "10px",
    backgroundColor: "white",
    color: COLORS.brownDark,
    transition: "all 0.3s ease",
    outline: "none",
    cursor: "pointer",
  },
  textarea: {
    fontFamily: FONTS.secondary,
    fontSize: "1rem",
    padding: "15px",
    border: `2px solid ${COLORS.pinkPastel}`,
    borderRadius: "10px",
    backgroundColor: "white",
    color: COLORS.brownDark,
    transition: "all 0.3s ease",
    outline: "none",
    resize: "vertical",
    minHeight: "100px",
  },
  submitButton: {
    ...COMMON_STYLES.button,
    backgroundColor: COLORS.orangePrimary,
    color: "white",
    fontSize: "1.1rem",
    fontWeight: 600,
    padding: "18px 35px",
    marginTop: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    boxShadow: "0 10px 25px rgba(239, 113, 46, 0.3)",
  },
  submitButtonDisabled: {
    backgroundColor: COLORS.brownMedium,
    cursor: "not-allowed",
    opacity: 0.7,
  },
  submitIcon: {
    width: "18px",
    height: "18px",
    strokeWidth: 2,
  },

  // Informations de contact
  contactInfo: {
    display: "flex",
    flexDirection: "column",
    gap: "30px",
  },
  infoTitle: {
    fontFamily: FONTS.primary,
    fontSize: "2rem",
    color: COLORS.brownDark,
    marginBottom: "20px",
    fontWeight: 400,
  },
  contactMethods: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "15px",
  },
  contactMethod: {
    display: "flex",
    gap: "15px",
    padding: "20px",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: "15px",
    textDecoration: "none",
    transition: "all 0.3s ease",
    boxShadow: "0 10px 25px rgba(71, 49, 38, 0.1)",
    border: "1px solid rgba(248, 202, 241, 0.3)",
  },
  contactMethodIcon: {
    width: "50px",
    height: "50px",
    backgroundColor: COLORS.orangePrimary,
    borderRadius: "12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  contactMethodIconSvg: {
    width: "24px",
    height: "24px",
    stroke: "white",
    strokeWidth: 2,
  },
  contactMethodContent: {
    flex: 1,
  },
  contactMethodTitle: {
    fontFamily: FONTS.secondary,
    fontSize: "1.1rem",
    fontWeight: 600,
    color: COLORS.brownDark,
    marginBottom: "5px",
  },
  contactMethodValue: {
    fontFamily: FONTS.secondary,
    fontSize: "1rem",
    color: COLORS.orangePrimary,
    fontWeight: 600,
    marginBottom: "3px",
  },
  contactMethodDescription: {
    fontFamily: FONTS.secondary,
    fontSize: "0.9rem",
    color: COLORS.brownMedium,
    margin: 0,
  },

  // Horaires
  scheduleSection: {
    padding: "25px",
    backgroundColor: COLORS.pinkPastel,
    borderRadius: "15px",
  },
  scheduleTitle: {
    fontFamily: FONTS.secondary,
    fontSize: "1.2rem",
    fontWeight: 600,
    color: COLORS.brownDark,
    marginBottom: "20px",
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  scheduleIcon: {
    width: "20px",
    height: "20px",
    stroke: COLORS.orangePrimary,
    strokeWidth: 2,
  },
  scheduleList: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  scheduleItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontFamily: FONTS.secondary,
    fontSize: "1rem",
  },
  scheduleDay: {
    color: COLORS.brownDark,
    fontWeight: 500,
  },
  scheduleTime: {
    color: COLORS.orangePrimary,
    fontWeight: 600,
  },

  // Informations importantes
  importantInfo: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  infoCard: {
    display: "flex",
    gap: "12px",
    padding: "15px",
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    borderRadius: "12px",
    border: "1px solid rgba(239, 113, 46, 0.1)",
  },
  infoCardIcon: {
    width: "20px",
    height: "20px",
    stroke: COLORS.orangePrimary,
    strokeWidth: 2,
    flexShrink: 0,
    marginTop: "2px",
  },
  infoCardContent: {
    flex: 1,
  },
  infoCardTitle: {
    fontFamily: FONTS.secondary,
    fontSize: "1rem",
    fontWeight: 600,
    color: COLORS.brownDark,
    marginBottom: "5px",
  },
  infoCardText: {
    fontFamily: FONTS.secondary,
    fontSize: "0.9rem",
    color: COLORS.brownMedium,
    lineHeight: 1.5,
    margin: 0,
  },
};

export default Contact;

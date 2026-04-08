import { useState } from "react";

// ─── Paleta de colores ────────────────────────────────────────────────────────
const colors = {
  yellow: {
    50: "#FFFCE8", 100: "#FFF8C2", 200: "#FFF099", 300: "#FFE566",
    400: "#FFD81F", 500: "#F5C800", 600: "#D4AC00", 700: "#AD8C00",
    800: "#856C00", 900: "#5C4B00", 950: "#332900",
  },
  sage: {
    50: "#F2F6F4", 100: "#DDE9E5", 200: "#BBD2CB", 300: "#92B5AC",
    400: "#6C9890", 500: "#527E76", 600: "#426560", 700: "#334E4A",
    800: "#243836", 900: "#152220", 950: "#0B1210",
  },
  sand: {
    50: "#FDF8EE", 100: "#F9EED7", 200: "#F0DAAE", 300: "#E3C17E",
    400: "#D0A151", 500: "#BB8230", 600: "#9A6622", 700: "#79501A",
    800: "#5C3C14", 900: "#3D280C", 950: "#1F1206",
  },
  semantic: {
    success: "#3F9E5F",
    warning: "#F5A623",
    error: "#E05252",
    info: "#4A9CC7",
  },
};

const ui = {
  bg: colors.sand[50],
  surface: colors.sand[100],
  border: colors.sand[200],
  text: colors.sand[900],
  muted: colors.sand[700],
  primary: colors.yellow[500],
  secondary: colors.sage[500],
};

const f = {
  display: "'Nunito', sans-serif",
  body: "'Source Sans 3', sans-serif",
  mono: "'DM Mono', monospace",
};

// ─── Sub-componentes ──────────────────────────────────────────────────────────
const ColorSwatch = ({ name, hex, label, tall }) => (
  <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
    <div style={{
      backgroundColor: hex,
      height: tall ? 88 : 64,
      borderRadius: 10,
      border: `1px solid ${colors.sand[200]}`,
    }} />
    <span style={{ fontFamily: f.mono, fontSize: 10, color: ui.muted }}>{hex}</span>
    <span style={{ fontFamily: f.body, fontSize: 12, fontWeight: 600, color: ui.text }}>{name}</span>
    {label && <span style={{ fontFamily: f.body, fontSize: 11, color: ui.muted }}>{label}</span>}
  </div>
);

const Section = ({ number, title, children }) => (
  <div style={{ marginBottom: 56 }}>
    <div style={{ display: "flex", alignItems: "baseline", gap: 12, marginBottom: 24 }}>
      <span style={{ fontFamily: f.mono, fontSize: 11, color: ui.secondary, letterSpacing: "0.12em" }}>{number}</span>
      <h2 style={{ fontFamily: f.display, fontSize: 22, fontWeight: 700, color: ui.text, margin: 0, lineHeight: 1 }}>{title}</h2>
    </div>
    {children}
  </div>
);

const Pill = ({ children, bg, text }) => (
  <span style={{
    display: "inline-block", borderRadius: 999, padding: "4px 12px",
    backgroundColor: bg, color: text, fontFamily: f.body, fontSize: 12, fontWeight: 600,
  }}>{children}</span>
);

const Card = ({ children, style }) => (
  <div style={{
    backgroundColor: ui.surface, border: `1px solid ${ui.border}`,
    borderRadius: 16, padding: 20, ...style,
  }}>{children}</div>
);

// Canario SVG simplificado
const CanaryIcon = ({ size = 40, color = colors.yellow[500] }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="26" cy="26" rx="12" ry="9" fill={color} />
    <circle cx="33" cy="17" r="6" fill={color} />
    <circle cx="36" cy="15.5" r="1.8" fill={colors.sand[900]} />
    <circle cx="36.6" cy="15" r="0.7" fill="white" />
    <path d="M40 17 L47 14 L43 19 Z" fill={color} />
    <path d="M15 28 L7 33 L8 30 L15 28Z" fill={color} />
    <path d="M21 35 L19 42 L24 40.5 L26 35Z" fill={color} />
    <path d="M28 35 L26 43 L31 41 L32 35Z" fill={color} />
  </svg>
);

const Wordmark = ({ variant = "dark" }) => {
  const isDark = variant === "dark";
  return (
    <div style={{ fontFamily: f.display, lineHeight: 1 }}>
      <div style={{
        fontSize: 13, fontWeight: 600, letterSpacing: "0.2em",
        color: isDark ? colors.yellow[600] : colors.sand[600],
        textTransform: "uppercase", marginBottom: 2,
      }}>Amarillo</div>
      <div style={{
        fontSize: 34, fontWeight: 800, letterSpacing: "0.06em",
        color: isDark ? colors.yellow[400] : colors.sand[900],
        textTransform: "uppercase",
      }}>Canario</div>
      <div style={{
        fontSize: 10, fontWeight: 400, letterSpacing: "0.18em",
        color: isDark ? colors.sage[300] : colors.sage[500],
        marginTop: 5, textTransform: "uppercase",
      }}>Nutre lo que amas</div>
    </div>
  );
};

// ─── Componente principal ─────────────────────────────────────────────────────
export default function AmarilloCanarioBrandBook() {
  const [activeTab, setActiveTab] = useState("esencia");

  const tabs = [
    { id: "esencia",      label: "Esencia"     },
    { id: "logo",         label: "Logo"         },
    { id: "colores",      label: "Colores"      },
    { id: "tipografia",   label: "Tipografía"   },
    { id: "voz",          label: "Voz & Tono"   },
    { id: "aplicaciones", label: "Aplicaciones" },
  ];

  return (
    <div style={{ backgroundColor: ui.bg, minHeight: "100vh", fontFamily: f.body, color: ui.text }}>
      <link
        href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&family=Source+Sans+3:ital,wght@0,300;0,400;0,600;1,400&family=DM+Mono:wght@400;500&display=swap"
        rel="stylesheet"
      />

      {/* ── Header ── */}
      <header style={{
        position: "sticky", top: 0, zIndex: 50,
        backgroundColor: ui.bg + "F2", backdropFilter: "blur(20px)",
        borderBottom: `1px solid ${ui.border}`,
      }}>
        <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 0" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <CanaryIcon size={34} color={colors.yellow[500]} />
              <div>
                <div style={{ fontFamily: f.display, fontWeight: 800, fontSize: 16, color: ui.text, letterSpacing: "0.03em" }}>
                  Amarillo Canario
                </div>
                <div style={{ fontFamily: f.mono, fontSize: 10, color: ui.muted }}>Brand Guidelines v1.0</div>
              </div>
            </div>
            <Pill bg={colors.yellow[100]} text={colors.yellow[800]}>Marzo 2026</Pill>
          </div>
          <div style={{ display: "flex", gap: 2, overflowX: "auto", paddingBottom: 1 }}>
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  padding: "8px 16px", fontSize: 12, letterSpacing: "0.04em",
                  fontFamily: f.body, fontWeight: activeTab === tab.id ? 700 : 400,
                  color: activeTab === tab.id ? ui.text : ui.muted,
                  background: "transparent", border: "none", cursor: "pointer",
                  position: "relative", whiteSpace: "nowrap", transition: "color 0.15s",
                }}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <div style={{
                    position: "absolute", bottom: 0, left: 12, right: 12, height: 2,
                    borderRadius: 2, backgroundColor: colors.yellow[500],
                  }} />
                )}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* ── Contenido ── */}
      <main style={{ maxWidth: 960, margin: "0 auto", padding: "48px 24px" }}>

        {/* ══════════ ESENCIA ══════════ */}
        {activeTab === "esencia" && (
          <div>
            {/* Hero */}
            <div style={{
              backgroundColor: colors.sand[900], borderRadius: 24, padding: "56px 48px",
              marginBottom: 56, position: "relative", overflow: "hidden",
            }}>
              <div style={{ position: "absolute", right: 32, top: "50%", transform: "translateY(-50%)", opacity: 0.08 }}>
                <CanaryIcon size={220} color={colors.yellow[400]} />
              </div>
              <div style={{ fontFamily: f.mono, fontSize: 11, color: colors.sage[400], letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 20 }}>
                Marca · Alimentación nutritiva · México
              </div>
              <h1 style={{ fontFamily: f.display, fontWeight: 800, fontSize: 56, color: colors.yellow[400], lineHeight: 1.0, margin: "0 0 16px" }}>
                Amarillo<br />Canario
              </h1>
              <p style={{ fontFamily: f.display, fontWeight: 600, fontSize: 22, color: colors.sand[100], margin: "0 0 20px" }}>
                "Nutre lo que amas"
              </p>
              <p style={{ fontFamily: f.body, fontSize: 16, color: colors.sand[300], maxWidth: 500, lineHeight: 1.75, margin: 0 }}>
                Servicio de alimentación empacada en cadena de frío, nutritiva, psiconutritiva y accesible — con entregas semanales a domicilio. Para niños en crecimiento y adultos mayores en plenitud.
              </p>
            </div>

            <Section number="01" title="Posicionamiento">
              <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 12, marginBottom: 16 }}>
                {[
                  { label: "Audiencia", value: "Familias con niños (2-12 años) y cuidadores de adultos mayores (60+)" },
                  { label: "Categoría", value: "Alimentos empacados en cadena de frío con entrega semanal a domicilio" },
                  { label: "Diferenciador clave", value: "La única marca que integra nutrición psiconutritiva para dos etapas de vida en un solo servicio" },
                  { label: "Promesa de marca", value: "Comida real, nutritiva y accesible en tu puerta cada semana" },
                ].map(({ label, value }) => (
                  <Card key={label}>
                    <div style={{ fontFamily: f.body, fontSize: 11, fontWeight: 600, color: ui.secondary, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 6 }}>{label}</div>
                    <div style={{ fontFamily: f.body, fontSize: 14, color: ui.text, lineHeight: 1.55 }}>{value}</div>
                  </Card>
                ))}
              </div>
              <div style={{ backgroundColor: colors.yellow[50], border: `1px solid ${colors.yellow[200]}`, borderRadius: 12, padding: "14px 20px" }}>
                <span style={{ fontFamily: f.body, fontSize: 11, fontWeight: 600, color: colors.yellow[700], textTransform: "uppercase", letterSpacing: "0.08em" }}>Anti-posicionamiento</span>
                <p style={{ fontFamily: f.body, fontSize: 14, color: colors.sand[800], margin: "6px 0 0", lineHeight: 1.6 }}>
                  Amarillo Canario <strong>no es</strong> fast food · no es clínico ni frío · no es un lujo inalcanzable · no es solo para personas enfermas · no es impersonal ni genérico
                </p>
              </div>
            </Section>

            <Section number="02" title="Personalidad & Tono">
              <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 10, marginBottom: 24 }}>
                {[
                  { emoji: "🌿", word: "Nutritivo",  desc: "Con propósito y ciencia" },
                  { emoji: "💛", word: "Cálido",     desc: "Como el sol del canario" },
                  { emoji: "🔬", word: "Confiable",  desc: "Evidencia accesible" },
                  { emoji: "🚪", word: "Cercano",    desc: "Llega a tu puerta" },
                  { emoji: "🎶", word: "Alegre",     desc: "Comer bien es celebrar" },
                ].map(({ emoji, word, desc }) => (
                  <Card key={word} style={{ textAlign: "center", padding: 16 }}>
                    <div style={{ fontSize: 28, marginBottom: 8 }}>{emoji}</div>
                    <div style={{ fontFamily: f.display, fontWeight: 700, fontSize: 13, color: ui.text, marginBottom: 4 }}>{word}</div>
                    <div style={{ fontFamily: f.body, fontSize: 11, color: ui.muted, lineHeight: 1.4 }}>{desc}</div>
                  </Card>
                ))}
              </div>
            </Section>

            <Section number="03" title="Pilares de Marca">
              <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 12 }}>
                {[
                  { n: "01", title: "Ciencia con corazón",    desc: "Formulación nutricional y psiconutritiva basada en evidencia para cada etapa de vida.",        accent: colors.yellow[500] },
                  { n: "02", title: "Calidez en cada entrega", desc: "Una canasta semanal diseñada como un abrazo — conveniente, predecible, reconfortante.",         accent: colors.sage[500]   },
                  { n: "03", title: "Frescura garantizada",    desc: "Cadena de frío ininterrumpida: del origen a tu puerta en condiciones óptimas.",                accent: colors.sand[400]   },
                  { n: "04", title: "Para todos, siempre",     desc: "Accesible en precio, porciones y formato para niños y adultos mayores por igual.",             accent: colors.yellow[400] },
                ].map(({ n, title, desc, accent }) => (
                  <Card key={n}>
                    <div style={{ fontFamily: f.mono, fontSize: 11, color: accent, marginBottom: 8 }}>{n}</div>
                    <div style={{ fontFamily: f.display, fontWeight: 700, fontSize: 15, color: ui.text, marginBottom: 8 }}>{title}</div>
                    <div style={{ fontFamily: f.body, fontSize: 13, color: ui.muted, lineHeight: 1.6 }}>{desc}</div>
                  </Card>
                ))}
              </div>
            </Section>

            <Section number="04" title="Metáfora Central">
              <div style={{ backgroundColor: colors.yellow[50], border: `1px solid ${colors.yellow[200]}`, borderRadius: 20, padding: "28px 32px", display: "flex", gap: 24, alignItems: "center" }}>
                <CanaryIcon size={72} color={colors.yellow[500]} />
                <p style={{ fontFamily: f.body, fontSize: 15, color: ui.text, lineHeight: 1.75, margin: 0, flex: 1 }}>
                  El <strong>canario amarillo</strong> es símbolo histórico de vitalidad y alerta: un ave que canta cuando el ambiente es sano. Así como el canario indica aire limpio, <strong>Amarillo Canario</strong> es el indicador de que tu familia está bien nutrida — visible, alegre y presente cada semana en tu hogar.
                </p>
              </div>
            </Section>
          </div>
        )}

        {/* ══════════ LOGO ══════════ */}
        {activeTab === "logo" && (
          <div>
            <Section number="01" title="Wordmark + Isotipo">
              <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16, marginBottom: 16 }}>
                {[
                  { bg: colors.sand[900], variant: "dark",   label: "Sobre fondo oscuro" },
                  { bg: colors.sand[50],  variant: "light",  label: "Sobre fondo claro", bordered: true },
                  { bg: colors.sage[500], variant: "sage",   label: "Sobre Verde Salvia" },
                  { bg: colors.yellow[500], variant: "yellow", label: "Sobre Amarillo Canario" },
                ].map(({ bg, variant, label, bordered }) => (
                  <div key={label} style={{
                    backgroundColor: bg, borderRadius: 20, padding: "40px 32px",
                    display: "flex", flexDirection: "column", alignItems: "center", gap: 20,
                    border: bordered ? `1px solid ${colors.sand[200]}` : "none",
                  }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                      <CanaryIcon size={52}
                        color={variant === "light" ? colors.yellow[500] : variant === "yellow" ? colors.sand[900] : colors.yellow[400]}
                      />
                      <div style={{ fontFamily: f.display, lineHeight: 1 }}>
                        <div style={{
                          fontSize: 12, fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 2,
                          color: variant === "dark" ? colors.yellow[600] : variant === "light" ? colors.sand[600] : variant === "sage" ? colors.sage[200] : colors.sand[700],
                        }}>Amarillo</div>
                        <div style={{
                          fontSize: 30, fontWeight: 800, letterSpacing: "0.06em", textTransform: "uppercase",
                          color: variant === "dark" ? colors.yellow[400] : variant === "light" ? colors.sand[900] : variant === "sage" ? colors.yellow[300] : colors.sand[900],
                        }}>Canario</div>
                        <div style={{
                          fontSize: 9, fontWeight: 400, letterSpacing: "0.18em", textTransform: "uppercase", marginTop: 4,
                          color: variant === "dark" ? colors.sage[400] : variant === "light" ? colors.sage[500] : variant === "sage" ? colors.sage[200] : colors.sand[700],
                        }}>Nutre lo que amas</div>
                      </div>
                    </div>
                    <Pill
                      bg={variant === "dark" ? colors.sand[800] : variant === "sage" ? colors.sage[700] : variant === "yellow" ? colors.yellow[400] : colors.sand[100]}
                      text={variant === "dark" ? colors.sand[200] : variant === "sage" ? colors.sage[100] : variant === "yellow" ? colors.sand[900] : colors.sand[600]}
                    >{label}</Pill>
                  </div>
                ))}
              </div>
            </Section>

            <Section number="02" title="Isotipo Solo">
              <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 10 }}>
                {[
                  { bg: colors.sand[900], color: colors.yellow[400], label: "Principal"  },
                  { bg: colors.sand[50],  color: colors.yellow[500], label: "Claro", brd: true },
                  { bg: colors.sage[500], color: colors.yellow[300], label: "Salvia"     },
                  { bg: colors.yellow[500], color: colors.sand[900], label: "Amarillo"   },
                  { bg: colors.sand[100], color: colors.sand[700],   label: "Mono"       },
                  { bg: colors.sand[800], color: colors.sand[200],   label: "Mono inv."  },
                ].map(({ bg, color, label, brd }) => (
                  <div key={label} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
                    <div style={{
                      backgroundColor: bg, borderRadius: 16, width: "100%", aspectRatio: "1",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      border: brd ? `1px solid ${colors.sand[200]}` : "none",
                    }}>
                      <CanaryIcon size={36} color={color} />
                    </div>
                    <span style={{ fontFamily: f.body, fontSize: 10, color: ui.muted, textAlign: "center" }}>{label}</span>
                  </div>
                ))}
              </div>
            </Section>

            <Section number="03" title="Reglas del Logo">
              <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16 }}>
                <div style={{ backgroundColor: "#F0FDF4", border: "1px solid #BBF7D0", borderRadius: 16, padding: 20 }}>
                  <div style={{ fontFamily: f.display, fontWeight: 700, fontSize: 14, color: colors.semantic.success, marginBottom: 12 }}>✅ Hacer</div>
                  {["Mantener el espacio libre mínimo en todos los lados", "Usar sobre fondos con suficiente contraste (4.5:1 mínimo)", "Emplear únicamente las variantes aprobadas", "Usar el wordmark completo en contextos de marca primaria", "Isotipo solo: solo en íconos de app y avatares"].map(r => (
                    <div key={r} style={{ fontFamily: f.body, fontSize: 13, color: colors.sand[800], padding: "5px 0", borderBottom: "1px solid #D1FAE5", lineHeight: 1.4 }}>• {r}</div>
                  ))}
                </div>
                <div style={{ backgroundColor: "#FEF2F2", border: "1px solid #FECACA", borderRadius: 16, padding: 20 }}>
                  <div style={{ fontFamily: f.display, fontWeight: 700, fontSize: 14, color: colors.semantic.error, marginBottom: 12 }}>❌ No hacer</div>
                  {["Rotar o inclinar el logo", "Aplicar sombras, gradientes o efectos visuales", "Cambiar colores por tonos no aprobados", "Deformar o estirar las proporciones", "Colocar texto encima del isotipo"].map(r => (
                    <div key={r} style={{ fontFamily: f.body, fontSize: 13, color: colors.sand[800], padding: "5px 0", borderBottom: "1px solid #FEE2E2", lineHeight: 1.4 }}>• {r}</div>
                  ))}
                </div>
              </div>
            </Section>
          </div>
        )}

        {/* ══════════ COLORES ══════════ */}
        {activeTab === "colores" && (
          <div>
            <Section number="01" title="Paleta Principal">
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, marginBottom: 8 }}>
                <ColorSwatch name="Amarillo Canario" hex={colors.yellow[500]} label="Primario · #F5C800" tall />
                <ColorSwatch name="Verde Salvia"     hex={colors.sage[500]}   label="Secundario · #527E76" tall />
                <ColorSwatch name="Arena Texto"      hex={colors.sand[900]}   label="Texto · #3D280C" tall />
                <ColorSwatch name="Arena Fondo"      hex={colors.sand[50]}    label="Fondo · #FDF8EE" tall />
              </div>
            </Section>

            <Section number="02" title="Escala — Amarillo Canario">
              <div style={{ display: "grid", gridTemplateColumns: "repeat(11, 1fr)", gap: 4 }}>
                {Object.entries(colors.yellow).map(([scale, hex]) => (
                  <div key={scale} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
                    <div style={{ width: "100%", aspectRatio: "1", borderRadius: 6, backgroundColor: hex, border: scale === "50" ? `1px solid ${colors.sand[200]}` : "none" }} />
                    <span style={{ fontFamily: f.mono, fontSize: 8, color: ui.muted }}>{scale}</span>
                  </div>
                ))}
              </div>
            </Section>

            <Section number="03" title="Escala — Verde Salvia">
              <div style={{ display: "grid", gridTemplateColumns: "repeat(11, 1fr)", gap: 4 }}>
                {Object.entries(colors.sage).map(([scale, hex]) => (
                  <div key={scale} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
                    <div style={{ width: "100%", aspectRatio: "1", borderRadius: 6, backgroundColor: hex }} />
                    <span style={{ fontFamily: f.mono, fontSize: 8, color: ui.muted }}>{scale}</span>
                  </div>
                ))}
              </div>
            </Section>

            <Section number="04" title="Escala — Arena Cálida (Neutros)">
              <div style={{ display: "grid", gridTemplateColumns: "repeat(11, 1fr)", gap: 4 }}>
                {Object.entries(colors.sand).map(([scale, hex]) => (
                  <div key={scale} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
                    <div style={{ width: "100%", aspectRatio: "1", borderRadius: 6, backgroundColor: hex, border: scale === "50" ? `1px solid ${colors.sand[200]}` : "none" }} />
                    <span style={{ fontFamily: f.mono, fontSize: 8, color: ui.muted }}>{scale}</span>
                  </div>
                ))}
              </div>
            </Section>

            <Section number="05" title="Colores Semánticos">
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12 }}>
                <ColorSwatch name="Éxito"       hex={colors.semantic.success} label="Entregas · Nutrición completa" />
                <ColorSwatch name="Advertencia" hex={colors.semantic.warning} label="Alérgenos · Avisos" />
                <ColorSwatch name="Error"       hex={colors.semantic.error}   label="Errores · Cancelaciones" />
                <ColorSwatch name="Info"        hex={colors.semantic.info}    label="Datos nutricionales" />
              </div>
            </Section>

            <Section number="06" title="Proporciones de Color">
              <div style={{ borderRadius: 12, overflow: "hidden", height: 44, display: "flex", marginBottom: 12 }}>
                <div style={{ flex: 60, backgroundColor: colors.sand[200] }} title="Arena 60%" />
                <div style={{ flex: 25, backgroundColor: colors.yellow[500] }} title="Amarillo 25%" />
                <div style={{ flex: 10, backgroundColor: colors.sage[500] }} title="Salvia 10%" />
                <div style={{ flex: 5,  backgroundColor: colors.semantic.success }} title="Semánticos 5%" />
              </div>
              <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
                {[["Arena Cálida", "60%", colors.sand[300]], ["Amarillo Canario", "25%", colors.yellow[500]], ["Verde Salvia", "10%", colors.sage[500]], ["Semánticos", "5%", colors.semantic.success]].map(([name, pct, c]) => (
                  <div key={name} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <div style={{ width: 12, height: 12, borderRadius: "50%", backgroundColor: c, border: `1px solid ${colors.sand[300]}` }} />
                    <span style={{ fontFamily: f.body, fontSize: 13, color: ui.muted }}>{name} <strong style={{ color: ui.text }}>{pct}</strong></span>
                  </div>
                ))}
              </div>
            </Section>
          </div>
        )}

        {/* ══════════ TIPOGRAFÍA ══════════ */}
        {activeTab === "tipografia" && (
          <div>
            <Section number="01" title="Sistema de Fuentes">
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginBottom: 16 }}>
                {[
                  { role: "Display / Títulos", family: "Nunito",         weights: "400 · 600 · 700 · 800", usage: "Headings, taglines, nombres de platillos",            sample: "Nutre lo que amas",         font: f.display, size: 26, weight: 800 },
                  { role: "Cuerpo / UI",        family: "Source Sans 3",  weights: "300 · 400 · 600",       usage: "Body text, botones, instrucciones, navegación",       sample: "Comida real para tu familia.", font: f.body,    size: 18, weight: 400 },
                  { role: "Datos / Mono",       family: "DM Mono",        weights: "400 · 500",             usage: "Calorías, precios, IDs de pedido, macronutrientes",   sample: "300 kcal · $85 MXN",          font: f.mono,    size: 16, weight: 400 },
                ].map(({ role, family, weights, usage, sample, font, size, weight }) => (
                  <Card key={family}>
                    <div style={{ fontFamily: f.mono, fontSize: 9, color: ui.secondary, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 4 }}>{role}</div>
                    <div style={{ fontFamily: font, fontSize: size, fontWeight: weight, color: ui.text, marginBottom: 14, lineHeight: 1.3 }}>{sample}</div>
                    <div style={{ fontFamily: f.body, fontSize: 13, fontWeight: 600, color: ui.text, marginBottom: 2 }}>{family}</div>
                    <div style={{ fontFamily: f.mono, fontSize: 10, color: ui.muted, marginBottom: 6 }}>{weights}</div>
                    <div style={{ fontFamily: f.body, fontSize: 12, color: ui.muted, lineHeight: 1.5 }}>{usage}</div>
                  </Card>
                ))}
              </div>
            </Section>

            <Section number="02" title="Escala Tipográfica">
              <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                {[
                  { name: "Display · 56px",   sample: "Amarillo Canario",                            font: f.display, size: "56px", weight: 800 },
                  { name: "H1 · 40px",         sample: "Tu canasta semanal",                          font: f.display, size: "40px", weight: 700 },
                  { name: "H2 · 32px",         sample: "Platillos de esta semana",                    font: f.display, size: "32px", weight: 700 },
                  { name: "H3 · 24px",         sample: "Pollo con verduras de temporada",             font: f.display, size: "24px", weight: 600 },
                  { name: "Body LG · 18px",    sample: "Cada platillo está formulado con evidencia nutricional.",  font: f.body, size: "18px", weight: 400 },
                  { name: "Body · 16px ★",     sample: "Tu canasta llega cada semana directo a tu puerta, en cadena de frío.", font: f.body, size: "16px", weight: 400 },
                  { name: "Label · 12px",      sample: "APTO PARA NIÑOS · ADULTOS MAYORES",           font: f.body, size: "12px", weight: 600, upper: true, spacing: "0.1em" },
                  { name: "Mono · 13px",       sample: "300 kcal · 22g proteína · $85.00 MXN",        font: f.mono, size: "13px", weight: 400 },
                ].map(({ name, sample, font, size, weight, upper, spacing }) => (
                  <div key={name} style={{ display: "flex", alignItems: "baseline", gap: 16, padding: "14px 0", borderBottom: `1px solid ${ui.border}` }}>
                    <div style={{ fontFamily: f.mono, fontSize: 10, color: ui.muted, minWidth: 130, flexShrink: 0 }}>{name}</div>
                    <div style={{ fontFamily: font, fontSize: size, fontWeight: weight, color: ui.text, lineHeight: 1.2, textTransform: upper ? "uppercase" : "none", letterSpacing: spacing || 0, flex: 1 }}>{sample}</div>
                  </div>
                ))}
              </div>
            </Section>

            <Section number="03" title="Reglas de Uso">
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10 }}>
                {[
                  { r: "Line-height mínimo 1.5 en cuerpo de texto — accesibilidad para adultos mayores" },
                  { r: "Tamaño mínimo de texto: 16px — legible para ambas audiencias" },
                  { r: "Nunito solo en peso 400 o superior para texto corrido" },
                  { r: "Máximo 2 familias tipográficas por pantalla" },
                  { r: "DM Mono para toda información nutricional — transmite rigor científico" },
                  { r: "Labels siempre en uppercase con tracking +0.08em o mayor" },
                ].map(({ r }) => (
                  <div key={r} style={{ backgroundColor: colors.sage[50], border: `1px solid ${colors.sage[100]}`, borderRadius: 12, padding: 14 }}>
                    <div style={{ fontFamily: f.body, fontSize: 13, color: colors.sand[800], lineHeight: 1.5 }}>• {r}</div>
                  </div>
                ))}
              </div>
            </Section>
          </div>
        )}

        {/* ══════════ VOZ Y TONO ══════════ */}
        {activeTab === "voz" && (
          <div>
            <Section number="01" title="Principios de Voz">
              <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 8 }}>
                {[
                  { trait: "Cálido",                do: '"Tu canasta de esta semana está lista 💛"',                  dont: '"Su pedido ha sido procesado exitosamente."' },
                  { trait: "Científico-accesible",  do: '"Rico en omega-3, bueno para el cerebro en crecimiento"',    dont: '"Contiene DHA 400mg para el desarrollo neuronal."' },
                  { trait: "Cercano",               do: '"¿Sabes qué tiene de especial este platillo?"',               dont: '"Descripción del producto: proteínas + carbohidratos."' },
                  { trait: "Alegre",                do: '"¡El canario ya voló a tu puerta! 🐦"',                       dont: '"Entrega realizada con éxito."' },
                  { trait: "Empoderador",           do: '"Tú decides qué come tu familia"',                            dont: '"Seleccione su menú de la lista disponible."' },
                ].map(({ trait, do: doText, dont }) => (
                  <div key={trait} style={{ borderRadius: 14, overflow: "hidden", border: `1px solid ${ui.border}` }}>
                    <div style={{ padding: "8px 16px", backgroundColor: colors.yellow[50] }}>
                      <span style={{ fontFamily: f.display, fontWeight: 700, fontSize: 13, color: colors.sand[800] }}>{trait}</span>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
                      <div style={{ padding: 16, backgroundColor: "#F0FDF4", borderRight: `1px solid ${ui.border}` }}>
                        <div style={{ fontFamily: f.mono, fontSize: 9, color: colors.semantic.success, marginBottom: 6, letterSpacing: "0.1em" }}>✅ SÍ</div>
                        <div style={{ fontFamily: f.body, fontSize: 13, color: colors.sand[800], lineHeight: 1.55, fontStyle: "italic" }}>{doText}</div>
                      </div>
                      <div style={{ padding: 16, backgroundColor: "#FEF2F2" }}>
                        <div style={{ fontFamily: f.mono, fontSize: 9, color: colors.semantic.error, marginBottom: 6, letterSpacing: "0.1em" }}>❌ NO</div>
                        <div style={{ fontFamily: f.body, fontSize: 13, color: colors.sand[800], lineHeight: 1.55, fontStyle: "italic" }}>{dont}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Section>

            <Section number="02" title="Glosario de Marca">
              <div style={{ borderRadius: 16, overflow: "hidden", border: `1px solid ${ui.border}` }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", backgroundColor: ui.surface }}>
                  <div style={{ padding: "10px 16px", fontFamily: f.body, fontSize: 11, fontWeight: 600, color: ui.muted, borderBottom: `1px solid ${ui.border}`, textTransform: "uppercase", letterSpacing: "0.06em" }}>Término interno</div>
                  <div style={{ padding: "10px 16px", fontFamily: f.body, fontSize: 11, fontWeight: 600, color: ui.secondary, borderBottom: `1px solid ${ui.border}`, textTransform: "uppercase", letterSpacing: "0.06em" }}>Lenguaje de marca</div>
                </div>
                {[
                  ["Pedido semanal",               "Canasta"],
                  ["Meal / platillo",              "Porción amorosa"],
                  ["Cliente",                      "Familia Canario"],
                  ["Entrega",                      "Vuelo semanal"],
                  ["Suscripción",                  "Plan de nutrición"],
                  ["Nutrición para adultos mayores","Nutrición de madurez plena"],
                  ["Nutrición para niños",         "Nutrición en crecimiento"],
                ].map(([internal, brand], i, arr) => (
                  <div key={internal} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", borderBottom: i < arr.length - 1 ? `1px solid ${ui.border}` : "none" }}>
                    <div style={{ padding: "10px 16px", fontFamily: f.body, fontSize: 14, color: ui.muted }}>{internal}</div>
                    <div style={{ padding: "10px 16px", fontFamily: f.display, fontSize: 14, fontWeight: 700, color: ui.text }}>{brand}</div>
                  </div>
                ))}
              </div>
            </Section>
          </div>
        )}

        {/* ══════════ APLICACIONES ══════════ */}
        {activeTab === "aplicaciones" && (
          <div>
            <Section number="01" title="Botones">
              <div style={{ backgroundColor: ui.surface, border: `1px solid ${ui.border}`, borderRadius: 16, padding: 28, display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 12 }}>
                {[
                  { label: "Agregar a canasta",  bg: colors.yellow[500],    text: colors.sand[950],    brd: "none" },
                  { label: "Ver platillos",       bg: colors.sage[100],      text: colors.sage[700],    brd: `1px solid ${colors.sage[200]}` },
                  { label: "Ver más detalles",    bg: "transparent",         text: colors.sand[700],    brd: `1px solid ${colors.sand[300]}` },
                  { label: "Cancelar pedido",     bg: colors.semantic.error, text: "#fff",              brd: "none" },
                ].map(({ label, bg, text, brd }) => (
                  <button key={label} style={{ backgroundColor: bg, color: text, border: brd, borderRadius: 12, padding: "12px 22px", fontFamily: f.body, fontSize: 14, fontWeight: 600, cursor: "pointer" }}>
                    {label}
                  </button>
                ))}
              </div>
              <div style={{ backgroundColor: colors.sand[900], borderRadius: 16, padding: 28, display: "flex", flexWrap: "wrap", gap: 12 }}>
                {[
                  { label: "Agregar a canasta", bg: colors.yellow[500],   text: colors.sand[950], brd: "none" },
                  { label: "Ver platillos",      bg: colors.sage[700],     text: colors.sage[100], brd: "none" },
                  { label: "Ver detalles",       bg: "transparent",        text: colors.sand[100], brd: `1px solid ${colors.sand[700]}` },
                ].map(({ label, bg, text, brd }) => (
                  <button key={label} style={{ backgroundColor: bg, color: text, border: brd, borderRadius: 12, padding: "12px 22px", fontFamily: f.body, fontSize: 14, fontWeight: 600, cursor: "pointer" }}>
                    {label}
                  </button>
                ))}
              </div>
            </Section>

            <Section number="02" title="Cards de Producto">
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
                {[
                  { name: "Pollo con verduras de temporada",    tags: ["🧒 Niños", "👴 Adultos mayores"], kcal: 300, prot: 22, price: 85,  badge: "🌿 Psiconutritivo" },
                  { name: "Salmón al vapor con arroz integral", tags: ["👴 Adultos mayores"],             kcal: 380, prot: 28, price: 110, badge: "⭐ Recomendado"   },
                  { name: "Pasta de colores con queso cottage", tags: ["🧒 Niños"],                       kcal: 260, prot: 14, price: 72,  badge: "🌿 Psiconutritivo" },
                ].map(({ name, tags, kcal, prot, price, badge }) => (
                  <div key={name} style={{ backgroundColor: ui.surface, border: `1px solid ${ui.border}`, borderRadius: 20, overflow: "hidden", boxShadow: "0 2px 8px rgba(61,40,12,0.08)" }}>
                    <div style={{ height: 112, backgroundColor: colors.yellow[50], display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <CanaryIcon size={52} color={colors.yellow[400]} />
                    </div>
                    <div style={{ padding: 16 }}>
                      <Pill bg={colors.yellow[100]} text={colors.yellow[700]}>{badge}</Pill>
                      <div style={{ fontFamily: f.display, fontWeight: 700, fontSize: 14, color: ui.text, margin: "10px 0 6px", lineHeight: 1.35 }}>{name}</div>
                      <div style={{ display: "flex", gap: 6, marginBottom: 8, flexWrap: "wrap" }}>
                        {tags.map(t => <span key={t} style={{ fontFamily: f.body, fontSize: 11, color: ui.muted }}>{t}</span>)}
                      </div>
                      <div style={{ fontFamily: f.mono, fontSize: 11, color: ui.muted, marginBottom: 12 }}>{kcal} kcal · {prot}g proteína</div>
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <span style={{ fontFamily: f.display, fontWeight: 800, fontSize: 18, color: ui.text }}>
                          ${price} <span style={{ fontSize: 11, fontWeight: 400, fontFamily: f.body }}>MXN</span>
                        </span>
                        <button style={{ backgroundColor: colors.yellow[500], color: colors.sand[950], border: "none", borderRadius: 10, padding: "8px 14px", fontFamily: f.body, fontSize: 12, fontWeight: 600, cursor: "pointer" }}>
                          Agregar
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Section>

            <Section number="03" title="Badges & Chips">
              <div style={{ backgroundColor: ui.surface, border: `1px solid ${ui.border}`, borderRadius: 16, padding: 24, display: "flex", flexWrap: "wrap", gap: 10 }}>
                {[
                  { label: "🧒 Niños (2-12 años)",      bg: colors.yellow[100],    text: colors.yellow[800]   },
                  { label: "👴 Adultos Mayores (60+)",   bg: colors.sage[100],      text: colors.sage[700]     },
                  { label: "🌿 Psiconutritivo",          bg: colors.sage[50],       text: colors.sage[600]     },
                  { label: "⭐ Recomendado",             bg: colors.yellow[500],    text: colors.sand[950]     },
                  { label: "❄️ Cadena de frío",          bg: "#EFF6FF",             text: "#1D4ED8"             },
                  { label: "✅ Sin gluten",              bg: "#F0FDF4",             text: "#166534"             },
                  { label: "🚚 Entrega semanal",         bg: colors.sand[100],      text: colors.sand[700]     },
                  { label: "🧊 Fresco garantizado",      bg: "#F0F9FF",             text: "#0369A1"             },
                ].map(({ label, bg, text }) => (
                  <Pill key={label} bg={bg} text={text}>{label}</Pill>
                ))}
              </div>
            </Section>
          </div>
        )}

      </main>

      {/* ── Footer ── */}
      <footer style={{ borderTop: `1px solid ${ui.border}`, marginTop: 48, padding: "28px 0" }}>
        <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <CanaryIcon size={20} color={colors.yellow[500]} />
            <span style={{ fontFamily: f.mono, fontSize: 11, color: ui.muted }}>Amarillo Canario Brand Guidelines v1.0 · Marzo 2026</span>
          </div>
          <span style={{ fontFamily: f.mono, fontSize: 11, color: ui.muted }}>marca@amarillocanario.mx</span>
        </div>
      </footer>
    </div>
  );
}

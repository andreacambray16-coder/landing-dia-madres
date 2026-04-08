import { useState } from "react";

// ─── Color System ────────────────────────────────────────────────────────────
const colors = {
  bg: "#0D0D0B",
  surface: "#1A1A18",
  surface2: "#2A2A26",
  border: "#3E3E3A",
  text: "#F5F5F0",
  textSecondary: "#6B6B6B",
  textDisabled: "#A8A8A2",
  primary: {
    50: "#FEFDE7", 100: "#FEFBC0", 200: "#FEF682",
    300: "#FEED42", 400: "#F9DC10", 500: "#F5E500",
    600: "#CDB800", 700: "#A08E00", 800: "#736600",
    900: "#4A4200", 950: "#292500",
    main: "#F5E500",
  },
  accent: {
    50: "#FFF0F0", 100: "#FFDEDE", 200: "#FFBCBC",
    300: "#FF8A8A", 400: "#FF5757", 500: "#FF2B2B",
    600: "#E01010", 700: "#B80A0A", 800: "#8F0808",
    900: "#5C0505", 950: "#340303",
    main: "#FF2B2B",
  },
  neutral: {
    50: "#F5F5F0", 100: "#E8E8E2", 200: "#D0D0CA",
    300: "#A8A8A2", 400: "#808078", 500: "#6B6B6B",
    600: "#3E3E3A", 700: "#2A2A26", 800: "#1A1A18",
    900: "#0F0F0E", 950: "#0D0D0B",
  },
  feedback: {
    success: "#22C55E",
    warning: "#F5E500",
    error: "#FF2B2B",
    info: "#38BDF8",
  },
};

const fonts = {
  display: "'Bebas Neue', sans-serif",
  body: "'Space Grotesk', sans-serif",
  mono: "'Space Mono', monospace",
};

// ─── Sub-components ───────────────────────────────────────────────────────────
const ColorSwatch = ({ name, hex, subtitle, tall }) => (
  <div className="flex flex-col gap-1">
    <div
      className={`w-full rounded border ${tall ? "h-24" : "h-16"}`}
      style={{ backgroundColor: hex, borderColor: colors.border }}
    />
    <span style={{ fontFamily: fonts.mono, fontSize: 11, color: colors.primary.main }}>{hex}</span>
    <span style={{ fontSize: 12, fontWeight: 500, color: colors.text, fontFamily: fonts.body }}>{name}</span>
    {subtitle && <span style={{ fontSize: 11, color: colors.textSecondary, fontFamily: fonts.mono }}>{subtitle}</span>}
  </div>
);

const Section = ({ title, number, children }) => (
  <div className="mb-16">
    <div className="flex items-baseline gap-3 mb-8">
      <span style={{ fontFamily: fonts.mono, fontSize: 11, color: colors.primary.main, letterSpacing: "0.1em" }}>{number}</span>
      <h2 style={{ fontFamily: fonts.display, fontSize: 32, color: colors.text, letterSpacing: "0.03em" }}>{title}</h2>
    </div>
    {children}
  </div>
);

const Tag = ({ children, color }) => (
  <span style={{
    fontFamily: fonts.mono, fontSize: 10, letterSpacing: "0.1em",
    backgroundColor: color || colors.surface2,
    color: color ? colors.bg : colors.textSecondary,
    padding: "3px 8px", borderRadius: 2, display: "inline-block"
  }}>{children}</span>
);

const Wordmark = ({ variant = "dark" }) => {
  const bg = variant === "dark" ? colors.bg : variant === "yellow" ? colors.primary.main : colors.neutral[50];
  const textColor = variant === "yellow" ? colors.bg : variant === "light" ? colors.bg : colors.primary.main;
  const dotColor = variant === "yellow" ? colors.accent.main : colors.accent.main;
  return (
    <div style={{ backgroundColor: bg, padding: "32px 40px", borderRadius: 8, display: "inline-flex", alignItems: "center", gap: 12 }}>
      <span style={{ color: dotColor, fontFamily: fonts.display, fontSize: 28 }}>◆</span>
      <span style={{ fontFamily: fonts.display, fontSize: 48, color: textColor, letterSpacing: "0.04em", lineHeight: 1 }}>PLAYBOOK</span>
    </div>
  );
};

const PillButton = ({ children, variant = "primary" }) => {
  const styles = {
    primary: { bg: colors.primary.main, color: colors.bg, border: "none" },
    secondary: { bg: colors.accent.main, color: colors.text, border: "none" },
    ghost: { bg: "transparent", color: colors.text, border: `1px solid ${colors.border}` },
    ghostAccent: { bg: "transparent", color: colors.primary.main, border: `1px solid ${colors.primary.main}` },
  };
  const s = styles[variant];
  return (
    <div style={{
      backgroundColor: s.bg, color: s.color,
      border: s.border, padding: "12px 28px",
      borderRadius: 4, display: "inline-block",
      fontFamily: fonts.body, fontSize: 13,
      fontWeight: 500, letterSpacing: "0.08em",
      textTransform: "uppercase", cursor: "pointer",
    }}>{children}</div>
  );
};

// ─── Main Component ───────────────────────────────────────────────────────────
export default function PlaybookBrandGuidelines() {
  const [activeTab, setActiveTab] = useState("overview");

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "logo", label: "Logo" },
    { id: "colors", label: "Colores" },
    { id: "typography", label: "Tipografía" },
    { id: "voice", label: "Voz & Tono" },
    { id: "applications", label: "Aplicaciones" },
  ];

  return (
    <div style={{ backgroundColor: colors.bg, minHeight: "100vh", fontFamily: fonts.body, color: colors.text }}>
      <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Space+Grotesk:wght@300;400;500;600;700&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet" />

      {/* Header */}
      <header style={{
        position: "sticky", top: 0, zIndex: 50,
        backgroundColor: colors.bg + "F2",
        backdropFilter: "blur(20px)",
        borderBottom: `1px solid ${colors.border}`,
      }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 0" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{ color: colors.accent.main, fontFamily: fonts.display, fontSize: 18 }}>◆</span>
              <span style={{ fontFamily: fonts.display, fontSize: 24, color: colors.primary.main, letterSpacing: "0.05em" }}>PLAYBOOK</span>
            </div>
            <span style={{ fontFamily: fonts.mono, fontSize: 10, color: colors.textSecondary, letterSpacing: "0.1em" }}>BRAND GUIDELINES v1.0</span>
          </div>
          <div style={{ display: "flex", gap: 4, overflowX: "auto", paddingBottom: 0 }}>
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  padding: "10px 16px",
                  background: "none", border: "none",
                  fontFamily: fonts.body,
                  fontSize: 13, letterSpacing: "0.03em",
                  cursor: "pointer", position: "relative",
                  color: activeTab === tab.id ? colors.text : colors.textSecondary,
                  fontWeight: activeTab === tab.id ? 500 : 400,
                  whiteSpace: "nowrap",
                  transition: "color 150ms",
                }}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <div style={{
                    position: "absolute", bottom: 0, left: 16, right: 16, height: 2,
                    backgroundColor: colors.primary.main,
                  }} />
                )}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Content */}
      <main style={{ maxWidth: 1100, margin: "0 auto", padding: "64px 24px" }}>

        {/* ── OVERVIEW ── */}
        {activeTab === "overview" && (
          <div>
            <Section title="BRAND ESSENCE" number="01">
              <div style={{ marginBottom: 48 }}>
                <p style={{ fontFamily: fonts.mono, fontSize: 11, color: colors.primary.main, letterSpacing: "0.1em", marginBottom: 16 }}>TAGLINE</p>
                <h1 style={{
                  fontFamily: fonts.display, fontSize: 64,
                  color: colors.text, lineHeight: 0.95,
                  letterSpacing: "0.02em", marginBottom: 8,
                }}>LAS JUGADAS QUE</h1>
                <h1 style={{
                  fontFamily: fonts.display, fontSize: 64,
                  color: colors.primary.main, lineHeight: 0.95,
                  letterSpacing: "0.02em", marginBottom: 32,
                }}>USAN LOS GRANDES.</h1>
                <h1 style={{
                  fontFamily: fonts.display, fontSize: 64,
                  color: colors.text, lineHeight: 0.95,
                  letterSpacing: "0.02em",
                }}>AHORA SON TUYAS.</h1>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginTop: 48 }}>
                {[
                  { label: "POSICIONAMIENTO", value: "Agencia de marketing que trae la maquinaria de las grandes empresas a negocios medianos." },
                  { label: "AUDIENCIA", value: "Dueños y directores de negocio mediano en México que quieren crecer de forma predecible." },
                  { label: "TONO", value: "Directo. Seguro. Sin relleno. Como un mentor que habla claro." },
                  { label: "ANTI-POSICIONAMIENTO", value: "No somos agencia masiva, no somos freelancer, no somos solo redes sociales." },
                ].map(item => (
                  <div key={item.label} style={{ backgroundColor: colors.surface, borderRadius: 8, padding: 24, border: `1px solid ${colors.border}` }}>
                    <p style={{ fontFamily: fonts.mono, fontSize: 10, color: colors.primary.main, letterSpacing: "0.1em", marginBottom: 8 }}>{item.label}</p>
                    <p style={{ fontSize: 14, color: colors.text, lineHeight: 1.6 }}>{item.value}</p>
                  </div>
                ))}
              </div>
            </Section>

            <Section title="PILARES DE MARCA" number="02">
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
                {[
                  { icon: "⚙", title: "MAQUINARIA", desc: "Todo funciona como sistema, no como ocurrencias. Procesos, entregables, métricas." },
                  { icon: "◆", title: "ACCESO", desc: "Llevamos lo de los grandes a tu nivel. Sin condescendencia, sin sobrecomplicar." },
                  { icon: "▲", title: "CLARIDAD", desc: "Hablamos en resultados. CTR, ROAS, CPA — no 'awareness' vacío." },
                  { icon: "●", title: "EXPERIENCIA", desc: "Venimos de adentro de los corporativos. Sabemos cómo funciona la máquina." },
                ].map(p => (
                  <div key={p.title} style={{ backgroundColor: colors.surface, borderRadius: 8, padding: 24, border: `1px solid ${colors.border}` }}>
                    <div style={{ fontSize: 24, marginBottom: 12, color: colors.primary.main }}>{p.icon}</div>
                    <p style={{ fontFamily: fonts.display, fontSize: 18, color: colors.primary.main, letterSpacing: "0.05em", marginBottom: 8 }}>{p.title}</p>
                    <p style={{ fontSize: 13, color: colors.textSecondary, lineHeight: 1.6 }}>{p.desc}</p>
                  </div>
                ))}
              </div>
            </Section>

            <Section title="SERVICIOS" number="03">
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
                {[
                  { title: "PAID MEDIA", metric: "CTR 2–4% · ROAS 3x mín.", desc: "Meta Ads, Instagram Ads, campañas de conversión optimizadas." },
                  { title: "BRAND IDENTITY", metric: "Entregable en llamada 2", desc: "Brandbook, identidad visual completa, guía de marca." },
                  { title: "EMAIL MARKETING", metric: "Open rate + CTR", desc: "Secuencias, campañas de activación, retención de clientes." },
                  { title: "CONTENIDO ORGÁNICO", metric: "Alcance + engagement", desc: "Estrategia, calendario editorial, producción de contenido." },
                  { title: "PRODUCCIÓN DE VIDEO", metric: "Views + conversión", desc: "Video de marca, producto, testimoniales, eventos." },
                  { title: "EVENTOS", metric: "Asistencia + leads", desc: "Producción, logística y experiencia de marca en vivo." },
                ].map(s => (
                  <div key={s.title} style={{ backgroundColor: colors.surface, borderRadius: 8, padding: 24, border: `1px solid ${colors.border}` }}>
                    <p style={{ fontFamily: fonts.display, fontSize: 20, color: colors.text, letterSpacing: "0.05em", marginBottom: 6 }}>{s.title}</p>
                    <p style={{ fontFamily: fonts.mono, fontSize: 10, color: colors.primary.main, letterSpacing: "0.05em", marginBottom: 12 }}>{s.metric}</p>
                    <p style={{ fontSize: 13, color: colors.textSecondary, lineHeight: 1.6 }}>{s.desc}</p>
                  </div>
                ))}
              </div>
            </Section>
          </div>
        )}

        {/* ── LOGO ── */}
        {activeTab === "logo" && (
          <div>
            <Section title="WORDMARK" number="01">
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16, marginBottom: 32 }}>
                <div style={{ borderRadius: 8, border: `1px solid ${colors.border}`, padding: 48, display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: colors.bg }}>
                  <Wordmark variant="dark" />
                </div>
                <div style={{ borderRadius: 8, border: `1px solid ${colors.border}`, padding: 48, display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: colors.primary.main }}>
                  <Wordmark variant="yellow" />
                </div>
                <div style={{ borderRadius: 8, border: `1px solid ${colors.border}`, padding: 48, display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: colors.neutral[50] }}>
                  <Wordmark variant="light" />
                </div>
              </div>
              <div style={{ display: "flex", gap: 8 }}>
                <Tag>VARIANTE PRINCIPAL</Tag>
                <Tag>VARIANTE AMARILLA</Tag>
                <Tag>VARIANTE CLARA</Tag>
              </div>
            </Section>

            <Section title="CONSTRUCCIÓN DEL LOGO" number="02">
              <div style={{ backgroundColor: colors.surface, borderRadius: 8, padding: 32, border: `1px solid ${colors.border}`, marginBottom: 24 }}>
                <p style={{ fontFamily: fonts.mono, fontSize: 11, color: colors.primary.main, letterSpacing: "0.1em", marginBottom: 16 }}>ANATOMÍA</p>
                <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 24 }}>
                  <div style={{ textAlign: "center" }}>
                    <span style={{ color: colors.accent.main, fontFamily: fonts.display, fontSize: 64 }}>◆</span>
                    <p style={{ fontFamily: fonts.mono, fontSize: 10, color: colors.textSecondary, marginTop: 8 }}>SÍMBOLO ACENTO</p>
                  </div>
                  <div style={{ color: colors.border, fontSize: 32 }}>+</div>
                  <div style={{ textAlign: "center" }}>
                    <span style={{ fontFamily: fonts.display, fontSize: 64, color: colors.primary.main, letterSpacing: "0.04em" }}>PLAYBOOK</span>
                    <p style={{ fontFamily: fonts.mono, fontSize: 10, color: colors.textSecondary, marginTop: 8 }}>WORDMARK · BEBAS NEUE</p>
                  </div>
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                <div style={{ backgroundColor: colors.surface, borderRadius: 8, padding: 24, border: `1px solid ${colors.primary.main + "40"}` }}>
                  <p style={{ fontFamily: fonts.mono, fontSize: 10, color: "#22C55E", letterSpacing: "0.1em", marginBottom: 16 }}>✓ HACER</p>
                  {["Mantener el espacio libre alrededor del logo", "Usar siempre las variantes oficiales", "Verificar contraste mínimo 4.5:1", "Respetar el tamaño mínimo (120px digital)"].map(r => (
                    <p key={r} style={{ fontSize: 13, color: colors.text, marginBottom: 8, lineHeight: 1.5 }}>— {r}</p>
                  ))}
                </div>
                <div style={{ backgroundColor: colors.surface, borderRadius: 8, padding: 24, border: `1px solid ${colors.accent.main + "40"}` }}>
                  <p style={{ fontFamily: fonts.mono, fontSize: 10, color: colors.accent.main, letterSpacing: "0.1em", marginBottom: 16 }}>✗ NUNCA</p>
                  {["Rotar o inclinar el logo", "Aplicar sombras, brillos o gradientes", "Cambiar colores fuera de las variantes", "Comprimir o estirar las proporciones", "Recrear con fuentes distintas a Bebas Neue"].map(r => (
                    <p key={r} style={{ fontSize: 13, color: colors.text, marginBottom: 8, lineHeight: 1.5 }}>— {r}</p>
                  ))}
                </div>
              </div>
            </Section>
          </div>
        )}

        {/* ── COLORS ── */}
        {activeTab === "colors" && (
          <div>
            <Section title="PALETA PRINCIPAL" number="01">
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, marginBottom: 48 }}>
                <ColorSwatch name="Negro Máquina" hex={colors.bg} subtitle="Fondo principal" tall />
                <ColorSwatch name="Amarillo Eléctrico" hex={colors.primary.main} subtitle="Color de marca ★" tall />
                <ColorSwatch name="Rojo Ignición" hex={colors.accent.main} subtitle="Acento" tall />
                <ColorSwatch name="Blanco Técnico" hex={colors.neutral[50]} subtitle="Fondos claros" tall />
              </div>
            </Section>

            <Section title="ESCALA — AMARILLO ELÉCTRICO" number="02">
              <div style={{ display: "grid", gridTemplateColumns: "repeat(11, 1fr)", gap: 6, marginBottom: 12 }}>
                {Object.entries(colors.primary).filter(([k]) => !isNaN(Number(k))).map(([scale, hex]) => (
                  <div key={scale} style={{ textAlign: "center" }}>
                    <div style={{ height: 48, borderRadius: 4, backgroundColor: hex, border: `1px solid ${colors.border}` }} />
                    <p style={{ fontFamily: fonts.mono, fontSize: 9, color: colors.textSecondary, marginTop: 4 }}>{scale}</p>
                  </div>
                ))}
              </div>
            </Section>

            <Section title="ESCALA — ROJO IGNICIÓN" number="03">
              <div style={{ display: "grid", gridTemplateColumns: "repeat(11, 1fr)", gap: 6, marginBottom: 12 }}>
                {Object.entries(colors.accent).filter(([k]) => !isNaN(Number(k))).map(([scale, hex]) => (
                  <div key={scale} style={{ textAlign: "center" }}>
                    <div style={{ height: 48, borderRadius: 4, backgroundColor: hex, border: `1px solid ${colors.border}` }} />
                    <p style={{ fontFamily: fonts.mono, fontSize: 9, color: colors.textSecondary, marginTop: 4 }}>{scale}</p>
                  </div>
                ))}
              </div>
            </Section>

            <Section title="SEMÁNTICOS" number="04">
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, marginBottom: 32 }}>
                {[
                  { name: "Success", hex: colors.feedback.success, uso: "Métricas positivas" },
                  { name: "Warning", hex: colors.feedback.warning, uso: "Alertas (= Primary)" },
                  { name: "Error", hex: colors.feedback.error, uso: "Errores (= Accent)" },
                  { name: "Info", hex: colors.feedback.info, uso: "Información neutral" },
                ].map(c => (
                  <ColorSwatch key={c.name} name={c.name} hex={c.hex} subtitle={c.uso} />
                ))}
              </div>
            </Section>

            <Section title="PROPORCIONES DE USO" number="05">
              <div style={{ backgroundColor: colors.surface, borderRadius: 8, padding: 24, border: `1px solid ${colors.border}` }}>
                {[
                  { label: "Negro Máquina + Grises", pct: 85, color: colors.neutral[700] },
                  { label: "Amarillo Eléctrico", pct: 8, color: colors.primary.main },
                  { label: "Rojo Ignición", pct: 4, color: colors.accent.main },
                  { label: "Blanco Técnico", pct: 3, color: colors.neutral[50] },
                ].map(r => (
                  <div key={r.label} style={{ marginBottom: 16 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                      <span style={{ fontFamily: fonts.body, fontSize: 13, color: colors.text }}>{r.label}</span>
                      <span style={{ fontFamily: fonts.mono, fontSize: 12, color: colors.primary.main }}>{r.pct}%</span>
                    </div>
                    <div style={{ height: 8, backgroundColor: colors.surface2, borderRadius: 2 }}>
                      <div style={{ height: "100%", width: `${r.pct}%`, backgroundColor: r.color, borderRadius: 2 }} />
                    </div>
                  </div>
                ))}
              </div>
            </Section>
          </div>
        )}

        {/* ── TYPOGRAPHY ── */}
        {activeTab === "typography" && (
          <div>
            <Section title="SISTEMA TIPOGRÁFICO" number="01">
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginBottom: 48 }}>
                {[
                  { role: "DISPLAY", font: "Bebas Neue", uso: "Headlines, títulos, nombre de marca", sample: "PLAYBOOK", size: 56 },
                  { role: "BODY", font: "Space Grotesk", uso: "Texto corrido, subtítulos, UI", sample: "Marketing que funciona como máquina.", size: 22 },
                  { role: "MONO", font: "Space Mono", uso: "Métricas, código, metadata, etiquetas", sample: "CTR 2.4% / ROAS 3x", size: 18 },
                ].map(t => (
                  <div key={t.role} style={{ backgroundColor: colors.surface, borderRadius: 8, padding: 28, border: `1px solid ${colors.border}` }}>
                    <Tag>{t.role}</Tag>
                    <p style={{ fontFamily: fonts.mono, fontSize: 10, color: colors.primary.main, letterSpacing: "0.1em", marginTop: 16, marginBottom: 4 }}>{t.font}</p>
                    <p style={{ fontSize: 11, color: colors.textSecondary, marginBottom: 20, lineHeight: 1.5 }}>{t.uso}</p>
                    <div style={{ borderTop: `1px solid ${colors.border}`, paddingTop: 20 }}>
                      <p style={{
                        fontFamily: t.role === "DISPLAY" ? fonts.display : t.role === "BODY" ? fonts.body : fonts.mono,
                        fontSize: t.size, color: colors.text, lineHeight: 1.1
                      }}>{t.sample}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Section>

            <Section title="ESCALA TIPOGRÁFICA" number="02">
              <div style={{ backgroundColor: colors.surface, borderRadius: 8, padding: 32, border: `1px solid ${colors.border}` }}>
                {[
                  { size: 72, name: "Display XL", font: fonts.display, weight: 400, sample: "PLAYBOOK" },
                  { size: 56, name: "Display L", font: fonts.display, weight: 400, sample: "AGENCIA DE MARKETING" },
                  { size: 40, name: "Display M", font: fonts.display, weight: 400, sample: "TUS JUGADAS GANADORAS" },
                  { size: 32, name: "Display S", font: fonts.display, weight: 400, sample: "SERVICIOS Y RESULTADOS" },
                  { size: 24, name: "Heading L", font: fonts.body, weight: 600, sample: "Paid Media que convierte" },
                  { size: 18, name: "Heading M", font: fonts.body, weight: 500, sample: "Email marketing de alta conversión" },
                  { size: 16, name: "Body L ★", font: fonts.body, weight: 400, sample: "Tu negocio puede crecer de forma predecible. Publicidad pagada que convierte." },
                  { size: 14, name: "Body M", font: fonts.body, weight: 400, sample: "Fee mensual todo incluido. Sin dependencia, sin onboarding eterno, sin esperas." },
                  { size: 12, name: "Label", font: fonts.mono, weight: 400, sample: "CTR · ROAS · CPA · A/B TEST" },
                ].map(t => (
                  <div key={t.name} style={{ borderBottom: `1px solid ${colors.border}`, paddingBottom: 20, marginBottom: 20, display: "flex", alignItems: "baseline", gap: 24 }}>
                    <div style={{ minWidth: 120 }}>
                      <span style={{ fontFamily: fonts.mono, fontSize: 10, color: colors.textSecondary }}>{t.size}px</span>
                      <p style={{ fontFamily: fonts.mono, fontSize: 9, color: colors.primary.main, letterSpacing: "0.05em" }}>{t.name}</p>
                    </div>
                    <p style={{ fontFamily: t.font, fontSize: t.size, fontWeight: t.weight, color: colors.text, lineHeight: 1.2, flex: 1 }}>{t.sample}</p>
                  </div>
                ))}
              </div>
            </Section>

            <Section title="REGLAS DE USO" number="03">
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                {[
                  { title: "BEBAS NEUE", rules: ["Siempre en MAYÚSCULAS — nunca minúsculas", "Letter-spacing: 0.02em–0.05em", "Solo para títulos y display, nunca párrafos", "Line-height: 0.95–1.0 para headlines grandes"] },
                  { title: "SPACE GROTESK", rules: ["Line-height: 1.5–1.65 para texto corrido", "Peso 400 para texto, 500–600 para énfasis", "Letter-spacing: -0.01em en headings", "El texto principal de toda comunicación"] },
                  { title: "SPACE MONO", rules: ["Para métricas, números, porcentajes", "Letter-spacing: 0.05em siempre", "Color: secondary o amarillo para highlight", "Tags, etiquetas técnicas, metadata"] },
                  { title: "NUNCA", rules: ["Mezclar más de 2 fuentes en un bloque visual", "Usar Bebas Neue para texto corrido", "Usar pesos distintos a los definidos", "Cambiar las fuentes de marca por otras"] },
                ].map(section => (
                  <div key={section.title} style={{ backgroundColor: colors.surface, borderRadius: 8, padding: 24, border: `1px solid ${colors.border}` }}>
                    <p style={{ fontFamily: fonts.mono, fontSize: 10, color: colors.primary.main, letterSpacing: "0.1em", marginBottom: 16 }}>{section.title}</p>
                    {section.rules.map(r => (
                      <p key={r} style={{ fontSize: 13, color: colors.text, marginBottom: 8, lineHeight: 1.5 }}>— {r}</p>
                    ))}
                  </div>
                ))}
              </div>
            </Section>
          </div>
        )}

        {/* ── VOICE & TONE ── */}
        {activeTab === "voice" && (
          <div>
            <Section title="VOZ DE MARCA" number="01">
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 16, marginBottom: 48 }}>
                {[
                  { principle: "DIRECTO", do: "Tu negocio puede crecer de forma predecible.", dont: "En PLAYBOOK nos esforzamos por ofrecer soluciones de marketing que podrían..." },
                  { principle: "CONFIADO", do: "Así funciona la máquina.", dont: "Creemos que tal vez podría funcionar para tu negocio si decides intentarlo." },
                  { principle: "EN RESULTADOS", do: "2–4% CTR. 3x ROAS mínimo. A/B test incluido.", dont: "Generamos awareness y engagement significativo para tu marca digital." },
                  { principle: "HUMANO", do: "Habla con nosotros.", dont: "Agende una consultoría estratégica de descubrimiento sin costo." },
                  { principle: "SIN CORPORATIVISMO", do: "Fee mensual. Todo incluido.", dont: "Modelo de retención con entregables modulares y estructura de fees escalonada." },
                ].map(v => (
                  <div key={v.principle} style={{ backgroundColor: colors.surface, borderRadius: 8, border: `1px solid ${colors.border}`, overflow: "hidden" }}>
                    <div style={{ backgroundColor: colors.surface2, padding: "12px 24px" }}>
                      <Tag>{v.principle}</Tag>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0 }}>
                      <div style={{ padding: 24, borderRight: `1px solid ${colors.border}` }}>
                        <p style={{ fontFamily: fonts.mono, fontSize: 10, color: "#22C55E", letterSpacing: "0.1em", marginBottom: 12 }}>✓ DI ESTO</p>
                        <p style={{ fontSize: 14, color: colors.text, lineHeight: 1.6 }}>"{v.do}"</p>
                      </div>
                      <div style={{ padding: 24 }}>
                        <p style={{ fontFamily: fonts.mono, fontSize: 10, color: colors.accent.main, letterSpacing: "0.1em", marginBottom: 12 }}>✗ NO ESTO</p>
                        <p style={{ fontSize: 14, color: colors.textSecondary, lineHeight: 1.6 }}>"{v.dont}"</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Section>

            <Section title="ESPECTRO DE TONO" number="02">
              <div style={{ backgroundColor: colors.surface, borderRadius: 8, padding: 32, border: `1px solid ${colors.border}` }}>
                {[
                  { left: "FORMAL", right: "CASUAL", pos: 65 },
                  { left: "SERIO", right: "JUGUETÓN", pos: 40 },
                  { left: "TÉCNICO", right: "SIMPLE", pos: 60 },
                ].map(s => (
                  <div key={s.left} style={{ marginBottom: 24 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                      <span style={{ fontFamily: fonts.mono, fontSize: 11, color: colors.textSecondary, letterSpacing: "0.1em" }}>{s.left}</span>
                      <span style={{ fontFamily: fonts.mono, fontSize: 11, color: colors.textSecondary, letterSpacing: "0.1em" }}>{s.right}</span>
                    </div>
                    <div style={{ height: 6, backgroundColor: colors.surface2, borderRadius: 3, position: "relative" }}>
                      <div style={{ position: "absolute", left: `${s.pos}%`, top: "50%", transform: "translate(-50%, -50%)", width: 16, height: 16, borderRadius: "50%", backgroundColor: colors.primary.main }} />
                    </div>
                  </div>
                ))}
              </div>
            </Section>

            <Section title="REGLAS DE ESCRITURA" number="03">
              <div style={{ backgroundColor: colors.surface, borderRadius: 8, padding: 32, border: `1px solid ${colors.border}` }}>
                {[
                  "Las oraciones cortas ganan. Si puedes decirlo en 8 palabras, no uses 20.",
                  "Empezar con el resultado, no con el proceso.",
                  "Usar números siempre que sea posible: '2–4% CTR', no 'buen rendimiento'.",
                  "Evitar adjetivos vacíos: innovador, disruptivo, estratégico.",
                  "El punto final da confianza. Los puntos suspensivos la quitan.",
                  "Tutear siempre. Nunca 'usted'.",
                  "En redes: máximo 2 emojis por post. Preferir ninguno.",
                  "Los títulos en PLAYBOOK van en MAYÚSCULAS.",
                ].map((rule, i) => (
                  <div key={i} style={{ display: "flex", gap: 16, marginBottom: 16, alignItems: "flex-start" }}>
                    <span style={{ fontFamily: fonts.mono, fontSize: 13, color: colors.primary.main, minWidth: 24 }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p style={{ fontSize: 14, color: colors.text, lineHeight: 1.6 }}>{rule}</p>
                  </div>
                ))}
              </div>
            </Section>
          </div>
        )}

        {/* ── APPLICATIONS ── */}
        {activeTab === "applications" && (
          <div>
            <Section title="BOTONES" number="01">
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 32 }}>
                <div style={{ backgroundColor: colors.bg, borderRadius: 8, padding: 40, border: `1px solid ${colors.border}`, display: "flex", flexDirection: "column", gap: 16, alignItems: "flex-start" }}>
                  <p style={{ fontFamily: fonts.mono, fontSize: 10, color: colors.textSecondary, letterSpacing: "0.1em", marginBottom: 8 }}>FONDO OSCURO</p>
                  <PillButton variant="primary">Agendar llamada →</PillButton>
                  <PillButton variant="secondary">Ver servicios</PillButton>
                  <PillButton variant="ghost">Saber más</PillButton>
                  <PillButton variant="ghostAccent">Ver casos</PillButton>
                </div>
                <div style={{ backgroundColor: colors.neutral[50], borderRadius: 8, padding: 40, border: `1px solid ${colors.border}`, display: "flex", flexDirection: "column", gap: 16, alignItems: "flex-start" }}>
                  <p style={{ fontFamily: fonts.mono, fontSize: 10, color: colors.textSecondary, letterSpacing: "0.1em", marginBottom: 8 }}>FONDO CLARO</p>
                  <PillButton variant="primary">Agendar llamada →</PillButton>
                  <PillButton variant="secondary">Ver servicios</PillButton>
                  <div style={{ backgroundColor: colors.bg, padding: "12px 28px", borderRadius: 4, fontFamily: fonts.body, fontSize: 13, fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", color: colors.text }}>GHOST DARK</div>
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12 }}>
                {[
                  { label: "PRIMARY", bg: colors.primary.main, text: colors.bg, uso: "CTA principal" },
                  { label: "SECONDARY", bg: colors.accent.main, text: colors.text, uso: "CTA urgencia" },
                  { label: "GHOST", bg: "transparent", text: colors.text, border: colors.border, uso: "Acción terciaria" },
                  { label: "GHOST ACCENT", bg: "transparent", text: colors.primary.main, border: colors.primary.main, uso: "Acción destacada" },
                ].map(b => (
                  <div key={b.label} style={{ backgroundColor: colors.surface, borderRadius: 8, padding: 16, border: `1px solid ${colors.border}` }}>
                    <p style={{ fontFamily: fonts.mono, fontSize: 9, color: colors.primary.main, letterSpacing: "0.1em", marginBottom: 12 }}>{b.label}</p>
                    <p style={{ fontSize: 12, color: colors.textSecondary, marginBottom: 8 }}>{b.uso}</p>
                    <div style={{ display: "flex", gap: 8 }}>
                      <div style={{ width: 16, height: 16, borderRadius: 2, backgroundColor: b.bg === "transparent" ? colors.surface2 : b.bg, border: b.border ? `1px solid ${b.border}` : "none" }} />
                      <div style={{ width: 16, height: 16, borderRadius: 2, backgroundColor: b.text, opacity: 0.7 }} />
                    </div>
                  </div>
                ))}
              </div>
            </Section>

            <Section title="TARJETAS DE SERVICIO" number="02">
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
                {[
                  { label: "PAID MEDIA", metric: "CTR 2–4%", roas: "ROAS 3x mín.", cta: "Activar campaña →" },
                  { label: "BRAND IDENTITY", metric: "Entregable", roas: "2da llamada", cta: "Ver proceso →" },
                  { label: "EMAIL MKT", metric: "Open rate", roas: "CTR alto", cta: "Ver casos →" },
                ].map(card => (
                  <div key={card.label} style={{ backgroundColor: colors.surface, borderRadius: 8, padding: 28, border: `1px solid ${colors.border}` }}>
                    <p style={{ fontFamily: fonts.display, fontSize: 22, color: colors.text, letterSpacing: "0.05em", marginBottom: 16 }}>{card.label}</p>
                    <div style={{ display: "flex", gap: 8, marginBottom: 20 }}>
                      <Tag color={colors.primary.main}>{card.metric}</Tag>
                      <Tag color={colors.primary.main}>{card.roas}</Tag>
                    </div>
                    <div style={{ height: 1, backgroundColor: colors.border, marginBottom: 20 }} />
                    <span style={{ fontFamily: fonts.body, fontSize: 13, color: colors.primary.main, fontWeight: 500 }}>{card.cta}</span>
                  </div>
                ))}
              </div>
            </Section>

            <Section title="MÉTRICAS / DATOS" number="03">
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
                {[
                  { value: "2–4%", label: "CTR", desc: "Click-through rate" },
                  { value: "3x", label: "ROAS MÍN.", desc: "Return on ad spend" },
                  { value: "-30%", label: "CPA OBJ.", desc: "Costo por adquisición" },
                  { value: "A/B", label: "TEST", desc: "Incluido en todas las campañas" },
                ].map(m => (
                  <div key={m.label} style={{ backgroundColor: colors.surface, borderRadius: 8, padding: 24, border: `1px solid ${colors.border}`, textAlign: "center" }}>
                    <p style={{ fontFamily: fonts.display, fontSize: 40, color: colors.primary.main, letterSpacing: "0.03em" }}>{m.value}</p>
                    <p style={{ fontFamily: fonts.mono, fontSize: 10, color: colors.textSecondary, letterSpacing: "0.1em", marginTop: 4 }}>{m.label}</p>
                    <p style={{ fontSize: 11, color: colors.textSecondary, marginTop: 8, lineHeight: 1.4 }}>{m.desc}</p>
                  </div>
                ))}
              </div>
            </Section>
          </div>
        )}

      </main>

      {/* Footer */}
      <footer style={{ borderTop: `1px solid ${colors.border}`, padding: "24px", textAlign: "center" }}>
        <p style={{ fontFamily: fonts.mono, fontSize: 10, color: colors.textSecondary, letterSpacing: "0.1em" }}>
          ◆ PLAYBOOK BRAND GUIDELINES v1.0 · ABRIL 2026
        </p>
      </footer>
    </div>
  );
}

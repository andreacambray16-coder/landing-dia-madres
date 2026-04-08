import { useState } from "react";

// ─── Color System ──────────────────────────────────────────────────────────────
const colors = {
  green: {
    50: "#F5F7E8", 100: "#EBF0D1", 200: "#D6E1A3", 300: "#C2D275",
    400: "#CFD55F", 500: "#B0B84A", 600: "#939947", 700: "#717534",
    800: "#525523", 900: "#343614", 950: "#1A1B0A",
  },
  pink: {
    50: "#FFF0EC", 100: "#FFE1D9", 200: "#FFC3B3", 300: "#FFA58D",
    400: "#FF9781", 500: "#FF7A60", 600: "#E95543", 700: "#C43C2D",
    800: "#9B2A1E", 900: "#721910", 950: "#490F08",
  },
  yellow: {
    50: "#FFFDE8", 100: "#FFFBD0", 200: "#FFF994", 300: "#FFEE6A",
    400: "#FFE04A", 500: "#F5CC20", 600: "#DBA800", 700: "#B08500", 800: "#856400",
  },
  neutral: {
    50: "#FAFAF5", 100: "#F4F4EA", 200: "#E8E8D5", 300: "#D4D4B8",
    400: "#B8B890", 500: "#939368", 600: "#6E6E4A", 700: "#4A4A30",
    800: "#2E2E1C", 900: "#1A1A0E", 950: "#0D0D07",
  },
};

const ui = {
  bg: "#FAFAF5",
  bgCard: "#F4F4EA",
  text: "#1A1A0E",
  textSec: "#6E6E4A",
  border: "#E8E8D5",
  primary: "#CFD55F",
  cta: "#E95543",
  energy: "#FFE04A",
};

const fonts = {
  display: "'Baloo 2', cursive",
  body: "'Plus Jakarta Sans', sans-serif",
  ui: "'Space Grotesk', sans-serif",
};

// ─── Sub-components ────────────────────────────────────────────────────────────

const ColorSwatch = ({ name, hex, subtitle, tall }) => (
  <div className="flex flex-col gap-1">
    <div
      className="w-full rounded-xl border border-gray-200"
      style={{ backgroundColor: hex, height: tall ? 96 : 64 }}
    />
    <span style={{ fontFamily: fonts.ui, color: ui.textSec, fontSize: 11 }}>{hex}</span>
    <span style={{ fontFamily: fonts.ui, color: ui.text, fontSize: 12, fontWeight: 600 }}>{name}</span>
    {subtitle && <span style={{ fontFamily: fonts.ui, color: ui.textSec, fontSize: 11 }}>{subtitle}</span>}
  </div>
);

const Section = ({ title, number, children }) => (
  <div className="mb-14">
    <div className="flex items-baseline gap-3 mb-6">
      <span style={{ fontFamily: fonts.ui, color: ui.cta, fontSize: 11, letterSpacing: "0.12em" }}>{number}</span>
      <h2 style={{ fontFamily: fonts.display, fontWeight: 700, fontSize: 26, color: ui.text, margin: 0 }}>{title}</h2>
    </div>
    {children}
  </div>
);

// ─── Logo SVG ──────────────────────────────────────────────────────────────────

const GuayabaIcon = ({ size = 48 }) => (
  <svg width={size} height={size * 48/44} viewBox="0 0 44 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Guayaba partida a la mitad — vista de lado */}
    {/* Contorno completo de la fruta */}
    <path d="M22 4 Q38 4 38 24 Q38 44 22 44 Q6 44 6 24 Q6 4 22 4Z" fill={colors.green[400]} />
    {/* Mitad derecha: cara cortada (interior rosa) */}
    <path d="M22 4 Q38 4 38 24 Q38 44 22 44 Z" fill={colors.pink[400]} />
    {/* Zona interior más clara */}
    <ellipse cx="27" cy="24" rx="5.5" ry="9" fill="#FFCFC0" />
    {/* Semillas */}
    <circle cx="25" cy="19" r="1.4" fill={colors.pink[600]} />
    <circle cx="29" cy="24" r="1.4" fill={colors.pink[600]} />
    <circle cx="25" cy="29" r="1.4" fill={colors.pink[600]} />
    <circle cx="27" cy="34" r="1.2" fill={colors.pink[600]} />
    {/* Línea de corte */}
    <line x1="22" y1="4" x2="22" y2="44" stroke="rgba(0,0,0,0.1)" strokeWidth="0.8" />
    {/* Hoja y tallo */}
    <path d="M22 4 C19 -2 11 -1 14 6 C17 11 22 7 22 4Z" fill={colors.green[600]} />
    {/* Líneas de velocidad */}
    <line x1="0" y1="18" x2="5.5" y2="18" stroke={colors.yellow[400]} strokeWidth="2" strokeLinecap="round" />
    <line x1="0" y1="24" x2="3.5" y2="24" stroke={colors.yellow[400]} strokeWidth="1.5" strokeLinecap="round" />
    <line x1="0" y1="30" x2="5.5" y2="30" stroke={colors.yellow[400]} strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const Wordmark = ({ variant = "dark", size = 32 }) => {
  const textColor = variant === "dark" ? colors.neutral[900] : "#FFFFFF";
  const accentColor = variant === "dark" ? colors.pink[600] : colors.yellow[400];
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <GuayabaIcon size={Math.round(size * 1.6)} />
      <div style={{ display: "flex", flexDirection: "column", lineHeight: 0.9 }}>
        <span style={{
          fontFamily: fonts.display, fontWeight: 800, fontSize: size,
          color: textColor, letterSpacing: "-0.01em",
        }}>Guayaba</span>
        <span style={{
          fontFamily: fonts.display, fontWeight: 800, fontSize: Math.round(size * 1.18),
          color: accentColor, letterSpacing: "-0.025em", marginTop: 1,
        }}>Go!</span>
      </div>
    </div>
  );
};

// ─── Main Component ────────────────────────────────────────────────────────────

export default function GuayabaGoBrandGuidelines() {
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
    <div style={{ backgroundColor: ui.bg, minHeight: "100vh", fontFamily: fonts.body }}>
      <link
        href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Space+Grotesk:wght@400;500&display=swap"
        rel="stylesheet"
      />

      {/* ── Header ── */}
      <header
        className="sticky top-0 z-50 border-b"
        style={{ backgroundColor: ui.bg + "F0", backdropFilter: "blur(20px)", borderColor: ui.border }}
      >
        <div className="max-w-6xl mx-auto px-6 pt-4 flex items-center justify-between">
          <Wordmark size={20} />
          <span style={{ fontFamily: fonts.ui, color: ui.textSec, fontSize: 11 }}>
            Brand Guidelines v1.0
          </span>
        </div>
        <div className="max-w-6xl mx-auto px-6 flex gap-1 overflow-x-auto mt-3">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                fontFamily: fonts.ui, fontSize: 12, letterSpacing: "0.06em",
                color: activeTab === tab.id ? ui.text : ui.textSec,
                fontWeight: activeTab === tab.id ? 600 : 400,
                background: "none", border: "none", cursor: "pointer",
                padding: "8px 16px", position: "relative", whiteSpace: "nowrap",
              }}
            >
              {tab.label}
              {activeTab === tab.id && (
                <div
                  style={{
                    position: "absolute", bottom: 0, left: 16, right: 16,
                    height: 2, borderRadius: 99, backgroundColor: ui.cta,
                  }}
                />
              )}
            </button>
          ))}
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">

        {/* ══════════════ OVERVIEW ══════════════ */}
        {activeTab === "overview" && (
          <div>
            {/* Hero */}
            <div
              className="mb-14 py-16 px-8 rounded-3xl text-center"
              style={{ backgroundColor: colors.green[400] }}
            >
              <p style={{ fontFamily: fonts.ui, color: colors.green[800], fontSize: 11, letterSpacing: "0.15em", marginBottom: 16 }}>
                GUAYABA GO! — ESENCIA DE MARCA
              </p>
              <h1 style={{
                fontFamily: fonts.display, fontWeight: 800, fontSize: "clamp(40px, 8vw, 64px)",
                color: colors.neutral[900], letterSpacing: "-0.025em", lineHeight: 1.0, marginBottom: 16,
              }}>
                Sano, rico<br />y listo para ir
              </h1>
              <p style={{ fontFamily: fonts.body, color: colors.green[800], fontSize: 18, maxWidth: 480, margin: "0 auto 24px" }}>
                Loncheras psiconutritivas para niños, entregadas semanalmente en cadena de frío. Nutrición real para familias reales.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, justifyContent: "center" }}>
                {["Psiconutrición", "Cadena de frío", "Accesible", "Semanal", "Para niños"].map((tag) => (
                  <span key={tag} style={{
                    backgroundColor: colors.green[700], color: "#fff",
                    fontFamily: fonts.ui, fontWeight: 500, fontSize: 13,
                    padding: "6px 14px", borderRadius: 99,
                  }}>{tag}</span>
                ))}
              </div>
            </div>

            <Section title="Posicionamiento" number="01">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  { label: "Nombre de marca", value: "Guayaba Go!" },
                  { label: "Tagline", value: '"Sano, rico y listo para ir"' },
                  { label: "Público primario", value: "Padres de niños 4–12 años" },
                  { label: "Geografía", value: "México (servicio semanal)" },
                  { label: "Propuesta de valor", value: "Loncheras psiconutritivas en cadena de frío" },
                  { label: "Accesibilidad", value: "Precio justo para familias modernas" },
                ].map((item) => (
                  <div key={item.label} className="p-4 rounded-2xl" style={{ backgroundColor: ui.bgCard, border: `1px solid ${ui.border}` }}>
                    <p style={{ fontFamily: fonts.ui, color: ui.textSec, fontSize: 11, marginBottom: 4 }}>{item.label}</p>
                    <p style={{ fontFamily: fonts.body, color: ui.text, fontWeight: 600 }}>{item.value}</p>
                  </div>
                ))}
              </div>
            </Section>

            <Section title="Pilares de Marca" number="02">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { icon: "🌿", title: "Psiconutrición", desc: "Alimentos que nutren cuerpo y mente, seleccionados con criterio científico.", color: colors.green[100] },
                  { icon: "🧊", title: "Cadena de frío", desc: "Frescura garantizada desde la producción hasta la lonchera del niño.", color: colors.yellow[100] },
                  { icon: "💚", title: "Accesible", desc: "Precios justos para que todas las familias puedan Go!", color: colors.green[50] },
                  { icon: "⚡", title: "Practicidad", desc: "Semanal, listo, sin complicaciones. Solo di Go!", color: colors.pink[50] },
                ].map((p) => (
                  <div key={p.title} className="p-5 rounded-2xl" style={{ backgroundColor: p.color, border: `1px solid ${ui.border}` }}>
                    <div style={{ fontSize: 32, marginBottom: 12 }}>{p.icon}</div>
                    <h3 style={{ fontFamily: fonts.display, fontWeight: 700, fontSize: 18, color: ui.text, marginBottom: 8 }}>{p.title}</h3>
                    <p style={{ fontFamily: fonts.body, color: ui.textSec, fontSize: 14 }}>{p.desc}</p>
                  </div>
                ))}
              </div>
            </Section>

            <Section title="Personalidad" number="03">
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-6">
                {[
                  { word: "Alegre", bg: colors.yellow[400] },
                  { word: "Confiable", bg: colors.green[400] },
                  { word: "Fresca", bg: colors.green[300] },
                  { word: "Cercana", bg: colors.pink[300] },
                  { word: "Traviesa", bg: colors.pink[600] },
                ].map((p) => (
                  <div key={p.word} className="p-4 rounded-2xl text-center" style={{ backgroundColor: p.bg }}>
                    <span style={{ fontFamily: fonts.display, fontWeight: 700, fontSize: 15, color: colors.neutral[900] }}>{p.word}</span>
                  </div>
                ))}
              </div>
              <div className="p-4 rounded-2xl" style={{ backgroundColor: colors.pink[50], border: `1px solid ${colors.pink[200]}` }}>
                <p style={{ fontFamily: fonts.ui, color: colors.pink[700], fontSize: 12, fontWeight: 600, marginBottom: 10 }}>❌ Anti-posicionamiento — lo que Guayaba Go! NO es</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {["No clínica ni medicinal", "No fast food disfrazada", "No elitista ni inaccesible", "No aburrida"].map((t) => (
                    <span key={t} style={{ backgroundColor: colors.pink[100], color: colors.pink[800], fontFamily: fonts.ui, fontSize: 12, padding: "4px 12px", borderRadius: 99 }}>{t}</span>
                  ))}
                </div>
              </div>
            </Section>
          </div>
        )}

        {/* ══════════════ LOGO ══════════════ */}
        {activeTab === "logo" && (
          <div>
            <Section title="Combo Mark" number="01">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
                {[
                  { bg: "#FFFFFF", label: "Sobre blanco", border: true, variant: "dark" },
                  { bg: colors.neutral[900], label: "Sobre oscuro", border: false, variant: "light" },
                  { bg: colors.green[400], label: "Sobre verde primario", border: false, variant: "dark" },
                  { bg: colors.pink[600], label: "Sobre coral CTA", border: false, variant: "light" },
                ].map((v) => (
                  <div key={v.label}>
                    <p style={{ fontFamily: fonts.ui, color: ui.textSec, fontSize: 11, marginBottom: 8 }}>{v.label}</p>
                    <div
                      className="rounded-2xl flex items-center justify-center"
                      style={{
                        backgroundColor: v.bg, padding: "48px 32px",
                        border: v.border ? `1px solid ${ui.border}` : "none",
                      }}
                    >
                      <Wordmark variant={v.variant} size={32} />
                    </div>
                  </div>
                ))}
              </div>
            </Section>

            <Section title="Isotipo solo" number="02">
              <div style={{ display: "flex", flexWrap: "wrap", gap: 20 }}>
                {[
                  { bg: "#FFFFFF", label: "Blanco", border: true },
                  { bg: colors.green[400], label: "Verde Guayaba" },
                  { bg: colors.pink[400], label: "Rosa Guayaba" },
                  { bg: colors.yellow[400], label: "Amarillo Sol" },
                  { bg: colors.neutral[900], label: "Oscuro" },
                  { bg: colors.pink[50], label: "Rosa suave", border: true },
                ].map((v) => (
                  <div key={v.label} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
                    <div
                      className="rounded-2xl flex items-center justify-center"
                      style={{
                        backgroundColor: v.bg, width: 96, height: 96,
                        border: v.border ? `1px solid ${ui.border}` : "none",
                      }}
                    >
                      <GuayabaIcon size={56} />
                    </div>
                    <span style={{ fontFamily: fonts.ui, color: ui.textSec, fontSize: 11 }}>{v.label}</span>
                  </div>
                ))}
              </div>
            </Section>

            <Section title="Anatomía del isotipo" number="03">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-6 rounded-2xl flex items-center justify-center" style={{ backgroundColor: ui.bgCard, border: `1px solid ${ui.border}` }}>
                  <GuayabaIcon size={140} />
                </div>
                <div className="space-y-3">
                  {[
                    { color: colors.green[400], label: "Piel exterior", hex: "#CFD55F", desc: "Verde guayaba — color primario de marca" },
                    { color: colors.green[600], label: "Pedúnculo", hex: "#939947", desc: "Verde oscuro — naturaleza y origen" },
                    { color: colors.pink[400], label: "Pulpa", hex: "#FF9781", desc: "Rosa salmón — dulzura y frescura" },
                    { color: "#FFD0C2", label: "Centro", hex: "#FFD0C2", desc: "Rosa claro — zona interior delicada" },
                    { color: colors.pink[600], label: "Semillas", hex: "#E95543", desc: "Coral — vitalidad y energía CTA" },
                    { color: colors.yellow[400], label: "Líneas de movimiento", hex: "#FFE04A", desc: "Amarillo — el Go! en acción" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-3 p-3 rounded-xl" style={{ border: `1px solid ${ui.border}` }}>
                      <div className="rounded-lg shrink-0 border border-gray-200" style={{ backgroundColor: item.color, width: 32, height: 32 }} />
                      <div>
                        <p style={{ fontFamily: fonts.ui, fontSize: 13, fontWeight: 600, color: ui.text }}>{item.label} <span style={{ color: ui.textSec, fontWeight: 400 }}>— {item.hex}</span></p>
                        <p style={{ fontFamily: fonts.body, fontSize: 12, color: ui.textSec }}>{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Section>

            <Section title="Reglas del logo" number="04">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  { type: "do", rule: "Mantener espacio libre ≥ altura de la G en todos los lados" },
                  { type: "do", rule: "Usar la proporción original sin escala asimétrica" },
                  { type: "do", rule: "Preferir fondos de la paleta oficial o blanco puro" },
                  { type: "do", rule: 'Incluir siempre el "!" en "Go!" — es parte de la marca' },
                  { type: "dont", rule: "No rotar, inclinar ni deformar el logo" },
                  { type: "dont", rule: "No aplicar sombras, brillos ni gradientes" },
                  { type: "dont", rule: "No cambiar los colores individualmente" },
                  { type: "dont", rule: "No usar sobre fondos de bajo contraste o fotos complejas" },
                ].map((r, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-4 rounded-xl"
                    style={{
                      backgroundColor: r.type === "do" ? colors.green[50] : colors.pink[50],
                      border: `1px solid ${r.type === "do" ? colors.green[200] : colors.pink[200]}`,
                    }}
                  >
                    <span style={{ fontSize: 16 }}>{r.type === "do" ? "✅" : "❌"}</span>
                    <p style={{ fontFamily: fonts.body, color: ui.text, fontSize: 14 }}>{r.rule}</p>
                  </div>
                ))}
              </div>
            </Section>
          </div>
        )}

        {/* ══════════════ COLORS ══════════════ */}
        {activeTab === "colors" && (
          <div>
            <Section title="Paleta Principal" number="01">
              <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mb-4">
                <ColorSwatch name="Verde Guayaba" hex={colors.green[400]} subtitle="Primario ★" tall />
                <ColorSwatch name="Verde Oscuro" hex={colors.green[600]} subtitle="Texto / dark" tall />
                <ColorSwatch name="Rosa Guayaba" hex={colors.pink[400]} subtitle="Secundario ★" tall />
                <ColorSwatch name="Coral Intenso" hex={colors.pink[600]} subtitle="CTA ★" tall />
                <ColorSwatch name="Amarillo Sol" hex={colors.yellow[400]} subtitle="Energía ★" tall />
                <ColorSwatch name="Amarillo Claro" hex={colors.yellow[200]} subtitle="Highlights" tall />
              </div>
            </Section>

            <Section title="Verde Guayaba — Escala completa" number="02">
              <div className="grid grid-cols-6 md:grid-cols-11 gap-2">
                {Object.entries(colors.green).map(([scale, hex]) => (
                  <div key={scale} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
                    <div className="w-full rounded-lg border border-gray-200" style={{ backgroundColor: hex, aspectRatio: "1" }} />
                    <span style={{ fontFamily: fonts.ui, color: ui.textSec, fontSize: 10 }}>{scale}</span>
                  </div>
                ))}
              </div>
            </Section>

            <Section title="Rosa Guayaba — Escala completa" number="03">
              <div className="grid grid-cols-6 md:grid-cols-11 gap-2">
                {Object.entries(colors.pink).map(([scale, hex]) => (
                  <div key={scale} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
                    <div className="w-full rounded-lg border border-gray-200" style={{ backgroundColor: hex, aspectRatio: "1" }} />
                    <span style={{ fontFamily: fonts.ui, color: ui.textSec, fontSize: 10 }}>{scale}</span>
                  </div>
                ))}
              </div>
            </Section>

            <Section title="Amarillo Sol — Escala" number="04">
              <div className="grid grid-cols-5 md:grid-cols-9 gap-2">
                {Object.entries(colors.yellow).map(([scale, hex]) => (
                  <div key={scale} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
                    <div className="w-full rounded-lg border border-gray-200" style={{ backgroundColor: hex, aspectRatio: "1" }} />
                    <span style={{ fontFamily: fonts.ui, color: ui.textSec, fontSize: 10 }}>{scale}</span>
                  </div>
                ))}
              </div>
            </Section>

            <Section title="Proporciones & Reglas" number="05">
              <div className="p-6 rounded-2xl mb-6" style={{ backgroundColor: ui.bgCard, border: `1px solid ${ui.border}` }}>
                <p style={{ fontFamily: fonts.ui, color: ui.textSec, fontSize: 12, marginBottom: 12 }}>Composición visual de la paleta</p>
                <div style={{ display: "flex", borderRadius: 12, overflow: "hidden", height: 36, marginBottom: 12 }}>
                  <div style={{ width: "60%", backgroundColor: colors.green[400], display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span style={{ fontFamily: fonts.ui, fontSize: 11, fontWeight: 700, color: colors.neutral[900] }}>Verde 60%</span>
                  </div>
                  <div style={{ width: "25%", backgroundColor: colors.pink[400], display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span style={{ fontFamily: fonts.ui, fontSize: 11, fontWeight: 700, color: "#fff" }}>Rosa 25%</span>
                  </div>
                  <div style={{ width: "10%", backgroundColor: colors.yellow[400], display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span style={{ fontFamily: fonts.ui, fontSize: 10, fontWeight: 700, color: colors.neutral[900] }}>10%</span>
                  </div>
                  <div style={{ width: "5%", backgroundColor: colors.neutral[300] }} />
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
                  {[
                    { color: colors.green[400], label: "Verde Guayaba — estructura, fondo, marca" },
                    { color: colors.pink[400], label: "Rosa / Coral — CTAs, acentos, logo" },
                    { color: colors.yellow[400], label: "Amarillo Sol — badges, highlights" },
                    { color: colors.neutral[300], label: "Neutros — texto, separadores" },
                  ].map((item) => (
                    <div key={item.label} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <div style={{ width: 12, height: 12, borderRadius: 3, backgroundColor: item.color, border: `1px solid ${ui.border}` }} />
                      <span style={{ fontFamily: fonts.ui, fontSize: 12, color: ui.textSec }}>{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  { type: "dont", rule: "No usar verde 400 (#CFD55F) con texto blanco — contraste insuficiente" },
                  { type: "dont", rule: "No usar amarillo como fondo dominante de página" },
                  { type: "do", rule: "Botones CTA siempre en coral #E95543" },
                  { type: "do", rule: "Texto principal siempre en neutro 900 (#1A1A0E)" },
                ].map((r, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-xl" style={{
                    backgroundColor: r.type === "do" ? colors.green[50] : colors.pink[50],
                    border: `1px solid ${r.type === "do" ? colors.green[200] : colors.pink[200]}`,
                  }}>
                    <span>{r.type === "do" ? "✅" : "❌"}</span>
                    <p style={{ fontFamily: fonts.body, color: ui.text, fontSize: 14 }}>{r.rule}</p>
                  </div>
                ))}
              </div>
            </Section>
          </div>
        )}

        {/* ══════════════ TYPOGRAPHY ══════════════ */}
        {activeTab === "typography" && (
          <div>
            <Section title="Sistema Tipográfico" number="01">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
                {[
                  {
                    name: "Baloo 2", role: "Display / Headings",
                    sample: "Guayaba Go!", weight: 800, family: fonts.display,
                    size: 32, sub: "Energía, carácter, marca", color: colors.pink[600],
                  },
                  {
                    name: "Plus Jakarta Sans", role: "Body / UI",
                    sample: "Loncheras que nutren cada semana", weight: 400, family: fonts.body,
                    size: 18, sub: "Legibilidad, confianza, descripción", color: colors.green[600],
                  },
                  {
                    name: "Space Grotesk", role: "Labels / Data",
                    sample: "Kcal 320 · Proteína 12g · VitC 45mg", weight: 500, family: fonts.ui,
                    size: 14, sub: "Datos técnicos, etiquetas, precios", color: colors.neutral[500],
                  },
                ].map((f) => (
                  <div key={f.name} className="p-6 rounded-2xl" style={{ backgroundColor: ui.bgCard, border: `1px solid ${ui.border}` }}>
                    <span style={{ fontFamily: fonts.ui, color: ui.textSec, fontSize: 11, display: "block", marginBottom: 8 }}>{f.role}</span>
                    <p style={{ fontFamily: f.family, fontWeight: f.weight, fontSize: f.size, color: ui.text, marginBottom: 12, lineHeight: 1.2 }}>{f.sample}</p>
                    <p style={{ fontFamily: fonts.ui, fontSize: 12, fontWeight: 600, color: f.color }}>{f.name}</p>
                    <p style={{ fontFamily: fonts.ui, fontSize: 11, color: ui.textSec, marginTop: 4 }}>{f.sub}</p>
                  </div>
                ))}
              </div>
            </Section>

            <Section title="Escala Tipográfica" number="02">
              <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                {[
                  { label: "Display XL · 64px", size: 64, font: fonts.display, weight: 800, sample: "Guayaba Go!" },
                  { label: "Display · 48px", size: 48, font: fonts.display, weight: 800, sample: "Rico y saludable" },
                  { label: "H1 · 36px", size: 36, font: fonts.display, weight: 800, sample: "Tu lonchera semanal" },
                  { label: "H2 · 30px", size: 30, font: fonts.display, weight: 700, sample: "Menú de esta semana" },
                  { label: "H3 · 24px", size: 24, font: fonts.display, weight: 700, sample: "Lonchera Verde con guayaba fresca" },
                  { label: "Subtitle · 20px", size: 20, font: fonts.body, weight: 600, sample: "Kit de 5 loncheras incluidas" },
                  { label: "Body Large · 18px", size: 18, font: fonts.body, weight: 400, sample: "Preparada con ingredientes frescos, en cadena de frío." },
                  { label: "Body · 16px", size: 16, font: fonts.body, weight: 400, sample: "Los menús cambian cada semana para mantener variedad y balance nutritivo." },
                  { label: "Label · 14px", size: 14, font: fonts.ui, weight: 500, sample: "Calorías · Proteína · Vitamina C · Fibra" },
                  { label: "Caption · 12px", size: 12, font: fonts.ui, weight: 400, sample: "Entrega: lunes a viernes · Cadena de frío garantizada 2–8°C" },
                ].map((t, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex", alignItems: "baseline", gap: 16,
                      padding: "14px 0", borderBottom: `1px solid ${ui.border}`,
                    }}
                  >
                    <span style={{ fontFamily: fonts.ui, color: ui.textSec, fontSize: 10, letterSpacing: "0.05em", minWidth: 130, flexShrink: 0 }}>{t.label}</span>
                    <p style={{ fontFamily: t.font, fontSize: t.size, fontWeight: t.weight, color: ui.text, lineHeight: 1.15, margin: 0 }}>{t.sample}</p>
                  </div>
                ))}
              </div>
            </Section>

            <Section title="Reglas tipográficas" number="03">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  { type: "do", rule: "Baloo 2 para todo lo que necesite carácter y energía de marca" },
                  { type: "do", rule: "Plus Jakarta Sans para legibilidad en cuerpo y UI" },
                  { type: "do", rule: "Space Grotesk exclusivamente para datos técnicos y etiquetas" },
                  { type: "do", rule: "Tracking -0.025em en display, -0.01em en headings" },
                  { type: "dont", rule: "No usar Baloo 2 en párrafos largos (fatiga visual)" },
                  { type: "dont", rule: "No mezclar más de 2 pesos de la misma fuente en un componente" },
                  { type: "dont", rule: "No aplicar letter-spacing negativo en cuerpo de texto" },
                  { type: "dont", rule: "No usar tipografías fuera del sistema (Arial, Helvetica, Comic Sans...)" },
                ].map((r, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-xl" style={{
                    backgroundColor: r.type === "do" ? colors.green[50] : colors.pink[50],
                    border: `1px solid ${r.type === "do" ? colors.green[200] : colors.pink[200]}`,
                  }}>
                    <span style={{ fontSize: 14 }}>{r.type === "do" ? "✅" : "❌"}</span>
                    <p style={{ fontFamily: fonts.body, color: ui.text, fontSize: 13 }}>{r.rule}</p>
                  </div>
                ))}
              </div>
            </Section>
          </div>
        )}

        {/* ══════════════ VOICE & TONE ══════════════ */}
        {activeTab === "voice" && (
          <div>
            <Section title="Principios de Voz" number="01">
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  { trait: "Cercana", do: '"¿Lista la lonchera? ¡Vamos!"', dont: '"Estimada usuaria, su pedido ha sido procesado."' },
                  { trait: "Alegre", do: '"¡Tu Go! está en camino 🚀"', dont: '"Su envío ha sido registrado correctamente."' },
                  { trait: "Confiable", do: '"Cadena de frío en todo el trayecto, garantizado."', dont: '"Creemos que los ingredientes son frescos."' },
                  { trait: "Simple", do: '"Rica en vitamina C y fibra"', dont: '"Contiene polifenoles y antioxidantes fitoquímicos."' },
                  { trait: "Inclusiva", do: '"Para todas las familias"', dont: '"Para familias que priorizan la nutrición selectiva."' },
                ].map((v) => (
                  <div key={v.trait} className="grid grid-cols-1 md:grid-cols-3 gap-3 p-4 rounded-2xl" style={{ backgroundColor: ui.bgCard, border: `1px solid ${ui.border}` }}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <span style={{ fontFamily: fonts.display, fontWeight: 700, fontSize: 20, color: ui.text }}>{v.trait}</span>
                    </div>
                    <div className="p-3 rounded-xl" style={{ backgroundColor: colors.green[50], border: `1px solid ${colors.green[200]}` }}>
                      <p style={{ fontFamily: fonts.ui, color: colors.green[700], fontSize: 11, fontWeight: 600, marginBottom: 6 }}>✅ Sí</p>
                      <p style={{ fontFamily: fonts.body, color: ui.text, fontSize: 14, fontStyle: "italic" }}>{v.do}</p>
                    </div>
                    <div className="p-3 rounded-xl" style={{ backgroundColor: colors.pink[50], border: `1px solid ${colors.pink[200]}` }}>
                      <p style={{ fontFamily: fonts.ui, color: colors.pink[700], fontSize: 11, fontWeight: 600, marginBottom: 6 }}>❌ No</p>
                      <p style={{ fontFamily: fonts.body, color: ui.textSec, fontSize: 14, fontStyle: "italic" }}>{v.dont}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Section>

            <Section title="Glosario de Marca" number="02">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  { internal: "Lonchera semanal", user: "Tu Go! de la semana" },
                  { internal: "Paquete de 5 días", user: "Kit semanal" },
                  { internal: "Menú psiconutritivo", user: "Menú Guayaba Go!" },
                  { internal: "Usuario / cliente", user: "Familia Go!" },
                  { internal: "Entrega completada", user: "¡Tu Go! llegó! 🎉" },
                  { internal: "Producto agotado", user: "Este Go! ya voló 🍃" },
                ].map((g) => (
                  <div key={g.internal} className="flex items-center gap-3 p-3 rounded-xl" style={{ backgroundColor: ui.bgCard, border: `1px solid ${ui.border}` }}>
                    <span style={{ fontFamily: fonts.ui, color: ui.textSec, fontSize: 13, textDecoration: "line-through", minWidth: 140 }}>{g.internal}</span>
                    <span style={{ color: ui.textSec }}>→</span>
                    <span style={{ fontFamily: fonts.ui, color: ui.cta, fontSize: 13, fontWeight: 600 }}>{g.user}</span>
                  </div>
                ))}
              </div>
            </Section>

            <Section title="Reglas de escritura" number="03">
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {[
                  'Usar "tú" siempre, nunca "usted"',
                  'El "!" en "Go!" es parte de la marca — no omitir nunca',
                  'Errores con calidez: "Ups, algo salió mal. ¡Intentemos de nuevo!"',
                  'Éxitos con energía: "¡Tu Go! está en camino!"',
                  "Nunca usar tecnicismos nutricionales sin explicación simple",
                  'Preferir "lonchera" sobre "lonchita" (sin diminutivos excesivos)',
                  '"Guayaba Go!" completo en primera mención de cualquier pieza',
                  'Hablar de niños con afecto, nunca como "target" o "consumidores"',
                ].map((rule, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-xl" style={{ backgroundColor: ui.bgCard }}>
                    <span style={{ fontFamily: fonts.ui, color: ui.cta, fontWeight: 700, minWidth: 24, fontSize: 14 }}>{i + 1}.</span>
                    <p style={{ fontFamily: fonts.body, color: ui.text, fontSize: 14 }}>{rule}</p>
                  </div>
                ))}
              </div>
            </Section>
          </div>
        )}

        {/* ══════════════ APPLICATIONS ══════════════ */}
        {activeTab === "applications" && (
          <div>
            <Section title="Botones" number="01">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <p style={{ fontFamily: fonts.ui, color: ui.textSec, fontSize: 11, marginBottom: 12 }}>Sobre fondo claro</p>
                  <div className="rounded-2xl p-8 flex flex-wrap gap-3 items-center" style={{ backgroundColor: "#FFFFFF", border: `1px solid ${ui.border}` }}>
                    {[
                      { label: "¡Go! Pedir ahora", bg: ui.cta, color: "#fff" },
                      { label: "Ver menú", bg: colors.green[400], color: colors.neutral[900] },
                      { label: "Saber más", bg: "transparent", color: ui.cta, border: `2px solid ${ui.cta}` },
                      { label: "Cancelar", bg: ui.bgCard, color: colors.neutral[700] },
                    ].map((btn) => (
                      <button key={btn.label} style={{
                        backgroundColor: btn.bg, color: btn.color,
                        border: btn.border || "none", padding: "10px 20px",
                        borderRadius: 12, fontFamily: fonts.body,
                        fontWeight: 600, fontSize: 14, cursor: "pointer",
                      }}>{btn.label}</button>
                    ))}
                  </div>
                </div>
                <div>
                  <p style={{ fontFamily: fonts.ui, color: ui.textSec, fontSize: 11, marginBottom: 12 }}>Sobre fondo oscuro</p>
                  <div className="rounded-2xl p-8 flex flex-wrap gap-3 items-center" style={{ backgroundColor: colors.neutral[900] }}>
                    {[
                      { label: "¡Go! Pedir ahora", bg: ui.cta, color: "#fff" },
                      { label: "Ver menú", bg: colors.green[400], color: colors.neutral[900] },
                      { label: "Saber más", bg: "transparent", color: colors.yellow[400], border: `2px solid ${colors.yellow[400]}` },
                      { label: "Cancelar", bg: colors.neutral[800], color: colors.neutral[400] },
                    ].map((btn) => (
                      <button key={btn.label} style={{
                        backgroundColor: btn.bg, color: btn.color,
                        border: btn.border || "none", padding: "10px 20px",
                        borderRadius: 12, fontFamily: fonts.body,
                        fontWeight: 600, fontSize: 14, cursor: "pointer",
                      }}>{btn.label}</button>
                    ))}
                  </div>
                </div>
              </div>
            </Section>

            <Section title="Cards de Producto" number="02">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  {
                    title: "Lonchera Verde", color: colors.green[400],
                    items: ["Sandwich de pavo integral", "Guayaba fresca", "Palitos de zanahoria", "Agua de frutas"],
                    cal: 420, price: "$65",
                  },
                  {
                    title: "Lonchera Rosa", color: colors.pink[400],
                    items: ["Tostadas de frijol", "Fruta de temporada", "Yogurt natural", "Galletas de avena"],
                    cal: 380, price: "$65",
                  },
                  {
                    title: "Lonchera Energía", color: colors.yellow[400],
                    items: ["Wrap de pollo", "Mix de nueces y semillas", "Manzana", "Jugo natural de guayaba"],
                    cal: 480, price: "$70",
                  },
                ].map((card) => (
                  <div key={card.title} className="rounded-2xl overflow-hidden" style={{ border: `1px solid ${ui.border}` }}>
                    <div className="p-4" style={{ backgroundColor: card.color }}>
                      <span style={{ fontFamily: fonts.ui, color: colors.neutral[900], fontSize: 11 }}>Kit semanal</span>
                      <h3 style={{ fontFamily: fonts.display, fontWeight: 800, fontSize: 22, color: colors.neutral[900], margin: "4px 0 0" }}>{card.title}</h3>
                    </div>
                    <div className="p-4" style={{ backgroundColor: ui.bgCard }}>
                      <ul style={{ listStyle: "none", padding: 0, margin: "0 0 16px" }}>
                        {card.items.map((item) => (
                          <li key={item} style={{ fontFamily: fonts.body, color: ui.text, fontSize: 14, padding: "3px 0", display: "flex", gap: 8, alignItems: "center" }}>
                            <span style={{ color: colors.green[600] }}>•</span> {item}
                          </li>
                        ))}
                      </ul>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                        <span style={{ fontFamily: fonts.ui, color: ui.textSec, fontSize: 12 }}>{card.cal} kcal aprox.</span>
                        <span style={{ fontFamily: fonts.display, fontWeight: 800, fontSize: 22, color: ui.cta }}>{card.price}</span>
                      </div>
                      <button style={{
                        width: "100%", padding: "10px", borderRadius: 12,
                        backgroundColor: ui.cta, color: "#fff", border: "none",
                        fontFamily: fonts.body, fontWeight: 600, fontSize: 14, cursor: "pointer",
                      }}>¡Lo quiero!</button>
                    </div>
                  </div>
                ))}
              </div>
            </Section>

            <Section title="Etiqueta Nutricional" number="03">
              <div style={{ maxWidth: 280 }}>
                <div className="rounded-2xl overflow-hidden" style={{ border: `2px solid ${colors.neutral[900]}` }}>
                  <div className="p-4" style={{ backgroundColor: colors.green[400] }}>
                    <Wordmark variant="dark" size={16} />
                  </div>
                  <div className="p-4" style={{ backgroundColor: "#fff" }}>
                    <h4 style={{ fontFamily: fonts.display, fontWeight: 800, fontSize: 20, borderBottom: `4px solid ${colors.neutral[900]}`, paddingBottom: 8, marginBottom: 12 }}>Info Nutricional</h4>
                    {[
                      { nutrient: "Calorías", value: "420 kcal", bold: true },
                      { nutrient: "Proteína", value: "18g" },
                      { nutrient: "Carbohidratos", value: "52g" },
                      { nutrient: "Grasas totales", value: "12g" },
                      { nutrient: "Fibra dietética", value: "6g" },
                      { nutrient: "Vitamina C", value: "45mg" },
                      { nutrient: "Calcio", value: "180mg" },
                    ].map((n) => (
                      <div key={n.nutrient} style={{ display: "flex", justifyContent: "space-between", padding: "5px 0", borderBottom: `1px solid ${ui.border}` }}>
                        <span style={{ fontFamily: fonts.ui, color: ui.text, fontSize: 13, fontWeight: n.bold ? 700 : 400 }}>{n.nutrient}</span>
                        <span style={{ fontFamily: fonts.ui, color: ui.text, fontSize: 13, fontWeight: n.bold ? 700 : 400 }}>{n.value}</span>
                      </div>
                    ))}
                    <p style={{ fontFamily: fonts.ui, color: ui.textSec, fontSize: 10, marginTop: 10 }}>* Valores por porción individual. Cadena de frío 2–8°C garantizada.</p>
                  </div>
                </div>
              </div>
            </Section>
          </div>
        )}
      </main>

      {/* ── Footer ── */}
      <footer className="border-t mt-16 py-8" style={{ borderColor: ui.border }}>
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between flex-wrap gap-4">
          <Wordmark size={16} />
          <p style={{ fontFamily: fonts.ui, color: ui.textSec, fontSize: 11 }}>
            Brand Guidelines v1.0 · Marzo 2026 · Guayaba Go!
          </p>
        </div>
      </footer>
    </div>
  );
}

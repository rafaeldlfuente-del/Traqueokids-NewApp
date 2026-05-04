/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  HashRouter as Router, 
  Routes, 
  Route, 
  Link, 
  useLocation 
} from 'react-router-dom';
import { 
  Home as HomeIcon, 
  Stethoscope, 
  BookOpen, 
  School, 
  Users, 
  Heart, 
  Phone, 
  ChevronRight,
  Download,
  ExternalLink,
  Youtube,
  Facebook,
  Instagram,
  MessageCircle,
  Video,
  Send,
  AlertCircle,
  Menu,
  X,
  Activity
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Components ---

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { path: '/', icon: <HomeIcon size={24} />, label: 'Inicio' },
    { path: '/info', icon: <Stethoscope size={24} />, label: 'TQT' },
    { path: '/recursos', icon: <BookOpen size={24} />, label: 'Recursos' },
    { path: '/escolaridad', icon: <School size={24} />, label: 'Escolar' },
    { path: '/asociacion', icon: <Users size={24} />, label: 'Nosotros' },
    { path: '/colaborar', icon: <Heart size={24} />, label: 'Ayuda' },
    { path: '/contacto', icon: <Phone size={24} />, label: 'Contacto' },
  ];

  return (
    <div className="min-h-screen pb-24 md:pb-0 md:pt-16 max-w-md mx-auto bg-white shadow-xl relative overflow-x-hidden border-x border-gray-100">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 px-4 py-3 flex items-center justify-between max-w-md mx-auto">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg shadow-primary/20">
            <Stethoscope size={24} />
          </div>
          <span className="font-display font-extrabold text-xl tracking-tight text-primary">TRAQUEOKIDS</span>
          <span className="text-[10px] bg-primary/10 text-primary px-1.5 py-0.5 rounded-full font-mono font-bold self-start mt-1">v0.1.5</span>
        </Link>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-primary md:hidden">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {/* Main Content */}
      <main className="px-4 pt-20 pb-8 min-h-[calc(100vh-140px)]">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Bottom Nav */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 z-50 px-2 py-2 flex justify-between items-center max-w-md mx-auto shadow-[0_-4px_12px_rgba(0,0,0,0.05)]">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex flex-col items-center justify-center w-full py-1 rounded-xl transition-colors ${
              location.pathname === item.path 
                ? 'text-primary bg-primary/5 font-semibold' 
                : 'text-text-muted hover:text-primary hover:bg-primary/5'
            }`}
          >
            {item.icon}
            <span className="text-[10px] mt-1">{item.label}</span>
          </Link>
        ))}
      </nav>

      {/* Desktop Hidden Sidebar placeholder - though mobile-first was requested */}
      <div className="hidden">Desktop sidebar could go here if max-w-md is removed</div>
    </div>
  );
};

// --- Screens ---

const Home = () => {
  return (
    <div className="space-y-8">
      <section className="text-center py-6 space-y-4">
        <div className="inline-block p-4 bg-secondary/10 rounded-3xl text-secondary mb-2">
          <Heart size={48} className="animate-pulse" />
        </div>
        <h1 className="text-3xl leading-tight">
          Asociación de apoyo a familias con <span className="text-primary italic">traqueostomía pediátrica</span>
        </h1>
        <p className="text-text-muted text-lg max-w-xs mx-auto">
          "Estamos aquí para acompañar en cada paso del camino, ofreciendo recursos, actividades y cariño."
        </p>
      </section>

      <section className="bg-primary/5 rounded-3xl p-6 border border-primary/10 relative overflow-hidden">
        <div className="relative z-10 space-y-3">
          <h2 className="text-primary text-xl font-bold">Nuestra Misión</h2>
          <p className="text-sm italic">
            "Ninguna familia sola, ningún camino sin apoyo."
          </p>
          <p className="text-sm leading-relaxed">
            Haremos tribu, superaremos desafíos y celebraremos cada logro, grande o pequeño.
          </p>
        </div>
        <div className="absolute -bottom-6 -right-6 opacity-10 rotate-12">
          <Users size={120} className="text-primary" />
        </div>
      </section>

      <div className="grid grid-cols-2 gap-4">
        <Link to="/info" className="card flex flex-col items-center text-center gap-3 active:scale-95 transition-transform">
          <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent">
            <Activity size={24} />
          </div>
          <span className="font-bold text-sm">¿Qué es?</span>
        </Link>
        <Link to="/recursos" className="card flex flex-col items-center text-center gap-3 active:scale-95 transition-transform">
          <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center text-secondary">
            <BookOpen size={24} />
          </div>
          <span className="font-bold text-sm">Recursos</span>
        </Link>
        <Link to="/escolaridad" className="card flex flex-col items-center text-center gap-3 active:scale-95 transition-transform">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
            <School size={24} />
          </div>
          <span className="font-bold text-sm">Colegio</span>
        </Link>
        <Link to="/colaborar" className="card flex flex-col items-center text-center gap-3 active:scale-95 transition-transform">
          <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent">
            <Heart size={24} />
          </div>
          <span className="font-bold text-sm">Colaborar</span>
        </Link>
      </div>

      <footer className="py-8 text-center border-t border-gray-100">
        <p className="text-xs text-text-muted">© 2024 Traqueokids España</p>
        <p className="text-[10px] text-text-muted mt-1 uppercase tracking-widest font-bold text-primary">TRAQUEOKIDS.ORG</p>
      </footer>
    </div>
  );
};

const InfoTQT = () => {
  const causes = [
    "Necesidad prolongada de ventilación mecánica",
    "Obstrucción de la vía aérea alta",
    "Síndromes malformativos (Pierre Robin, etc.)",
    "Malacias: laringo, traqueo y broncomalacia",
    "Estenosis: subglótica, glótica y traqueal",
    "Malformación de Arnold Chiari",
    "Parálisis de cuerdas vocales",
    "Quemaduras por reflujo broncoaspirado",
    "Traumatismos",
    "Displasia broncopulmonar",
    "Parálisis cerebral infantil",
    "Enfermedades neuromusculares",
    "Síndrome de Ondine",
    "Síndromes Down, Di George, Charge...",
    "Tumores y Cardiopatías congénitas",
    "Atresia de esófago"
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl text-primary font-extrabold flex items-center gap-2">
        <AlertCircle className="text-accent" />
        ¿Qué es una traqueostomía?
      </h2>
      
      <div className="card space-y-4">
        <p className="text-sm leading-relaxed">
          Una <span className="font-bold text-primary">traqueostomía</span> es una abertura hecha en la tráquea para ayudar a las personas a respirar o a eliminar secreciones.
        </p>
        <div className="bg-bg-light p-4 rounded-xl text-xs space-y-2 border-l-4 border-accent">
          <p><span className="font-bold">Traqueotomía:</span> Incisión puntual para extraer obstrucciones, luego se cierra.</p>
          <p><span className="font-bold">Traqueostomía:</span> Se deja colocada una cánula (tubo curvado) creando un <span className="italic">estoma</span>.</p>
        </div>
        <p className="text-xs text-text-muted italic">
          La terminación -tomía indica corte; -ostomía implica la creación de un estoma.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-bold">Causas Frecuentes</h3>
        <div className="grid grid-cols-1 gap-2">
          {causes.map((cause, i) => (
            <div key={i} className="flex items-start gap-2 bg-white p-3 rounded-2xl border border-gray-100 shadow-sm">
              <div className="mt-1 min-w-4"><ChevronRight size={14} className="text-primary" /></div>
              <span className="text-sm">{cause}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-secondary/10 p-5 rounded-3xl border border-secondary/20">
        <p className="text-sm font-medium text-secondary">
          Nota Informativa:
        </p>
        <p className="text-xs mt-1 leading-relaxed">
          El tiempo requerido es variable, depende de la causa y de cómo esta se resuelve.
        </p>
      </div>
    </div>
  );
};

const Resources = () => {
  const items = [
    {
      title: "Folletos Descargables",
      desc: "Flyer informativo y folleto básico para familias en UCIP.",
      link: "https://traqueokids.org/"
    },
    {
      title: "Guía del Cuidado",
      desc: "Hecha por familias para familias y cuidadores.",
      link: "https://traqueokids.org/"
    },
    {
      title: "MiniGuía TQT",
      desc: "Recurso esencial para llevar siempre consigo.",
      link: "https://traqueokids.org/"
    },
    {
      title: "Tarjeta TQT",
      desc: "Atención médica rápida en situaciones de emergencia.",
      link: "https://traqueokids.org/tarjeta-de-emergency-sanitaria-para-pacientes-con-traqueostomia/"
    },
    {
      title: "Guía de Viaje",
      desc: "Experiencias reales para viajar sin miedo.",
      link: "https://traqueokids.org/guia-de-viaje-para-familias-viajar-con-traqueostomia/"
    },
    {
      title: "Pasaporte TQT",
      desc: "Información esencial sobre cuidados y comunicación.",
      link: "https://traqueokids.org/pasaporte-para-pacientes-con-traqueostomia/"
    }
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl text-primary font-extrabold flex items-center gap-2">
        <BookOpen className="text-secondary" />
        Recursos y Guías
      </h2>
      <p className="text-sm text-text-muted">
        Herramientas diseñadas para facilitar el día a día de nuestras familias.
      </p>

      <div className="grid grid-cols-1 gap-4">
        {items.map((item, i) => (
          <div key={i} className="card group">
            <h3 className="font-bold text-lg group-hover:text-primary transition-colors">{item.title}</h3>
            <p className="text-sm text-text-muted mt-1 leading-relaxed">{item.desc}</p>
            <a 
              href={item.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="mt-4 flex items-center gap-2 text-primary text-sm font-bold active:scale-95 transition-transform"
            >
              Más información <ChevronRight size={16} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

const Schooling = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl text-primary font-extrabold flex items-center gap-2">
        <School className="text-accent" />
        Escolaridad
      </h2>
      
      <div className="card space-y-4">
        <p className="text-sm leading-relaxed">
          La integración escolar es posible y necesaria. Ofrecemos materiales para facilitar este proceso.
        </p>
        <ul className="space-y-3">
          <li className="flex gap-3 bg-bg-light p-3 rounded-xl border border-gray-100">
            <Download className="text-primary shrink-0" size={20} />
            <div className="text-xs">
              <p className="font-bold">Presentación Inicio Escolar</p>
              <p className="text-text-muted">Para Traqueostomía y Gastrostomía.</p>
            </div>
          </li>
          <li className="flex gap-3 bg-bg-light p-3 rounded-xl border border-gray-100">
            <Download className="text-primary shrink-0" size={20} />
            <div className="text-xs">
              <p className="font-bold">Planilla informativa</p>
              <p className="text-text-muted">Para completar y presentar en el colegio.</p>
            </div>
          </li>
        </ul>
      </div>

      <div className="bg-accent/5 p-6 rounded-3xl border border-accent/20 space-y-3">
        <h3 className="text-lg font-bold text-accent">Cuadernos Infantiles</h3>
        <p className="text-sm leading-relaxed italic">
          "Materiales únicos, divertidos y educativos que ayudan a integrar el tema de una manera natural y positiva."
        </p>
        <div className="flex gap-2">
          <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center text-accent"><Heart size={16} /></div>
          <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center text-accent"><School size={16} /></div>
        </div>
      </div>

      <a 
        href="https://traqueokids.org/escolaridad/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="btn-primary w-full"
      >
        Ver sección completa <ExternalLink size={18} />
      </a>
    </div>
  );
};

const AboutUs = () => {
  const partners = [
    { name: "Association Fild'Air", country: "Francia", url: "https://associationfildair.com/" },
    { name: "Asociación ÁEREA", country: "España", url: "https://www.asociacionaerea.org/" },
    { name: "ACEESE", country: "España", url: "http://www.aceese.es/" },
    { name: "AMECE", country: "España", url: "https://amece.es/" }
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl text-primary font-extrabold flex items-center gap-2">
        <Users className="text-secondary" />
        Sobre la Asociación
      </h2>

      <div className="card space-y-4">
        <p className="text-sm leading-relaxed">
          Traqueokids nace de la conexión entre familias que se conocieron en hospitales y redes sociales. No existía en España un espacio de apoyo específico, y decidimos crearlo.
        </p>
        <p className="text-sm italic font-medium text-primary">
          "Creemos en la fuerza de la comunidad y en la importancia de que ninguna familia pase por esta experiencia en soledad."
        </p>
      </div>

      <div className="space-y-3">
        <h3 className="font-bold text-lg">Objetivos</h3>
        <div className="grid grid-cols-1 gap-2">
          <div className="p-3 bg-white border border-gray-100 rounded-xl shadow-sm text-sm">🤝 Acoger, acompañar y apoyar</div>
          <div className="p-3 bg-white border border-gray-100 rounded-xl shadow-sm text-sm">🌍 Crear comunidad</div>
          <div className="p-3 bg-white border border-gray-100 rounded-xl shadow-sm text-sm">📚 Distribuir información actualizada</div>
          <div className="p-3 bg-white border border-gray-100 rounded-xl shadow-sm text-sm">🏫 Integración educativa</div>
          <div className="p-3 bg-white border border-gray-100 rounded-xl shadow-sm text-sm">🏥 Colaboración sanitaria</div>
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="font-bold text-lg">Asociaciones Hermanadas</h3>
        <div className="grid grid-cols-2 gap-3">
          {partners.map((p, i) => (
            <a 
              key={i} 
              href={p.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-4 bg-bg-light border border-gray-100 rounded-2xl flex flex-col items-center text-center gap-1 active:scale-95 transition-transform"
            >
              <span className="text-xs font-bold text-primary">{p.name}</span>
              <span className="text-[10px] text-text-muted">{p.country}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

const Collaborate = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '', type: 'Voluntariado' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl text-primary font-extrabold flex items-center gap-2">
        <Heart className="text-accent" />
        Cómo Colaborar
      </h2>

      <div className="card space-y-3 border-l-4 border-accent">
        <p className="text-sm leading-relaxed">
          Tu apoyo ayuda a que podamos seguir acompañando familias y generando recursos vitales.
        </p>
        <p className="text-xs text-text-muted">
          Puedes colaborar como particular, entidad, profesional sanitario o centro educativo.
        </p>
      </div>

      {!submitted ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1">
            <label className="text-xs font-bold text-text-muted uppercase ml-2">Nombre</label>
            <input 
              required
              type="text" 
              className="w-full bg-white border border-gray-200 rounded-2xl px-4 py-3 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none"
              placeholder="Tu nombre completo"
              value={formData.name}
              onChange={e => setFormData({...formData, name: e.target.value})}
            />
          </div>
          <div className="space-y-1">
            <label className="text-xs font-bold text-text-muted uppercase ml-2">Email</label>
            <input 
              required
              type="email" 
              className="w-full bg-white border border-gray-200 rounded-2xl px-4 py-3 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none"
              placeholder="tu@email.com"
              value={formData.email}
              onChange={e => setFormData({...formData, email: e.target.value})}
            />
          </div>
          <div className="space-y-1">
            <label className="text-xs font-bold text-text-muted uppercase ml-2">Tipo de Colaboración</label>
            <select 
              className="w-full bg-white border border-gray-200 rounded-2xl px-4 py-3 text-sm focus:border-primary outline-none appearance-none"
              value={formData.type}
              onChange={e => setFormData({...formData, type: e.target.value})}
            >
              <option>Voluntariado</option>
              <option>Donación</option>
              <option>Colaboración Institucional</option>
              <option>Entidad Colaboradora</option>
              <option>Otro</option>
            </select>
          </div>
          <div className="space-y-1">
            <label className="text-xs font-bold text-text-muted uppercase ml-2">Mensaje</label>
            <textarea 
              rows={4}
              className="w-full bg-white border border-gray-200 rounded-2xl px-4 py-3 text-sm focus:border-primary outline-none resize-none"
              placeholder="¿Cómo te gustaría ayudarnos?"
              value={formData.message}
              onChange={e => setFormData({...formData, message: e.target.value})}
            />
          </div>
          <button type="submit" className="btn-primary w-full">
            Enviar interés <Send size={18} />
          </button>
        </form>
      ) : (
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="card text-center py-10 space-y-4 shadow-lg shadow-primary/5"
        >
          <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
            <Heart size={32} />
          </div>
          <h3 className="text-xl font-bold">¡Gracias por tu interés!</h3>
          <p className="text-sm text-text-muted">Nos pondremos en contacto contigo muy pronto para seguir haciendo tribu.</p>
        </motion.div>
      )}

      <div className="pt-4">
        <a 
          href="https://traqueokids.org/contact-us/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn-outline w-full text-center block"
        >
          Contacto Directo Web
        </a>
      </div>
    </div>
  );
};

const Contact = () => {
  const socials = [
    { color: 'bg-blue-600', icon: <Facebook />, label: 'Facebook', url: 'https://www.facebook.com/profile.php?id=61563124855122' },
    { color: 'bg-pink-600', icon: <Instagram />, label: 'Instagram', url: 'https://www.instagram.com/traqueokids/' },
    { color: 'bg-black', icon: <Video />, label: 'TikTok', url: 'https://www.tiktok.com/@traqueokids' },
    { color: 'bg-green-600', icon: <MessageCircle />, label: 'WhatsApp', url: 'https://whatsapp.com/channel/0029Val0Jlv2Jl8KcyJP3D0u' },
    { color: 'bg-red-600', icon: <Youtube />, label: 'YouTube', url: 'https://www.youtube.com/@TRAQUEOKIDS' }
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl text-primary font-extrabold flex items-center gap-2">
        <Phone className="text-primary" />
        Contacto y Redes
      </h2>
      
      <p className="text-sm text-text-muted text-center px-4">
        Síguenos en nuestras redes oficiales para estar al día de todas las novedades y recursos.
      </p>

      <div className="grid grid-cols-1 gap-3">
        {socials.map((s, i) => (
          <a
            key={i}
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-gray-100 active:scale-[0.98] transition-transform"
          >
            <div className={`w-12 h-12 ${s.color} text-white rounded-xl flex items-center justify-center shadow-md`}>
              {s.icon}
            </div>
            <span className="font-bold text-lg">{s.label}</span>
            <ChevronRight className="ml-auto text-text-muted" size={20} />
          </a>
        ))}
      </div>

      <div className="pt-6 space-y-4">
        <a 
          href="https://traqueokids.org/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn-primary w-full"
        >
          Visitar Web Oficial
        </a>
        
        <div className="flex justify-center gap-6 pt-4">
          <a href="https://traqueokids.org/aviso-legal/" target="_blank" rel="noopener noreferrer" className="text-[10px] text-text-muted underline">Aviso Legal</a>
          <a href="https://traqueokids.org/politica-de-privacidad/" target="_blank" rel="noopener noreferrer" className="text-[10px] text-text-muted underline">Privacidad</a>
        </div>
      </div>
    </div>
  );
};

// --- Main App ---

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/info" element={<InfoTQT />} />
          <Route path="/recursos" element={<Resources />} />
          <Route path="/escolaridad" element={<Schooling />} />
          <Route path="/asociacion" element={<AboutUs />} />
          <Route path="/colaborar" element={<Collaborate />} />
          <Route path="/contacto" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

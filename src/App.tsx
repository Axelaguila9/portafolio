import { useState, useEffect } from 'react';
import { User, Target, Briefcase, GraduationCap, Award, Badge, PhoneCall, Mail, MapPin} from 'lucide-react';
import { FaLinkedin, FaGithub, FaInstagram, FaWhatsapp, FaDownload } from 'react-icons/fa';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Harman from './harman.tsx';
import Tec from './tec.tsx';
import Avoped from './avoped.tsx';
import Pisadita from './pisadita.tsx';


const styles = `
  @keyframes scroll {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  
  .scroll-mobile {
    animation: scroll 5s linear infinite;
  }
  
  @media (min-width: 768px) {
    .scroll-mobile {
      animation: scroll 15s linear infinite;
    }
  }
`;

const technologies = [
  { name: 'Java', image: 'iconos/java.png' },
  { name: 'Php', image: 'iconos/php.png' },
  { name: 'JavaScript', image: 'iconos/javascript.png' },
  { name: 'Html', image: 'iconos/html.png' },
  { name: 'Css', image: 'iconos/css.png' },
  { name: 'Booststrap', image: 'iconos/bootstrap.png' },
  { name: 'Tailwind', image: 'iconos/tailwind.png' },
  { name: 'Spring Boot', image: 'iconos/spring.png' },
  { name: 'Symfony', image: 'iconos/symfony.png' },
  { name: 'MySQL', image: 'iconos/mysql.png' },
  { name: 'PostgreSQL', image: 'iconos/postgresql.png' },
  { name: 'Git', image: 'iconos/git.png' },
  { name: 'Scrum', image: 'iconos/scrum.png' },
  { name: 'Power Automate', image: 'iconos/power.png' }
];

const HomePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeSection, setActiveSection] = useState<string>('educacion');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  
  const roles = [
    "Desarrollador Full-Stack",
    "Desarrollador Web",
    "Administrador de Bases de Datos",
    "Arquitecto de Bases de Datos",
    "Arquitecto de Soluciones"
  ];

  const fadeStyles = `
    @keyframes fadeInOut {
      0% { 
        opacity: 0; 
        transform: translateY(20px);
      }
      15% { 
        opacity: 1; 
        transform: translateY(0);
      }
      85% { 
        opacity: 1; 
        transform: translateY(0);
      }
      100% { 
        opacity: 0; 
        transform: translateY(-20px);
      }
    }
    
    .fade-effect {
      animation: fadeInOut 3s ease-in-out infinite;
    }
  `;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <>
{/*Principal*/}
      <div className="min-h-screen bg-cover bg-center bg-no-repeat bg-fixed" style={{backgroundImage: "url('fondos/estrellas.jpg')"}}>
      
        <div className="fixed top-0 left-0 right-0 z-50 bg-black/10 backdrop-blur-sm border-b border-white/20">
          <div className="container mx-auto px-4 md:px-40">
            <div className="flex items-center justify-between h-16 md:h-12">
              <div className="flex items-center">
                <h1 className="text-white text-xl md:text-2xl font-bold">
                  <span className='text-emerald-500'>Dev</span>Axel.
                </h1>
              </div>
    {/* Navegacion*/}
              <nav className="hidden md:flex items-center space-x-8">
                <button onClick={() => {
                    document.getElementById('inicio')?.scrollIntoView({behavior: 'smooth'});}}
                    className="text-white hover:text-emerald-500 transition-colors duration-300 text-base font-medium">
                  Inicio
                </button>
              
              <button onClick={() => {
                  document.getElementById('sobre')?.scrollIntoView({behavior: 'smooth'});}}
                  className="text-white hover:text-emerald-500 transition-colors duration-300 text-base font-medium">
                Sobre Mí
              </button>
              
              <button onClick={() => {
                  document.getElementById('proyectos')?.scrollIntoView({behavior: 'smooth'});}}
                  className="text-white hover:text-emerald-500 transition-colors duration-300 text-base font-medium">
                Proyectos
              </button>
              
              <button onClick={() => {
                  document.getElementById('contacto')?.scrollIntoView({behavior: 'smooth'});}}
                  className="text-white hover:text-emerald-500 transition-colors duration-300 text-base font-medium">
                Contacto
              </button>
            </nav>
    {/* Iconos sociales*/}
            <div className="hidden md:flex items-center space-x-4">
              <a href="https://www.linkedin.com/in/axel-aguila-125712323/" target="_blank" rel="noopener noreferrer">
                <div className="w-8 h-8 text-white hover:text-emerald-500 transition-colors cursor-pointer">
                  <FaLinkedin size={20} />
                </div>
              </a>

              <a href="https://github.com/Axelaguila9" target="_blank" rel="noopener noreferrer">
                <div className="w-8 h-8 text-white hover:text-emerald-500 transition-colors cursor-pointer">
                  <FaGithub size={20} />
                </div>
              </a>

              <a href="https://www.instagram.com/axel_aguila9/" target="_blank" rel="noopener noreferrer">
                <div className="w-8 h-8 text-white hover:text-emerald-500 transition-colors cursor-pointer">
                  <FaInstagram size={20} />
                </div>
              </a>
            </div>
    {/* Menu movil*/}
            <div className="md:hidden">
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="text-white hover:text-emerald-500 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
                  />
                </svg>
              </button>
            </div>
          </div>
    {/* Menú móvil desplegable */}
          {isMobileMenuOpen && (
            <div className="md:hidden bg-black/90 backdrop-blur-md border-t border-white/20">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <button 
                  onClick={() => {
                      document.getElementById('inicio')?.scrollIntoView({behavior: 'smooth'});
                      setIsMobileMenuOpen(false);}}
                      className="block w-full text-left px-3 py-2 text-white hover:text-emerald-500 hover:bg-white/10 rounded-md transition-colors">
                  Inicio
                </button>
                
                <button 
                  onClick={() => {
                    document.getElementById('sobre')?.scrollIntoView({behavior: 'smooth'});
                    setIsMobileMenuOpen(false);}}
                  className="block w-full text-left px-3 py-2 text-white hover:text-emerald-500 hover:bg-white/10 rounded-md transition-colors">
                  Sobre Mí
                </button>
                
                <button 
                  onClick={() => {
                    document.getElementById('proyectos')?.scrollIntoView({behavior: 'smooth'});
                    setIsMobileMenuOpen(false);}}
                    className="block w-full text-left px-3 py-2 text-white hover:text-emerald-500 hover:bg-white/10 rounded-md transition-colors">
                  Proyectos
                </button>
                
                <button 
                  onClick={() => {
                      document.getElementById('contacto')?.scrollIntoView({behavior: 'smooth'});
                      setIsMobileMenuOpen(false);}}
                  className="block w-full text-left px-3 py-2 text-white hover:text-emerald-500 hover:bg-white/10 rounded-md transition-colors">
                  Contacto
                </button>

        {/* Iconos sociales movil */}
                <div className="flex items-center justify-center space-x-4 pt-4 pb-2">
                  <a href="https://www.linkedin.com/in/axel-aguila-125712323/" target="_blank" rel="noopener noreferrer">
                    <div className="w-8 h-8 text-white hover:text-emerald-500 transition-colors cursor-pointer">
                      <FaLinkedin size={20} />
                    </div>
                  </a>

                  <a href="https://github.com/Axelaguila9" target="_blank" rel="noopener noreferrer">
                    <div className="w-8 h-8 text-white hover:text-emerald-500 transition-colors cursor-pointer">
                      <FaGithub size={20} />
                    </div>
                  </a>

                  <a href="https://www.instagram.com/axel_aguila9/" target="_blank" rel="noopener noreferrer">
                    <div className="w-8 h-8 text-white hover:text-emerald-500 transition-colors cursor-pointer">
                      <FaInstagram size={20} />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

{/*Panel Inicio*/}
      <div id='inicio' className="min-h-screen relative">
        <div className="absolute top-20 left-4 md:top-32 md:left-40 px-4 md:px-0">
          <h1 className="text-white font-sans text-sm md:text-lg">Hola Mundo, Soy Axel</h1>
          <h2 className="text-white font-sans text-2xl md:text-5xl">Un Innovador y</h2>
          
          <div className="text-emerald-500 font-sans text-xl md:text-5xl font-extrabold h-10 md:h-16 flex items-center">
            <style dangerouslySetInnerHTML={{ __html: fadeStyles }} />
            <span key={currentIndex} className="fade-effect">
              {roles[currentIndex]}
            </span>
          </div>

          <div className='mt-5'>
            <article className='max-w-sm md:max-w-xl px-0 md:px-3'>
              <p className='text-gray-400 text-sm md:text-base font-sans leading-relaxed text-justify'>
                <span>
                  Un creativo Ingeniero titulado con Primer Lugar de Generación, desarrollador Full Stack especializado en 
                  soluciones web y sistemas empresariales escalables. Mi enfoque principal es transformar conceptos complejos en
                  aplicaciones integrales que optimizan procesos empresariales y brinden experiencias excepcionales al usuario. 
                  Me encanta trabajar con tecnologías modernas como Java, PHP, JavaScript, SQL, HTML y Tailwind, dando vida a 
                  ideas innovadoras para crear sistemas intuitivos que generen impacto real. Constantemente aprendo y exploro 
                  nuevas herramientas para mejorar mis habilidades, liderar proyetos end-to-end y mantenerme a la vanguardia en
                  desarrollo de software.
                </span>
              </p>
            </article>
          </div>

          <div className='mt-8'>
            <div className='flex flex-wrap items-center gap-3'>
              <span className='text-white text-base font-sans'>Sígueme en:</span>
              <a href="https://www.linkedin.com/in/axel-aguila-125712323/" target="_blank" rel="noopener noreferrer">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-700 shadow-lg
                   hover:bg-emerald-500 hover:text-black transition-colors cursor-pointer">
                  <FaLinkedin size={20} />
                </div>
              </a>

              <a href="https://www.instagram.com/axel_aguila9/" target="_blank" rel="noopener noreferrer">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-700 shadow-lg
                   hover:bg-emerald-500 hover:text-black transition-colors cursor-pointer">
                  <FaInstagram size={20} />
                </div>
              </a>

              <a href="https://github.com/Axelaguila9" target="_blank" rel="noopener noreferrer">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-700 shadow-lg
                   hover:bg-emerald-500 hover:text-black transition-colors cursor-pointer">
                  <FaGithub size={20} />
                </div>
              </a>

              <a href="https://wa.me/+524591047332" target="_blank" rel="noopener noreferrer">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-700 shadow-lg
                   hover:bg-emerald-500 hover:text-black transition-colors cursor-pointer">
                  <FaWhatsapp size={20} />
                </div>
              </a>
            </div>
          </div>

          <div className='mt-5'>
            <a href='cv/CV Axel Aguila Ingeniero en Sistemas Computacionales.pdf' download='CV Axel Aguila Ingeniero en Sistemas Computacionales.pdf' className='inline-flex items-center bg-white text-gray-800 px-6 py-3 rounded-lg shadow-lg border-2 border-white
             hover:bg-black hover:text-white hover:border-white transition-colors font-semibold'>
              <FaDownload size={16} className='mr-2' />
              Descargar Mi CV
            </a>
          </div>
        </div>
    {/*Tarjeta*/}
        <div className="absolute top-20 right-4 md:top-40 md:right-24 hidden md:block group">
          <div className="transform transition-all duration-500 ease-out group-hover:-translate-y-3 group-hover:rotate-1 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-emerald-500/20">
            <div className="relative">
              <div className="relative bg-slate-900 w-[340px] h-[500px] overflow-hidden shadow-2xl border-4 border-slate-700 rounded-3xl">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-700 via-slate-900 to-black"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-transparent via-emerald-500/5 to-emerald-400/10 rounded-3xl"></div>
                <div className="absolute top-4 left-4 w-32 h-32 bg-emerald-400/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-8 w-24 h-24 bg-white/5 rounded-full blur-2xl"></div>
                
                <div className="absolute top-0 left-0 right-0 z-10 p-6 text-center">
                  <h2 className="text-white text-2xl font-bold mb-1">Axel Aguila</h2>
                  <p className="text-emerald-300 text-sm">Desarrollador Full Stack</p>
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 z-10 p-4 bg-gradient-to-t from-slate-900/95 to-transparent rounded-b-3xl">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-emerald-400/30">
                        <img src="fotos_axel/carlos.png" alt="Axel" className="w-full h-full object-cover object-center"/>
                      </div>
                      <div>
                        <div className="flex items-center space-x-2 mb-1">
                          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                          <span className="text-white text-sm font-medium">@Axelaguila</span>
                        </div>
                        <span className="text-emerald-200 text-xs">En línea</span>
                      </div>
                    </div>
                    <a href="https://www.linkedin.com/in/axel-aguila-125712323/" target="_blank" rel="noopener noreferrer"
                       className="bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors shadow-lg">
                      Contáctame
                    </a>
                  </div>
                </div>
                
                <img src="fotos_axel/carlos.png" alt="Axel" className="absolute bottom-0 left-0 w-full h-96 object-cover object-center rounded-b-3xl"/>
              </div>
            </div>
          </div>
        </div>
      </div>
{/*Panel sobre mi*/}
      <div id='sobre' className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-40">
          <div className="mb-16">
            <h2 className="text-white text-2xl md:text-4xl font-sans mb-4">Sobre Mí</h2>
            <div className="w-12 md:w-24 h-1 bg-white -mt-3 md:-mt-2"></div>
          </div>
        </div>

        <div className="-mt-12 grid grid-cols-1 md:grid-cols-3 gap-3 max-w-[1200px] mx-auto px-4">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
            <div className="absolute top-0 left-0 right-0 h-1 bg-emerald-900 rounded-t-lg"></div>
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-emerald-500 rounded-full flex items-center justify-center text-black shadow-lg transition-colors">
                <User size={20} className="md:w-5 md:h-5" />
              </div>
              <h3 className="text-white text-lg md:text-xl font-sans font-semibold">¿Quién Soy?</h3>
            </div>

            <p className='text-justify'>
              <span className='text-white text-sm font-sans'>
                Ingeniero en sistemas Computacionales y desarrollador web en constante actualización con las últimas tecnologías,
                motivado con solidos conocimientos en desarrollo de software y diseño de interfaces web modernas.
              </span>
            </p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
            <div className="absolute top-0 left-0 right-0 h-1 bg-emerald-900 rounded-t-lg"></div>
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-emerald-500 rounded-full flex items-center justify-center text-black shadow-lg transition-colors">
                <Target size={20} className="md:w-5 md:h-5" />
              </div>
              <h3 className="text-white text-lg md:text-xl font-sans font-semibold">Mi Objetivo</h3>
            </div>

            <p className='text-justify'>
              <span className='text-white text-sm font-sans'>
                Obtener una posición como desarrollador Full Stack donde pueda aplicar mis conocimientos técnicos para crear soluciones 
                innovadoras y contribuir al crecimiento de proyectos tecnológicos impactantes.
              </span>
            </p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
            <div className="absolute top-0 left-0 right-0 h-1 bg-emerald-900 rounded-t-lg"></div>
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-emerald-500 rounded-full flex items-center justify-center text-black shadow-lg transition-colors">
                <Briefcase size={20} className="md:w-5 md:h-5" />
              </div>
              <h3 className="text-white text-lg md:text-xl font-sans font-semibold">Mi Perfil</h3>
            </div>

            <p className='text-justify'>
              <span className='text-white text-sm font-sans'>
                Me caracterizo por mi capacidad para desarrollar sistemas web integrales y optimizar procesos empresariales a través de 
                soluciones tecnológicas. Tengo experiencia sólida en la implementación de módulos de automatización, creación de dashboards 
                interactivos y desarrollo de aplicaciones Full Stack que mejoran la eficiencia operativa.
              </span>
            </p>
          </div>
        </div>
        
        <div className="mt-4 max-w-[1200px] mx-auto px-4">
          <div className="bg-white/9 rounded-lg p-4 relative">
            <div className="absolute top-0 left-0 right-0 h-1 bg-emerald-900 rounded-t-lg"></div>
            <div className='bg-black'>
              <h3 className="-mt-2 text-white text-center text-lg md:text-xl font-sans font-semibold">Mis Habilidades Técnicas</h3>
            </div>
            <div className="relative overflow-hidden mt-4">
              <div className="flex gap-2 md:gap-4 scroll-mobile">
                {technologies.map((tech, index) => (
                  <div key={`first-${index}`} className="flex flex-col items-center flex-shrink-0">
                    <img src={tech.image} alt={tech.name} className="w-16 h-16 md:w-20 md:h-20 object-cover rounded"/>
                    <span className="text-white text-xs md:text-sm mt-1">{tech.name}</span>
                  </div>
                ))}
                {technologies.map((tech, index) => (
                  <div key={`second-${index}`} className="flex flex-col items-center flex-shrink-0">
                    <img src={tech.image} alt={tech.name} className="w-16 h-16 md:w-20 md:h-20 object-cover rounded"/>
                    <span className="text-white text-xs md:text-sm mt-1">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div id="sections-container" className="mt-4 bg-white/5 backdrop-blur-sm rounded-xl grid grid-cols-1 md:grid-cols-3 gap-3 max-w-[1200px] mx-auto px-1 border border-white/10 text-center">
          <div className={`mt-2 mb-2 h-12 md:h-16 rounded-2xl p-2 relative cursor-pointer flex flex-col items-center justify-center transition-colors group
               ${activeSection === 'educacion' ? 'bg-black' : 'bg-white hover:bg-black'}`}
               onClick={() => {setActiveSection('educacion');
               setTimeout(() => {document.getElementById('educacion')?.scrollIntoView({behavior: 'smooth', block: 'start' });}, 100);}}>
            <GraduationCap size={20} className={`md:w-5 md:h-5 transition-colors duration-300 ${activeSection === 'educacion' ? 'text-white' : 'text-emerald-500 group-hover:text-white'}`}/>
            <h3 className={`-mt-1 font-sans font-semibold text-sm md:text-base text-center transition-colors duration-300 ${activeSection === 'educacion' ? 'text-white' : 'text-black group-hover:text-white'}`}>Formación académica</h3>
          </div>

          <div className={`mt-2 mb-2 h-12 md:h-16 rounded-2xl p-2 relative cursor-pointer flex flex-col items-center justify-center transition-colors group
               ${activeSection === 'certificaciones' ? 'bg-black' : 'bg-white hover:bg-black'}`}
               onClick={() => {setActiveSection('certificaciones');
               setTimeout(() => {document.getElementById('certificaciones')?.scrollIntoView({behavior: 'smooth', block: 'start' });}, 100);}}>
            <Badge size={20} className={`md:w-5 md:h-5 ${activeSection === 'certificaciones' ? 'text-white' : 'text-emerald-500 group-hover:text-white'}`}/>
            <h3 className={`-mt-1 font-sans font-semibold text-sm md:text-base text-center ${activeSection === 'certificaciones' ? 'text-white' : 'text-black group-hover:text-white'}`}>Certificaciones</h3>
          </div>

          <div className={`mt-2 mb-2 h-12 md:h-16 rounded-2xl p-2 relative cursor-pointer flex flex-col items-center justify-center transition-colors group
               ${activeSection === 'reconocimientos' ? 'bg-black' : 'bg-white hover:bg-black'}`}
               onClick={() => {setActiveSection('reconocimientos');
               setTimeout(() => {document.getElementById('reconocimientos')?.scrollIntoView({behavior: 'smooth', block: 'start' });}, 100);}}>
            <Award size={20} className={`md:w-5 md:h-5 ${activeSection === 'reconocimientos' ? 'text-white' : 'text-emerald-500 group-hover:text-white'}`}/>
            <h3 className={`-mt-1 font-sans font-semibold text-sm md:text-base text-center ${activeSection === 'reconocimientos' ? 'text-white' : 'text-black group-hover:text-white'}`}>Reconocimientos</h3>
          </div>
        </div>
      </div>

      <div className="mt-4 relative pb-4">
    {/* Panel de Educación */}
        <div className={`transition-all duration-700 ease-in-out ${
          activeSection === 'educacion' 
            ? 'opacity-100 transform translate-y-0 relative' 
            : 'opacity-0 transform translate-y-8 absolute inset-0 pointer-events-none'
        }`}>
          <div id="educacion" className="max-w-[420px] mx-4 md:mx-40">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
              <div className="mt-1 mb-1 bg-black/80 w-full rounded-2xl p-4 relative">
                <p>
                  <span className='text-white text-lg md:text-xl'>Ingeniería en Sistemas Computacionales</span><br />
                  <span className='text-gray-400 text-sm md:text-base'>Instituto Tecnologico Superior de Tacambaro</span><br />
                  <span className='text-gray-400 text-sm md:text-base'>2020 - 2025</span>
                </p>
                <img src="educacion/diploma.png" alt="diploma" className="w-full max-w-64 h-auto md:h-80 object-cover transition-all duration-300 hover:scale-[1.2] md:hover:scale-[1.7] hover:z-50"/>
              </div>
            </div>
          </div>
        </div>

    {/* Panel de Certificaciones */}
        <div className={`transition-all duration-700 ease-in-out ${
          activeSection === 'certificaciones' 
            ? 'opacity-100 transform translate-y-0 relative' 
            : 'opacity-0 transform translate-y-8 absolute inset-0 pointer-events-none'
        }`}>
          <div id='certificaciones' className="grid grid-cols-1 md:grid-cols-3 gap-3 max-w-[1200px] mx-4 md:mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center transition-all duration-300 hover:scale-[1.2] md:hover:scale-[1.4] hover:z-50 z-10">
              <img src="certificados/git.png" alt="git" className="w-full h-full object-cover"/>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center transition-all duration-300 hover:scale-[1.2] md:hover:scale-[1.4] hover:z-50 z-10">
              <img src="certificados/HTML&CSS.png" alt="html css" className="w-full h-full object-cover"/>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center transition-all duration-300 hover:scale-[1.2] md:hover:scale-[1.4] hover:z-50 z-10">
              <img src="certificados/Logica_programacion.png" alt="logica" className="w-full h-full object-cover"/>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center transition-all duration-300 hover:scale-[1.2] md:hover:scale-[1.4] hover:z-50 z-10">
              <img src="certificados/Logica _javascript.png" alt="javascript" className="w-full h-full object-cover"/>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center transition-all duration-300 hover:scale-[1.2] md:hover:scale-[1.4] hover:z-50 z-10">
              <img src="certificados/Ciberseguridad.png" alt="ciberseguridad" className="w-full h-full object-cover"/>
            </div>
          </div>
        </div>

    {/* Panel de Reconocimientos */}
        <div className={`transition-all duration-700 ease-in-out ${
          activeSection === 'reconocimientos' 
            ? 'opacity-100 transform translate-y-0 relative' 
            : 'opacity-0 transform translate-y-8 absolute inset-0 pointer-events-none'
        }`}>
          <div id='reconocimientos' className="grid grid-cols-1 md:grid-cols-3 gap-3 max-w-[1200px] mx-4 md:mx-40">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center transition-all duration-300 cursor-pointer hover:scale-[1.2] md:hover:scale-[1.3] hover:z-50 z-10 flex justify-center items-center">
              <img src="reconocimientos/tec.png" alt="tec" className="w-64 h-80 object-cover"/>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center transition-all duration-300 cursor-pointer hover:scale-[1.2] md:hover:scale-[1.3] hover:z-50 z-10">
              <img src="reconocimientos/inters_harman.png" alt="harman" className="w-full h-full object-cover"/>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-40">
          <div className="mb-16">
            <h2 id="proyectos" className="text-white text-2xl md:text-4xl font-sans mb-4">Proyectos</h2>
            <div className="w-12 md:w-24 h-1 bg-white -mt-3 md:-mt-2"></div>
          </div>
        </div>

        <div className="-mt-6 md:-mt-12 grid grid-cols-1 md:grid-cols-2 gap-3 max-w-[1200px] mx-auto px-4">
      {/*Experiencia Harman*/}
          <div className="rounded-lg p-2 md:p-4 relative group overflow-hidden cursor-pointer">
            <img src="harman/harman.png" alt="harman" className="w-full h-48 md:h-72 object-cover transition-transform duration-300 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
              <div className="transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 delay-100">
                <h3 className="text-white font-bold text-2xl mb-2">Coffe Break</h3>
                <p className="text-emerald-500 text-lg mb-1">Internship Software Development Finance</p>
                
                <div className="flex items-center justify-between">
                  <p className="text-gray-300 text-base">Junio 2024 - Enero 2025</p>
                  <button onClick={(e) => {
                          e.stopPropagation();
                          navigate('/harman');}}
                    className="bg-emerald-500 hover:bg-emerald-700 text-black px-4 py-2 rounded-lg font-semibold transition-colors duration-300 flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Ver Proyecto
                  </button>
                </div>
              </div>
            </div>
          </div>
      {/*Experiencia TEC */}
          <div className="rounded-lg p-2 md:p-4 relative group overflow-hidden cursor-pointer">
            <img src="tec/tec.png" alt="tecnm" className="w-full h-48 md:h-72 object-cover transition-transform duration-300 group-hover:scale-110"/>
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
              <div className="transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 delay-100">
                <h3 className="text-white font-bold text-2xl mb-2">Sistema de Gestión Académica Integral</h3>
                <p className="text-emerald-500 text-lg mb-1">Web Administrator</p>
                
                <div className="flex items-center justify-between">
                  <p className="text-gray-300 text-base">Septiembre 2023 - Mayo 2024</p>
                  <button onClick={(e) => {
                          e.stopPropagation();
                          navigate('/tec');}}
                    className="bg-emerald-500 hover:bg-emerald-700 text-black px-4 py-2 rounded-lg font-semibold transition-colors duration-300 flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Ver Proyecto
                  </button>
                </div>
              </div>
            </div>
          </div>
      {/*Experiencia Avoped*/}
          <div className="rounded-lg p-2 md:p-4 relative group overflow-hidden cursor-pointer">
            <img src="avo/avo.png" alt="avoped" className="w-full h-48 md:h-72 object-cover transition-transform duration-300 group-hover:scale-110"/>
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
              <div className="transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 delay-100">
                <h3 className="text-white font-bold text-2xl mb-2">Sistema de Gestión de Datos</h3>
                <p className="text-emerald-500 text-lg mb-1">Administrative Developer</p>
                
                <div className="flex items-center justify-between">
                  <p className="text-gray-300 text-base">Febrero 2023 - Julio 23</p>
                  
                  <button onClick={(e) => {
                          e.stopPropagation();
                          navigate('/avoped');}}
                    className="bg-emerald-500 hover:bg-emerald-700 text-black px-4 py-2 rounded-lg font-semibold transition-colors duration-300 flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Ver Proyecto
                  </button>
                </div>
              </div>
            </div>
          </div>
      {/*Experiencia Pisadita*/}
          <div className="rounded-lg p-2 md:p-4 relative group overflow-hidden cursor-pointer">
            <img src="pisadita/pisadita.png" alt="pisadita" className="w-full h-48 md:h-72 object-cover transition-transform duration-300 group-hover:scale-110"/>
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
              <div className="transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 delay-100">
                <h3 className="text-white font-bold text-2xl mb-2">Punto Venta</h3>
                <p className="text-emerald-500 text-lg mb-1">Freelance Developer</p>
                
                <div className="flex items-center justify-between">
                  <p className="text-gray-300 text-base">Agosto 2022 - Enero 2023</p>
                  <button onClick={(e) => {
                          e.stopPropagation();
                          navigate('/pisadita');}}
                    className="bg-emerald-500 hover:bg-emerald-700 text-black px-4 py-2 rounded-lg font-semibold transition-colors duration-300 flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Ver Proyecto
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
{/*Panel Contacto*/}
      <div id="contacto" className="py-4">
        <div className="container mx-auto px-4 md:px-40">
          <div className="mb-16">
            <h2 className="text-white text-2xl md:text-4xl font-sans mb-4">Trabajemos Juntos</h2>
            <div className="w-12 md:w-24 h-1 bg-white -mt-3 md:-mt-2"></div>
          </div>
        </div>   
        <div className="-mt-12 grid grid-cols-1 md:grid-cols-4 gap-3 max-w-[1200px] mx-auto px-4">
      {/*Contacto celular*/}   
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
            <div className="absolute top-0 left-0 right-0 h-1 bg-white rounded-t-lg"></div>
            <div className="flex flex-col items-center gap-6">
              <div className="w-8 h-8 md:w-16 md:h-16 flex items-center justify-center text-emerald-500 shadow-lg transition-colors">
                <PhoneCall size={20} className="md:w-40 md:h-40" />
              </div>
              <h3 className="text-white font-semibold text-lg md:text-2xl">Celular</h3>
            </div>

            <p className='mt-3 flex flex-col gap-4 text-justify'>
              <span className='text-gray-400 text-base'>
                También puedes contactarme directamente a mi número personal.
              </span>
              <span className='text-white font-semibold text-xl text-center'>
                +52 459 104 7332 
              </span>
            </p>
          </div>
      {/*Contacto ubicacion*/}  
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
            <div className="absolute top-0 left-0 right-0 h-1 bg-white rounded-t-lg"></div>

            <div className="flex flex-col items-center gap-6">
              <div className="w-8 h-8 md:w-16 md:h-16 flex items-center justify-center text-emerald-500 shadow-lg transition-colors">
                <MapPin size={20} className="md:w-40 md:h-40" />
              </div>
              <h3 className="text-white font-semibold text-lg md:text-2xl">Ubicación</h3>
            </div>

            <p className='mt-3 flex flex-col gap-10 text-justify'>
              <span className='text-gray-400 text-base'>
                Actualmente radico en la ciudad de Tacámbaro Michoacán
              </span>
              <a href="https://maps.app.goo.gl/v1F12fL8zz6a79bm8" target="_blank" rel="noopener noreferrer"
                 className='text-white font-semibold text-xl text-center hover:text-emerald-500 transition-colors cursor-pointer'>
                Ver en mapa 
              </a>
            </p>
          </div>
      {/*Contacto correo*/}   
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
            <div className="absolute top-0 left-0 right-0 h-1 bg-white rounded-t-lg"></div>

            <div className="flex flex-col items-center gap-6">
              <div className="w-8 h-8 md:w-16 md:h-16 flex items-center justify-center text-emerald-500 shadow-lg transition-colors">
                <Mail size={20} className="md:w-40 md:h-40" />
              </div>
              <h3 className="text-white font-semibold text-lg md:text-2xl">Lunes a Sábado</h3>
            </div>

            <p className='mt-3 flex flex-col gap-4 text-justify'>
              <span className='text-gray-400 text-base'>
                Tengo la disposición de responder correos de Lunes a Sábado
              </span>
              <a href="mailto:axelaguila@gmail.com" className='text-white font-semibold text-xl text-center hover:text-emerald-500 transition-colors cursor-pointer'>
                axelaguila@gmail.com 
              </a>
            </p>
          </div>
      {/*Contacto Linkedin*/} 
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
            <div className="absolute top-0 left-0 right-0 h-1 bg-white rounded-t-lg"></div>

            <div className="flex flex-col items-center gap-6">
              <div className="w-8 h-8 md:w-16 md:h-16 flex items-center justify-center text-emerald-500 shadow-lg transition-colors">
                <FaLinkedin size={20} className="md:w-40 md:h-40" />
              </div>
              <h3 className="text-white font-semibold text-lg md:text-2xl">Linkedin</h3>
            </div>

            <p className='mt-3 flex flex-col gap-4 text-justify'>
              <span className='text-gray-400 text-base'>
                También puedes encontrarme en LinkedIn para oportunidades de colaboración profesional.
              </span>
              <a href="https://www.linkedin.com/in/axel-aguila-125712323/" target="_blank" rel="noopener noreferrer"
                 className='text-white font-semibold text-xl text-center hover:text-emerald-500 transition-colors cursor-pointer'>
                Axel Aguila
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className='w-full relative py-9'>
        <div className="absolute top-8 left-0 right-0 h-0.5 bg-white rounded-t-lg"></div>
        <span className='text-white'>Carlos Axel Rugerio Aguila 2025</span>
      </div>
    </div>
    <style dangerouslySetInnerHTML={{ __html: styles }} />
    </>
  );
};

function App() {
  return (
    <Router basename="/portafolio">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/harman" element={<Harman />} />
        <Route path="/tec" element={<Tec />} />
        <Route path="/avoped" element={<Avoped />} />
        <Route path="/pisadita" element={<Pisadita />} />
      </Routes>
    </Router>
  );
}

export default App

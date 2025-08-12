import React, { useState, useEffect } from 'react';
import { Globe, Database, Code, GitBranch, User, Target, Briefcase, GraduationCap, Award, Badge} from 'lucide-react';
import { FaLinkedin, FaGithub, FaInstagram, FaWhatsapp, FaDownload } from 'react-icons/fa';

interface FloatingIconProps {
  icon: React.ReactNode;
  position: string;
  delay: string;
}

const FloatingIcon: React.FC<FloatingIconProps> = ({ icon, position, delay }) => (
  <div 
    className={`absolute ${position} w-12 h-12 bg-white rounded-full flex items-center justify-center text-black shadow-lg animate-bounce hover:bg-white
                transition-colors cursor-pointer`}
    style={{ animationDelay: delay, animationDuration: '2s' }}
  >
    {icon}
  </div>
);

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

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeSection, setActiveSection] = useState<string>('');
  
  const roles = [
    "Desarrollador Full-Stack",
    "Desarrollador Web",
    "Administrador de Bases de Datos",
    "Arquitecto de Bases de Datos",
    "Arquitecto de Soluciones"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [roles.length]);


  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const container = document.getElementById('sections-container');
      if (container && !container.contains(event.target as Node)) {
        setActiveSection('');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
    <div className="min-h-screen bg-cover bg-center bg-no-repeat bg-fixed" 
    
         style={{backgroundImage: "url('fondos/estrellas.jpg')"}}>

      <div className="min-h-screen relative">

        <div className="absolute top-20 left-4 md:top-32 md:left-40 px-4 md:px-0">
          <h1 className="text-white font-sans text-sm md:text-lg">Hola Mundo, Soy Axel</h1>
          <h2 className="text-white font-sans text-2xl md:text-5xl">Un Innovador y</h2>
          
          <div className="text-purple-300 font-sans text-xl md:text-5xl h-10 md:h-16 flex items-center">
            <span key={currentIndex} className="transition-all duration-500 ease-in-out animate-pulse">
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
                   hover:bg-purple-300 hover:text-black transition-colors cursor-pointer">
                  <FaLinkedin size={20} />
                </div>
              </a>
              <a href="https://www.instagram.com/axel_aguila9/" target="_blank" rel="noopener noreferrer">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-700 shadow-lg
                   hover:bg-purple-300 hover:text-black transition-colors cursor-pointer">
                  <FaInstagram size={20} />
                </div>
              </a>
              <a href="https://github.com/Axelaguila9" target="_blank" rel="noopener noreferrer">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-700 shadow-lg
                   hover:bg-purple-300 hover:text-black transition-colors cursor-pointer">
                  <FaGithub size={20} />
                </div>
              </a>
              <a href="https://wa.me/+524591047332" target="_blank" rel="noopener noreferrer">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-700 shadow-lg
                   hover:bg-purple-300 hover:text-black transition-colors cursor-pointer">
                  <FaWhatsapp size={20} />
                </div>
              </a>
            </div>
          </div>

          <div className='mt-5'>
            <a href='#' download='#' className='inline-flex items-center bg-white text-gray-800 px-6 py-3 rounded-lg shadow-lg
             hover:bg-gray-100 transition-colors font-semibold'>
              <FaDownload size={16} className='mr-2' />
              Descargar Mi CV
            </a>
          </div>
        </div>

        <div className="absolute top-20 right-4 md:top-32 md:right-40 hidden md:block">
          <div className="relative">
            <div className="relative w-80 h-80 rounded-full overflow-hidden shadow-2xl border-4 border-white">
              <img src="fotos_axel/axel.jpg" alt="Axel" className="w-full h-full object-cover"/>
            </div>
            <FloatingIcon icon={<Code size={20} />} position="top-6 -left-4" delay="0s"/>
            <FloatingIcon icon={<Database size={20} />} position="-top-6 -right-6" delay="0.3s"/>
            <FloatingIcon icon={<GitBranch size={20} />} position="-bottom-6 -left-6" delay="1.2s"/>
            <FloatingIcon icon={<Globe size={20} />} position="bottom-6 -right-6" delay="1.5s"/>
          </div>
        </div>
      </div>

      <div className="min-h-screen py-5 md:py-32">
        <div className="container mx-auto px-4 md:px-40">
          <div className="mb-16">
            <h2 className="text-white text-2xl md:text-4xl font-sans mb-4">Sobre Mí</h2>
            <div className="w-12 md:w-24 h-1 bg-white -mt-3 md:-mt-2"></div>
          </div>
        </div>
        <div className="-mt-12 grid grid-cols-1 md:grid-cols-3 gap-3 max-w-[1200px] mx-auto px-4">
          <div className="bg-white/10 rounded-lg p-4 relative">
            <div className="absolute top-0 left-0 right-0 h-1 bg-white rounded-t-lg"></div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-purple-300/40 rounded-full flex items-center justify-center text-black shadow-lg transition-colors">
                <User size={20} className="md:w-5 md:h-5" />
              </div>
              <h3 className="text-purple-300 text-lg md:text-xl">¿Quién Soy?</h3>
            </div>
            <p className='text-justify'>
              <span className='text-gray-400 text-sm'>
                Ingeniero en sistemas Computacionales y desarrollador web en constante actualización con las últimas tecnologías,
                motivado con solidos conocimientos en desarrollo de software y diseño de interfaces web modernas.
              </span>
            </p>
          </div>
          
          <div className="bg-white/10 rounded-lg p-4 relative">
            <div className="absolute top-0 left-0 right-0 h-1 bg-white rounded-t-lg"></div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-purple-300/40 rounded-full flex items-center justify-center text-black shadow-lg transition-colors">
                <Target size={20} className="md:w-5 md:h-5" />
              </div>
              <h3 className="text-purple-300 text-lg md:text-xl">Mi Objetivo</h3>
            </div>
            <p className='text-justify'>
              <span className='text-gray-400 text-sm'>
                Obtener una posición como desarrollador Full Stack donde pueda aplicar mis conocimientos técnicos para crear soluciones 
                innovadoras y contribuir al crecimiento de proyectos tecnológicos impactantes.
              </span>
            </p>
          </div>
          
          <div className="bg-white/10 rounded-lg p-4 relative">
            <div className="absolute top-0 left-0 right-0 h-1 bg-white rounded-t-lg"></div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-purple-300/40 rounded-full flex items-center justify-center text-black shadow-lg transition-colors">
                <Briefcase size={20} className="md:w-5 md:h-5" />
              </div>
              <h3 className="text-purple-300 text-lg md:text-xl">Mi Perfil</h3>
            </div>
            <p className='text-justify'>
              <span className='text-gray-400 text-sm'>
                Me caracterizo por mi capacidad para desarrollar sistemas web integrales y optimizar procesos empresariales a través de 
                soluciones tecnológicas. Tengo experiencia sólida en la implementación de módulos de automatización, creación de dashboards 
                interactivos y desarrollo de aplicaciones Full Stack que mejoran la eficiencia operativa.
              </span>
            </p>
          </div>
        </div>
        
        <div className="mt-4 max-w-[1200px] mx-auto px-4">
          <div className="bg-white/9 rounded-lg p-4 relative">
            <div className="absolute top-0 left-0 right-0 h-1 bg-white rounded-t-lg"></div>
            <h3 className="-mt-2 text-purple-300 text-center text-lg md:text-xl">Mis Habilidades Técnicas</h3>
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

        <div id="sections-container" className="mt-4 bg-black/70 rounded-2xl grid grid-cols-1 md:grid-cols-3 gap-3 max-w-[1200px] mx-auto px-4">  
          <div className={`mt-2 mb-2 h-12 md:h-16 rounded-2xl p-2 relative cursor-pointer flex flex-col items-center justify-center transition-colors
               ${activeSection === 'educacion' ? 'bg-purple-300 text-black' : 'bg-white hover:bg-purple-300 text-black'}`}
               onClick={() => {setActiveSection('educacion');
               setTimeout(() => {document.getElementById('educacion')?.scrollIntoView({behavior: 'smooth', block: 'start' });}, 100);}}>
            <GraduationCap size={20} className="md:w-5 md:h-5"/>
            <h3 className="-mt-1 text-black text-sm md:text-base text-center">Formación académica</h3>
          </div>

          <div className={`mt-2 mb-2 h-12 md:h-16 rounded-2xl p-2 relative cursor-pointer flex flex-col items-center justify-center transition-colors
               ${activeSection === 'certificaciones' ? 'bg-purple-300 text-black' : 'bg-white hover:bg-purple-300 text-black'}`}
               onClick={() => {setActiveSection('certificaciones');
               setTimeout(() => {document.getElementById('certificaciones')?.scrollIntoView({behavior: 'smooth', block: 'start' });}, 100);}}>
            <Badge size={20} className="md:w-5 md:h-5"/>
            <h3 className="-mt-1 text-black text-sm md:text-base text-center">Certificaciones</h3>
          </div>

          <div className={`mt-2 mb-2 h-12 md:h-16 rounded-2xl p-2 relative cursor-pointer flex flex-col items-center justify-center transition-colors
               ${activeSection === 'reconocimientos' ? 'bg-purple-300 text-black' : 'bg-white hover:bg-purple-300 text-black'}`}
               onClick={() => {setActiveSection('reconocimientos');
               setTimeout(() => {document.getElementById('reconocimientos')?.scrollIntoView({behavior: 'smooth', block: 'start' });}, 100);}}>
            <Award size={20} className="md:w-5 md:h-5"/>
            <h3 className="-mt-1 text-black text-sm md:text-base text-center">Reconocimientos</h3>
          </div>
        </div>
      </div>

      {activeSection === 'educacion' && (
      <div id="educacion" className="-mt-4 md:-mt-24 max-w-[420px] mx-4 md:mx-40">
        <div className="bg-white/20 rounded-2xl p-4 relative">
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
      )}

      {activeSection === 'certificaciones' && (
        <div>
          <div id='certificaciones' className="-mt-4 md:-mt-24 grid grid-cols-1 md:grid-cols-3 gap-3 max-w-[1200px] mx-4 md:mx-auto">
            <div className="bg-white/10 rounded-lg p-4 relative transition-all duration-300 hover:scale-[1.2] md:hover:scale-[1.4] hover:z-50 z-10">
              <img src="certificados/git.png" alt="git" className="w-full h-full object-cover"/>
            </div>
            
            <div className="bg-white/10 rounded-lg p-4 relative transition-all duration-300 hover:scale-[1.2] md:hover:scale-[1.4] hover:z-50 z-10">
              <img src="certificados/HTML&CSS.png" alt="html css" className="w-full h-full object-cover"/>
            </div>
            
            <div className="bg-white/10 rounded-lg p-4 relative transition-all duration-300 hover:scale-[1.2] md:hover:scale-[1.4] hover:z-50 z-10">
              <img src="certificados/Logica_programacion.png" alt="logica" className="w-full h-full object-cover"/>
            </div>
                                                
            <div className="bg-white/10 rounded-lg p-4 relative transition-all duration-300 hover:scale-[1.2] md:hover:scale-[1.4] hover:z-50 z-10">
              <img src="certificados/Logica _javascript.png" alt="javascript" className="w-full h-full object-cover"/>
            </div>
                                                
            <div className="bg-white/10 rounded-lg p-4 relative transition-all duration-300 hhover:scale-[1.2] md:hover:scale-[1.4] hover:z-50 z-10">
              <img src="certificados/Ciberseguridad.png" alt="ciberseguridad" className="w-full h-full object-cover"/>
            </div>
          </div>
        </div>
      )}

      {activeSection === 'reconocimientos' && (
        <div>
          <div id='reconocimientos' className="-mt-4 md:-mt-24 grid grid-cols-1 md:grid-cols-3 gap-3 max-w-[1200px] mx-4 md:mx-40">
            <div className="bg-white/10 rounded-lg p-4 relative transition-all duration-300 cursor-pointer hover:scale-[1.2] md:hover:scale-[1.3] hover:z-50 z-10 flex justify-center items-center">
              <img src="reconocimientos/tec.png" alt="tec" className="w-64 h-80 object-cover"/>
            </div>
                            
            <div className="bg-white/10 rounded-lg p-4 relative transition-all duration-300 cursor-pointer hover:scale-[1.2] md:hover:scale-[1.3] hover:z-50 z-10">
              <img src="reconocimientos/inters_harman.png" alt="harman" className="w-full h-full object-cover"/>
            </div>
          </div>
        </div>
      )}

      <div className="min-h-screen py-5 md:py-32">
        <div className="container mx-auto px-4 md:px-40">
          <div className="mb-16">
            <h2 className="text-white text-2xl md:text-4xl font-sans mb-4">Proyectos</h2>
            <div className="w-12 md:w-24 h-1 bg-white -mt-3 md:-mt-2"></div>
          </div>
        </div>

        <div className="-mt-6 md:-mt-12 grid grid-cols-1 md:grid-cols-2 gap-3 max-w-[1200px] mx-auto px-4">
          <div className="rounded-lg p-2 md:p-4 relative">
            <img src="harman/harman.png" alt="harman" className="w-full h-48 md:h-72 object-cover" />
          </div>
          
          <div className="rounded-lg p-2 md:p-4 relative">
            <img src="tec/tec.png" alt="harman" className="w-full h-48 md:h-72 object-cover"/>
          </div>

          <div className="rounded-lg p-2 md:p-4 relative">
            <img src="avo/avo.png" alt="harman" className="w-full h-48 md:h-72 object-cover"/>
          </div>

          <div className="rounded-lg p-2 md:p-4 relative">
            <img src="pisadita/pisadita.png" alt="harman" className="w-full h-48 md:h-72 object-cover"/>
          </div>

        </div>
      </div>

    </div>

    
    <style dangerouslySetInnerHTML={{ __html: styles }} />
    </>
  )
}

export default App

import React, { useState, useEffect } from 'react';
import { Globe, Database, Code, GitBranch } from 'lucide-react';
import { FaLinkedin, FaGithub, FaInstagram, FaWhatsapp, FaDownload } from 'react-icons/fa';

interface FloatingIconProps {
  icon: React.ReactNode;
  position: string;
  delay: string;
}

const FloatingIcon: React.FC<FloatingIconProps> = ({ icon, position, delay }) => (
  <div 
    className={`absolute ${position} w-12 h-12 bg-slate-300 rounded-full flex items-center justify-center text-black shadow-lg animate-bounce hover:bg-white  
                transition-colors cursor-pointer`}style={{ animationDelay: delay, animationDuration: '2s' }}>{icon}
  </div>
);

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
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

  return (
    <div className="min-h-screen bg-cover bg-center bg-no-repeat relative" 
         style={{backgroundImage: "url('fondos/estrellas.jpg')"}}>

      <div className="absolute top-20 left-4 md:top-32 md:left-40 px-4 md:px-0">
        <h1 className="text-white font-sans text-sm md:text-lg">Hola Mundo, Soy Axel</h1>
        <h2 className="text-white font-sans text-2xl md:text-5xl">Un Innovador y</h2>
        
        <div className="text-teal-300 font-sans text-xl md:text-5xl h-10 md:h-16 flex items-center">
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
                nuevas herramientas para mejorar mis habilidades, liderar proyectos end-to-end y mantenerme a la vanguardia en
                desarrollo de software.
              </span>
            </p>
          </article>
        </div>

        <div className='mt-8'>
          <div className='flex flex-wrap items-center gap-3'>
            <span className='text-white text-base font-sans'>Sígueme en:</span>
            <a href="https://www.linkedin.com/in/axel-aguila-125712323/" target="_blank" rel="noopener noreferrer">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-700 shadow-lg hover:bg-teal-600 hover:text-white transition-colors cursor-pointer">
                <FaLinkedin size={20} />
              </div>
            </a>
            <a href="https://www.instagram.com/axel_aguila9/" target="_blank" rel="noopener noreferrer">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-700 shadow-lg hover:bg-teal-600 hover:text-white transition-colors cursor-pointer">
                <FaInstagram size={20} />
              </div>
            </a>
            <a href="https://github.com/Axelaguila9" target="_blank" rel="noopener noreferrer">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-700 shadow-lg hover:bg-teal-600 hover:text-white transition-colors cursor-pointer">
                <FaGithub size={20} />
              </div>
            </a>
            <a href="https://wa.me/+524591047332" target="_blank" rel="noopener noreferrer">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-700 shadow-lg hover:bg-teal-600 hover:text-white transition-colors cursor-pointer">
                <FaWhatsapp size={20} />
              </div>
            </a>
          </div>
        </div>

        <div className='mt-5'>
          <a href='#' download='#' className='inline-flex items-center bg-white text-gray-800 px-6 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition-colors font-semibold'>
            <FaDownload size={16} className='mr-2' />
            Descargar Mi CV
          </a>
        </div>
      </div>

      <div className="absolute top-20 right-4 md:top-32 md:right-40 hidden md:block">
        <div className="relative">
          <div className="relative w-80 h-80 rounded-full overflow-hidden shadow-2xl border-4 border-slate-300">
            <img src="fotos_axel/axel.jpg" alt="Axel" className="w-full h-full object-cover"/>
          </div>
          <FloatingIcon icon={<Code size={20} />} position="top-6 -left-4" delay="0s"/>
          
          <FloatingIcon icon={<Database size={20} />} position="-top-6 -right-6" delay="0.3s"/>
          
          <FloatingIcon icon={<GitBranch size={20} />} position="-bottom-6 -left-6" delay="1.2s"/>
          
          <FloatingIcon icon={<Globe size={20} />} position="bottom-6 -right-6" delay="1.5s"/>
        </div>
      </div>

    </div>
  )
}

export default App
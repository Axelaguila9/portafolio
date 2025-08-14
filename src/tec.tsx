import { useState, useEffect } from 'react';
import { ArrowLeft, Star, Code, Database, Globe, Zap, Shield, Clock } from 'lucide-react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();
  const [activeDemo, setActiveDemo] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setActiveDemo(prev => (prev + 1) % demoImages.length);
      }, 4000);
      
      return () => clearInterval(interval);
    }
  }, [isHovered]);

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  const demoImages = [
    "tec/reconocimientoITST.jpg",
    "tec/inicio.png", 
    "tec/solicitudes.png"
  ];

const technologies = [
    { name: 'PHP', color: 'bg-purple-500/20 text-purple-400 border-purple-500/30' },
    { name: 'Bootstrap', color: 'bg-violet-500/20 text-violet-400 border-violet-500/30' },
    { name: 'XAMPP', color: 'bg-orange-500/20 text-orange-400 border-orange-500/30' },
    { name: 'MySQL', color: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30' },
    { name: 'phpMyAdmin', color: 'bg-blue-500/20 text-blue-400 border-blue-500/30' },
    { name: 'HTML5', color: 'bg-red-500/20 text-red-400 border-red-500/30' },
    { name: 'CSS3', color: 'bg-blue-600/20 text-blue-400 border-blue-600/30' },
    { name: 'JavaScript', color: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30' },
    { name: 'Git', color: 'bg-gray-500/20 text-gray-400 border-gray-500/30' }
  ];

    const features = [
    "Gestiona solicitudes académicas con sistema de registro y aprobación automatizada de docentes",
    "Automatiza notificaciones del proceso de evaluación y seguimiento del desempeño académico", 
    "Genera dashboards interactivos con filtros avanzados para seguimiento del desempeño",
    "Sistema funciona de manera continua para garantizar servicios educativos ininterrumpidos"
    ];

  const stats = [
    { number: "9", label: "Total Lenguajes", icon: <Code size={20} /> },
    { number: "4", label: "Formatos de archivo", icon: <Database size={20} /> }
  ];

  return (
    <div className="min-h-screen bg-cover bg-center bg-no-repeat bg-fixed" style={{backgroundImage: "url('fondos/estrellas.jpg')"}}>
    {/*Encabezado*/}
      <div className="bg-black/20 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button onClick={() => navigate(-1)}
                      className="text-white hover:text-emerald-400 transition-colors flex items-center gap-2">
                <ArrowLeft size={20} />
                <span>back</span>
              </button>
              <div className="text-white/60">
                <span>Projectos</span>
                <span className="mx-2">/</span>
                <span className="text-white">TecNM Tacámbaro</span>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <a href="https://www.linkedin.com/in/axel-aguila-125712323/" target="_blank" rel="noopener noreferrer">
                <div className="w-8 h-8 text-white hover:text-emerald-400 transition-colors cursor-pointer">
                  <FaLinkedin size={20} />
                </div>
              </a>

              <a href="https://github.com/Axelaguila9" target="_blank" rel="noopener noreferrer">
                <div className="w-8 h-8 text-white hover:text-emerald-400 transition-colors cursor-pointer">
                  <FaGithub size={20} />
                </div>
              </a>

              <a href="https://www.instagram.com/axel_aguila9/" target="_blank" rel="noopener noreferrer">
                <div className="w-8 h-8 text-white hover:text-emerald-400 transition-colors cursor-pointer">
                  <FaInstagram size={20} />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    {/*Proyecto*/}
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-6 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-start">
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Sistema de Gestión Académica Integral
              </h1>
              <p className="text-gray-300 text-lg leading-relaxed text-justify">
                Sistema de Gestión Académica Integral es una solución web institucional para administración académica 
                que desarrollé como Web Administrator. Implementé módulos web institucionales para mantenimiento y desarrollo 
                de bases de datos, creando un sistema gráfico para evaluación docente con dashboard interactivo. 
                El sistema incluye registro de docentes y sistema de aprobación automatizado, optimizando significativamente 
                el procesamiento administrativo y la gestión de información del Tecnológico Superior de Tacámbaro.
              </p>
            </div>

            <div className="flex gap-3 md:gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="text-emerald-400">
                      {stat.icon}
                    </div>
                    <span className="text-2xl font-bold text-white">{stat.number}</span>
                  </div>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
      {/*Tecnologías utilizadas*/}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="flex items-center gap-2 mb-4">
                <Code className="text-emerald-400" size={20} />
                <h3 className="text-white font-semibold text-lg">Tecnologías utilizadas</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <span key={index}
                        className={`px-3 py-1.5 rounded-lg border text-xs font-medium ${tech.color}`}>
                        {tech.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
    {/*Experiencia de Desarrollo*/}
          <div className="space-y-6">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="mb-4">
                <h3 className="text-white font-semibold text-lg mb-2">Experiencia de Desarrollo</h3>
                <div className="flex gap-2">
                     {demoImages.map((_, index) => (
                  <button key={index}
                          onClick={() => setActiveDemo(index)}
                          className={`w-3 h-3 rounded-full transition-colors ${
                          activeDemo === index ? 'bg-emerald-400' : 'bg-white/30'}`}/>
                      ))}
                </div>
              </div>
              <div className="relative rounded-lg overflow-hidden"
                   onMouseEnter={() => setIsHovered(true)}
                   onMouseLeave={() => setIsHovered(false)}>
                <img src={demoImages[activeDemo]} 
                     alt="Demo" 
                     className="w-full h-64 object-cover transition-all duration-500"/>
                <div className="absolute bottom-4 right-4">
                  <div className="bg-black/50 backdrop-blur-sm rounded-lg px-3 py-1.5">
                    <span className="text-white text-sm font-medium">
                      Gestion de Academia - TecNM Tacambaro 2024
                    </span>
                  </div>
                </div>
              </div>
            </div>
    {/*Características clave*/}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="flex items-center gap-2 mb-4">
                <Star className="text-emerald-400" size={20} />
                <h3 className="text-white font-semibold text-lg">Características clave</h3>
              </div>
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="text-gray-300 flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
    {/*Metricos de Datios*/}
        <div className="mt-8 md:mt-16 grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
            <Globe className="text-emerald-400 mx-auto mb-3" size={32} />
            <h3 className="text-white font-semibold text-lg">Gestión multi-departamental</h3>
            <p className="text-gray-400 text-sm mt-2">Integración entre academia, departamentos y carreras del tecnológico</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
            <Zap className="text-emerald-400 mx-auto mb-3" size={32} />
            <h3 className="text-white font-semibold text-lg">Dashboard interactivo</h3>
            <p className="text-gray-400 text-sm mt-2">Sistema gráfico de evaluación docente con seguimiento en tiempo real</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
            <Shield className="text-emerald-400 mx-auto mb-3" size={32} />
            <h3 className="text-white font-semibold text-lg">Sistema seguro institucional</h3>
            <p className="text-gray-400 text-sm mt-2">Autenticación por roles académicos y control de acceso granular</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
            <Clock className="text-emerald-400 mx-auto mb-3" size={32} />
            <h3 className="text-white font-semibold text-lg">Optimización continua</h3>
            <p className="text-gray-400 text-sm mt-2">Funcionamiento continuo optimizando procesos administrativos</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
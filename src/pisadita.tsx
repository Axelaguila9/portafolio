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
    "pisadita/inventario.png",
    "pisadita/ventas.png", 
    "pisadita/analisis.png"
  ];


    const technologies = [
    { name: 'Java', color: 'bg-orange-500/20 text-orange-400 border-orange-500/30' },
    { name: 'Eclipse IDE', color: 'bg-purple-500/20 text-purple-400 border-purple-500/30' },
    { name: 'MySQL', color: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30' },
    { name: 'Swing', color: 'bg-blue-500/20 text-blue-400 border-blue-500/30' },
    { name: 'JDBC', color: 'bg-green-500/20 text-green-400 border-green-500/30' },
    { name: 'Microsoft Visio', color: 'bg-indigo-500/20 text-indigo-400 border-indigo-500/30' },
    { name: 'OpenProject', color: 'bg-amber-500/20 text-amber-400 border-amber-500/30' },
    { name: 'UML', color: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30' }
    ];

    const features = [
    "Gestiona inventario con control automático de stock y alertas de niveles mínimos de productos",
    "Registra ventas con búsqueda por código de barras y cálculo automático de totales", 
    "Genera consultas filtradas por fecha y código con estadísticas de productos más vendidos",
    "La Pisadita centraliza proveedores, empleados e inventario para optimizar la gestión integral"
    ];

  const stats = [
    { number: "2", label: "Total Lenguajes", icon: <Code size={20} /> },
    { number: "3", label: "Formatos de archivo", icon: <Database size={20} /> }
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
                <span className="text-white">Zapatería la Pisadita</span>
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
                La Pisadita
              </h1>
                <p className="text-gray-300 text-lg leading-relaxed text-justify">
                La Pisadita es una solución de gestión local integral que optimiza el control completo de inventario, 
                proveedores y operaciones comerciales para la zapatería. Los usuarios registran productos y proveedores con 
                información detallada, controlan entradas y salidas de mercancía, y procesan ventas con búsqueda por código 
                de barras. El sistema opera con dashboard en tiempo real para estadísticas de ventas, alertas automáticas 
                de stock mínimo, gestión de empleados, y generación de consultas filtradas por fecha/código, maximizando 
                así la eficiencia operativa y satisfacción del cliente en el establecimiento de calzado.
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
                    Sistema La Pisadita - Zapatería La Pisadita 2022-2023
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
                <h3 className="text-white font-semibold text-lg">Gestión integral</h3>
                <p className="text-gray-400 text-sm mt-2">Control completo de inventario, proveedores, ventas y empleados en una sola plataforma</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
                <Zap className="text-emerald-400 mx-auto mb-3" size={32} />
                <h3 className="text-white font-semibold text-lg">Alertas automáticas</h3>
                <p className="text-gray-400 text-sm mt-2">Notificaciones de stock mínimo y actualizaciones de inventario en tiempo real</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
                <Shield className="text-emerald-400 mx-auto mb-3" size={32} />
                <h3 className="text-white font-semibold text-lg">Sistema seguro local</h3>
                <p className="text-gray-400 text-sm mt-2">Autenticación de usuarios y protección de datos sensibles</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
                <Clock className="text-emerald-400 mx-auto mb-3" size={32} />
                <h3 className="text-white font-semibold text-lg">Eficiencia operativa</h3>
                <p className="text-gray-400 text-sm mt-2">Optimización de procesos y reducción de errores humanos</p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
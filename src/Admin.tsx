import { useState, useEffect } from 'react';
import { Eye, Users, Calendar, TrendingUp, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Admin = () => {
  const navigate = useNavigate();
  const [stats, setStats] = useState({
    totalVisits: 0,
    todayVisits: 0,
    weeklyVisits: 0,
    monthlyVisits: 0
  });
  const [loading, setLoading] = useState(true);
  const [dataSource, setDataSource] = useState(''); // Para mostrar de dónde vienen los datos

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch('https://api.countapi.xyz/get/axelaguila9-global/visits');
        const data = await response.json();
        
        setStats(prev => ({ ...prev, totalVisits: data.value || 0 }));
        setDataSource('Contador Global');
        setLoading(false);
      } catch (error) {
        console.error('Error obteniendo estadísticas:', error);
        setStats(prev => ({ ...prev, totalVisits: 0 }));
        setDataSource('Sin conexión');
        setLoading(false);
      }
    };

    fetchStats();
    const interval = setInterval(fetchStats, 30000);
    return () => clearInterval(interval);
  }, []);

  const incrementVisit = async () => {
    try {
      // Intentar incrementar en HitCount
      await fetch('https://hits.dwyl.com/axelaguila9/portfolio');
      
      // Obtener el nuevo total
      const response = await fetch('https://hits.dwyl.com/axelaguila9/portfolio.json');
      const data = await response.json();
      setStats(prev => ({ ...prev, totalVisits: data.total }));
      setDataSource('HitCount API');
      
    } catch (error) {
      console.error('Error con HitCount, usando localStorage:', error);
      // Si falla, incrementar localmente
      const localVisits = parseInt(localStorage.getItem('portfolio-visits') || '0');
      const newVisits = localVisits + 1;
      localStorage.setItem('portfolio-visits', newVisits.toString());
      setStats(prev => ({ ...prev, totalVisits: newVisits }));
      setDataSource('Contador Local');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-white text-xl">Cargando estadísticas...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <div className="bg-gray-800 border-b border-gray-700 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => navigate('/')}
              className="flex items-center space-x-2 text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <ArrowLeft size={20} />
              <span>Volver al portafolio</span>
            </button>
            <h1 className="text-2xl font-bold">Dashboard - DevAxel</h1>
          </div>
          <div className="text-sm text-gray-400">
            Última actualización: {new Date().toLocaleTimeString()}
          </div>
        </div>
      </div>

      <div className="p-6">
        {/* Tarjetas de estadísticas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Visitas Totales</p>
                <p className="text-3xl font-bold text-emerald-400">{stats.totalVisits}</p>
                <p className="text-xs text-gray-500">Fuente: {dataSource}</p>
              </div>
              <Eye className="w-8 h-8 text-emerald-400" />
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Hoy</p>
                <p className="text-3xl font-bold text-gray-500">N/A</p>
                <p className="text-xs text-gray-500">Requiere analytics</p>
              </div>
              <Calendar className="w-8 h-8 text-gray-500" />
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Esta Semana</p>
                <p className="text-3xl font-bold text-gray-500">N/A</p>
                <p className="text-xs text-gray-500">Requiere analytics</p>
              </div>
              <TrendingUp className="w-8 h-8 text-gray-500" />
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Este Mes</p>
                <p className="text-3xl font-bold text-gray-500">N/A</p>
                <p className="text-xs text-gray-500">Requiere analytics</p>
              </div>
              <Users className="w-8 h-8 text-gray-500" />
            </div>
          </div>
        </div>

        {/* Datos disponibles */}
        <div className="grid grid-cols-1 gap-6 mb-8">
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h3 className="text-xl font-semibold mb-4">Sistema de Conteo Híbrido</h3>
            <div className="bg-emerald-900/20 rounded-lg p-4">
              <div className="text-center">
                <p className="text-gray-400 text-sm mb-2">Visitas Totales</p>
                <p className="text-4xl font-bold text-emerald-400">{stats.totalVisits}</p>
                <p className="text-xs text-gray-400 mt-2">
                  {dataSource === 'HitCount API' ? 
                    'Datos en tiempo real desde HitCount' : 
                    'Datos locales (respaldo activo)'
                  }
                </p>
              </div>
            </div>
            <div className="mt-4 text-center">
              <p className="text-gray-400 text-sm">
                El sistema usa HitCount como fuente principal y localStorage como respaldo confiable
              </p>
            </div>
          </div>
        </div>

        {/* Botón de prueba */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-xl font-semibold mb-4">Acciones</h3>
          <button
            onClick={incrementVisit}
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg transition-colors"
          >
            Simular Visita
          </button>
          <p className="text-gray-400 text-sm mt-2">
            Esto simula una visita para probar el sistema de conteo
          </p>
        </div>
      </div>
    </div>
  );
};

export default Admin;
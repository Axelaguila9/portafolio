import { useState, useEffect } from 'react';
import { Eye, Users, Calendar, TrendingUp, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const BOT_TOKEN = '8422421857:AAEE_YFFOctg6jTYGOp21Of2Oavdxy_5kqQ';
const CHAT_ID = '6599042897';

// Función para enviar notificación:
const sendTelegramNotification = async (visitCount: number) => {
  try {
    const message = `🚀 Nueva visita #${visitCount} a tu portafolio DevAxel!\n\nFecha: ${new Date().toLocaleString('es-MX')}`;
    
    const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: message
      })
    });
    
    if (response.ok) {
      console.log('Notificación enviada correctamente');
    }
  } catch (error) {
    console.error('Error enviando notificación:', error);
  }
};

const Admin = () => {
  const navigate = useNavigate();
  const [stats, setStats] = useState({
    totalVisits: 0,
    todayVisits: 0,
    weeklyVisits: 0,
    monthlyVisits: 0
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Función para obtener estadísticas reales
    const fetchStats = async () => {
      try {
        // CountAPI para contador total
        const response = await fetch('https://api.countapi.xyz/get/axelaguila9-portfolio/visits');
        const data = await response.json();
        
        setStats(prev => ({
          ...prev,
          totalVisits: data.value || 0
        }));

        // Por ahora solo mostramos visitas totales (datos reales)
        // Los otros datos requieren APIs adicionales

        setLoading(false);
      } catch (error) {
        console.error('Error fetching stats:', error);
        setLoading(false);
      }
    };

    fetchStats();
    
    // Actualizar cada 30 segundos
    const interval = setInterval(fetchStats, 30000);
    return () => clearInterval(interval);
  }, []);

  const incrementVisit = async () => {
    try {
      const response = await fetch('https://api.countapi.xyz/hit/axelaguila9-portfolio/visits');
      const data = await response.json();
      setStats(prev => ({ ...prev, totalVisits: data.value }));
      
      // Enviar notificación
      await sendTelegramNotification(data.value);
    } catch (error) {
      console.error('Error incrementing visit:', error);
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

        {/* Solo visitas totales (datos reales) */}
        <div className="grid grid-cols-1 gap-6 mb-8">
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h3 className="text-xl font-semibold mb-4">Datos Disponibles</h3>
            <div className="bg-emerald-900/20 rounded-lg p-4">
              <div className="text-center">
                <p className="text-gray-400 text-sm mb-2">Visitas Totales</p>
                <p className="text-4xl font-bold text-emerald-400">{stats.totalVisits}</p>
                <p className="text-xs text-gray-400 mt-2">Actualizado en tiempo real</p>
              </div>
            </div>
            <div className="mt-4 text-center">
              <p className="text-gray-400 text-sm">
                Para más estadísticas detalladas, considera integrar Google Analytics
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
            Simular Nueva Visita
          </button>
        </div>
      </div>
    </div>
  );
};

export default Admin;
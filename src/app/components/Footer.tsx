import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#00160e] text-white py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center md:items-start md:flex-row md:justify-between gap-10 text-center md:text-left">
        {/* Columna 1: Marca / descripción */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-yellow-400 mb-2">EcoClean Solutions</h2>
          <p className="text-gray-300 text-sm max-w-sm mx-auto md:mx-0">
            Comprometidos con la limpieza responsable. Productos 100% biodegradables para un mundo más sano.
          </p>
        </div>

        {/* Columna 2: Navegación */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-3 text-yellow-400">Navegación</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-yellow-400 transition-colors">Inicio</Link></li>
            <li><Link href="/productos" className="hover:text-yellow-400 transition-colors">Productos</Link></li>
            <li><Link href="/contacto" className="hover:text-yellow-400 transition-colors">Contacto</Link></li>
          </ul>
        </div>

        {/* Columna 3: Contacto y redes */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-3 text-yellow-400">Contacto</h3>
          <p className="text-sm text-gray-300">Email: contacto@ecoclean.com</p>
          <p className="text-sm text-gray-300">Tel: +54 11 2345-6789</p>
          <p className="text-sm text-gray-300 mb-4">Buenos Aires, Argentina</p>

          <div className="flex justify-center md:justify-start gap-4 text-yellow-400 text-xl">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram hover:text-white transition-colors"></i>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f hover:text-white transition-colors"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-x-twitter hover:text-white transition-colors"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} EcoClean Solutions. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;

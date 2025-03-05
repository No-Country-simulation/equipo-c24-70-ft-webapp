import React, { useState, useEffect } from "react";
import { FaChevronUp } from "react-icons/fa";

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  // Función para manejar el scroll y mostrar/ocultar el botón
  const toggleVisibility = () => {
    // Si el scroll desde la parte superior es mayor a 300px, mostrar el botón
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Función para hacer scroll hacia arriba
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Añadir event listener para el scroll cuando el componente se monta
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    // Limpiar el event listener cuando el componente se desmonta
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 lg:bottom-4 background__accent-purple text-white p-3 rounded-full border-[3px] border-white shadow-lg hover:bg-black transition-all duration-300 ease-in-out z-50"
          aria-label="Scroll to top"
          title="Ir arriba"
        >
          <FaChevronUp size={24} />
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;

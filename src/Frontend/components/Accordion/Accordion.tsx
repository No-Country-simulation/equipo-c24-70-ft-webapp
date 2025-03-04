import { FC, useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

interface AccordionProps {
  id: number;
  title: string;
  content: string;
  multiple?: boolean; // Permite abrir múltiples secciones
}

export const Accordion: FC<AccordionProps> = ({
  id,
  title,
  content,
  multiple = false,
}) => {
  const [activeIndexes, setActiveIndexes] = useState<number[]>([]);

  const toggleSection = (index: number) => {
    if (multiple) {
      // Modo múltiple: agregar/quitar índices
      setActiveIndexes((prev) =>
        prev.includes(index)
          ? prev.filter((i) => i !== index)
          : [...prev, index]
      );
    } else {
      // Modo único: alternar sección actual
      setActiveIndexes(activeIndexes.includes(index) ? [] : [index]);
    }
  };

  return (
    <div key={id} className="">
      <button
        onClick={() => toggleSection(id)}
        className="w-full flex justify-between items-center p-4 text-left bg-white hover:bg-gray-50 transition-colors"
      >
        <span className="font-semibold">{title}</span>
        {activeIndexes.includes(id) ? (
          <FaChevronUp className="text-gray-600" />
        ) : (
          <FaChevronDown className="text-gray-600" />
        )}
      </button>

      {activeIndexes.includes(id) && (
        <div className="p-4 bg-gray-50 text-gray-700 transition-all duration-300 ease-in-out">
          {content}
        </div>
      )}
    </div>
  );
};

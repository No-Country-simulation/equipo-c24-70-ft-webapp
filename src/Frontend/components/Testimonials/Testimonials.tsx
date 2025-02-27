import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { MdStar } from "react-icons/md";

import TestimonyUser1 from "../../../assets/testimony-user1.webp";
import TestimonyUser2 from "../../../assets/testimony-user2.webp";
import TestimonyUser3 from "../../../assets/testimony-user3.webp";
import TestimonyUser4 from "../../../assets/testimony-user4.webp";
import TestimonyUser5 from "../../../assets/testimony-user5.webp";

const testimonialsItems = [
  {
    id: 1,
    name: "Mariana López",
    position: "CTO en TechSecure",
    img: TestimonyUser1,
    review:
      "Este gestor de contraseñas ha revolucionado la seguridad de nuestra empresa. Su facilidad de uso y cifrado avanzado nos brindan la tranquilidad que necesitamos para proteger nuestra información crítica.",
  },
  {
    id: 2,
    name: "Carlos Méndez",
    position: "Director de TI en DataShield",
    img: TestimonyUser2,
    review:
      "Finalmente encontramos una solución confiable para la gestión de contraseñas. La integración con nuestras herramientas y la seguridad que ofrece son simplemente inigualables. Recomendado para cualquier empresa seria.",
  },
  {
    id: 3,
    name: "Andrea Torres",
    position: "CEO en CyberSafe Solutions",
    img: TestimonyUser3,
    review:
      "La protección y simplicidad de esta plataforma han superado nuestras expectativas. Ahora nuestro equipo puede gestionar credenciales de manera eficiente sin comprometer la seguridad. ¡Excelente herramienta!",
  },
  {
    id: 4,
    name: "Sofía Rivas",
    position: "Gerente de Infraestructura en CloudProtect",
    img: TestimonyUser4,
    review:
      "Desde que implementamos esta herramienta, hemos eliminado riesgos innecesarios en la administración de claves. La auditoría de accesos y la encriptación avanzada nos dan una protección que realmente marca la diferencia.",
  },
  {
    id: 5,
    name: "Luis Fernández",
    position: "Especialista en Ciberseguridad en SecureNet",
    img: TestimonyUser5,
    review:
      "Hemos probado varios gestores de contraseñas, pero este es el único que cumple con nuestros exigentes estándares de seguridad. La encriptación es de primer nivel y la experiencia de usuario es impecable.",
  },
];

const Carousel = () => {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 7000 }}
        loop
      >
        {testimonialsItems.map((item) => (
          <SwiperSlide className="flex items-center text-center justify-center">
            <div className="flex justify-center text-3xl mb-3">
              <MdStar />
              <MdStar />
              <MdStar />
              <MdStar />
              <MdStar />
            </div>
            <p className="text-2xl font-semibold w-3/4 mx-auto mb-4">
              {item.review}
            </p>
            <figure className="max-w-20 rounded-full overflow-hidden mx-auto mb-4">
              <img
                className="w-full object-cover"
                src={item.img}
                alt={`Imagén de ${item.name}`}
              />
            </figure>
            <div>
              <h3>{item.name}</h3>
              <h4 className="mb-10">{item.position}</h4>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

function Testimonials() {
  return (
    <section className="container testimonials" id="testimonials">
      <article>
        <Carousel />
      </article>
    </section>
  );
}

export default Testimonials;

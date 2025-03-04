import { Accordion } from "../../../components/Accordion/Accordion";

const accordionData = [
  {
    id: 1,
    title: "¿Qué pasa si olvido mi contraseñas maestra?",
    content:
      "Por seguridad, no almacenamos tu contraseña maestra. Sin embargo, puedes configurar opciones de recuperación en caso de pérdida.",
  },
  {
    id: 2,
    title: "¿Cómo sé si alguna de mis contraseñas ha sido comprometida?",
    content:
      "Nuestro sistema cuenta con una función de alertas de seguridad, que te notifica si alguna de tus credenciales ha aparecido en filtraciones de datos.",
  },
  {
    id: 3,
    title: "¿El gestor puede generar contraseñas seguras?",
    content:
      "Sí, contamos con un generador de contraseñas que crea combinaciones fuertes y únicas para proteger tus cuentas.",
  },
  {
    id: 4,
    title: "¿Cómo almacena LockKey las contraseñas de forma segura?",
    content:
      "Nuestra bóveda protege los datos en su dispositivo de confianza a través del cifrado de conocimiento cero. Su dispositivo cifra y codifica en local sus contraseñas antes de enviarlas a los servidores de LockKey. La próxima vez que necesite iniciar sesión, LockKey le devolverá sus contraseñas cifradas, que serán descodificadas por su dispositivo de confianza.",
  },
  {
    id: 5,
    title: "¿LockKey tiene acceso a mis contraseñas?",
    content:
      "No, nuestro modelo de seguridad de conocimiento cero garantiza que sus datos son siempre suyos. LockKey no tiene visibilidad ni acceso a sus contraseñas maestras o lo que guarda en su bóveda, como credenciales, tarjetas de crédito, direcciones o notas seguras.",
  },
  {
    id: 6,
    title: "¿Cómo funciona el cifrado de LockKey?",
    content:
      "LockKey se basa en un modelo de seguridad de conocimiento cero que garantiza que usted es la única persona que conoce la contraseña maestra para acceder a su bóveda. Gracias al cifrado AES de 256 bits y a la función de derivación PBKDF2 con hash seguro (SHA256) y salting, su contraseña maestra nunca se guarda en nuestros servidores en texto plano. Esto garantiza que solo usted la conozca.",
  },
  {
    id: 7,
    title: "¿Cuál es el lugar más seguro para guardar mis contraseñas?",
    content:
      "El lugar más seguro para guardar sus claves es un gestor de contraseñas, ya que éstos almacenan de forma segura sus credenciales de inicio de sesión en una bóveda cifrada, garantizando que solo usted tenga acceso a ellas.",
  },
];

function FAQs() {
  return (
    <section className="container FAQs py-12" id="FAQs">
      <article className="text-center">
        <p className="text-lg uppercase mb-2">Preguntas Frecuentes</p>
        <h2 className="md:w-9/12 text-3xl xl:text-5xl font-bold mb-12 mx-auto">
          Respondemos las dudas más comunes.
        </h2>
        <div className="flex flex-wrap -mx-2">
          <div className="w-full md:w-1/2 px-2">
            {accordionData
              .slice(0, Math.ceil(accordionData.length / 2))
              .map((item) => (
                <div key={item.id} className="mb-4 rounded-lg overflow-hidden">
                  <Accordion {...item} />
                </div>
              ))}
          </div>
          <div className="w-full md:w-1/2 px-2">
            {accordionData
              .slice(Math.ceil(accordionData.length / 2))
              .map((item) => (
                <div key={item.id} className="mb-4 rounded-lg overflow-hidden">
                  <Accordion {...item} />
                </div>
              ))}
          </div>
        </div>
      </article>
    </section>
  );
}

export default FAQs;

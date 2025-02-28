import "./ContactForm.css";

export function ContactForm() {
  return (
    <form
      method="post"
      className="form grid grid-cols-1 md:grid-cols-2 gap-6 lg:w-5/6 p-6 lg:py-16 lg:px-28 mx-auto"
    >
      <input
        name="name"
        id="name"
        className="p-4"
        type="text"
        placeholder="Nombre"
        required
        autoComplete="name"
      />
      <input
        name="last-name"
        id="last-name"
        className="p-4"
        type="text"
        placeholder="Apellido"
        required
        autoComplete="family-name"
      />
      <select
        className="md:col-span-2 p-4 hover:cursor-pointer"
        name="country"
        id="country"
        required
        autoComplete="country"
      >
        <option value="">Selecciona tu país</option>
        <option value="argentina">Argentina</option>
        <option value="bolivia">Bolivia</option>
        <option value="brasil">Brasil</option>
        <option value="Chile">Chile</option>
        <option value="colombia">Colombia</option>
        <option value="costa-rica">Costa Rica</option>
        <option value="ecuador">Ecuador</option>
        <option value="espana">España</option>
        <option value="el-salvador">El Salvador</option>
        <option value="guatemala">Guatemala</option>
        <option value="honduras">Honduras</option>
        <option value="mexico">México</option>
        <option value="nicaragua">Nicaragua</option>
        <option value="panama">Panamá</option>
        <option value="paraguay">Paraguay</option>
        <option value="peru">Perú</option>
        <option value="puerto-rico">Puerto Rico</option>
        <option value="republica-dominicana">República Dominicana</option>
        <option value="uruguay">Uruguay</option>
        <option value="venezuela">Venezuela</option>
        <option value="otro">Otro</option>
      </select>
      <input
        name="email"
        id="email"
        className="p-4"
        type="email"
        placeholder="Correo electrónico"
        autoComplete="email"
        required
      />
      <input
        name="phone-number"
        id="phone-number"
        className="p-4"
        type="text"
        placeholder="Número de teléfono"
      />

      <textarea
        className="md:col-span-2 p-4"
        placeholder="Mensaje"
        id="message"
        name="message"
        required
      />

      <button type="submit" className="md:col-span-2 btn__primary btn__lime">
        Enviar
      </button>
    </form>
  );
}

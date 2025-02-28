import "./ContactForm.css";

export function ContactForm() {
  return (
    <form method="post" className="form grid grid-cols-2 gap-6 w-5/6 mx-auto">
      <input className="p-4" type="text" placeholder="Nombre" required />
      <input className="p-4" type="text" placeholder="Apellido" required />
      <select
        className="col-span-2 p-4 hover:cursor-pointer"
        name="country"
        id="country"
        required
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
        className="p-4"
        type="email"
        placeholder="Correo electrónico"
        required
      />
      <input className="p-4" type="text" placeholder="Número de teléfono" />

      <textarea
        className="col-span-2 p-4"
        placeholder="Mensaje"
        id="message"
        name="message"
        required
      />

      <button
        type="submit"
        onClick={(e) => e.preventDefault()}
        className="col-span-2 btn__primary btn__lime "
      >
        Enviar
      </button>
    </form>
  );
}

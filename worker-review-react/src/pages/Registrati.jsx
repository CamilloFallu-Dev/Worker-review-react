function Registrati() {
  const onLogin = (event) => {
    event.preventDefault();

    const form = event.target;
    console.log({
      email: form.email.value,
      password: form.password.value,
      name: form.nome.value,
      cognome: form.cognome.value,
    });
  };

  const loginWithFormData = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target.form);
    console.log({
      email: formData.get("email"),
      password: formData.get("password"),
      nome: formData.get("nome"),
      cognome: formData.get("cognome"),
    });
  };

  return (
    <div className="bg-green-600 py-16">
      <div className="text-center text-white">
        <h1 className="text-4xl font-bold">Worker Review</h1>
        <h2 className="text-xl mt-2">Registrazione</h2>
      </div>

      <div className="bg-white border-1 border-gray-400 rounded-md  p-6 w-72 mx-auto relative mt-12">
        <form onSubmit={onLogin}>
          <p>Nome</p>
          <input
            type="text"
            name="nome"
            placeholder="Nome"
            className="w-full p-2 mb-4 border border-gray-300 rounded-md"
          />
          <label>Cognome</label>
          <input
            type="text"
            name="cognome"
            placeholder="Cognome"
            className="w-full p-2 mb-4 border border-gray-300 rounded-md"
          />
          <p>Email</p>
          <input
            type="email"
            name="email"
            placeholder="email"
            className="w-full p-2 mb-4 border border-gray-300 rounded-md"
          />
          <p>Password</p>
          <input
            type="password"
            name="password"
            placeholder="password"
            className="w-full p-2 mb-4 border border-gray-300 rounded-md"
          />
          <button
            type="button"
            onClick={loginWithFormData}
            className="bg-green-600 w-full rounded py-2 text-white hover:bg-green-700"
          >
            Accedi.
          </button>
        </form>
      </div>
    </div>
  );
}

export default Registrati;

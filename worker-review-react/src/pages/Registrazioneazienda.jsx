import React from 'react'

function Registrazioneazienda() {


    const onLogin = (event) => {
        event.preventDefault();
    
        const form = event.target;
        console.log({
          name: form.name.value,
          sede: form.sede.value,
          settore: form.settore.value,
          textarea: form.textarea.value,

        });
      };
    
      const loginWithFormData = (event) => {
        event.preventDefault();
    
        const formData = new FormData(event.target.form);
        console.log({
          name: formData.get("name"),
          sede: formData.get("sede"),
          settore: formData.get("settore"),
          Textarea: formData.get("Descrizione azienda")
        });
      };
  return (

    <div className="bg-green-600 py-16">
      <div className="text-center text-white">
        <h1 className="text-4xl font-bold">Worker Review</h1>
        <h2 className="text-xl mt-2">Registrati</h2>
      </div>

      <div className="bg-white border-1 border-gray-400 rounded-md mx-4 p-6 w-72 mx-auto relative mt-12">
        <p>Nome azienda</p>
        <form onSubmit={onLogin}>
          <input
            type="text"
            name="name"
            placeholder="Nome azienda"
            className="w-full p-2 mb-4 border border-gray-300 rounded-md"
          />
          <p>Sede principale</p>
          <input
            type="text"
            name="name"
            placeholder="sede"
            className="w-full p-2 mb-4 border border-gray-300 rounded-md"
          />
           <p>Settore</p>
          <input
            type="text"
            name="name"
            placeholder="settore"
            className="w-full p-2 mb-4 border border-gray-300 rounded-md"
          />
           <p>Descrizione azienda</p>
           <textarea name="" id="" placeholder='scrivi qui...'
            className="w-full p-2 mb-4 border border-gray-300 rounded-md"
           > </textarea>
        
          <button
            type="button"
            onClick={loginWithFormData}
            className="bg-green-600 w-full rounded py-2 text-white hover:bg-green-700"
          >
            Registra-Azienda.
          </button>
        </form>
       
      </div>
    </div>
  )
}

export default Registrazioneazienda
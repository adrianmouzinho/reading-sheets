export function Login () {
  return (
    <div className="w-full h-full bg-blue-600">
      <form>
        <h1>Entrar na plataforma</h1>
        <div>
          <label htmlFor="email">E-mail</label>
          <input 
            type="email" 
            id="email" 
            placeholder="Informe seu e-mail"
          />
        </div>

        <div>
          <label htmlFor="password">Senha</label>
          <input 
            type="password" 
            id="password" 
            placeholder="Informe sua senha"
          />
        </div>

        <button type="submit">Entrar</button>
      </form>
    </div>
  )
}
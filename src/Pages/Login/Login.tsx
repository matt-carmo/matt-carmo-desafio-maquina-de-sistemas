import { Link } from "react-router-dom";
import { Header } from "../../components/Header/Header";
// import { Navigate } from "react-router-dom";

export const Login = () => {
  
  return (
    <>
      <Header />
      <main className="overflow-hidden flex justify-center">
        <section
          id="login"
          className="bg-secondary flex flex-col items-center text-white px-2 lg:px-36 py-10 rounded-xl m-3 lg:mx-0 w-full lg:w-4/12"
        >
          <h2 className="text-4xl font-bold text-center">Login</h2>
          <p className="text-zinc-300 mt-2s mb-16 font-medium text-center">
            Faça Login para continuar
          </p>
          <div className="mb-1">
            <label
              className="block text-white text-xl font-medium"
              htmlFor="user"
            >
              Nome do usuário
            </label>
            <input
              type="text"
              id="user"
              placeholder=" insira o nome do usuário"
              className="bg-transparent border-2 border-terciary rounded-md"
            />
          </div>
          <div>
            <label
              className="block text-white text-xl font-medium"
              htmlFor="email"
            >
              Senha
            </label>
            <input
              type="password"
              id="email"
              placeholder=" insira a senha"
              className="bg-transparent border-2 border-terciary rounded-md"
            />
          </div>

          <Link
            to={"/home"}
            className="p-2 bg-white mt-16 text-secondary text-center text-2xl font-bold rounded-3xl w-60"
          >
            Login
          </Link>

          <p className="my-2">Ainda não tem uma conta?</p>
          <a
            href="./src/pages/register.html"
            className="p-2 bg-transparent text-center text-white border-2 text-2xl font-bold rounded-3xl w-60"
          >
            Cadastrar
          </a>
        </section>
      </main>
    </>
  );
};

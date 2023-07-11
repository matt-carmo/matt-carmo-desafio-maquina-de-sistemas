import { FaGithubAlt, FaLink } from "react-icons/fa6";

export const Footer = () => {
  return (
    <footer className="fixed bottom-0 w-full bg-zinc-200 text-black text-center flex justify-center">
      <a
        href="https://github.com/matt-carmo/matt-carmo-desafio-maquina-de-sistemas"
        className="text-secondary mr-1 text-medium flex items-center"
      >
        <FaLink className="mr-1" /> Project
      </a>
      Made by
      <a
        href="https://github.com/matt-carmo"
        className="text-secondary text-medium flex flex-row  justify-center items-center"
        target="_blank"
      >
        {" "}
        <FaGithubAlt className="mx-1" /> Matheus Carmo
      </a>
    </footer>
  );
};

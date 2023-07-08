import { useState } from "react";
import { Card } from "./components/Card/Card";
import { Header } from "./components/Header/Header";

import { FaMinus, FaPlus, FaCheckDouble } from "react-icons/fa6";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import './App.css'
interface Idata {
  name: string;
  ticker: string;
  price: string;
  currency: string;
  value: number;
  percentage_change: number;
  active: boolean;
}
export default function App() {
  const dataFic: Idata[] = [
    {
      name: "Vale",
      ticker: "VALE3",
      price: "102.50",
      currency: "BRL",
      value: 1.2,
      percentage_change: 1.18,
      active: true,
    },
    {
      name: "Itaú Unibanco",
      ticker: "ITUB4",
      price: "32.80",
      currency: "BRL",
      value: -0.15,
      percentage_change: 0.46,
      active: true,
    },
    {
      name: "Ambev",
      ticker: "ABEV3",
      price: "15.60",
      currency: "BRL",
      value: 0.25,
      percentage_change: 1.63,
      active: true,
    },
    {
      name: "Bradesco",
      ticker: "BBDC4",
      price: "28.90",
      currency: "BRL",
      value: -0.1,
      percentage_change: 0.34,
      active: false,
    },
    {
      name: "Gerdau",
      ticker: "GGBR4",
      price: "28.20",
      currency: "BRL",
      value: 0.35,
      percentage_change: 1.25,
      active: false,
    },
    {
      name: "Banco do Brasil",
      ticker: "BBAS3",
      price: "32.40",
      currency: "BRL",
      value: -0.05,
      percentage_change: 0.15,
      active: false,
    },
    {
      name: "B3",
      ticker: "B3SA3",
      price: "18.60",
      currency: "BRL",
      value: 0.4,
      percentage_change: 2.2,

      active: false,
    },
    {
      name: "Magazine Luiza",
      ticker: "MGLU3",
      price: "25.70",
      currency: "BRL",
      value: 0.6,
      percentage_change: 2.39,
      active: false,
    },
    {
      name: "Braskem",
      ticker: "BRKM5",
      price: "50.80",
      currency: "BRL",
      value: 0.8,
      percentage_change: 1.6,

      active: false,
    },
    {
      name: "Suzano",
      ticker: "SUZB3",
      price: "68.90",
      currency: "BRL",
      value: -0.3,
      percentage_change: 0.43,
      active: false,
    },
    {
      name: "Cielo",
      ticker: "CIEL3",
      price: "4.20",
      currency: "BRL",
      value: 0.05,
      percentage_change: 1.2,

      active: false,
    },
    {
      name: "Natura",
      ticker: "NTCO3",
      price: "50.00",
      currency: "BRL",
      value: 0.75,
      percentage_change: 1.52,
      active: false,
    },
  ];

  const [data, setData] = useState(dataFic);
  // const [activePaper, setActivePaper] = useState<boolean>();
  const [view, setView] = useState<string>("my-list");
  const handleChangeActiveFalse = (item: { active: boolean; name:string }) => {
    const updatedData = data.map((dataItem) => {
      if (dataItem === item) {
        return { ...dataItem, active: false };
      }
      return dataItem;
    });
    

    setData(updatedData);
    swalAddPaper(`Sucesso! ${item.name} foi REMOVIDO da sua lista!`);
  };
  const handleChangeActiveTrue = (item: { active: boolean; name: string }) => {
    const updatedData = data.map((dataItem) => {
      if (dataItem === item) {
        return { ...dataItem, active: true };
      }
      return dataItem;
    });

    setData(updatedData);
    swalAddPaper(`Sucesso! ${item.name} foi ADICIONADO a sua lista!`);
  };


  const MySwal = withReactContent(Swal);

  const swalAddPaper = (title:string) => {
    MySwal.fire({
      title: title,
      width:'32rem',
      position: "top-end",
      showConfirmButton: false,
      customClass:'bg-white text-sm',
    
      timer: 2000,
      backdrop: false,
    });
  };
  // swalAddPaper('')

  const handleChangeView = (value: string) => {
    setView(value);
  };

  return (
    <>
      <Header />

      <main className="overflow-hidden">
        <nav>
          <ul className="sm:flex w-full my-5 cursor-pointer text-white text-3xl gap-4 font-medium">
            <li
              onClick={() => handleChangeView("my-list")}
              className={`${view === "my-list" && "border-b-2"} cursor-pointer`}
            >
              Minha Lista
            </li>
            <li
              onClick={() => handleChangeView("list-all")}
              className={`${
                view === "list-all" && "border-b-2"
              } cursor-pointer`}
            >
              Lista de ações
            </li>
          </ul>
        </nav>

        {view === "my-list" ? (
          <section id="my-list" className="">
            <ul className="xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 grid gap-4">
              {data.map(
                (item: Idata) =>
                  item.active && (
                    <Card
                      icon={
                        <button onClick={() => handleChangeActiveFalse(item)}>
                          <FaMinus className="fa-solid fa-minus text-2xl hover:text-zinc-400 cursor-pointer remove-card" />
                        </button>
                      }
                      active={item.active}
                      currency={item.currency}
                      name={item.name}
                      percentage_change={item.percentage_change}
                      price={item.price}
                      ticker={item.ticker}
                      value={item.value}
                    />
                  )
              )}
            </ul>
          </section>
        ) : (
          <section id="list-all">
            <ul className="xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 grid gap-4">
              {data.map((item: Idata) => (
                <Card
                  icon={
                    !item.active ? 
                    <button onClick={() => handleChangeActiveTrue(item)}>
                      <FaPlus className="mt-1 fa-minus text-2xl hover:text-zinc-400 cursor-pointer remove-card" />
                    </button> : 
                    <span className="mt-2 text-terciary text-xl "><FaCheckDouble clasName="relativ mt-2 fa-minus over:text-zinc-400 cursor-pointer "/></span>
                  }
                  key={`${item.ticker}-b`}
                  active={item.active}
                  currency={item.currency}
                  name={item.name}
                  percentage_change={item.percentage_change}
                  price={item.price}
                  ticker={item.ticker}
                  value={item.value}
                />
              ))}
            </ul>
          </section>
        )}
      </main>
    </>
  );
}

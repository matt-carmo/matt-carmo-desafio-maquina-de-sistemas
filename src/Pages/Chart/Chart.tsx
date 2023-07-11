import { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { Header } from "../../components/Header/Header";
import { useParams } from "react-router";
import moment from "moment";
import { Link } from "react-router-dom";
import { FaArrowDown, FaArrowUp, FaCircleArrowLeft } from "react-icons/fa6";

interface iData {
  x: number;
  y: [number, number, number, number];
}

const ApexChart = () => {
  const [media] = useState(() => {
    if (window.innerWidth > 1536) {
      return 500;
    } else if (window.innerWidth > 1280) {
      return 430;
    } else if (window.innerHeight > 1024) {
      return 400;
    } else if (window.innerWidth > 768) {
      return 350;
    } else if (window.innerWidth > 640) {
      return 200;
    } else {
      return 200;
    }
  });

  // return media

  const params = useParams();
  const [name] = useState<any>(params.name);

  const [price] = useState<any>(params.price?.replace(",", "."));

  const [percentage_change] = useState<any>(
    params.percentage_change?.replace(",", ".")
  );
  const [value] = useState<any>(params.value?.replace(",", "."));
  const [currency] = useState<any>(params.currency?.replace(",", "."));
  const [ticker] = useState<any>(params.ticker?.replace(",", "."));

  const [oneMinute, setOneminute] = useState<iData[]>([]);
  const [oldTimeName, setOldTimeName] = useState<string>("M-1");

  const [time, setTime] = useState(10);

  // const [media] = useState(mediaQuery());
  let startTime = moment().set({
    hour: 10,
    minute: 0,
    second: 0,
    millisecond: 0,
  });

  const handleSetTime = (timeName: string, time: number) => {
    setOldTimeName(timeName);
    if (timeName === oldTimeName) return;
    setOneminute([]);
    setTime(time);
  };

  // console.log(series)
  useEffect(() => {
    for (let i = 0; i < 60; i++) {
      // console.log(oneMinute.length)
      let times = startTime.add(time, "minutes").valueOf(); // para o gráfico de 1 min
      // const priceVariation = Math.random() * 0.2 - 0.1; // Variação total limitada a 20%

      const num1 = Math.floor(
        Math.random() * (price - price * (-10 / 100)) + price * (10 / 100) * i
      );

      const num2 = Math.floor(
        Math.random() * (price - price * (-10 / 100)) + price * (10 / 100) * i
      );

      const num3 = Math.floor(
        Math.random() * (price - price * (-10 / 100)) + price * (10 / 100) * i
      );

      const num4 = Math.floor(
        Math.random() * (price - price * (-10 / 100)) + price * (10 / 100) * i
      );

      const high = Math.max(num1, num2, num3, num4);
      const low = Math.min(num1, num2, num3, num4);
      // console.log(aleat)
      setOneminute((prevOneMinute) => [
        ...prevOneMinute,
        { x: times, y: [num1, high, low, num4] },
      ]);
    }
  }, [time]);

  // console.log(oneMinute);
  const [options] = useState<{}>({
    chart: {
      type: "candlestick",
      height: 350,
    },
    toolbar: {
      show: false,
    },
    title: {
      text: "",
      align: "left",
    },
    xaxis: {
      type: "datetime",
    },
    yaxis: {},
    tooltip: {
      enabled: true,
    },
  });

  return (
    <>
      <Link
        to="/home"
        className="cursor-pointer text-white absolute left-8 top-10 hover:text-zinc-400"
      >
        <FaCircleArrowLeft className=" e text-4xl " />
      </Link>
      <div className="absolute  w-full ">
        <Link to="/home" className="cursor-pointer">
          <Header />
        </Link>
      </div>

      <div
        id="chart"
        className="container mx-auto h-screen flex flex-col justify-center"
      >
        <div>
          <span className="text-white text-4xl font-medium">{name}</span>
          <span className="text-zinc-400 text-2xl font-medium ml-3">
            ({ticker})
          </span>
        </div>

        <div
          className={`${
            value > 0 ? `text-green-600 ` : `text-red-600 `
          } font-medium flex items-center justify-between md:justify-start`}
        >
          <span className="text-white mr-3">
            a partir de <strong>R${price}</strong>
          </span>

          <span className="flex items-center">
            {value > 0 ? (
              <FaArrowUp className="mr-1" />
            ) : (
              <FaArrowDown className="mr-1" />
            )}{" "}
            {currency} {value} ({percentage_change}%)
          </span>
        </div>
        <div className="mb-1 mt-3 rounded-lg  flex justify-between sm:justify-start left-40 ">
          <button
            className={`border ${
              oldTimeName === "M-1" ? "bg-white text-mainColor" : "text-white"
            } transition delay-100 font-medium mr-3 rounded-lg p-1 cursor-pointer z-100 px-3`}
            onClick={() => handleSetTime("M-1", 10)}
          >
            M-1
          </button>
          <button
            className={`border ${
              oldTimeName === "M-5" ? "bg-white text-mainColor" : "text-white"
            } transition delay-100 font-medium mr-3 rounded-lg p-1 cursor-pointer z-100 px-3`}
            onClick={() => handleSetTime("M-5", 50)}
          >
            M-5
          </button>
          <button
            className={`border ${
              oldTimeName === "M-30" ? "bg-white text-mainColor" : "text-white"
            } transition delay-100 font-medium mr-3 rounded-lg p-1 cursor-pointer z-100 px-3`}
            onClick={() => handleSetTime("M-30", 30)}
          >
            M-30
          </button>
          <button
            className={`border ${
              oldTimeName === "H-1" ? "bg-white text-mainColor" : "text-white"
            } transition delay-100 font-medium mr-3 rounded-lg p-1 cursor-pointer z-100 px-3`}
            onClick={() => handleSetTime("H-1", 60)}
          >
            H-1
          </button>
          <button
            className={`border ${
              oldTimeName === "D-1" ? "bg-white text-mainColor" : "text-white"
            } transition delay-100 font-medium  rounded-lg p-1 cursor-pointer z-100 px-3`}
            onClick={() => handleSetTime("D-1", 1440)}
          >
            D-1
          </button>
        </div>

        {media && (
          <ReactApexChart
            className="w-full border rounded-lg p-3"
            options={options}
            series={[{ data: oneMinute }]}
            type="candlestick"
            height={media}
          />
        )}
      </div>
    </>
  );
};

export default ApexChart;

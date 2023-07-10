import { FaArrowDown, FaArrowUp } from "react-icons/fa6";
import { Link } from "react-router-dom";

interface Idata {
    name:string,
    ticker:string,
    price: string,
    currency: string,
    value: number,
    percentage_change: number,
    active: boolean,
    icon:JSX.Element
  }
export const Card  = (props:Idata) => {


        return (
          <li className="border border-terciary rounded-xl px-2 cursor-">
            <div className="flex text-white flex justify-between propss-center">
              
                {props.icon}
            
              <div className="title-card text-2xl font-medium">{props.name}</div>
              <span className="text-zinc-400 font-bold">{props.ticker}</span>
            </div>
              <Link to={`/chart/${props.name}/${props.price.replace('.', ',')}/${props.percentage_change}/${props.ticker}/${props.currency}/${props.value}`}>
              <div className="font-xs flex justify-between pt-7 lg:text-sm text-xs">
                <span className="text-white">
                  a partir de <strong>R${props.price}</strong>
                </span>
                <span className={`${props.value > 0 ?`text-green-600 `: `text-red-600 `} font-medium flex items-center`}>
                {props.value > 0 ? <FaArrowUp className="mr-1"/>: <FaArrowDown className="mr-1"/>  } {props.currency} {props.value} ({props.percentage_change}%)
                </span>
              </div>
              </Link>
          </li>
        );

}
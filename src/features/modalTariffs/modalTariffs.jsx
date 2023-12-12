import React from "react";
import classes from "./modalTariffs.module.scss";

const blocks = [
  {
    title: "Базовый",
    price: 159,
    params: ["оплата за каждую созданную презентацию", "1 презентация"],
  },
  {
    title: "Оптимальный",
    price: 590,
    params: ["подписка на месяц", "7 презентаций"],
  },
  {
    title: "Максимум",
    price: 4990,
    params: ["подписка на месяц", "неограниченное количество презентаций"],
  },
];

const ModalTariffs = () => {
  return (
    <div className={classes.container}>
      <p>Тариф сейчас: пробный</p>
      <div className={classes["tariffs-blocks"]}>
        {blocks.map((block, id) => (
          <div className={classes.block} key={id}>
            <div className={classes["top_container"]}>
              <div>
                <p>«{block.title}»</p>
                <p>{block.price} ₽</p>
              </div>
              <ul>
                {block.params.map((param, id) => (
                  <li key={id}>{param}</li>
                ))}
              </ul>
            </div>
            <button className={classes["blue-button"]} >Выбрать</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ModalTariffs;

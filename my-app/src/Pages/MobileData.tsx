import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
// @ts-ignore  
import classes from './MobileData.module.scss';
import Loading from '../components/ui/Loader/loader';

const MobileData: React.FC = () => {
  const [mobile, setMobile] = useState<{
    imageUrl: string;
    title: string;
    types: string;
    color: string;
    price: number;
  }>();
  const { id } = useParams();

  useEffect(() => {
    async function fetchMobile() {
      try {
        const { data } = await axios.get(
          `https://6363c19237f2167d6f828690.mockapi.io/items/` + id
        );
        setMobile(data);
      } catch (error) {
        alert('error');
      }
    }
    fetchMobile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!mobile) {
    return <Loading />;
  }

  return (
    <div className={classes.content}>
      <img className={classes.img} src={mobile.imageUrl} alt="" />
      <div className={classes.textData}>
        <h2>{mobile.title}</h2>
        <p>характеристики:</p>
        <span>Объем памяти: {mobile.types}</span>
        <span>цвет: {mobile.color}</span>
        <span>цена: {mobile.price} руб</span>
      </div>
    </div>
  );
};

export default MobileData;

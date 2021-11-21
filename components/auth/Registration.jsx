import React from 'react'
import { useForm } from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup/dist/yup';
import * as yup from "yup";

import styles from './Form.module.scss'

const schema = yup.object().shape({
    username: yup.string().required('Обязательное поле').min(3, 'Минимальное значение 3 символа'),
    email: yup.string().email('Email некоректный').required('Обязательное поле'),
    password: yup.string().required('Обязательное поле'),
  }).required();


function Registration() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
      });
      
    const onSubmit = data => console.log(data);

    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.form__item}>
                <input type="Email" 
                className={styles.form__field} 
                placeholder="Email" 
                name="email" 
                id='email' 
                {...register("email", { required: true })} />
                <label  className={styles.form__label}>
                    Email
                </label>
                <p>{errors.email?.message}</p>
            </div>

            <div className={styles.form__item}>
                <input type="text" 
                className={styles.form__field} 
                placeholder="Имя" 
                name="username" 
                id='username' 
                {...register("username", { required: true })} />
                <label  className={styles.form__label}>
                    Имя
                </label>
                <p>{errors.username?.message}</p>
            </div>

            <div className={styles.form__item}>
                <input type="password" 
                className={styles.form__field} 
                placeholder="Пароль" 
                name="password" 
                id='password'  
                {...register("password", { required: true })} />
                <label  className={styles.form__label}>
                    Пароль
                </label>
                <p>{errors.password?.message}</p>
            </div>
           
        
            {/* {errors.password && <span>This field is required</span>} */}

            <div className={styles.form__item}>
                <button type="submit">
                    Регистрация
                </button>
            </div>
           
       </form>
    )
}

export default Registration

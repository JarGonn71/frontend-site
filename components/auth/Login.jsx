import React from 'react'
import { useForm } from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup/dist/yup';
import * as yup from "yup";

import styles from './Form.module.scss'

const schema = yup.object().shape({
    email: yup.string().email('Email некоректный').required('Обязательное поле'),
    password: yup.string().required('Обязательное поле'),
  }).required();

function Login() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
      });

    const onSubmit = data => console.log(data);

    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.form__item}>
                <input type="text" 
                className={styles.form__field} 
                placeholder="Email" 
                name="email" 
                id='email' 
                {...register("email", { required: true })} />
                <label  className={styles.form__label}>
                    email
                </label>
                <p>{errors.email?.message}</p>
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
                    Вход
                </button>
            </div>
           
       </form>
    )
}

export default Login

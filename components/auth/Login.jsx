import React from 'react'
import { useForm } from "react-hook-form";

import styles from './Form.module.scss'

function Login() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.form__item}>
                <input type="email" 
                className={styles.form__field} 
                placeholder="Email" 
                name="email" 
                id='email' 
                required 
                {...register("email")} />
                <label  className={styles.form__label}>
                    Email
                </label>
            </div>

            <div className={styles.form__item}>
                <input type="password" 
                className={styles.form__field} 
                placeholder="Password" 
                name="password" 
                id='password' 
                required 
                {...register("password")} />
                <label  className={styles.form__label}>
                    Password
                </label>
            </div>
           
        
            {errors.exampleRequired && <span>This field is required</span>}
            <div>
                <input type="submit" />
            </div>
           
       </form>
    )
}

export default Login

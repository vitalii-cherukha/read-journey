import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import css from './RegisterForm.module.css';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';

import { BarLoader } from 'react-spinners';
import type { User } from '../../../types/user';

interface RegisterFormProps {
  onSubmit: (data: User) => Promise<void>;
  loading: boolean;
}

const registrationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Name must be at least 3 characters')
    .required('Name is required'),

  mail: Yup.string().email('Enter a valid mail').required('Mail is required'),

  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required'),
});

const RegisterForm = ({ onSubmit, loading }: RegisterFormProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => setShowPassword((prev) => !prev);

  const {
    register,
    handleSubmit,
    clearErrors,
    formState: { errors },
  } = useForm<User>({
    resolver: yupResolver(registrationSchema),
    mode: 'onBlur',
    reValidateMode: 'onBlur',
  });

  return (
    <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={css.inputWrapper}>
        <input
          className={`${css.input} ${errors.name ? css.errorInput : ''}`}
          placeholder="Name"
          {...register('name')}
          onFocus={() => clearErrors('name')}
        />
        {errors.name && <p className={css.error}>{errors.name.message}</p>}
      </div>

      <div className={css.inputWrapper}>
        <input
          className={`${css.input} ${errors.mail ? css.errorInput : ''}`}
          placeholder="Mail"
          {...register('mail')}
          onFocus={() => clearErrors('mail')}
        />
        {errors.mail && <p className={css.error}>{errors.mail.message}</p>}
      </div>

      <div className={css.inputWrapper}>
        <input
          className={`${css.input} ${errors.password ? css.errorInput : ''}`}
          placeholder="Password"
          type={showPassword ? 'text' : 'password'}
          {...register('password')}
          onFocus={() => clearErrors('password')}
        />
        {errors.password && (
          <p className={css.error}>{errors.password.message}</p>
        )}

        <svg
          className={css.icon}
          onClick={togglePassword}
          width="20"
          height="20"
        >
          <use
            href={`/sprite.svg#${showPassword ? 'icon-eye' : 'icon-eye-off'}`}
          />
        </svg>
      </div>

      <button className={css.btn} type="submit">
        {!loading ? (
          'Sign Up'
        ) : (
          <BarLoader
            className={css.loader}
            color="#121417"
            speedMultiplier={3}
            width={100}
          />
        )}
      </button>
    </form>
  );
};

export default RegisterForm;

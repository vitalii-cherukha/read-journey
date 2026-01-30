import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import css from './RegisterForm.module.css';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';

import { BarLoader } from 'react-spinners';
import type { User } from '../../../types/user';
import { Link } from 'react-router';

interface RegisterFormProps {
  onSubmit: (data: User) => Promise<void>;
  loading: boolean;
}

const registrationSchema = Yup.object().shape({
  name: Yup.string().trim().required('Name is required'),

  email: Yup.string()
    .trim()
    .email('Enter a valid email')
    .matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, 'Enter a valid email')
    .required('Email is required'),

  password: Yup.string()
    .trim()
    .min(7, 'Password must be at least 8 characters')
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
      <div
        className={`${css.inputWrapper} ${errors.name ? css.errorInput : ''}`}
      >
        <label className={css.label}>
          Name:
          <input
            className={css.input}
            placeholder="Name"
            {...register('name')}
            onFocus={() => clearErrors('name')}
          />
        </label>

        {errors.name && (
          <svg className={css.errorIcon} width="18" height="18">
            <use href="/sprite.svg#icon-error" />
          </svg>
        )}
      </div>
      {errors.name && <p className={css.error}>{errors.name.message}</p>}

      <div
        className={`${css.inputWrapper} ${errors.email ? css.errorInput : ''}`}
      >
        <label className={css.label}>
          Mail:
          <input
            className={css.input}
            placeholder="Your@email.com"
            {...register('email')}
            onFocus={() => clearErrors('email')}
          />
        </label>

        {errors.email && (
          <svg className={css.errorIcon} width="18" height="18">
            <use href="/sprite.svg#icon-error" />
          </svg>
        )}
      </div>
      {errors.email && <p className={css.error}>{errors.email.message}</p>}

      <div
        className={`${css.inputWrapper} ${errors.password ? css.errorInput : ''}`}
      >
        <label className={css.label}>
          Password:
          <input
            className={css.input}
            placeholder="Yourpasswordhere"
            type={showPassword ? 'text' : 'password'}
            {...register('password')}
            onFocus={() => clearErrors('password')}
          />
        </label>

        {errors.password && (
          <svg className={css.passwordErrorIcon} width="18" height="18">
            <use href="/sprite.svg#icon-error" />
          </svg>
        )}

        <svg
          className={css.icon}
          onClick={togglePassword}
          width="18"
          height="18"
        >
          <use
            href={`/sprite.svg#${showPassword ? 'icon-eye' : 'icon-eye-off'}`}
          />
        </svg>
      </div>
      {errors.password && (
        <p className={css.error}>{errors.password.message}</p>
      )}

      <div className={css.btnWrapper}>
        <button className={css.btn} type="submit">
          {!loading ? (
            'Registration'
          ) : (
            <BarLoader
              className={css.loader}
              color="#121417"
              speedMultiplier={3}
              width={70}
            />
          )}
        </button>
        <Link className={css.link} to="/login">
          Already have an account?
        </Link>
      </div>
    </form>
  );
};

export default RegisterForm;

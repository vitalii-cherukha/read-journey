import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import css from './LoginForm.module.css';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { BarLoader } from 'react-spinners';
import { Link } from 'react-router';
import type { LoginUser } from '../../../types/user';

interface LoginFormProps {
  onSubmit: (data: LoginUser) => Promise<void>;
  loading: boolean;
}

const loginSchema = Yup.object().shape({
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

const LoginForm = ({ onSubmit, loading }: LoginFormProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => setShowPassword((prev) => !prev);

  const {
    register,
    handleSubmit,
    clearErrors,
    watch,
    formState: { errors, touchedFields },
  } = useForm<LoginUser>({
    resolver: yupResolver(loginSchema),
    mode: 'onChange',
    reValidateMode: 'onChange',
  });

  const watchedValues = watch();

  return (
    <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
      <div
        className={`${css.inputWrapper} ${
          errors.email
            ? css.errorInput
            : touchedFields.email &&
                !errors.email &&
                watchedValues?.email?.trim()
              ? css.correctInput
              : ''
        }`}
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

        {touchedFields.email &&
          !errors.email &&
          watchedValues?.email?.trim() && (
            <svg className={css.correctIcon} width="18" height="18">
              <use href="/sprite.svg#icon-check" />
            </svg>
          )}
      </div>
      {errors.email && <p className={css.error}>{errors.email.message}</p>}
      {touchedFields.email && !errors.email && watchedValues?.email?.trim() && (
        <p className={css.correct}>Email is valid</p>
      )}

      <div
        className={`${css.inputWrapper} ${
          errors.password
            ? css.errorInput
            : touchedFields.password &&
                !errors.password &&
                watchedValues?.password?.trim()
              ? css.correctInput
              : ''
        }`}
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

        {touchedFields.password &&
          !errors.password &&
          watchedValues?.password?.trim() && (
            <svg className={css.passwordCorrectIcon} width="18" height="18">
              <use href="/sprite.svg#icon-check" />
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
      {touchedFields.password &&
        !errors.password &&
        watchedValues?.password?.trim() && (
          <p className={css.correct}>Password is secure</p>
        )}

      <div className={css.btnWrapper}>
        <button className={css.btn} type="submit">
          {!loading ? (
            'Log in'
          ) : (
            <BarLoader
              className={css.loader}
              color="#121417"
              speedMultiplier={3}
              width={70}
            />
          )}
        </button>
        <Link className={css.link} to="/register">
          {"Don't have an account?"}
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;

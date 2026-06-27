"use client";

import type { FormEvent } from "react";
import { useState } from "react";

import { useLogin } from "../api/useLogin";
import styles from "./LoginForm.module.css";

const initialState = {
  email: "",
  password: "",
};

interface LoginFormProps {
  onSuccess?: () => void;
}

export const LoginForm = ({ onSuccess }: LoginFormProps) => {
  const [form, setForm] = useState(initialState);
  const { mutateAsync, isPending, isError, error, isSuccess } = useLogin({
    onSuccess,
  });
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await mutateAsync({
        email: form.email.trim(),
        password: form.password,
      });
      setForm(initialState);
    } catch {}
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.header}>
        <p className={styles.eyebrow}>Welcome back</p>
        <h1 className={styles.title}>Sign in to your account</h1>
        <p className={styles.text}>
          Use your email and password to continue browsing products and placing
          orders.
        </p>
      </div>

      <label className={styles.field}>
        <span className={styles.label}>Email</span>
        <input
          className={styles.input}
          type="email"
          name="email"
          autoComplete="email"
          placeholder="you@example.com"
          value={form.email}
          onChange={(event) =>
            setForm((current) => ({ ...current, email: event.target.value }))
          }
          required
        />
      </label>

      <label className={styles.field}>
        <span className={styles.label}>Password</span>
        <input
          className={styles.input}
          type="password"
          name="password"
          autoComplete="current-password"
          placeholder="Enter your password"
          value={form.password}
          onChange={(event) =>
            setForm((current) => ({ ...current, password: event.target.value }))
          }
          required
          minLength={6}
        />
      </label>

      <button className={styles.button} type="submit" disabled={isPending}>
        {isPending ? "Signing in..." : "Sign in"}
      </button>

      {isError ? (
        <p className={styles.error}>
          {error ? error.message : "Unable to sign in."}
        </p>
      ) : isSuccess ? (
        <p className={styles.success}>Signed in successfully.</p>
      ) : null}
    </form>
  );
};

"use client";
import { Button } from "@mui/material";
import React, { FormEvent } from "react";

const LoginForm = () => {
  const handleLogin = (Event: FormEvent) => {
    Event.preventDefault();
  };

  return (
    <section className="z-10 pt-20 md:pt-0">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-[#ffffff90] backdrop-blur border border-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <p className="pb-4 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Administracion Catalogo
            </p>
            <form
              onSubmit={(Event: FormEvent) => handleLogin(Event)}
              className="space-y-4 md:space-y-6"
            >
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="email@hotmail.com"
                />
              </div>
              <div className="pt-3">
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Contraseña
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="•••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                />
              </div>
              <Button fullWidth type="submit" variant="contained">
                Iniciar Sesion
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;

import { useState } from "react";
import { ReactComponent as Logo } from "../../assets/icons/emr-logo.svg";
import { useForm } from "react-hook-form";
import { ReactComponent as EyeLogo } from "../../assets/icons/eye-icon.svg";
import { ReactComponent as EyeOffLogo } from "../../assets/icons/eye-off.svg";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useUserDatacontext } from "../../contexts/UserDataContent";
import { useRecoilState } from "recoil";
// import { userState } from "../../recoil/atoms";
import { api } from "../..";

import "./login.css";

const useLogin = () => {
  const navigate = useNavigate();
  const { setUserId } = useUserDatacontext();
  // const [userData, setUserData] = useRecoilState(userState);

  return useMutation({
    mutationFn: async ({ phone_no, password }) => {
      const response = await api.post("/patient/auth/login", {
        phone_no,
        password,
      });
      return response.data;
    },

    onSuccess: (data) => {
      console.log({ data });
      localStorage.setItem("token", data.data.token);
      // localStorage.setItem("userId", data?.data.patient?.id);
      localStorage.setItem("userId", 1);

      navigate("/panel/profile-page");
    },
    onError: (error) => {
      console.log({ "Error with login": error });
    },
  });
};

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const loginMutation = useLogin();

  const onSubmit = (data) => {
    const { phone_no, password } = data;
    const credentials = { phone_no, password };
    loginMutation.mutate(credentials);
  };

  return (
    <div className="login__container">
      <div className="login__logo__and__text">
        <Logo className="login__logo" />
        <p className="login__welcome__text">Welcome Back, Login</p>
      </div>
      <form
        action="submit"
        className="login__form"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* <div className="login__input__container">
          <label htmlFor="facility" className="login__input__label">
            Health Facility
          </label>
          <select
            name="facility"
            id="facility"
            {...register("facility", {
              required: "Please select facility",
            })}
            className="login__input"
          >
            <option value="">Select Facility</option>
            <option value="healing__balm">Healing Balm</option>
            <option value="Facility Two">Facility Two</option>
            <option value="Facility Three">Facility Three</option>
          </select>
          {errors.facility && (
            <p className="login__error__message">{errors.facility.message}</p>
          )}
        </div> */}
        <div className="login__input__container">
          <label htmlFor="phoneNumber" className="login__input__label">
            Phone Number
          </label>
          <input
            type="number
          "
            {...register("phone_no", {
              required: "Phone number is required",
              pattern: {
                // value: /\S+@\S+\.\S+/,
                message: "Phone number is invalid",
              },
            })}
            className="login__input"
          />
          {errors.phone_no && (
            <p className="login__error__message">{errors.phone_no.message}</p>
          )}
        </div>
        {/* <div className="login__input__container">
          <label htmlFor="email" className="login__input__label">
            Email
          </label>
          <input
            type="email
          "
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Email is invalid",
              },
            })}
            className="login__input"
          />
          {errors.email && (
            <p className="login__error__message">{errors.email.message}</p>
          )}
        </div> */}
        <div className="login__input__container">
          <label htmlFor="password" className="login__input__label">
            Password
          </label>
          <div className="password__input__and__icons">
            <input
              type={showPassword ? "text" : "password"}
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              className="login__input"
              style={{ width: "100%" }}
            />
            {!showPassword ? (
              <EyeLogo
                className="login__eye__icon"
                onClick={() => setShowPassword(true)}
              />
            ) : (
              <EyeOffLogo
                className="login__eye__icon"
                onClick={() => setShowPassword(false)}
              />
            )}
          </div>
          {errors.password && (
            <p className="login__error__message">{errors.password.message}</p>
          )}
        </div>
        <p className="forgot__password__text">Forgot Password</p>
        <button className="login__CTA">Login</button>
      </form>
    </div>
  );
};

export default Login;

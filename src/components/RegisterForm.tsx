import { useRegisterViewModel } from "../viewModels/useRegisterViewModel";
import { FC } from "react";

interface RegisterFormProps {
    url: string;
    title: string;
    question: string;
    actionLabel: string;
    buttontext: string;
}

const RegisterForm: FC<RegisterFormProps> = ({url, title, question, actionLabel, buttontext}) => {
  const {handleSubmit, onSubmit, register, errors, navigate, pathName} = useRegisterViewModel();
  return (
    <>
    <div className="py-4">
        <h1>{title}</h1>
    </div>
    <div>
        <form className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
          {pathName === '/register' && (
            <>
            <input className="py-2 my-2 rounded-md" {...register("username")} id='username' name='username' placeholder='Enter your Github username' type="text" />
            {errors.username && (<p role="alert">{errors?.username?.message}</p>)}
            </>
          )}
            <input className="py-2 my-2 rounded-md" {...register("email")} id='email' name='email' placeholder='Enter your email' type="text" />
            {errors.email && (<p role="alert">{errors?.email?.message}</p>)}
            <input className="py-2 my-2 rounded-md" {...register("password")} id='password' name='password' placeholder='Enter your password' type="password" />
            {errors.password && (<p role="alert">{errors?.password?.message}</p>)}
            <button className="bg-green-500 my-2" type="submit">{buttontext}</button>
            <p>{question} <span className="hover:cursor-pointer text-sky-500" onClick={() => navigate(url)}>{actionLabel}</span></p>
        </form>

    </div>
    </>
  )
}

export default RegisterForm
import { useForm } from "react-hook-form";
import { useNavigate, useLocation } from "react-router-dom";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useState } from "react";
import toast from 'react-hot-toast';

export function useRegisterViewModel() {
    let navigate = useNavigate(); 
    const location = useLocation();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [username, setUsername] = useState()

    const userRegisterSchema = yup.object().shape({
        email: yup.string().email("Please enter a valid email").required("Required field"),
        password: yup.string().required("Required field"),
        username: yup.string().test('requiredUsername', 'Required field', function (value) {
          if (location.pathname === '/register') {
            return yup.string().required().isValidSync(value);
          }
          return true;
        }),
      });
      
      

    useEffect(() => {
        setEmail(JSON.parse(localStorage.getItem('email') || "{}"));
        setPassword(JSON.parse(localStorage.getItem('password') || "{}"))
        setUsername(JSON.parse(localStorage.getItem('username') || "{}"))
      }, [])

    const {
        handleSubmit,
        control,
        setValue,
        setError,
        register,
        formState: { errors },
    } = useForm({ mode: "onChange", resolver: yupResolver(userRegisterSchema) });

    const onSubmit = (data: any) => {
        if(location.pathname === '/register'){
            localStorage.setItem('email', JSON.stringify(data.email))
            localStorage.setItem('password', JSON.stringify(data.password))
            localStorage.setItem('username', JSON.stringify(data.username))
            navigate('/profile')
        }
        else if(location.pathname === '/') {
            if(email === data.email && password === data.password){
                navigate('/profile')
            } else{
                toast.error('The email or password are incorrect!');
            }
        }
    }

    return {
        handleSubmit,
        onSubmit,
        register,
        errors,
        navigate,
        pathName: location.pathname
    }
}
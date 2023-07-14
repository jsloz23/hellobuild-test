import RegisterForm from '../components/RegisterForm'

const Register = () => {
  return (
    <>
    <div>
        <h1>Register</h1>
    </div>
    <div>
        <RegisterForm title='Register Form' url={'/'} question="Already have an account?" actionLabel='Log in' buttontext='Register'/>
    </div>
    </>
  )
}

export default Register
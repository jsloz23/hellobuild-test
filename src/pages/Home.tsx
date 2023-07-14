import RegisterForm from "../components/RegisterForm";

const Home = () => {
  return (
    <>
      <div>
        <h1>Hello Build Test</h1>
      </div>
      <div>
        <RegisterForm title='Login' url={'/register'} question="Don't have an account?" actionLabel="Register" buttontext="Login"/>
      </div>
    </>
  );
};

export default Home;

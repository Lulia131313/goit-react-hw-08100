import toast, { Toaster } from "react-hot-toast";
import AuthForm from "../components/AuthForm";

const LoginPage = () => {
  const handleSubmit = (values) => {
    toast.success("Login success");
    console.log(values);
  };
  const initialValues = {
    email: "",
    password: "",
  };
  return (
    <div>
      <AuthForm
        title="Login"
        onSubmit={handleSubmit}
        initialValues={initialValues}
      />
      <Toaster />
    </div>
  );
};

export default LoginPage;

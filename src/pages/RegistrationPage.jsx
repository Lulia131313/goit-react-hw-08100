import toast, { Toaster } from "react-hot-toast";
import AuthForm from "../components/AuthForm";

const RegistrationPage = () => {
  const handleSubmit = (values) => {
    toast.success("Register success");
    console.log(values);
  };
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  return (
    <div>
      <AuthForm
        title="Register"
        onSubmit={handleSubmit}
        initialValues={initialValues}
        type="register"
      />
      <Toaster />
    </div>
  );
};

export default RegistrationPage;

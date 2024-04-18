import AuthForm from "../components/AuthForm";
import { useDispatch } from "react-redux";
import { registerThunk } from "../redux/auth/operation";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const RegistrationPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    dispatch(registerThunk(values))
      .unwrap()
      .then((data) => {
        toast.success(`Welcome, ${data.user.name}!`);
        navigate("/");
      })
      .catch(() => toast.error("Credentials invalid"));
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

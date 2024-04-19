import AuthForm from "../components/AuthForm";
import { useDispatch } from "react-redux";
import { registerThunk } from "../redux/auth/operation";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";

const RegistrationPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validationSchema = yup.object().shape({
    name: yup
      .string()
      .min(3, "Name must be at least 3 characters")
      .required("Name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup
      .string()
      .min(7, "Password must be at least 7 characters")
      .required("Password is required"),
  });

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
        validationSchema={validationSchema}
      />
      <Toaster />
    </div>
  );
};

export default RegistrationPage;

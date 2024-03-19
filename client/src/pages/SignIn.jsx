import { Button, Label, Spinner, TextInput, Alert } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
function SignUp() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // if the user didn't fill the form then we will show an alert
    if (
      formData.email === "" ||
      formData.password === "" ||
      !formData.email ||
      !formData.password
    ) {
      return setErrorMessage("Please fill in all the fields correctly");
    }
    try {
      setLoading(true);
      const response = await fetch("/api/auth/sign-in", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // application/json mean we are sending json data
        },
        body: JSON.stringify(formData), // we need to convert the json data to string that browser can understand
      });
      const data = await response.json();
      if (!data.success) {
        setLoading(false);
        return setErrorMessage(data.message);
      }
      setLoading(false);
      if (response.ok) {
        navigate("/");
      }
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };
  return (
    <div className="min-h-[80vh] flex justify-center items-center">
      <div className="flex p-3 max-w-6xl mx-auto flex-col md:flex-row gap-10 md:items-center">
        <div className="flex-1" id="left-side">
          <h1 className=" self-center whitespace-nowrap text-3xl md:text-4xl font-bold dark:text-white">
            <span className=" px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white ">
              Darma_
            </span>
            Blog
          </h1>
          <p className="text-sm mt-4 ">
            This is the demo version of this blog site please login or sign-up
            if you want to see inside of this blog site. You can make new
            account for sign-in or using your google account.
          </p>
        </div>
        <div className="flex-1" id="right-side">
          <form
            className="flex flex-col gap-4"
            onSubmit={handleSubmit}
            method="post"
          >
            <div>
              <Label className="mb-2" value="Your Email" />
              <TextInput
                type="email"
                placeholder="name@company.com"
                id="email"
                onChange={handleInputChange}
              />
            </div>
            <div>
              <Label className="mb-2" value="Your Password" />
              <TextInput
                type="password"
                placeholder="Password"
                id="password"
                onChange={handleInputChange}
              />
            </div>
            <Button
              gradientDuoTone="purpleToPink"
              className="w-full"
              type="submit"
            >
              {loading ? (
                <>
                  <Spinner size="sm" />
                  <span className="pl-3">Loading ....</span>
                </>
              ) : (
                "Sign-in"
              )}
            </Button>
          </form>

          <div className="flex gap-2 text-sm mt-2">
            <span>Dont have an account ?</span>
            <Link to={"/sign-up"} className="text-blue-500">
              Sign up
            </Link>
          </div>

          {errorMessage && (
            <Alert className="mt-5" color="failure">
              {errorMessage}
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
}

export default SignUp;

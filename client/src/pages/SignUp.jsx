import { Button, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";
import { useState } from "react";
function SignUp() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      formData.username === "" ||
      formData.email === "" ||
      formData.password === ""
    ) {
      alert("Please fill all the fields");
      return;
    }
    try {
      const response = await fetch("/api/auth/sign-up", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
    console.log(formData);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    console.log(formData);
  };
  return (
    <div className="min-h-screen mt-20">
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
              <Label className="mb-2" value="Your Username" />
              <TextInput
                type="text"
                placeholder="Username"
                id="username"
                onChange={handleInputChange}
              />
            </div>
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
              Sign-in
            </Button>
          </form>

          <div className="flex gap-2 text-sm mt-2">
            <span>Have an account ?</span>
            <Link to={"/sign-in"} className="text-blue-500">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;

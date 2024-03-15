import { Button, Navbar, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";
function Header() {
  return (
    <Navbar className="border-b-2 border-gray-300">
      <Link
        to={"/"}
        className=" self-center whitespace-nowrap text-sm md:text-xl font-semibold dark:text-white"
      >
        <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white ">
          Darma's
        </span>
        Blog
      </Link>
      <form action="/search">
        <TextInput
          type="text"
          placeholder="Search ..."
          rightIcon={AiOutlineSearch}
          className="hidden lg:inline"
        />
      </form>
      <Button className="w-12 h-10 lg:hidden" color="gray">
        <AiOutlineSearch />
      </Button>
      <div className="flex gap-2 md:order-2">
        <Button className="w-12 h-10 hidden md:inline" color="gray">
          <FaMoon />
        </Button>
        <Link to="/sign-in">
          <Button gradientDuoTone="purpleToBlue">Sign-in</Button>
        </Link>
      </div>
      <Navbar.Collapse>
        <Navbar.Link>
          <Link to="/">Home</Link>
        </Navbar.Link>
        <Navbar.Link>
          <Link to="/about">About</Link>
        </Navbar.Link>
        <Navbar.Link>
          <Link to="/project">Project</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;

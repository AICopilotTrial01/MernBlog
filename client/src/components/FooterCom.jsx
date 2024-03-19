import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import { BsFacebook, BsInstagram, BsYoutube, BsTwitter } from "react-icons/bs";
function FooterCom() {
  return (
    <Footer container className="border border-t-8 border-teal-500">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="">
            <Link
              to={"/"}
              className=" self-center whitespace-nowrap text-sm md:text-xl font-semibold dark:text-white"
            >
              <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white ">
                Darma_
              </span>
              Blog
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-3 sm: mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="About" />
              <Footer.LinkGroup col>
                {/* Footer link are a component from flowbite for ->   */}
                <Footer.Link
                  href="https://www.100jsprojects.com"
                  target="_blank" // target blank will open the link in new tab or window
                  rel="noopener noreferrer" // noopener noreferrer is a security measure to prevent the new page from tampering with the original page
                >
                  100 Js Project
                </Footer.Link>
                <Footer.Link
                  href="/about"
                  target="_blank" // target blank will open the link in new tab or window
                  rel="noopener noreferrer" // noopener noreferrer is a security measure to prevent the new page from tampering with the original page
                >
                  Darma Blog
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://www.github.com"
                  target="_blank" // target blank will open the link in new tab or window
                  rel="noopener noreferrer" // noopener noreferrer is a security measure to prevent the new page from tampering with the original page
                >
                  GitHub
                </Footer.Link>
                <Footer.Link
                  href="https://www.Instagram.com"
                  target="_blank" // target blank will open the link in new tab or window
                  rel="noopener noreferrer" // noopener noreferrer is a security measure to prevent the new page from tampering with the original page
                >
                  Instagram
                </Footer.Link>
                <Footer.Link
                  href="https://www.youtube.com"
                  target="_blank" // target blank will open the link in new tab or window
                  rel="noopener noreferrer" // noopener noreferrer is a security measure to prevent the new page from tampering with the original page
                >
                  Youtube
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">terms &amp; conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className=" w-full sm:flex sm:justify-between sm:items-center">
          <Footer.Copyright
            href="#"
            by="Darma's_Blog"
            year={new Date().getFullYear()}
          />
          <div className="flex gap-5 mt-2">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />
            <Footer.Icon href="#" icon={BsYoutube} />
          </div>
        </div>
      </div>
    </Footer>
  );
}

export default FooterCom;

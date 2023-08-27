import Logo from "./Logo";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center max-w-screen-lg mx-auto pt-8 z-10 relative text-black">
      <Logo />
    </div>
  );
};

export default Navbar;

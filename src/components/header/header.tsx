import { Navbar } from "../navbar";

interface HeaderProps {
  isParent?: boolean;
}

const Header = ({ isParent }: HeaderProps) => {
  return (
    <header className="z-10 p-2 md:p-8">
      <Navbar isParent={isParent} />
    </header>
  );
};

export default Header;

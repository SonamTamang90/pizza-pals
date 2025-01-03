import { Sheet, SheetContent, SheetTrigger } from "../../ui/sheet";
import Logo from "./Logo";
import Navigation from "./Navigation";
import { Button } from "../../ui/button";
import { Menu } from "lucide-react";
import RightNav from "./RightNav";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <nav
          className="flex items-center justify-between h-16"
          aria-label="Main navigation"
        >
          <Logo />
          <Navigation />

          <div className="flex items-center space-x-4 ">
            <RightNav />
            <div className="sm:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Menu className="w-5 h-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <div className="flex flex-col space-y-4 mt-8">
                    <a href="#" className="text-lg">
                      Menu
                    </a>
                    <a href="#" className="text-lg">
                      About
                    </a>
                    <a href="#" className="text-lg">
                      Contact
                    </a>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;

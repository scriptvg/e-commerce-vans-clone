import { ScrollArea } from "@radix-ui/react-scroll-area";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator"

export const NavMenu = (props) => (
  <ScrollArea className="h-[calc(100vh-4rem)] w-full">
    <div className="flex flex-col gap-2 p-4">
      <Button variant="ghost" className="w-full justify-start" asChild>
        <Link to="/dashboard">
          Dashboard
        </Link>
      </Button>
      <Button variant="ghost" className="w-full justify-start" asChild>
        <Link to="/dashboard/transactions">
          Transactions
        </Link>
      </Button>
      <Button variant="ghost" className="w-full justify-start" asChild>
        <Link to="/dashboard/budgets">
          Budgets
        </Link>
      </Button>
      <Button variant="ghost" className="w-full justify-start" asChild>
        <Link to="/dashboard/accounts">
          Accounts
        </Link>
      </Button>
      <Button variant="ghost" className="w-full justify-start" asChild>
        <Link to="/dashboard/categories">
          Categories
        </Link>
      </Button>
      <Button variant="ghost" className="w-full justify-start" asChild>
        <Link to="/dashboard/reports">
          Reports
        </Link>
      </Button>
      <Separator className="my-4" />
      <Button variant="ghost" className="w-full justify-start" asChild>
        <Link to="/dashboard/settings">
          Settings
        </Link>
      </Button>
    </div>
  </ScrollArea>
);

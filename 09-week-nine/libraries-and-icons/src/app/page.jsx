import NavigationMenuDemo from "./components/NavigationMenu";
import PopoverDemo from "./components/Popover";
import SwitchDemo from "./components/Switch";
import TabsDemo from "./components/Tabs";

export default function HomePage() {
  return (
    <>
      <h1>Hello!</h1>
      <PopoverDemo />
      <TabsDemo />
      <NavigationMenuDemo />
      <SwitchDemo />
    </>
  );
}

import { Outlet, useNavigation } from "react-router-dom";
import { StylesGlobal } from "./StylesGlobal";

export const LayoutPage = () => {
  return (
    <>
      <StylesGlobal />
      {useNavigation.state === "loading" && "Loading..."}

      <Outlet />
    </>
  );
};

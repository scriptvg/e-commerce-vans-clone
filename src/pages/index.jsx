import { lazy } from "react";

const Inicio = lazy(() => import("./Inicio"));
const ProductDetail = lazy(() => import("./ProductDetail"));

export {
  Inicio,
  ProductDetail
}

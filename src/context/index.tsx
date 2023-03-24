import React, { Dispatch, SetStateAction } from "react";
import { productIds } from "../@types";

export const CartContext = React.createContext<([{ [key in productIds]: number }, Dispatch<SetStateAction<{ [key in productIds]: number } >>])>(null!)



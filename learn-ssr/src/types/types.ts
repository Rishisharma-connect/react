import { z } from "zod";
import { userValidation, loginValidation } from "@/types/validations";

export type Props = {
  // Define the expected props here
  data: string; // Example prop
  data1: string; // Example prop
};

export type UserValidationSchema = z.infer<typeof userValidation>;
export type LoginSchema = z.infer<typeof loginValidation>;

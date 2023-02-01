import { PropsWithChildren, ReactElement } from "react";

export const SomeComponent = ({ children }: PropsWithChildren): ReactElement => 
  <p>{children}</p>
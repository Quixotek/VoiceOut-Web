"use client";
import WithApolloLayout from "./withApolloLayout";

interface IProps {
  children: React.ReactNode;
}

const Providers: React.FC<IProps> = ({ children }) => {
  return <WithApolloLayout>{children}</WithApolloLayout>;
};

export default Providers;

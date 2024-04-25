import { client } from "@/lib/apollo/apolloClient";
import { ApolloProvider } from "@apollo/client";
import React, { FC } from "react";

interface IProps {
  children: React.ReactNode;
}

const WithApolloLayout: FC<IProps> = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default WithApolloLayout;

export const environmentVariables = {
  API_DOMAIN: process.env.NEXT_PUBLIC_API_DOMAIN,
  API_PORT: process.env.NEXT_PUBLIC_API_DOMAIN_PORT,
  SUBSCRIPTION_API_DOMAIN: process.env.NEXT_PUBLIC_SUBSCRIPTIOM_API_DOMAIN,
  NODE_ENV: process.env.NODE_ENV,
};

export const { API_DOMAIN, API_PORT, SUBSCRIPTION_API_DOMAIN, NODE_ENV } =
  environmentVariables;

export const constant = {
  restUri: NODE_ENV === "production" ? API_DOMAIN : `${API_DOMAIN}:${API_PORT}`,
  graphqlUri:
    NODE_ENV === "production"
      ? API_DOMAIN
      : `${API_DOMAIN}:${API_PORT}/graphql`,
  subscriptionUri:
    NODE_ENV === "production"
      ? SUBSCRIPTION_API_DOMAIN
      : `${SUBSCRIPTION_API_DOMAIN}:${API_PORT}/graphql`,
};

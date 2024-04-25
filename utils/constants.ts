export const environmentVariables = {
  API_DOMAIN: process.env.NEXT_PUBLIC_API_DOMAIN,
  API_PORT: process.env.NEXT_PUBLIC_API_DOMAIN_PORT,
  SUBSCRIPTION_API_DOMAIN: process.env.NEXT_PUBLIC_SUBSCRIPTIOM_API_DOMAIN,
};

export const { API_DOMAIN, API_PORT, SUBSCRIPTION_API_DOMAIN } =
  environmentVariables;

export const constant = {
  restUri: `${API_DOMAIN}:${API_PORT}/api/v1`,
  graphqlUri: `${API_DOMAIN}:${API_PORT}/graphql`,
  subscriptionUri: `${SUBSCRIPTION_API_DOMAIN}:${API_PORT}/graphql`,
};

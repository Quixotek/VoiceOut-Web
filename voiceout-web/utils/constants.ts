export const environmentVariables = {
  API_DOMAIN: process.env.NEXT_PUBLIC_API_DOMAIN,
  API_PORT: process.env.NEXT_PUBLIC_API_DOMAIN_PORT,
};

export const { API_DOMAIN, API_PORT } = environmentVariables;

export const constant = {
  restUri: `${API_DOMAIN}:${API_PORT}/api/v1`,
};

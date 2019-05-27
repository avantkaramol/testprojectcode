interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: 'm3db7kxGpfey3qT9wt4iyFbZLOBALnGI',
  domain: 'dev-wkacoyn4.auth0.com',
  callbackURL: 'http://localhost:4200/callback'
};

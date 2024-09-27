import { CognitoUserPool, CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js';

// Configuration for the Cognito User Pool
const userPool = new CognitoUserPool({
    UserPoolId: process.env.GATSBY_AWS_COGNITO_USER_POOL_ID,
    ClientId: process.env.GATSBY_AWS_COGNITO_CLIENT_ID,
});

/**
 * Signs up a new user in the Cognito User Pool.
 * @param {string} email - The user's email.
 * @param {string} password - The user's password.
 * @returns {Promise} - Resolves with user data or rejects with an error.
 */
export const signUp = (email, password) =>
    new Promise((resolve, reject) =>
        userPool.signUp(email, password, null, null, (error, data) => {
            error ? reject(error) : resolve(data);
        })
    );

/**
 * Signs in a user to the Cognito User Pool.
 * @param {string} email - The user's email.
 * @param {string} password - The user's password.
 * @returns {Promise} - Resolves with authentication data or rejects with an error.
 */
export const signIn = (email, password) =>
    new Promise((resolve, reject) => {
        const user = new CognitoUser({ Username: email, Pool: userPool });
        const authDetails = new AuthenticationDetails({ Username: email, Password: password });

        user.authenticateUser(authDetails, {
            onSuccess: resolve,
            onFailure: reject,
        });
    });

/**
 * Signs out the current user from the Cognito User Pool.
 */
export const signOut = () => {
    const user = userPool.getCurrentUser();
    if (user) {
        user.signOut();
    }
};
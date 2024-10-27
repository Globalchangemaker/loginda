import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

export default NextAuth({
  providers: [
    Providers.CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        // Add your authentication logic here
        const { username, password } = credentials;
        const user = { id: 1, name: 'John Doe', email: 'john@example.com' };
        if (username === user.email && password === 'password') {
          return user;
        }
        throw new Error('Invalid credentials');
      },
    }),
  ],
  database: process.env.DATABASE_URL,
});

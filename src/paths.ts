export const paths = {
  home: '/',
  auth: {
    signIn: '/auth/sign-in',
    signUp: '/auth/sign-up',
    resetPassword: '/auth/reset-password',
    forgotPassword: '/auth/forgot-password',
  },
  transaction: '/transaction',
  transactions: '/transactions',
  dashboard: {},
  errors: { notFound: '/errors/not-found' },
} as const;

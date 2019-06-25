export const requiredField = (value) => (value ? undefined : 'Field is empty. Please enter your data');
export const requiredEmail = (value) => (value ? undefined : 'Field is empty. Please enter your email');
export const requiredPassword = (value) => (value ? undefined : 'Field is empty. Please enter your password');
export const requiredConfirmPassword = (value) => (value ? undefined : 'Field is empty. Please enter confirm password');
export const requiredSellerId = (value) => (value ? undefined : 'Field is empty. Please enter Seller Id');
export const requiredMwsToken = (value) => (value ? undefined : 'Field is empty. Please enter MWS Auth Token');

export const confirmPassword = (value, allValues) => {
  return (value === allValues.password ? undefined : 'Does not match password!');
};
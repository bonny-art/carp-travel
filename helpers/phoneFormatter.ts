export const formatPhoneNumber = (value: string): string => {
  if (!value) return value;
  const phoneNumber = value.replace(/\D/g, "");
  const phoneNumberLength = phoneNumber.length;
  if (phoneNumberLength > 0 && phoneNumberLength < 4) {
    return `(${phoneNumber}`;
  }
  if (phoneNumberLength < 6) {
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
  }
  if (phoneNumberLength < 8) {
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
      3,
      5
    )} ${phoneNumber.slice(5)}`;
  }
  return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
    3,
    5
  )} ${phoneNumber.slice(5, 7)} ${phoneNumber.slice(7, 10)}`;
};

export const formatPhoneNumberWithCode = (phoneNumber: string): string => {
  const cleaned = phoneNumber.replace(/\D/g, "");

  if (cleaned.length !== 12 || !cleaned.startsWith("380")) {
    throw new Error("Invalid phone number format");
  }

  const countryCode = cleaned.slice(0, 2);
  const operatorCode = cleaned.slice(2, 5);
  const firstPart = cleaned.slice(5, 7);
  const secondPart = cleaned.slice(7, 9);
  const thirdPart = cleaned.slice(9);

  return `+${countryCode} (${operatorCode}) ${firstPart} ${secondPart} ${thirdPart}`;
};

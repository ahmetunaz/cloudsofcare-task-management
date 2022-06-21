import moment from "moment";

export const serializeDTO = (dtoClass, data) => {
  const serializedObject = new dtoClass();
  const properties = Object.getOwnPropertyNames(serializedObject);
  properties.forEach(propertyName => {
    serializedObject[propertyName] = data[propertyName];
  });
  return serializedObject;
};

export const generateAuthData = user => {
  return {
    accessToken:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
    tokenType: "JWT",
    expire: moment().add(5, "minutes"),
    refreshToken:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5x",
    scope: "identify,email",
    user: user,
  };
};

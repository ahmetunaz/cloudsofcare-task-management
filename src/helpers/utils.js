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

export const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);

export const updateArrayItem = (array, item) => {
  let newArray = [...array];
  const index = newArray.findIndex(elem => elem.id === item.id);
  if (index !== -1) {
    const newItem = { ...array[index], ...item };
    newArray.splice(index, 1, newItem);
  }
  return newArray;
};

export const deleteItemFromArrayById = (array, id) => {
  let newArray = [...array];
  const index = newArray.findIndex(elem => elem.id === id);
  if (index !== -1) newArray.splice(index, 1);
  return newArray;
};

export const usersToSelectOptions = users => {
  if (typeof users === "object" && users.length > 0) {
    return users.map(user => {
      return {
        value: user.id,
        label: user.name,
      };
    });
  }
  return [];
};

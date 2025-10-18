const getStoredApp = () => {
  const storedAppSTR = localStorage.getItem("");
  if (storedAppSTR) {
    const storedAppData = JSON.parse(storedAppSTR);
    return storedAppData;
  } else {
    return [];
  }
};

const addToStoreDB = (id) => {
  const storedAppData = getStoredApp();
  if (storedAppData.includes(id)) {
    alert("already exist");
  } else {
    storedAppData.push(id);
  }
};

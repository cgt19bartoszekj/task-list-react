export const getCurrentDate = () => {
  let date = new Date();

  const currentDate = date.toLocaleString('pl', {
    dateStyle: "short",
    timeStyle: "short"
  });

  console.log(currentDate);
  return currentDate;
}


const formatDate = () => {
  const formattedDate = new Date();
  const day = String(formattedDate.getDate()).padStart(2, "0");
  const month = String(formattedDate.getMonth() + 1).padStart(2, "0");
  const year = String(formattedDate.getFullYear()).slice(-2);
  const formattedString = `${day}/${month}/${year}`;
  return formattedString;
};

module.exports = formatDate;

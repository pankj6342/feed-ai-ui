const getFormattedDate = (date) => {
    const parsedDate = new Date(date);
    const now = new Date();
    // 3. Calculate the difference in milliseconds between the two dates
    const differenceInMilliseconds = now.getTime() - parsedDate.getTime();

    // 4. Convert the difference to days and extract the hours and minutes
    const days = Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24));
    const hours = parsedDate.getHours();
    const minutes = parsedDate.getMinutes().toString().padStart(2, "0");

    // 5. Construct the final string using template literals
    const formattedDate = `${days} days ago at ${hours}:${minutes}`;
    return formattedDate;
  };

module.exports={getFormattedDate}
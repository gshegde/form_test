const formatTransactionValue = () => {
  const { transactionValues, status, transactionReferenceName } = props;
  const { key } = val;

  if (typeof key !== "string") {
    if (!(categoryType === "bene" || (categoryType === "statutory" && status === "pending"))) {
      const formattedValue = `${transactionValues[key[0]]?.split(".")[1]} ${convertUtcToIST(transactionValues[key[1]])}`;
      return formattedValue;
    } else if (categoryType === "bene") {
      return `${transactionValues[key[0]]} ${convertUtcToIST(transactionValues[key[1]])}`;
    }
  }

  switch (key) {
    case 'cancelInstance':
      return getFormattedDateDDMMYYYY(transactionValues['transactionDate']);
    case "frequencyType":
      return getPaymentType(transactionValues[key]);
    case "modified_by":
      return `${transactionValues[key] ? transactionValues[key] : ""} ${moment(transactionValues["modified_on"]).format("DD/MM/YYYY, HH:mm A")}`;
    case "lastActionTakenBy":
      if (transactionValues[key]?.name && transactionValues[key]?.date) {
        return `${transactionValues[key]?.name} ${moment(transactionValues[key]?.date).format("DD/MM/YYYY, HH:mm")}`;
      }
      break;
    case "transactionExpiryDate":
      return moment(transactionValues[key], "DD-MM-YYYY HH:mm:ss").format("DD/MM/YYYY, HH:mm");
    case "challanExpDate":
      return moment(transactionValues[key], "DD-MM-YYYY HH:mm:ss").format("DD/MM/YYYY");
    case "expiryDate":
      if (["SHP"].includes(transactionReferenceName)) {
        return moment(transactionValues[key]).format("DD/MM/YYYY, HH:mm");
      }
      return getFormattedDateDDMMYYYYHHMM(transactionValues[key]);
    case 'stopDatesSelected':
      if (getCancelledDate(transactionValues[key])?.length > 1) {
        // Your logic for 'stopDatesSelected'
      }
      break;
    // Add more cases as needed

    default:
      // Default case or fallback
      return "";
  }
};

// Example usage
const formattedValue = formatTransactionValue();
console.log(formattedValue);

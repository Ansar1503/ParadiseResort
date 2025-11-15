export const formatDateTime = (isoDate: string) => {
  if (!isoDate) return "";

  const dateObj = new Date(isoDate);

  if (isNaN(dateObj.getTime())) return "";

  const date = dateObj.toLocaleDateString("en-IN", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  const time = dateObj.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return `${date} • ${time}`;
};

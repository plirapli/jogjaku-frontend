const formatDate = (date) => {
  const options = {
    day: '2-digit',
    month: '2-digit',
    year: '2-digit',
  };
  return new Date(date).toLocaleDateString('id-ID', options);
};

const formatDateWithDay = (date) => {
  const options = {
    weekday: 'long',
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  };
  return new Date(date).toLocaleDateString('id-ID', options);
};

const formatDateWithHour = (date) => {
  const options = {
    day: '2-digit',
    month: '2-digit',
    year: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  };
  return new Date(date).toLocaleDateString('id-ID', options);
};

export { formatDate, formatDateWithHour, formatDateWithDay };

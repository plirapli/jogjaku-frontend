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

const formatDateLongMonth = (date) => {
  const options = {
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

const formatDateLongWithHour = (date) => {
  const options = {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  };
  return new Date(date).toLocaleDateString('en-GB', options);
};

const sortDateObject = (arr) => arr.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))

export { formatDate, formatDateWithHour, formatDateLongMonth, formatDateWithDay, formatDateLongWithHour, sortDateObject };

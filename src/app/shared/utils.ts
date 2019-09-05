export function getDateNowFormatted() {
  let dateNow = new Date();
  let dd = String(dateNow.getDate()).padStart(2, '0');
  let mm = String(dateNow.getMonth() + 1).padStart(2, '0'); //January is 0!
  let yyyy = dateNow.getFullYear();
  return `${yyyy}-${mm}-${dd}`;
}

export function getTimeNowFormatted() {
  let dateNow = new Date();
  let hh = dateNow.getHours();
  let mm = dateNow.getMinutes();
  return `${hh}:${mm}`;
}

export function getDateTimeNowFormatted() {
  return getDateNowFormatted() + ' ' + getTimeNowFormatted();
}

import moment from 'moment'

export function formatDate(date) {
  return moment(String(date)).format('YYYY-MM-DD')
}

export function formatDateWithDay(date) {
  // Create a new Date object with your desired date
  const inputDate = new Date(date)
  // Define arrays for month names and day names
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  const dayNames = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ]

  // Get the day, month, and year components of the date
  const day = dayNames[inputDate.getDay()]
  const month = monthNames[inputDate.getMonth()]
  const year = inputDate.getFullYear()

  // Get the day of the month (with leading zero if needed)
  const dayOfMonth = inputDate.getDate().toString().padStart(2, '0')

  // Create the formatted date string
  const formattedDate = `${day}, ${month} ${dayOfMonth}, ${year}`

  console.log(formattedDate) // Output: "Saturday, September 22, 2023"
  return formattedDate
}

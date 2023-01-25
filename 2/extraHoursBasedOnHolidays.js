const year = 2022
const holidays = ['01/06', '04/01', '12/25'] // format MM/DD

// 01/06 is January 6, Thursday. Count.
// 04/01 is April 1, Friday. Count.
// 12/25 is December 25, Sunday. Do not count.


/*
1.Si el año es uniformemente divisible por 4, vaya al paso 2. De lo contrario, vaya al paso 5.
2.Si el año es uniformemente divisible por 100, vaya al paso 3. De lo contrario, vaya al paso 4.
3.Si el año es uniformemente divisible por 400, vaya al paso 4. De lo contrario, vaya al paso 5.
4.El año es un año bisiesto (tiene 366 días).
5.El año no es un año bisiesto (tiene 365 días).
*/
//2004, 2008, 2012, 2016, 2020, 2024, 2028, 2032, 2036, 2040, 2044, 2048, 2052, 2056, 2060, 2064, 2068, 2072, 2076, 2080, 2084, 2088, 2092, 2096.
const isLeapYear = (year) => {
   if (year % 4 != 0) return false
   else if (year % 100 != 0) return true
   else if (year % 400 == 0) return true
   else return false
}

const checkDate = (year, dates) => {
   if (year < 1900) return false

   let areValidDates = true
   dates.forEach(date => {
      const splitDate = date.split("/")
      const month = splitDate[0] - 1
      const day = Number(splitDate[1])
      const months31days = [0, 2, 4, 6, 7, 9, 11]
      const months30days = [3, 5, 8, 10]
      const februaryDays = isLeapYear(year) ? 29 : 28

      if (month < 0 || month > 11) areValidDates = false
      else if (months31days.includes(month)
         && ((day > 31) || (day < 0))
      ) {
         areValidDates = false
      } else if (months30days.includes(month)
         && ((day > 30) || (day < 0))
      ) {
         areValidDates = false
      } else if ((day > februaryDays) || (day < 0)) {
         areValidDates = false
      }
   })

   return areValidDates
}

const countHours = (year, holidays) => {
   if (!checkDate(year, holidays)) return false

   const days = holidays.filter(date => {
      const splitDate = date.split("/")
      const month = splitDate[0]
      const day = splitDate[1]
      const finalDate = new Date(year, month - 1, day)
      const dayOfWeek = finalDate.getDay()
      const isValidDate = (dayOfWeek == 0 || dayOfWeek == 6)
         ? false
         : true

      return isValidDate
   })

   return days.length * 2
}


countHours(year, holidays) // 2 days -> 4 extra hours in the yea
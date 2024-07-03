export function useFormatter(number) {
    if (!number) return
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }
  
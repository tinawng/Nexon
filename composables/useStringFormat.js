export function useStringFormat() {
  return {
    formatPrice: function (price) {
      var [full, partial] = price.toFixed(2).toString().split(".")

      full = full.split("").reverse().join("")
      full = full.match(/.{1,3}/g).join(",")
      full = full.split("").reverse().join("")

      return `$${full}.${partial}`
    },
    formatHour: function (date) {
      if (typeof date === "string") date = new Date(date)
      return date.getHours() < 13
        ? `${date.getHours()}:${date.getMinutes().toString().padStart(2, "0")} AM`
        : `${date.getHours() - 12}:${date.getMinutes().toString().padStart(2, "0")} PM`
    },
    formatDate: function (date) {
      if (typeof date === "string") date = new Date(date)
      return `${date.getDay().toString().padStart(2, "0")}.${date
        .getMonth()
        .toString()
        .padStart(2, "0")}.${date.getFullYear()}, ${this.formatHour(date)}`
    },
  }
}

/** List of Spanish months */
const monthsArray = [
  'Enero',
  'Febrero',
  'Marzo',
  'Abril',
  'Mayo',
  'Junio',
  'Julio',
  'Agosto',
  'Septiembre',
  'Octubre',
  'Noviembre',
  'Diciembre',
]

/**
 * Format a date to a string
 * @param date {date}
 * @returns {string}
 */
const formatDate = (date = new Date()) => {
  const dateObj = new Date(date)
  return `${dateObj.getDate()} de ${
    monthsArray[dateObj.getMonth()]
  }, ${dateObj.getFullYear()}`
}

/**
 * Add `displayDate` field to the article fields by using the `created` field
 * @param articles {Array} · List of articles
 */
const addDisplayDate = (articles) => {
  if (articles == null) return articles
  if (!Array.isArray(articles)) return articles
  if (articles.length === 0) return articles

  return articles.map((article) => {
    const date = new Date(article.created)
    const displayDate = formatDate(date)

    return { ...article, displayDate }
  })
}

/**
 * Number of articles to skip. Used for pagination
 * @param currentPage {number}
 * @param perPage {number}
 * @returns {number|number}
 */
const skipNumber = ({ currentPage, perPage }) => {
  return currentPage === 1 ? 0 : (currentPage - 1) * perPage
}

export { addDisplayDate, skipNumber, formatDate }

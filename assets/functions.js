/**
 * Add `displayDate` field to the article fields by using `created` field
 * @param articles {Array} · List of articles
 */
const addDisplayDate = (articles) => {
  // if (articles == null) return
  // if (!Array.isArray(articles)) return articles
  // if (articles.length === 0) return articles
  return articles.map((article) => {
    const months = [
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
    const date = new Date(article.created)

    const displayDate = `${date.getDate()} de ${
      months[date.getMonth()]
    }, ${date.getFullYear()}`
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

export { addDisplayDate, skipNumber }

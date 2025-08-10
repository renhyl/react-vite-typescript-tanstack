import type React from 'react'

export const parseHtmlString = (htmlString: string): React.ReactNode => {
  const parts: React.ReactNode[] = []
  const regex = /(<strong>(.*?)<\/strong>)/g
  let lastIndex = 0
  let matchResult: RegExpExecArray | null = regex.exec(htmlString)

  while (matchResult !== null) {
    const [, , innerText] = matchResult
    const startIndex = matchResult.index
    const endIndex = regex.lastIndex

    // Add text before the strong tag
    if (startIndex > lastIndex) {
      parts.push(htmlString.substring(lastIndex, startIndex))
    }

    // Add the strong tag
    parts.push(<strong key={startIndex}>{innerText}</strong>)
    lastIndex = endIndex
    matchResult = regex.exec(htmlString)
  }

  // Add any remaining text after the last strong tag
  if (lastIndex < htmlString.length) {
    parts.push(htmlString.substring(lastIndex))
  }

  return <>{parts}</>
}

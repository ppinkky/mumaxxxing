export async function downloadReceipt(receipt: HTMLElement): Promise<void> {
  const blob = await createReceiptBlob(receipt)
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = 'mu-maxxing-receipt.png'
  link.click()
  URL.revokeObjectURL(url)
}

export async function shareReceipt(receipt: HTMLElement): Promise<void> {
  if (!navigator.share) {
    await downloadReceipt(receipt)
    return
  }
  const blob = await createReceiptBlob(receipt)
  const file = new File([blob], 'mu-maxxing-receipt.png', { type: 'image/png' })
  if (navigator.canShare?.({ files: [file] })) {
    await navigator.share({
      title: 'มู Maxxing luck receipt',
      text: 'My มู Maxxing luck receipt',
      files: [file],
    })
    return
  }
  await navigator.share({
    title: 'มู Maxxing luck receipt',
    text: 'My มู Maxxing luck receipt',
  })
}

async function createReceiptBlob(receipt: HTMLElement): Promise<Blob> {
  const clone = receipt.cloneNode(true) as HTMLElement
  inlineStyles(receipt, clone)
  clone.style.transform = 'none'

  const { width, height } = receipt.getBoundingClientRect()
  const scale = 3
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="${width * scale}" height="${height * scale}" viewBox="0 0 ${width} ${height}">
      <foreignObject width="100%" height="100%" transform="scale(${1})">
        ${new XMLSerializer().serializeToString(clone)}
      </foreignObject>
    </svg>
  `
  const svgBlob = new Blob([svg], { type: 'image/svg+xml;charset=utf-8' })
  const svgUrl = URL.createObjectURL(svgBlob)
  const image = new Image()
  image.src = svgUrl
  await image.decode()

  const canvas = document.createElement('canvas')
  canvas.width = width * scale
  canvas.height = height * scale
  const context = canvas.getContext('2d')
  if (!context) {
    URL.revokeObjectURL(svgUrl)
    throw new Error('Receipt image could not be created in this browser.')
  }
  context.drawImage(image, 0, 0, canvas.width, canvas.height)
  URL.revokeObjectURL(svgUrl)

  return new Promise<Blob>((resolve, reject) =>
    canvas.toBlob(
      (value) =>
        value
          ? resolve(value)
          : reject(new Error('Receipt image could not be exported.')),
      'image/png',
    ),
  )
}

function inlineStyles(source: HTMLElement, target: HTMLElement): void {
  target.style.cssText = getComputedStyle(source).cssText
  for (let index = 0; index < source.children.length; index += 1) {
    const sourceChild = source.children[index]
    const targetChild = target.children[index]
    if (sourceChild instanceof HTMLElement && targetChild instanceof HTMLElement) {
      inlineStyles(sourceChild, targetChild)
    }
  }
}

function doGet() {
  const html = HtmlService.createTemplateFromFile('index');
  return html.evaluate().addMetaTag('viewport','width=device-width, initial-scale=1, user-scalable=no').setTitle('Mui').setFaviconUrl('https://gdm-catalog-fmapi-prod.imgix.net/ProductLogo/6aecc665-9f30-4dc7-bacc-880d8e66c7bb.png');
}

function require(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

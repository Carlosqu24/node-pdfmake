const pdfmake = require('pdfmake');
const fs = require('fs');

const fonts = require('./fonts');
const styles = require('./styles');
const { content } = require('./pdfContent');
const PdfPrinter = require('pdfmake');

let docDefinition = {
      content,
      styles
};

const printer = new PdfPrinter(fonts);

let pdfDoc = printer.createPdfKitDocument(docDefinition);
pdfDoc.pipe(fs.createWriteStream("pdfs/pdfTest.pdf"));
pdfDoc.end();
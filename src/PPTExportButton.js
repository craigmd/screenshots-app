import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import html2canvas from 'html2canvas';
import pptxgen from 'pptxgenjs';
import { IncomesChart } from './IncomesChart';
import { PopulationsChart } from './PopulationsChart';

const content = [
  { title: 'Incomes Per Capita', chart: <IncomesChart /> },
  { title: 'Total Population', chart: <PopulationsChart /> },
];

export function PPTExportButton() {
  const createCanvas = async (component) => {
    const root = document.getElementById('html2canvas-root');
    ReactDOM.render(component, root);
    const canvas = await html2canvas(root, { backgroundColor: '#000000' });
    const image = canvas.toDataURL();

    return image;
  };

  const createPresentation = async () => {
    const presentation = new pptxgen();

    for (const item of content) {
      const slide = presentation.addSlide();
      const chartImage = await createCanvas(item.chart);

      slide.bkgd = '000000';
      slide.color = 'FFFFFF';

      slide.addText(item.title, {
        x: 0.5,
        y: 0.5,
        bold: true,
        fontFace: 'Roboto',
        fontSize: 29,
      });

      slide.addImage({ data: chartImage, x: 0.75, y: 1, w: 4.0, h: 3.0 });
    }

    presentation.writeFile('test-text-only.pptx');
  };

  return <button onClick={createPresentation}>Download</button>;
}

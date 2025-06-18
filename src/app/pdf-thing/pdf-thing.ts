import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BLANK_A4_PDF, Template } from '@pdfme/common';
import { generate } from '@pdfme/generator';
import { Designer } from '@pdfme/ui';

const template: Template = {
  basePdf: BLANK_A4_PDF,
  schemas: [
    [

    ],
  ],
};

@Component({
  selector: 'app-pdf-thing',
  imports: [],
  templateUrl: './pdf-thing.html',
  styleUrl: './pdf-thing.css'
})

export class PdfThing implements AfterViewInit {
  @ViewChild('pdfDesigner', { static: false }) pdfDesignerRef!: ElementRef;
  private designer?: Designer;

  ngAfterViewInit() {
    this.initializeDesigner()
  }

  private initializeDesigner() {
    this.designer = new Designer({
      domContainer: this.pdfDesignerRef.nativeElement,
      template: template,
      options: {
        lang: 'en',
        labels: {
          'field.name': 'Name',
          'field.email': 'Email',
          'field.date': 'Date',
          'field.signature': 'Signature'
        }
      }
    })
  }

  async downloadPdf() {
    const inputs = [{}];
    const pdf = await generate({
      template: template,
      inputs
    });
    const blob = new Blob([pdf], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);
    // return url of download
          const link = document.createElement('a');
      link.href = url;
      link.download = 'filled-document.pdf';
      link.click();
    console.log(link);
  }
}

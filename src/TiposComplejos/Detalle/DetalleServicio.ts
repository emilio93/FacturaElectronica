// Factura Electronica
//
// Copyright © 2020 Emilio Rojas
//
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

import { LineaDetalle } from './LineaDetalle'

  /**
   * Nombre:        Detalle de la mercancia o servicio prestado
   * Tipo:          ComplexType
   * Tamaño:
   * Descripcion:   Tipo complejo que agrupa las líneas del detalle.Es de carácter obligatorio cuando el comprobante incorpore al menos una línea de un producto o servicio.
   */
export class DetalleServicio {
  /**
   * Nombre:        Línea de detalle
   * Tipo:          ComplexType
   * Tamaño:
   * Descripcion:   Tipo complejo que representa cada línea del detalle de la mercancía o servicio prestado.
   */
  LineaDetalle: LineaDetalle[];


  constructor(detalleServicio) {
    if (detalleServicio === null) return;
    this.LineaDetalle = [];
    detalleServicio?.LineaDetalle?.forEach(lineaDetalle => {
      this.LineaDetalle.push(new LineaDetalle(lineaDetalle));
    });
  }
}

// Factura Electronica
//
// Copyright © 2020 Emilio Rojas
//
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

import { Exoneracion } from './Exoneracion'

/**
 * Nombre:
 * Tipo:          ComplexType
 * Tamaño:
 * Descripcion:   Tipo complejo con el detalle del impuesto.
 *                Este campo sea de condición obligatoria, cuando el producto/servicio este gravado con algún impuesto.
 *                Se pueden utilizar para una misma línea la cantidad de códigos de impuestos que se requieran para cada producto.
 */
export class Impuesto {
  /**
   * Nombre:        Código del impuesto
   * Tipo:          String
   * Tamaño:        2
   * Descripcion:   Es un campo fijo de dos posiciones.
   *                Ver nota 8,
   *                Al utilizar el código 07 se debe de utilizar para el cálculo del impuesto el campo denominado “base imponible “ y la tarifa.
   *                Al utilizar el código 08, se debe utilizar para el cálculo de factor del IVA por el subtotal.
   */
  Codigo: string;

  /**
   * Nombre:        Código  de  la  tarifa  del impuesto
   * Tipo:          String
   * Tamaño:        2
   * Descripcion:   Es un campo fijo de dos posiciones.
   *                Ver nota8.1
   *                Se convierte en obligatorio para los Códigos 01, 07.
   *                El código debe coincidir con la tarifa asociada al producto (Según catálogo Cabys), En los casos en los que la ley o el reglamento establece que el receptor puede acreditarse una tarifa inferior a la establecida en el Cabys, esto sin necesidad de contar con el documento de exoneración emitido por el sistema EXONET, el emisor deberá indicar dicha tarifa reducida y no la indicada en el Cabys
   */
  CodigoTarifa: string;

  /**
   * Nombre:        Tarifa del impuesto
   * Tipo:          Decimal
   * Tamaño:        4,2
   * Descripcion:   Este campo es de condición obligatoria, cuando el producto/servicio este gravado con algún impuesto.
   *                El porcentaje debe coincidir con la tarifa asociada al producto (Según catálogo Cabys), En los casos en los que la ley o el reglamento establece que el receptor puede acreditarse una tarifa inferior a la establecida en el Cabys, esto sin necesidad de contar con el documento de exoneración emitido por el sistema EXONET, el emisor deberá indicar dicha tarifa reducida y no la indicada en el Cabys
   *                Debe de expresarse en porcentaje.
   *                Ver nota 8.1
   */
  Tarifa: string;

  /**
   * Nombre:        Factor del impuesto
   * Tipo:          Decimal
   * Tamaño:        5,2
   * Descripcion:   Este campo es de condición obligatoria, cuando el producto/servicio posea un factor para su cálculo.
   *                Cuando en el código de impuesto se defina IVA Bienes Usados se deberá utilizar este campo con el factor establecido por el Ministerio de Hacienda.
   */
  FactorIVA: string;

  /**
   * Nombre:        Monto del impuesto
   * Tipo:          Decimal
   * Tamaño:        18,5
   * Descripcion:   a. Este campo será de condición obligatoria, cuando el producto/servicio  este  gravado  con  algún  impuesto.
   *                   Se obtiene de la multiplicación del campo “subtotal” por “tarifa del impuesto”.
   *                b. En caso de utilizar el factor establecido parael régimen de bienes usados, este campo se obtiene de la multiplicación del factor menos 1 por el subtotal.
   *                c. En caso de utilizar el campo “Baseimponible”, este campo se obtiene de la multiplicación “Baseimponible” por la tarifa
   *                Es  un  número  decimal  compuesto  por  13  enteros  y  5 decimales.
   */
  Monto: string;

  /**
   * Nombre:        Monto de impuesto de exportación.
   * Tipo:          Decimal
   * Tamaño:        18,5
   * Descripcion:   Uso exclusivo para exportación
   */
  MontoExportacion: string;

  /**
   * Nombre:        Información de exoneración
   * Tipo:          ComplexType
   * Tamaño:
   * Descripcion:   Tipo complejo con detalles de la exoneración.
   *                Este campo será de condición obligatoria cuando la venta tenga alguna exoneración.
   */
  Exoneracion: Exoneracion;

  constructor(impuesto) {
    if (impuesto === null) return;
    this.Codigo = impuesto?.Codigo?.[0];
    this.CodigoTarifa = impuesto?.CodigoTarifa?.[0];
    this.Tarifa = impuesto?.Tarifa?.[0];
    this.FactorIVA = impuesto?.FactorIVA?.[0];
    this.Monto = impuesto?.Monto?.[0];
    this.MontoExportacion = impuesto?.MontoExportacion?.[0];
    this.Exoneracion = new Exoneracion(impuesto?.Exoneracion?.[0]);
  }
}

// Factura Electronica
//
// Copyright © 2020 Emilio Rojas
//
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

/**
 * Nombre:        Resumen de la Factura
 * Tipo:          ComplexType
 * Tamaño:
 * Descripcion:   Tipo complejo que representa el resumen de la factura.
 */
class ResumenFactura {
  /**
   * Nombre:        Total  servicios  gravados con IV
   * Tipo:          Decimal
   * Tamaño:        18,5
   * Descripcion:   Este campo será de condición obligatoria, cuando el servicio este gravado con IVA.
   *                Es un número decimal compuesto por 13 enteros y 5 decimales.
   *                En el caso que exista una exoneración Este campo se obtiene de la multiplicación (1-porcentaje de exoneración) por el monto de la venta.
   */
  TotalServGravados = 0;

  /**
   * Nombre:        Total servicios exentos de IVA
   * Tipo:          Decimal
   * Tamaño:        18,5
   * Descripcion:   Este campo será de condición obligatoria, cuando el servicio este exento de IVA.
   *                Es un número decimal compuesto por 13 enteros y 5 decimales.
   */
  TotalServExentos = 0;

  /**
   * Nombre:        Total servicios exonerados del IVA
   * Tipo:          Decimal
   * Tamaño:        18,5
   * Descripcion:   Este campo será de condición obligatoria, cuando el servicio esté gravado y se preste a un cliente que goce de exoneración, se debe de indicar el monto equivalente al porcentaje exonerado.
   *                Se obtiene de la multiplicación del porcentaje de la exoneración por el monto del servicio.
   *                Es un número decimal compuesto por 13 enteros y 5 decimales.
   */
  TotalServExonerado = 0;

  /**
   * Nombre:        Total servicios exonerados del IVA
   * Tipo:          Decimal
   * Tamaño:        18,5
   * Descripcion:   Este campo será de condición obligatoria, cuando el servicio esté gravado y se preste a un cliente que goce de exoneración, se debe de indicar el monto equivalente al porcentaje exonerado.
   *                Se obtiene de la multiplicación del porcentaje de la exoneración por el monto del servicio.
   *                Es un número decimal compuesto por 13 enteros y 5 decimales.
   */
  TotalServExonerado = 0;

  /**
   * Nombre:        Total mercancías gravadas con IVA
   * Tipo:          Decimal
   * Tamaño:        18,5
   * Descripcion:   Este campo será de condición obligatoria, cuando la mercancía este gravada con IVA.
   *                Es un número decimal compuesto por 13 enteros y 5 decimales.
   *                En el caso que exista una exoneración Este  campo  se obtiene de la multiplicación (1-porcentaje de exoneración) por el monto de la venta.
   */
  TotalMercanciasGravadas = 0;

  /**
   * Nombre:        Total mercancías gravadas con IVA
   * Tipo:          Decimal
   * Tamaño:        18,5
   * Descripcion:   Este campo será de condición obligatoria, cuando la mercancía esté exenta de IVA.
   *                Es un número decimal compuesto por 13 enteros y 5 decimales.
   */
  TotalMercanciasExentas = 0;

  /**
   * Nombre:        Total mercancías exoneradas del IVA
   * Tipo:          Decimal
   * Tamaño:        18,5
   * Descripcion:   Este campo será de condición obligatoria, cuando la mercancíao producto se venda a un cliente que goce de exoneración para la compra de la misma.
   *                Se obtiene de la multiplicación del porcentaje de la exoneración por el monto del producto.
   *                Es un número decimal compuesto por 13 enteros y 5 decimales.
   */
  TotalMercExonerada = 0;

  /**
   * Nombre:        Total gravado
   * Tipo:          Decimal
   * Tamaño:        18,5
   * Descripcion:   Se obtiene de la suma de los campos “total servicios gravados con IVA” mas “total de mercancías gravadas con IVA”.
   *                Es un número decimal compuesto por 13 enteros y 5 decimales.
   */
  TotalGravado = 0;

  /**
   * Nombre:        Total exento
   * Tipo:          Decimal
   * Tamaño:        18,5
   * Descripcion:   Se obtiene de la suma de los campos “total servicios exentos de IVA” mas “total de mercancías exentas de IVA”.
   *                Es un número decimal compuesto por 13 enteros y 5 decimales.
   */
  TotalExento = 0;

  /**
   * Nombre:        Total exonerado
   * Tipo:          Decimal
   * Tamaño:        18,5
   * Descripcion:   Se obtiene de la suma de los campos “total servicios exonerados de IVA” mas “total de mercancías exoneradas del IVA”.
   *                Es un número decimal compuesto por 13 enteros y 5 decimales.
   */
  TotalExonerado = 0;

  /**
   * Nombre:        Total venta
   * Tipo:          Decimal
   * Tamaño:        18,5
   * Descripcion:   Se obtiene de la sumatoria de los campos “total gravado”, “total exento” y “Total Exonerado”.
   *                Es un número decimal compuesto por 13 enteros y 5 decimales.
   */
  TotalVenta = 0;

  /**
   * Nombre:        Total descuentos
   * Tipo:          Decimal
   * Tamaño:        18,5
   * Descripcion:   Se obtiene de la suma de todos los campos de “monto de descuentos concedidos”.
   *                Es un número decimal compuesto por 13 enteros y 5 decimales.
   */
  TotalDescuentos = 0;

  /**
   * Nombre:        Total venta neta
   * Tipo:          Decimal
   * Tamaño:        18,5
   * Descripcion:   Se obtiene de la resta de los campos “total venta” menos “total descuento”.
   *                Es un número decimal compuesto por 13 enteros y 5 decimales.
   */
  TotalVentaNeta = 0;

  /**
   * Nombre:        Total de impuesto
   * Tipo:          Decimal
   * Tamaño:        18,5
   * Descripcion:   Este campo es de condición obligatoria, cuando existen producto/servicio gravados con algún impuesto en las líneas de detalle el mismo se obtiene de la suma de todos los campos denominados “Monto del impuesto” cuando no posea exoneración más todos los campos “Impuesto Neto” de las líneas que poseen exoneración
   *                Es un número decimal compuesto por 13 enteros y 5 decimales.
   */
  TotalImpuesto = 0;

  /**
   * Nombre:        IVA Devuelto
   * Tipo:          Decimal
   * Tamaño:        18,5
   * Descripcion:   Este campo será de condición obligatoria cuando se facturen servicios de salud y cuyo método de pago sea “Tarjeta”.
   *                Se obtiene de la sumatoria del Monto de los Impuestos pagado por los servicios de salud en tarjetas.
   *                Es un número decimal compuesto por 13 enteros y 5 decimales.
   */
  TotalIVADevuelto = 0;

  /**
   * Nombre:        Total Otros Cargos
   * Tipo:          Decimal
   * Tamaño:        18,5
   * Descripcion:   Este campo será de condición obligatoria, cuando se posean otros cargos.
   *                Se obtiene de la suma de todos los campos “Monto del cargo”.
   */
  TotalOtrosCargos = 0;

  /**
   * Nombre:        Total del comprobante
   * Tipo:          Decimal
   * Tamaño:        18,5
   * Descripcion:   Se obtiene de la suma de los campos “total venta neta”, “monto total del impuesto” y “total otros cargos” menos “total IVA devuelto”, en caso de contar con dichos campos.
   *                Es un número decimal compuesto por 13 enteros y 5 decimales.
   */
  TotalComprobante = 0;
}

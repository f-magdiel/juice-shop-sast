/*
 * Versión corregida de la ruta de demostración del laboratorio SAST (Parte D).
 */
import { type Request, type Response } from 'express'

// Corregido: ya no se ejecuta código; solo se interpreta el parámetro como JSON (datos)
export function evaluateExpression () {
  return (req: Request, res: Response) => {
    try {
      const result = JSON.parse(req.query.expression as string)
      res.json({ result })
    } catch {
      res.status(400).json({ error: 'Expresión inválida' })
    }
  }
}

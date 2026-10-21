/*
 * Archivo con vulnerabilidades INTENCIONALES para el laboratorio SAST (Parte D).
 */
import { type Request, type Response } from 'express'

// Vulnerable: ejecuta con eval() un parámetro controlado por el usuario (CWE-95)
export function evaluateExpression () {
  return (req: Request, res: Response) => {
    const result = eval(req.query.expression as string)
    res.json({ result })
  }
}

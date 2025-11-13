import * as React from "react"
import { cva } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const actionButtonVariants = cva("", {
  variants: {
    action: {
      default: "bg-primary text-primary-foreground hover:bg-primary/90",
      create: "bg-green-600 text-white hover:bg-green-700 dark:bg-green-600 dark:hover:bg-green-700",
      edit: "bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700",
      delete: "bg-red-600 text-white hover:bg-red-700 dark:bg-red-600 dark:hover:bg-red-700",
      save: "bg-emerald-600 text-white hover:bg-emerald-700 dark:bg-emerald-600 dark:hover:bg-emerald-700",
      cancel: "bg-gray-600 text-white hover:bg-gray-700 dark:bg-gray-600 dark:hover:bg-gray-700",
      approve: "bg-teal-600 text-white hover:bg-teal-700 dark:bg-teal-600 dark:hover:bg-teal-700",
      reject: "bg-orange-600 text-white hover:bg-orange-700 dark:bg-orange-600 dark:hover:bg-orange-700",
      download: "bg-indigo-600 text-white hover:bg-indigo-700 dark:bg-indigo-600 dark:hover:bg-indigo-700",
      upload: "bg-purple-600 text-white hover:bg-purple-700 dark:bg-purple-600 dark:hover:bg-purple-700",
    },
  },
  defaultVariants: {
    action: "default",
  },
})

/**
 * @typedef {Object} ActionButtonProps
 * @property {"create"|"edit"|"delete"|"save"|"cancel"|"approve"|"reject"|"download"|"upload"} [action] - Tipo de acción del botón
 * @property {string} [className] - Clases CSS adicionales
 * @property {React.ReactNode} [children] - Contenido del botón
 * @property {React.MouseEventHandler<HTMLButtonElement>} [onClick] - Evento al hacer clic
 */

/**
 * Botón con variantes de acción predefinidas.
 * 
 * @type {React.ForwardRefExoticComponent<ActionButtonProps & React.RefAttributes<HTMLButtonElement>>}
 * 
 * @example
 * <ActionButton action="create">Crear</ActionButton>
 */
const ActionButton = React.forwardRef(
  /**
   * @param {ActionButtonProps} props
   * @param {React.Ref<HTMLButtonElement>} ref
   */
  function ActionButton({ className, action = "create", children, ...props }, ref) {
    return (
      <Button
        ref={ref}
        className={cn(actionButtonVariants({ action }), className)}
        {...props}
      >
        {children}
      </Button>
    )
  }
)

ActionButton.displayName = "ActionButton"

export { ActionButton, actionButtonVariants }

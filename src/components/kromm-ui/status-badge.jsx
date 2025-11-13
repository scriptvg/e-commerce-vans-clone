import * as React from "react"
import { cva } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"

const statusBadgeVariants = cva(
  "",
  {
    variants: {
      status: {
        active: "border-transparent bg-green-500/10 text-green-700 dark:bg-green-500/20 dark:text-green-400 [a&]:hover:bg-green-500/20",
        inactive: "border-transparent bg-gray-500/10 text-gray-700 dark:bg-gray-500/20 dark:text-gray-400 [a&]:hover:bg-gray-500/20",
        pending: "border-transparent bg-yellow-500/10 text-yellow-700 dark:bg-yellow-500/20 dark:text-yellow-400 [a&]:hover:bg-yellow-500/20",
        error: "border-transparent bg-red-500/10 text-red-700 dark:bg-red-500/20 dark:text-red-400 [a&]:hover:bg-red-500/20",
        success: "border-transparent bg-emerald-500/10 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-400 [a&]:hover:bg-emerald-500/20",
        warning: "border-transparent bg-orange-500/10 text-orange-700 dark:bg-orange-500/20 dark:text-orange-400 [a&]:hover:bg-orange-500/20",
        info: "border-transparent bg-blue-500/10 text-blue-700 dark:bg-blue-500/20 dark:text-blue-400 [a&]:hover:bg-blue-500/20",
      },
    },
    defaultVariants: {
      status: "active",
    },
  }
)

const dotColorMap = {
  active: "bg-green-600 dark:bg-green-400",
  inactive: "bg-gray-600 dark:bg-gray-400",
  pending: "bg-yellow-600 dark:bg-yellow-400",
  error: "bg-red-600 dark:bg-red-400",
  success: "bg-emerald-600 dark:bg-emerald-400",
  warning: "bg-orange-600 dark:bg-orange-400",
  info: "bg-blue-600 dark:bg-blue-400",
}

/**
 * @typedef {Object} StatusBadgeProps
 * @property {"active" | "inactive" | "pending" | "error" | "success" | "warning" | "info"} [status] - El estado visual del badge
 * @property {boolean} [showDot] - Mostrar dot pulsante (por defecto: false)
 * @property {boolean} [pulse] - Animar el dot con pulso (por defecto: true cuando showDot es true)
 * @property {string} [className] - Clases CSS adicionales
 * @property {React.ReactNode} [children] - Contenido del badge
 */

/**
 * Badge con variantes de estado predefinidas para mostrar estados comunes en la aplicación.
 * 
 * @type {React.ForwardRefExoticComponent<StatusBadgeProps & React.RefAttributes<HTMLSpanElement>>}
 * 
 * @example
 * <StatusBadge status="active">Activo</StatusBadge>
 * 
 * @example
 * <StatusBadge status="active" showDot>En línea</StatusBadge>
 * 
 * @example
 * <StatusBadge status="error" showDot pulse={false}>Error</StatusBadge>
 */
const StatusBadge = React.forwardRef(
  /**
   * @param {StatusBadgeProps} props
   * @param {React.Ref<HTMLSpanElement>} ref
   */
  ({ className, status = "active", showDot = false, pulse = true, children, ...props }, ref) => {
    return (
      <Badge
        ref={ref}
        className={cn(statusBadgeVariants({ status }), "inline-flex items-center gap-1.5", className)}
        {...props}
      >
        {showDot && (
          <span className="relative flex h-2 w-2">
            {pulse && (
              <span className={cn(
                "absolute inline-flex h-full w-full rounded-full opacity-75 animate-ping",
                dotColorMap[status]
              )} />
            )}
            <span className={cn(
              "relative inline-flex h-2 w-2 rounded-full",
              dotColorMap[status]
            )} />
          </span>
        )}
        {children}
      </Badge>
    )
  }
)

StatusBadge.displayName = "StatusBadge"

export { StatusBadge, statusBadgeVariants }

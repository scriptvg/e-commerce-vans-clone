import * as React from "react"
import { cva } from "class-variance-authority"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"

const badgeSelectVariants = cva(
  "cursor-pointer transition-colors",
  {
    variants: {
      variant: {
        default: "",
        outline: "",
        secondary: "",
      },
      selected: {
        true: "ring-1 ring-primary",
        false: "opacity-60 hover:opacity-100",
      },
    },
    defaultVariants: {
      variant: "default",
      selected: false,
    },
  }
)

/**
 * @typedef {Object} BadgeOption
 * @property {string} value - Valor único de la opción
 * @property {string} label - Texto a mostrar
 * @property {string} [icon] - Icono opcional
 * @property {boolean} [disabled] - Si está deshabilitada
 */

/**
 * @typedef {Object} BadgeSelectProps
 * @property {BadgeOption[]} options - Array de opciones disponibles
 * @property {string | string[]} [value] - Valor(es) seleccionado(s)
 * @property {(value: string | string[]) => void} [onValueChange] - Callback cuando cambia el valor
 * @property {boolean} [multiple] - Permitir selección múltiple
 * @property {"default" | "outline" | "secondary"} [variant] - Variante visual
 * @property {"sm" | "default" | "lg"} [size] - Tamaño de los badges
 * @property {boolean} [showCheck] - Mostrar icono de check en seleccionados
 * @property {string} [className] - Clases CSS adicionales
 * @property {string} [label] - Label del grupo
 */

/**
 * Selector de opciones usando badges interactivos.
 * 
 * @type {React.ForwardRefExoticComponent<BadgeSelectProps & React.RefAttributes<HTMLDivElement>>}
 * 
 * @example
 * // Selección simple
 * <BadgeSelect 
 *   options={[
 *     { value: "xs", label: "XS" },
 *     { value: "s", label: "S" },
 *     { value: "m", label: "M" }
 *   ]}
 *   value={size}
 *   onValueChange={setSize}
 * />
 * 
 * @example
 * // Selección múltiple
 * <BadgeSelect 
 *   options={categories}
 *   value={selectedCategories}
 *   onValueChange={setSelectedCategories}
 *   multiple
 *   showCheck
 * />
 */
const BadgeSelect = React.forwardRef(
  /**
   * @param {BadgeSelectProps} props
   * @param {React.Ref<HTMLDivElement>} ref
   */
  (
    {
      options = [],
      value,
      onValueChange,
      multiple = false,
      variant = "default",
      size = "default",
      showCheck = true,
      className,
      label,
      ...props
    },
    ref
  ) => {
    const isSelected = React.useCallback(
      (optionValue) => {
        if (multiple) {
          return Array.isArray(value) && value.includes(optionValue)
        }
        return value === optionValue
      },
      [value, multiple]
    )

    const handleSelect = React.useCallback(
      (optionValue) => {
        if (multiple) {
          const currentValues = Array.isArray(value) ? value : []
          const newValues = currentValues.includes(optionValue)
            ? currentValues.filter((v) => v !== optionValue)
            : [...currentValues, optionValue]
          onValueChange?.(newValues)
        } else {
          onValueChange?.(optionValue === value ? "" : optionValue)
        }
      },
      [value, multiple, onValueChange]
    )

    const sizeClasses = {
      sm: "text-xs h-5",
      default: "text-sm h-6",
      lg: "text-base h-7",
    }

    return (
      <div ref={ref} className={cn("space-y-2", className)} {...props}>
        {label && (
          <label className="text-sm font-medium leading-none">
            {label}
          </label>
        )}
        <div className="flex flex-wrap gap-2">
          {options.map((option) => {
            const selected = isSelected(option.value)
            const disabled = option.disabled

            return (
              <Badge
                key={option.value}
                variant={variant}
                className={cn(
                  badgeSelectVariants({ variant, selected }),
                  sizeClasses[size],
                  disabled && "opacity-50 cursor-not-allowed",
                  "select-none inline-flex items-center gap-1"
                )}
                onClick={() => !disabled && handleSelect(option.value)}
              >
                {showCheck && selected && (
                  <Check className="h-3 w-3" />
                )}
                {option.label}
              </Badge>
            )
          })}
        </div>
      </div>
    )
  }
)

BadgeSelect.displayName = "BadgeSelect"

/**
 * @typedef {Object} StatusBadgeSelectProps
 * @property {BadgeOption[]} options - Array de opciones disponibles
 * @property {string | string[]} [value] - Valor(es) seleccionado(s)
 * @property {(value: string | string[]) => void} [onValueChange] - Callback cuando cambia el valor
 * @property {boolean} [multiple] - Permitir selección múltiple
 * @property {boolean} [showCheck] - Mostrar icono de check en seleccionados
 * @property {string} [className] - Clases CSS adicionales
 * @property {string} [label] - Label del grupo
 */

/**
 * Selector de estados usando StatusBadge.
 * 
 * @type {React.ForwardRefExoticComponent<StatusBadgeSelectProps & React.RefAttributes<HTMLDivElement>>}
 * 
 * @example
 * <StatusBadgeSelect 
 *   options={[
 *     { value: "active", label: "Activo", status: "active" },
 *     { value: "pending", label: "Pendiente", status: "pending" }
 *   ]}
 *   value={status}
 *   onValueChange={setStatus}
 * />
 */
const StatusBadgeSelect = React.forwardRef(
  /**
   * @param {StatusBadgeSelectProps} props
   * @param {React.Ref<HTMLDivElement>} ref
   */
  (
    {
      options = [],
      value,
      onValueChange,
      multiple = false,
      showCheck = true,
      className,
      label,
      ...props
    },
    ref
  ) => {
    const isSelected = React.useCallback(
      (optionValue) => {
        if (multiple) {
          return Array.isArray(value) && value.includes(optionValue)
        }
        return value === optionValue
      },
      [value, multiple]
    )

    const handleSelect = React.useCallback(
      (optionValue) => {
        if (multiple) {
          const currentValues = Array.isArray(value) ? value : []
          const newValues = currentValues.includes(optionValue)
            ? currentValues.filter((v) => v !== optionValue)
            : [...currentValues, optionValue]
          onValueChange?.(newValues)
        } else {
          onValueChange?.(optionValue === value ? "" : optionValue)
        }
      },
      [value, multiple, onValueChange]
    )

    // Importar StatusBadge dinámicamente para evitar dependencia circular
    const StatusBadge = React.useMemo(() => {
      try {
        return require("./status-badge").StatusBadge
      } catch {
        return Badge
      }
    }, [])

    return (
      <div ref={ref} className={cn("space-y-2", className)} {...props}>
        {label && (
          <label className="text-sm font-medium leading-none">
            {label}
          </label>
        )}
        <div className="flex flex-wrap gap-2">
          {options.map((option) => {
            const selected = isSelected(option.value)
            const disabled = option.disabled

            return (
              <StatusBadge
                key={option.value}
                status={option.status || "active"}
                className={cn(
                  "cursor-pointer transition-colors select-none inline-flex items-center gap-1",
                  selected && "ring-1 ring-primary",
                  !selected && "opacity-60 hover:opacity-100",
                  disabled && "opacity-50 cursor-not-allowed"
                )}
                onClick={() => !disabled && handleSelect(option.value)}
              >
                {showCheck && selected && (
                  <Check className="h-3 w-3" />
                )}
                {option.label}
              </StatusBadge>
            )
          })}
        </div>
      </div>
    )
  }
)

StatusBadgeSelect.displayName = "StatusBadgeSelect"

export { BadgeSelect, StatusBadgeSelect }


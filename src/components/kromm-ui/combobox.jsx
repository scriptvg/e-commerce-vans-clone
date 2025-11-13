import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

/**
 * @typedef {Object} ComboboxOption
 * @property {string} value - Valor único de la opción
 * @property {string} label - Texto a mostrar
 * @property {boolean} [disabled] - Si la opción está deshabilitada
 */

/**
 * @typedef {Object} ComboboxProps
 * @property {ComboboxOption[]} options - Array de opciones disponibles
 * @property {string} [value] - Valor seleccionado actual
 * @property {(value: string) => void} [onValueChange] - Callback cuando cambia el valor
 * @property {string} [placeholder] - Texto cuando no hay selección
 * @property {string} [searchPlaceholder] - Texto del input de búsqueda
 * @property {string} [emptyText] - Texto cuando no hay resultados
 * @property {string} [className] - Clases CSS adicionales
 * @property {boolean} [disabled] - Si el combobox está deshabilitado
 * @property {"sm" | "default" | "lg"} [size] - Tamaño del combobox
 */

/**
 * Combobox (Select con búsqueda) personalizado para kromm-ui.
 * Permite seleccionar una opción de una lista con capacidad de búsqueda.
 * 
 * @type {React.FC<ComboboxProps>}
 * 
 * @example
 * const options = [
 *   { value: "react", label: "React" },
 *   { value: "vue", label: "Vue" },
 *   { value: "angular", label: "Angular" }
 * ]
 * 
 * <Combobox 
 *   options={options}
 *   value={selectedValue}
 *   onValueChange={setSelectedValue}
 *   placeholder="Selecciona un framework..."
 * />
 */
const Combobox = React.forwardRef(
  /**
   * @param {ComboboxProps} props
   * @param {React.Ref<HTMLButtonElement>} ref
   */
  (
    {
      options = [],
      value,
      onValueChange,
      placeholder = "Seleccionar...",
      searchPlaceholder = "Buscar...",
      emptyText = "No se encontraron resultados.",
      className,
      disabled = false,
      size = "default",
      ...props
    },
    ref
  ) => {
    const [open, setOpen] = React.useState(false)

    const selectedOption = React.useMemo(
      () => options.find((option) => option.value === value),
      [options, value]
    )

    const handleSelect = React.useCallback(
      (currentValue) => {
        const newValue = currentValue === value ? "" : currentValue
        onValueChange?.(newValue)
        setOpen(false)
      },
      [value, onValueChange]
    )

    const sizeClasses = {
      sm: "h-8 text-xs",
      default: "h-9 text-sm",
      lg: "h-10 text-base",
    }

    const widthClasses = {
      sm: "w-[180px]",
      default: "w-[200px]",
      lg: "w-[240px]",
    }

    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            ref={ref}
            variant="outline"
            role="combobox"
            aria-expanded={open}
            disabled={disabled}
            className={cn(
              widthClasses[size],
              sizeClasses[size],
              "justify-between",
              !selectedOption && "text-muted-foreground",
              className
            )}
            {...props}
          >
            <span className="truncate">
              {selectedOption ? selectedOption.label : placeholder}
            </span>
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className={cn(widthClasses[size], "p-0")} align="start">
          <Command>
            <CommandInput 
              placeholder={searchPlaceholder} 
              className={sizeClasses[size]}
            />
            <CommandList>
              <CommandEmpty>{emptyText}</CommandEmpty>
              <CommandGroup>
                {options.map((option) => (
                  <CommandItem
                    key={option.value}
                    value={option.value}
                    disabled={option.disabled}
                    onSelect={handleSelect}
                    className={cn(
                      sizeClasses[size],
                      option.disabled && "opacity-50 cursor-not-allowed"
                    )}
                  >
                    {option.label}
                    <Check
                      className={cn(
                        "ml-auto h-4 w-4",
                        value === option.value ? "opacity-100" : "opacity-0"
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    )
  }
)

Combobox.displayName = "Combobox"

export { Combobox }

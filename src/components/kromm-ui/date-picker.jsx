import * as React from "react"
import { format } from "date-fns"
import { es } from "date-fns/locale"
import { Calendar as CalendarIcon, X } from "lucide-react"
import { cva } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const datePickerVariants = cva(
  "justify-start text-left font-normal",
  {
    variants: {
      size: {
        sm: "h-8 text-xs",
        default: "h-9 text-sm",
        lg: "h-10 text-base",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
)

/**
 * @typedef {Object} DatePickerProps
 * @property {Date} [date] - Fecha seleccionada
 * @property {(date: Date | undefined) => void} [onDateChange] - Callback cuando cambia la fecha
 * @property {string} [placeholder] - Texto cuando no hay fecha seleccionada
 * @property {string} [format] - Formato de fecha (por defecto: "PPP")
 * @property {Date} [minDate] - Fecha mínima seleccionable
 * @property {Date} [maxDate] - Fecha máxima seleccionable
 * @property {Date[]} [disabledDates] - Fechas específicas deshabilitadas
 * @property {(date: Date) => boolean} [disabledDays] - Función para deshabilitar días
 * @property {boolean} [disabled] - Si está deshabilitado
 * @property {boolean} [clearable] - Mostrar botón para limpiar
 * @property {"sm" | "default" | "lg"} [size] - Tamaño del picker
 * @property {string} [className] - Clases CSS adicionales
 * @property {object} [locale] - Locale de date-fns (por defecto: es)
 */

/**
 * DatePicker avanzado con múltiples opciones de configuración.
 * 
 * @type {React.ForwardRefExoticComponent<DatePickerProps & React.RefAttributes<HTMLButtonElement>>}
 * 
 * @example
 * // Básico
 * <DatePicker 
 *   date={date}
 *   onDateChange={setDate}
 * />
 * 
 * @example
 * // Con rango de fechas
 * <DatePicker 
 *   date={date}
 *   onDateChange={setDate}
 *   minDate={new Date()}
 *   maxDate={addDays(new Date(), 30)}
 *   clearable
 * />
 * 
 * @example
 * // Con días deshabilitados
 * <DatePicker 
 *   date={date}
 *   onDateChange={setDate}
 *   disabledDays={(date) => date.getDay() === 0 || date.getDay() === 6}
 * />
 */
const DatePicker = React.forwardRef(
  /**
   * @param {DatePickerProps} props
   * @param {React.Ref<HTMLButtonElement>} ref
   */
  (
    {
      date,
      onDateChange,
      placeholder = "Seleccionar fecha",
      format: dateFormat = "PPP",
      minDate,
      maxDate,
      disabledDates = [],
      disabledDays,
      disabled = false,
      clearable = false,
      size = "default",
      className,
      locale = es,
      ...props
    },
    ref
  ) => {
    const [open, setOpen] = React.useState(false)

    const handleSelect = (selectedDate) => {
      onDateChange?.(selectedDate)
      setOpen(false)
    }

    const handleClear = (e) => {
      e.stopPropagation()
      onDateChange?.(undefined)
    }

    const isDateDisabled = React.useCallback(
      (date) => {
        // Verificar fecha mínima
        if (minDate && date < minDate) return true
        
        // Verificar fecha máxima
        if (maxDate && date > maxDate) return true
        
        // Verificar fechas específicas deshabilitadas
        if (disabledDates.some(d => d.toDateString() === date.toDateString())) {
          return true
        }
        
        // Verificar función personalizada
        if (disabledDays && disabledDays(date)) return true
        
        return false
      },
      [minDate, maxDate, disabledDates, disabledDays]
    )

    const widthClasses = {
      sm: "w-[200px]",
      default: "w-[240px]",
      lg: "w-[280px]",
    }

    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            ref={ref}
            variant="outline"
            disabled={disabled}
            className={cn(
              datePickerVariants({ size }),
              widthClasses[size],
              !date && "text-muted-foreground",
              "group",
              className
            )}
            {...props}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            <span className="flex-1 truncate">
              {date ? format(date, dateFormat, { locale }) : placeholder}
            </span>
            {clearable && date && (
              <X
                className="ml-2 h-4 w-4 z-10 opacity-50 hover:opacity-100 transition-opacity"
                onClick={handleClear}
              />
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="single"
            selected={date}
            onSelect={handleSelect}
            disabled={isDateDisabled}
            initialFocus
            locale={locale}
          />
        </PopoverContent>
      </Popover>
    )
  }
)

DatePicker.displayName = "DatePicker"

/**
 * @typedef {Object} DateRangePickerProps
 * @property {{from: Date, to: Date}} [dateRange] - Rango de fechas seleccionado
 * @property {(range: {from: Date, to: Date} | undefined) => void} [onDateRangeChange] - Callback cuando cambia el rango
 * @property {string} [placeholder] - Texto cuando no hay rango seleccionado
 * @property {string} [format] - Formato de fecha (por defecto: "PPP")
 * @property {Date} [minDate] - Fecha mínima seleccionable
 * @property {Date} [maxDate] - Fecha máxima seleccionable
 * @property {boolean} [disabled] - Si está deshabilitado
 * @property {boolean} [clearable] - Mostrar botón para limpiar
 * @property {"sm" | "default" | "lg"} [size] - Tamaño del picker
 * @property {string} [className] - Clases CSS adicionales
 * @property {object} [locale] - Locale de date-fns (por defecto: es)
 */

/**
 * DateRangePicker para seleccionar un rango de fechas.
 * 
 * @type {React.ForwardRefExoticComponent<DateRangePickerProps & React.RefAttributes<HTMLButtonElement>>}
 * 
 * @example
 * <DateRangePicker 
 *   dateRange={dateRange}
 *   onDateRangeChange={setDateRange}
 *   clearable
 * />
 */
const DateRangePicker = React.forwardRef(
  /**
   * @param {DateRangePickerProps} props
   * @param {React.Ref<HTMLButtonElement>} ref
   */
  (
    {
      dateRange,
      onDateRangeChange,
      placeholder = "Seleccionar rango",
      format: dateFormat = "PPP",
      minDate,
      maxDate,
      disabled = false,
      clearable = false,
      size = "default",
      className,
      locale = es,
      ...props
    },
    ref
  ) => {
    const [open, setOpen] = React.useState(false)

    const handleSelect = (range) => {
      onDateRangeChange?.(range)
      if (range?.from && range?.to) {
        setOpen(false)
      }
    }

    const handleClear = (e) => {
      e.stopPropagation()
      onDateRangeChange?.(undefined)
    }

    const isDateDisabled = React.useCallback(
      (date) => {
        if (minDate && date < minDate) return true
        if (maxDate && date > maxDate) return true
        return false
      },
      [minDate, maxDate]
    )

    const widthClasses = {
      sm: "w-[260px]",
      default: "w-[300px]",
      lg: "w-[340px]",
    }

    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            ref={ref}
            variant="outline"
            disabled={disabled}
            className={cn(
              datePickerVariants({ size }),
              widthClasses[size],
              !dateRange && "text-muted-foreground",
              className
            )}
            {...props}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            <span className="flex-1 truncate">
              {dateRange?.from ? (
                dateRange.to ? (
                  <>
                    {format(dateRange.from, dateFormat, { locale })} -{" "}
                    {format(dateRange.to, dateFormat, { locale })}
                  </>
                ) : (
                  format(dateRange.from, dateFormat, { locale })
                )
              ) : (
                placeholder
              )}
            </span>
            {clearable && dateRange && (
              <X
                className="ml-2 h-4 w-4 opacity-50 hover:opacity-100 transition-opacity"
                onClick={handleClear}
              />
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="range"
            selected={dateRange}
            onSelect={handleSelect}
            disabled={isDateDisabled}
            numberOfMonths={2}
            initialFocus
            locale={locale}
          />
        </PopoverContent>
      </Popover>
    )
  }
)

DateRangePicker.displayName = "DateRangePicker"

export { DatePicker, DateRangePicker, datePickerVariants }

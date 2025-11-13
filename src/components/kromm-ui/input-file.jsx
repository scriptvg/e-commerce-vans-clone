import * as React from "react"
import { cva } from "class-variance-authority"
import { Upload, X, File, Image as ImageIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const inputFileVariants = cva(
  "relative flex items-center justify-center rounded-lg border-2 border-dashed transition-colors cursor-pointer",
  {
    variants: {
      variant: {
        default: "border-input hover:border-primary/50 hover:bg-accent/50",
        dropzone: "min-h-[200px] flex-col gap-2 border-input hover:border-primary hover:bg-accent/50",
        compact: "border-input hover:border-primary/50",
      },
      state: {
        default: "",
        dragover: "border-primary bg-accent",
        error: "border-destructive bg-destructive/10",
        disabled: "opacity-50 cursor-not-allowed",
      },
    },
    defaultVariants: {
      variant: "default",
      state: "default",
    },
  }
)

// Context para compartir estado entre componentes
const InputFileContext = React.createContext(null)

const useInputFileContext = () => {
  const context = React.useContext(InputFileContext)
  if (!context) {
    throw new Error("InputFile components must be used within InputFile.Root")
  }
  return context
}

/**
 * Root component - Maneja el estado y la lógica del input file
 */
const InputFileRoot = React.forwardRef(
  (
    {
      onFilesChange,
      accept,
      multiple = false,
      maxSize,
      maxFiles,
      disabled = false,
      value,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const [files, setFiles] = React.useState(value || [])
    const [isDragOver, setIsDragOver] = React.useState(false)
    const [error, setError] = React.useState("")
    const inputRef = React.useRef(null)

    // Sincronizar con value externo
    React.useEffect(() => {
      if (value !== undefined) {
        setFiles(value)
      }
    }, [value])

    const formatFileSize = React.useCallback((bytes) => {
      if (bytes === 0) return "0 Bytes"
      const k = 1024
      const sizes = ["Bytes", "KB", "MB", "GB"]
      const i = Math.floor(Math.log(bytes) / Math.log(k))
      return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + " " + sizes[i]
    }, [])

    const validateFiles = React.useCallback(
      (fileList) => {
        const filesArray = Array.from(fileList)

        if (maxFiles && files.length + filesArray.length > maxFiles) {
          setError(`Máximo ${maxFiles} archivo(s) permitido(s)`)
          return null
        }

        if (maxSize) {
          const oversizedFile = filesArray.find((file) => file.size > maxSize)
          if (oversizedFile) {
            const maxSizeMB = (maxSize / (1024 * 1024)).toFixed(2)
            setError(`El archivo debe ser menor a ${maxSizeMB}MB`)
            return null
          }
        }

        setError("")
        return filesArray
      },
      [maxSize, maxFiles, files.length]
    )

    const handleFiles = React.useCallback(
      (fileList) => {
        const validFiles = validateFiles(fileList)
        if (!validFiles) return

        const newFiles = multiple ? [...files, ...validFiles] : validFiles

        setFiles(newFiles)
        onFilesChange?.(newFiles)
      },
      [files, multiple, onFilesChange, validateFiles]
    )

    const removeFile = React.useCallback(
      (index) => {
        const newFiles = files.filter((_, i) => i !== index)
        setFiles(newFiles)
        onFilesChange?.(newFiles)
        setError("")
      },
      [files, onFilesChange]
    )

    const openFileDialog = React.useCallback(() => {
      if (!disabled) {
        inputRef.current?.click()
      }
    }, [disabled])

    const contextValue = {
      files,
      error,
      isDragOver,
      setIsDragOver,
      disabled,
      accept,
      multiple,
      maxSize,
      inputRef,
      handleFiles,
      removeFile,
      openFileDialog,
      formatFileSize,
    }

    return (
      <InputFileContext.Provider value={contextValue}>
        <div ref={ref} className={cn("space-y-2", className)} {...props}>
          {children}
        </div>
      </InputFileContext.Provider>
    )
  }
)

InputFileRoot.displayName = "InputFile.Root"

/**
 * Label component
 */
const InputFileLabel = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <label
      ref={ref}
      className={cn(
        "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
        className
      )}
      {...props}
    >
      {children}
    </label>
  )
})

InputFileLabel.displayName = "InputFile.Label"

/**
 * Trigger component - Área de drop y click
 */
const InputFileTrigger = React.forwardRef(
  ({ variant = "default", className, children, ...props }, ref) => {
    const { isDragOver, disabled, error, handleFiles, openFileDialog, setIsDragOver, inputRef, accept, multiple } =
      useInputFileContext()

    const handleChange = (e) => {
      if (e.target.files?.length) {
        handleFiles(e.target.files)
      }
    }

    const handleDragOver = (e) => {
      e.preventDefault()
      if (!disabled) setIsDragOver(true)
    }

    const handleDragLeave = (e) => {
      e.preventDefault()
      setIsDragOver(false)
    }

    const handleDrop = (e) => {
      e.preventDefault()
      setIsDragOver(false)

      if (disabled) return

      if (e.dataTransfer.files?.length) {
        handleFiles(e.dataTransfer.files)
      }
    }

    const state = disabled ? "disabled" : error ? "error" : isDragOver ? "dragover" : "default"

    return (
      <>
        <input
          ref={inputRef}
          type="file"
          accept={accept}
          multiple={multiple}
          disabled={disabled}
          onChange={handleChange}
          className="hidden"
        />
        <div
          ref={ref}
          className={cn(inputFileVariants({ variant, state }), className)}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={openFileDialog}
          {...props}
        >
          {children}
        </div>
      </>
    )
  }
)

InputFileTrigger.displayName = "InputFile.Trigger"

/**
 * Content component - Contenido del trigger
 */
const InputFileContent = React.forwardRef(
  ({ description, showMaxSize = false, className, children, ...props }, ref) => {
    const { files, maxSize, formatFileSize } = useInputFileContext()

    if (children) {
      return (
        <div ref={ref} className={className} {...props}>
          {children}
        </div>
      )
    }

    return (
      <div ref={ref} className={cn("flex flex-col items-center justify-center gap-2 p-6 text-center", className)} {...props}>
        <Upload className="h-10 w-10 text-muted-foreground" />
        <div className="space-y-1">
          <p className="text-sm font-medium">Arrastra archivos aquí o haz clic para seleccionar</p>
          {description && <p className="text-xs text-muted-foreground">{description}</p>}
          {showMaxSize && maxSize && (
            <p className="text-xs text-muted-foreground">Tamaño máximo: {formatFileSize(maxSize)}</p>
          )}
        </div>
      </div>
    )
  }
)

InputFileContent.displayName = "InputFile.Content"

/**
 * Error component
 */
const InputFileError = React.forwardRef(({ className, ...props }, ref) => {
  const { error } = useInputFileContext()

  if (!error) return null

  return (
    <p ref={ref} className={cn("text-sm text-destructive", className)} {...props}>
      {error}
    </p>
  )
})

InputFileError.displayName = "InputFile.Error"

/**
 * List component - Lista de archivos
 */
const InputFileList = React.forwardRef(({ showPreview = false, className, children, ...props }, ref) => {
  const { files } = useInputFileContext()

  if (files.length === 0) return null

  return (
    <div ref={ref} className={cn("space-y-2", className)} {...props}>
      {files.map((file, index) => (
        <InputFileItem key={index} file={file} index={index} showPreview={showPreview}>
          {children}
        </InputFileItem>
      ))}
    </div>
  )
})

InputFileList.displayName = "InputFile.List"

/**
 * Item component - Item individual de archivo
 */
const InputFileItem = React.forwardRef(({ file, index, showPreview, className, children, ...props }, ref) => {
  const { removeFile, disabled, formatFileSize } = useInputFileContext()

  if (children) {
    return (
      <div ref={ref} className={className} {...props}>
        {typeof children === "function" ? children({ file, index, removeFile }) : children}
      </div>
    )
  }

  return (
    <div ref={ref} className={cn("flex items-center gap-3 rounded-lg border p-3", className)} {...props}>
      {showPreview && file.type.startsWith("image/") ? (
        <img src={URL.createObjectURL(file)} alt={file.name} className="h-12 w-12 rounded object-cover" />
      ) : file.type.startsWith("image/") ? (
        <ImageIcon className="h-8 w-8 text-muted-foreground" />
      ) : (
        <File className="h-8 w-8 text-muted-foreground" />
      )}

      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium truncate">{file.name}</p>
        <p className="text-xs text-muted-foreground">{formatFileSize(file.size)}</p>
      </div>

      <Button
        type="button"
        variant="ghost"
        size="icon"
        onClick={(e) => {
          e.stopPropagation()
          removeFile(index)
        }}
        disabled={disabled}
      >
        <X className="h-4 w-4" />
      </Button>
    </div>
  )
})

InputFileItem.displayName = "InputFile.Item"

/**
 * Componente legacy - Mantiene la API original
 */
const InputFile = React.forwardRef((props, ref) => {
  const {
    onFilesChange,
    accept,
    multiple = false,
    maxSize,
    maxFiles,
    variant = "default",
    disabled = false,
    showPreview = false,
    className,
    label,
    description,
    ...restProps
  } = props

  return (
    <InputFileRoot
      ref={ref}
      onFilesChange={onFilesChange}
      accept={accept}
      multiple={multiple}
      maxSize={maxSize}
      maxFiles={maxFiles}
      disabled={disabled}
      className={className}
      {...restProps}
    >
      {label && <InputFileLabel>{label}</InputFileLabel>}
      <InputFileTrigger variant={variant}>
        {variant === "dropzone" ? (
          <InputFileContent description={description} showMaxSize />
        ) : (
          <div className="flex items-center gap-2 p-3">
            <Upload className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Seleccionar archivo</span>
          </div>
        )}
      </InputFileTrigger>
      <InputFileError />
      <InputFileList showPreview={showPreview} />
    </InputFileRoot>
  )
})

InputFile.displayName = "InputFile"

// Exportar componentes composables
InputFile.Root = InputFileRoot
InputFile.Label = InputFileLabel
InputFile.Trigger = InputFileTrigger
InputFile.Content = InputFileContent
InputFile.Error = InputFileError
InputFile.List = InputFileList
InputFile.Item = InputFileItem

export { InputFile, inputFileVariants }

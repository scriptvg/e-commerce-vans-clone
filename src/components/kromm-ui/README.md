# Kromm UI Components

Librería de componentes reutilizables personalizados construidos sobre shadcn/ui.

## Componentes disponibles

### 1. StatusBadge
Badge con variantes de estado predefinidas.

```jsx
import { StatusBadge } from "@/components/kromm-ui"

<StatusBadge status="active">Activo</StatusBadge>
<StatusBadge status="error">Error</StatusBadge>
<StatusBadge status="success">Éxito</StatusBadge>
```

**Variantes:** `active`, `inactive`, `pending`, `error`, `success`, `warning`, `info`

---

### 2. ActionButton
Botón con variantes de acción predefinidas.

```jsx
import { ActionButton } from "@/components/kromm-ui"

<ActionButton action="create">Crear</ActionButton>
<ActionButton action="save">Guardar</ActionButton>
<ActionButton action="delete">Eliminar</ActionButton>
```

**Variantes:** `create`, `edit`, `delete`, `save`, `cancel`, `approve`, `reject`, `download`, `upload`

---

### 3. Combobox
Select con búsqueda integrada.

```jsx
import { Combobox } from "@/components/kromm-ui"

const options = [
  { value: "react", label: "React" },
  { value: "vue", label: "Vue" }
]

<Combobox
  options={options}
  value={value}
  onValueChange={setValue}
  placeholder="Seleccionar..."
/>
```

---

### 4. InputFile
Input de archivos con drag & drop, preview y validaciones.

```jsx
import { InputFile } from "@/components/kromm-ui"

<InputFile
  variant="dropzone"
  accept="image/*"
  multiple
  showPreview
  maxSize={5 * 1024 * 1024}
  maxFiles={3}
  onFilesChange={setFiles}
/>
```

**Variantes:** `default`, `dropzone`, `compact`

---

### 5. DatePicker
Selector de fechas con múltiples opciones.

```jsx
import { DatePicker, DateRangePicker } from "@/components/kromm-ui"

// Fecha simple
<DatePicker
  date={date}
  onDateChange={setDate}
  clearable
/>

// Rango de fechas
<DateRangePicker
  dateRange={dateRange}
  onDateRangeChange={setDateRange}
  clearable
/>
```

---

### 6. BadgeSelect
Selector de opciones usando badges interactivos.

```jsx
import { BadgeSelect, StatusBadgeSelect } from "@/components/kromm-ui"

// Selección simple
<BadgeSelect
  options={[
    { value: "xs", label: "XS" },
    { value: "s", label: "S" }
  ]}
  value={size}
  onValueChange={setSize}
/>

// Selección múltiple
<BadgeSelect
  options={options}
  value={selectedValues}
  onValueChange={setSelectedValues}
  multiple
/>

// Con estados
<StatusBadgeSelect
  options={[
    { value: "active", label: "Activo", status: "active" }
  ]}
  value={status}
  onValueChange={setStatus}
/>
```

---


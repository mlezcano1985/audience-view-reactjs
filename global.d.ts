import { Attributes, DOMAttributes } from 'react'

type Nullable<T> = T | null

type ComponentProps<T = {}> = DOMAttributes<T> & Attributes

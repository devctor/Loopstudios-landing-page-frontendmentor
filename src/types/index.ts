interface Images {
  desktop: string
  mobile: string
}
export interface Posts {
  id: number
  images: Images
  title: string
  content?: string
}

export type BlockType = "header" | "hero" | "footer"
export interface Block {
  id?: number
  type: BlockType
  position: number
  configData: any
}

export function isBlockType(value: string): value is BlockType {
  return ["header", "hero", "footer"].includes(value)
}

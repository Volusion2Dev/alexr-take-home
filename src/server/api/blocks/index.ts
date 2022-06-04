import { ApiResponse } from "../../apiResponse"
import * as db from "../../datastore"
import { Block, BlockType } from "../../../types"

export async function getBlocks(): Promise<ApiResponse> {
  try {
    const blocks: Block[] = await db.getBlocks()
    return { statusCode: 200, data: blocks }
  } catch (err) {
    return { statusCode: 500, data: { message: err.message } }
  }
}

export async function addBlock(block: Block): Promise<ApiResponse> {
  try {
    if (!isBlockType(block.type)) {
      return { statusCode: 400, data: { message: "invalid block type!" } }
    }

    return {
      statusCode: 201,
      data: { message: `successfully added ${block.type} block!` },
    }
  } catch (err) {
    return { statusCode: 500, data: { message: err.message } }
  }
}

function isBlockType(value: string): value is BlockType {
  return ["header", "hero", "footer"].includes(value)
}

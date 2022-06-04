import pgPromise from "pg-promise"

import { Block } from "../types"

const connOptions = {
  host: "localhost",
  port: 5432,
  database: "postgres",
  user: "postgres",
  password: "postgres",
}
const pgp = pgPromise()
const db = pgp(connOptions)

export async function getBlocks(): Promise<Block[]> {
  const result = await db.many(
    `SELECT
      id, block_type, position, JSONB_PRETTY(configured_data) as data
    FROM
      site_builder.block
    ORDER BY
      position;`
  )
  return result.map((row: any) => ({
    id: row.id,
    type: row.block_type,
    position: row.position,
    configData: JSON.parse(row.data),
  }))
}

export async function addBlock(block: Block): Promise<Block> {
  const retVal = await db.any(
    `INSERT INTO site_builder.block
      (block_type, position, configured_data)
    VALUES
      ($1,$2,$3)
    RETURNING *`,
    [block.type, block.position, block.configData]
  )

  retVal.map((row: any) => ({
    id: row.id,
    type: row.block_type,
    position: row.position,
    configData: JSON.parse(row.configured_data) || null,
  }))
  return retVal[0]
}

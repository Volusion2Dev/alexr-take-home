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

// TODO - make an exported async function called addBlocks that sends block data to the postgress db
export async function addBlock(block: Block): Promise<Block> {
  // const config = JSON.stringify(block.configData)
  const retVal = await db.one(
    `INSERT INTO site_builder.block
      (block_type, position, configured_data)
    VALUES
      ($1,$2,$3)`,
    [block.type, block.position, block.configData]
  )

  // throw new Error("addBlock not implemented.")
  return JSON.parse(retVal)
}

// @ts-check
import fs from "fs-extra"
import path from "path"

export async function onPreBootstrap({ store }) {
  // Ensure cache dir exists for downloadLocal
  const program = store.getState().program

  const CACHE_DIR = path.resolve(
    `${program.directory}/.cache/contentful/assets/`
  )

  await fs.ensureDir(CACHE_DIR)
}

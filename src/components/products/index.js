import { bubblegum } from './bubblegum'
import { candyMachine } from './candyMachine'
import { fusion } from './fusion'
import { global } from './global'
import { hydra } from './hydra'
import { inscription } from './inscription'
import { tokenAuthRules } from './tokenAuthRules'
import { tokenMetadata } from './tokenMetadata'
import { umi } from './umi'
import { amman } from './amman'
import { das } from './das-api'
import { core } from './core'
import { coreCandyMachine } from './coreCandyMachine'
import { legacyDocumentation } from './legacyDocumentation'
import { sugar } from './sugar'
import { mplHybrid } from './mpl-hybrid'
import { guides } from './guides'

export const productCategories = ['Create', 'Commerce', 'Utility', 'Dev Tools']

export const products = [
  global,
  tokenMetadata,
  tokenAuthRules,
  bubblegum,
  candyMachine,
  fusion,
  hydra,
  inscription,
  umi,
  amman,
  das,
  core,
  coreCandyMachine,
  legacyDocumentation,
  sugar,
  mplHybrid,
  guides
].sort((a, b) => a.name.localeCompare(b.name))

import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {unsplashImageAsset} from 'sanity-plugin-asset-source-unsplash'
import {codeInput} from '@sanity/code-input'

export default defineConfig({
  name: 'default',
  title: 'ashishblog',

  projectId: 'p48ssf0d',
  dataset: 'production',

  plugins: [deskTool(), visionTool(), unsplashImageAsset(), codeInput(),],

  schema: {
    types: schemaTypes,
  },
})

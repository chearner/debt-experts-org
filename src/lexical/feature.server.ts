import { createServerFeature } from '@payloadcms/richtext-lexical'
import { MyClientFeature } from './feature.client'

export const MyFeature = createServerFeature({
  key: 'embed',
  feature: {
    ClientFeature: MyClientFeature,
  },
})

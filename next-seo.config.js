import { meta } from 'data/Metadata.bs'

const SEO = {
  titleTemplate: '',
  defaultTitle: meta.title,
  description: meta.description,
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: meta.url,
    site_name: meta.title,
    image: [
      {
        // url :
        // width :
        // heigth : 
        // alt: 
      }
    ],
  }
}

export default SEO
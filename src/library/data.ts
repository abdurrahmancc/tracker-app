import { CategoriesDataModel, LastMonthActivitiesModel } from '../types/types'
import home from '../assets/Home.svg'
import car from '../assets/car.svg'
import security from '../assets/Password.svg'
import video from '../assets/Video.svg'
import games from '../assets/Game.svg'
import docs from '../assets/Document.svg'
import shop from '../assets/shop.svg'

export const categoriesData: CategoriesDataModel[] = [
  {
    id: '1',
    name: 'home',
    category: 'home',
    icon: home,
    color: 'bg-[#FD4438]'
  },
  {
    id: '2',
    name: 'gas',
    icon: car,
    category: 'gas',
    color: 'bg-[#4807EA]'
  },
  {
    id: '3',
    name: 'security',
    icon: security,
    category: 'security',
    color: 'bg-[#F2C94C]'
  },
  {
    id: '4',
    name: 'videos',
    icon: video,
    category: 'videos',
    color: 'bg-[#56CCF2]'
  },
  {
    id: '5',
    name: 'games',
    icon: games,
    category: 'games',
    color: 'bg-[#F2994A]'
  },
  {
    id: '6',
    name: 'papers',
    icon: docs,
    category: 'papers',
    color: 'bg-[#27AE60]'
  },
  {
    id: '7',
    name: 'shops',
    category: 'shop',
    icon: shop,
    color: 'bg-[#EF5DA8]'
  },
  {
    id: '8',
    name: 'travel',
    category: 'travel',
    icon: car,
    color: 'bg-[#9B51E0]'
  },
  {
    id: '9',
    name: 'service',
    category: 'service',
    icon: car,
    color: 'bg-[#219653]'
  },
  {
    id: '10',
    name: 'antivirus',
    category: 'antivirus',
    icon: security,
    color: 'bg-[#5251FA]'
  },
  {
    id: '11',
    name: 'Re-filled',
    category: 'reFilled',
    icon: car,
    color: 'bg-[#4807EA]'
  },
  {
    id: '12',
    name: 'IP cams',
    category: 'IPCams',
    icon: security,
    color: 'bg-[#5251FA]'
  }
]

export const lastMonthActivitiesData: LastMonthActivitiesModel[] = [
  {
    _id: '1',
    category: 'home',
    status: 'successful',
    date: '',
    amount: 334,
    title: 'Home Electricity Bill'
  },
  {
    _id: '2',
    category: 'shop',
    status: 'successful',
    date: '',
    amount: 354,
    title: 'Festival Shopping'
  },
  {
    _id: '3',
    category: 'service',
    status: 'successful',
    date: '',
    amount: 465,
    title: 'Car Services'
  }
]

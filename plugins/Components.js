import Vue from 'vue'
import CategoriesGrid from '../components/grids/CategoriesGrid'
import IntersectionObserver from '../components/IntersectionObserver'
import LoadingSpinner from '../components/LoadingSpinner'
import MainSection from '../components/MainSection'
import PostsGrid from '../components/grids/PostsGrid'
import SiteFooter from '../components/SiteFooter'
import SiteHero from '../components/SiteHero'
import SiteLogo from '../components/SiteLogo'
import SiteNav from '../components/SiteNav'
import ResourceGrid from '~/components/grids/ResourceGrid'

Vue.component(CategoriesGrid.name, CategoriesGrid)
Vue.component(IntersectionObserver.name, IntersectionObserver)
Vue.component(LoadingSpinner.name, LoadingSpinner)
Vue.component(MainSection.name, MainSection)
Vue.component(PostsGrid.name, PostsGrid)
Vue.component(SiteFooter.name, SiteFooter)
Vue.component(SiteHero.name, SiteHero)
Vue.component(SiteLogo.name, SiteLogo)
Vue.component(SiteNav.name, SiteNav)
Vue.component(ResourceGrid.name, ResourceGrid)
